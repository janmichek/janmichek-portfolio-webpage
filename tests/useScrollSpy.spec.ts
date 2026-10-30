import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createScrollSpy, useScrollSpy } from '~/composables/useScrollSpy'

type Handler = (event?: unknown) => void

function createEnv() {
  const listeners = new Map<string, Set<Handler>>()
  const elements = new Map<string, {
    getBoundingClientRect: () => { top: number }
    scrollIntoView: ReturnType<typeof vi.fn>
  }>()
  let rafCallbacks = new Map<number, FrameRequestCallback>()
  let nextRafId = 1

  const win = {
    innerHeight: 1000,
    scrollY: 0,
    history: { replaceState: vi.fn() },
    matchMedia: vi.fn(() => ({ matches: false })),
    addEventListener: vi.fn((type: string, handler: Handler) => {
      if (!listeners.has(type)) listeners.set(type, new Set())
      listeners.get(type)!.add(handler)
    }),
    removeEventListener: vi.fn((type: string, handler: Handler) => {
      listeners.get(type)?.delete(handler)
    }),
    requestAnimationFrame: vi.fn((callback: FrameRequestCallback) => {
      const id = nextRafId++
      rafCallbacks.set(id, callback)
      return id
    }),
    cancelAnimationFrame: vi.fn((id: number) => {
      rafCallbacks.delete(id)
    }),
    setTimeout: ((callback: TimerHandler, delay?: number) => globalThis.setTimeout(callback, delay)) as unknown as Window['setTimeout'],
    clearTimeout: vi.fn((id?: number) => globalThis.clearTimeout(id)) as unknown as Window['clearTimeout'],
  }

  const doc = {
    documentElement: { scrollHeight: 2000 },
    getElementById: (id: string) => elements.get(id) ?? null,
  }

  function flushAnimationFrame() {
    const callbacks = [...rafCallbacks.values()]
    rafCallbacks = new Map()
    for (const callback of callbacks) callback(0)
  }

  function emit(type: string, event: unknown = {}) {
    for (const handler of listeners.get(type) ?? []) handler(event)
  }

  function section(id: string, top: number) {
    const element = {
      getBoundingClientRect: () => ({ top }),
      scrollIntoView: vi.fn(),
    }
    elements.set(id, element)
    return element
  }

  return {
    win: win as unknown as Window,
    doc: doc as unknown as Document,
    elements,
    section,
    flushAnimationFrame,
    emit,
    listeners,
    setScrollY(value: number) {
      win.scrollY = value
    },
    setScrollHeight(value: number) {
      doc.documentElement.scrollHeight = value
    },
    setInnerHeight(value: number) {
      win.innerHeight = value
    },
    setReducedMotion(value: boolean) {
      win.matchMedia.mockImplementation(() => ({ matches: value }))
    },
    removeMatchMedia() {
      (win as { matchMedia?: unknown }).matchMedia = undefined
    },
  }
}

function mouseEvent(overrides: Partial<MouseEvent> = {}) {
  return {
    button: 0,
    metaKey: false,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    defaultPrevented: false,
    preventDefault: vi.fn(),
    ...overrides,
  } as unknown as MouseEvent
}

function setup() {
  const env = createEnv()
  env.section('about', 0)
  env.section('projects', 300)
  env.section('goods', 700)
  env.section('contact', 1200)
  const spy = createScrollSpy({
    itemIds: ['about', 'projects', 'goods', 'contact'],
    doc: env.doc,
    win: env.win,
  })
  return { env, spy }
}

describe('createScrollSpy', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('resolves the last section above the 40% line on start', () => {
    const { env, spy } = setup()
    spy.start()
    expect(spy.active.value).toBe('projects')
    expect(env.win.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
  })

  it('allows a custom line ratio', () => {
    const env = createEnv()
    env.section('about', 50)
    env.section('projects', 150)
    const spy = createScrollSpy({
      itemIds: ['about', 'projects'],
      doc: env.doc,
      win: env.win,
      lineRatio: 0.1,
    })
    spy.start()
    expect(spy.active.value).toBe('about')
  })

  it('forces the last section at the bottom of the page', () => {
    const { env, spy } = setup()
    env.setScrollY(1000)
    spy.start()
    expect(spy.active.value).toBe('contact')
  })

  it('handles an empty item list', () => {
    const env = createEnv()
    const spy = createScrollSpy({ itemIds: [], doc: env.doc, win: env.win })
    spy.start()
    expect(spy.active.value).toBe('')
  })

  it('falls back to an empty id at the bottom with no sections', () => {
    const env = createEnv()
    env.setScrollY(1000)
    const spy = createScrollSpy({ itemIds: [], doc: env.doc, win: env.win })
    spy.start()
    expect(spy.active.value).toBe('')
  })

  it('coalesces scroll updates into one animation frame', () => {
    const { env, spy } = setup()
    spy.start()
    env.emit('scroll')
    env.emit('scroll')
    expect(env.win.requestAnimationFrame).toHaveBeenCalledTimes(1)
    env.flushAnimationFrame()
  })

  it('skips item ids without a matching section', () => {
    const env = createEnv()
    env.section('about', 0)
    const spy = createScrollSpy({ itemIds: ['about', 'missing'], doc: env.doc, win: env.win })
    spy.start()
    expect(spy.active.value).toBe('about')
  })

  it('ignores keys when no navigation is pending', () => {
    const { env, spy } = setup()
    spy.start()
    env.emit('keydown', { key: 'ArrowDown' })
    expect(spy.active.value).toBe('projects')
  })

  it('updates active on resize', () => {
    const { env, spy } = setup()
    spy.start()
    expect(spy.active.value).toBe('projects')
    env.setInnerHeight(3000)
    env.emit('resize')
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('contact')
  })

  it('navigates to an adjacent section without a jump', () => {
    const { env, spy } = setup()
    spy.start()
    const event = mouseEvent()
    spy.go(event, 'goods')
    expect(event.preventDefault).toHaveBeenCalled()
    expect(spy.active.value).toBe('goods')
    expect(spy.jumping.value).toBe(false)
    expect(env.elements.get('goods')!.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(env.win.history.replaceState).toHaveBeenCalledWith(null, '', '#goods')
  })

  it('marks distant navigation as a jump', () => {
    const { spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    expect(spy.jumping.value).toBe(true)
  })

  it('ignores modified and non-primary clicks', () => {
    const { env, spy } = setup()
    spy.start()
    const events = [
      mouseEvent({ metaKey: true }),
      mouseEvent({ ctrlKey: true }),
      mouseEvent({ shiftKey: true }),
      mouseEvent({ altKey: true }),
      mouseEvent({ button: 2 }),
      mouseEvent({ defaultPrevented: true }),
    ]
    for (const event of events) {
      spy.go(event, 'contact')
      expect(event.preventDefault).not.toHaveBeenCalled()
    }
    expect(env.elements.get('contact')!.scrollIntoView).not.toHaveBeenCalled()
  })

  it('ignores unknown item ids and missing elements', () => {
    const { env, spy } = setup()
    spy.start()
    env.section('unknown', 500)
    const unknownEvent = mouseEvent()
    spy.go(unknownEvent, 'unknown')
    expect(unknownEvent.preventDefault).not.toHaveBeenCalled()

    const missingEvent = mouseEvent()
    spy.go(missingEvent, 'deleted')
    expect(missingEvent.preventDefault).not.toHaveBeenCalled()
  })

  it('does not lock the spy when the target would not move', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'about')
    expect(spy.active.value).toBe('about')
    expect(env.elements.get('about')!.scrollIntoView).toHaveBeenCalled()

    env.section('about', 500)
    env.section('projects', 300)
    spy.updateActive()
    expect(spy.active.value).toBe('projects')
  })

  it('honours prefers-reduced-motion', () => {
    const { env, spy } = setup()
    env.setReducedMotion(true)
    spy.start()
    spy.go(mouseEvent(), 'contact')
    expect(env.elements.get('contact')!.scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto' })
  })

  it('falls back to smooth scrolling without matchMedia', () => {
    const { env, spy } = setup()
    env.removeMatchMedia()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    expect(env.elements.get('contact')!.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('pauses updates while a navigation scroll is pending', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    env.section('about', 500)
    env.section('projects', 100)
    spy.updateActive()
    expect(spy.active.value).toBe('contact')
  })

  it('ignores user interrupts while idle', () => {
    const { env, spy } = setup()
    spy.start()
    env.emit('wheel')
    env.emit('touchstart')
    env.emit('scrollend')
    expect(env.win.requestAnimationFrame).not.toHaveBeenCalled()
    expect(spy.active.value).toBe('projects')
  })

  it('settles when the user interrupts with the wheel', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    env.emit('wheel')
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
    expect(spy.jumping.value).toBe(false)
  })

  it('settles when the user interrupts with touch', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    env.emit('touchstart')
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('settles when the user interrupts with a navigation key', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    env.emit('keydown', { key: 'PageDown' })
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('ignores unrelated keys while pending', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    env.emit('keydown', { key: 'a' })
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('contact')
  })

  it('settles on scrollend', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    env.emit('scrollend')
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('settles after the fallback timeout without scroll events', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    vi.advanceTimersByTime(1999)
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('contact')
    vi.advanceTimersByTime(1)
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('re-arms the settle timer on scroll events', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    vi.advanceTimersByTime(1000)
    env.emit('scroll')
    env.flushAnimationFrame()
    vi.advanceTimersByTime(149)
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('contact')
    vi.advanceTimersByTime(1)
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('is safe to start twice and destroy twice', () => {
    const { env, spy } = setup()
    spy.start()
    spy.start()
    expect(env.listeners.get('scroll')!.size).toBe(1)
    spy.destroy()
    spy.destroy()
    expect(env.listeners.get('scroll')!.size).toBe(0)
  })

  it('is safe to destroy before starting', () => {
    const { env, spy } = setup()
    spy.destroy()
    expect(env.win.removeEventListener).not.toHaveBeenCalled()
  })

  it('cleans up pending timers and frames on destroy', () => {
    const { env, spy } = setup()
    spy.start()
    spy.go(mouseEvent(), 'contact')
    env.emit('scroll')
    spy.destroy()
    expect(env.win.clearTimeout).toHaveBeenCalled()
    expect(env.win.cancelAnimationFrame).toHaveBeenCalled()
    expect(spy.jumping.value).toBe(false)
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('contact')

    spy.start()
    expect(spy.active.value).toBe('projects')
  })

  it('accepts custom settle delays', () => {
    const env = createEnv()
    env.section('about', 0)
    env.section('projects', 300)
    const spy = createScrollSpy({
      itemIds: ['about', 'projects'],
      doc: env.doc,
      win: env.win,
      settleDelay: 50,
      fallbackDelay: 500,
    })
    spy.start()
    spy.go(mouseEvent(), 'projects')
    env.section('projects', 500)
    vi.advanceTimersByTime(499)
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
    vi.advanceTimersByTime(1)
    env.flushAnimationFrame()
    expect(spy.active.value).toBe('about')
  })
})

describe('useScrollSpy', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('registers and removes listeners with the component lifecycle', () => {
    const add = vi.spyOn(window, 'addEventListener')
    const remove = vi.spyOn(window, 'removeEventListener')
    const component = defineComponent({
      setup() {
        const spy = useScrollSpy(['about'])
        return () => h('div', spy.active.value)
      },
    })

    const wrapper = mount(component)
    expect(add).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
    expect(add).toHaveBeenCalledWith('scrollend', expect.any(Function))

    wrapper.unmount()
    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
    expect(remove).toHaveBeenCalledWith('scrollend', expect.any(Function))
  })
})
