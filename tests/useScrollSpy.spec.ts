import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from 'vitest'
import { createScrollSpy, useScrollSpy } from '~/composables/useScrollSpy'

type Spy = ReturnType<typeof createScrollSpy>

const originalMatchMedia = window.matchMedia.bind(window)
const created: Spy[] = []
const scrollIntoViewSpies = new Map<string, MockInstance<HTMLElement['scrollIntoView']>>()

let rafQueue = new Map<number, FrameRequestCallback>()
let nextRafId = 1
let rafSpy: MockInstance<typeof window.requestAnimationFrame>
let addSpy: MockInstance<typeof window.addEventListener>
let removeSpy: MockInstance<typeof window.removeEventListener>
let cancelRafSpy: MockInstance<typeof window.cancelAnimationFrame>
let clearTimeoutSpy: MockInstance<typeof window.clearTimeout>
let scrollYSpy: MockInstance<() => number>
let innerHeightSpy: MockInstance<() => number>
let replaceStateSpy: MockInstance<typeof window.history.replaceState>
let matchMediaSpy: MockInstance<typeof window.matchMedia>

function track(options: Parameters<typeof createScrollSpy>[0]): Spy {
  const spy = createScrollSpy(options)
  created.push(spy)
  return spy
}

function flushAnimationFrame() {
  const callbacks = [...rafQueue.values()]
  rafQueue = new Map()
  for (const callback of callbacks) callback(0)
}

function rect(top: number): DOMRect {
  return { x: 0, y: top, width: 0, height: 0, top, right: 0, bottom: top, left: 0, toJSON: () => ({}) }
}

function section(id: string, top: number) {
  document.getElementById(id)?.remove()
  const element = document.createElement('section')
  element.id = id
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(rect(top))
  scrollIntoViewSpies.set(id, vi.spyOn(element, 'scrollIntoView').mockImplementation(() => {}))
  document.body.append(element)
}

function scrollSpyFor(id: string) {
  const spy = scrollIntoViewSpies.get(id)
  if (!spy) throw new Error(`No section "${id}"`)
  return spy
}

function setScrollY(value: number) {
  scrollYSpy.mockReturnValue(value)
}

function setInnerHeight(value: number) {
  innerHeightSpy.mockReturnValue(value)
}

function setReducedMotion(value: boolean) {
  matchMediaSpy.mockImplementation((query) => {
    const mediaQueryList = originalMatchMedia(query)
    Object.defineProperty(mediaQueryList, 'matches', { value, configurable: true })
    return mediaQueryList
  })
}

function emit(type: string) {
  window.dispatchEvent(new Event(type))
}

function pressKey(key: string) {
  window.dispatchEvent(new KeyboardEvent('keydown', { key }))
}

function addedTypes(): unknown[] {
  return addSpy.mock.calls.map(([type]) => type)
}

function removedTypes(): unknown[] {
  return removeSpy.mock.calls.map(([type]) => type)
}

function click(init: MouseEventInit = {}) {
  return new MouseEvent('click', { button: 0, cancelable: true, ...init })
}

function setup() {
  section('about', 0)
  section('projects', 300)
  section('goods', 700)
  section('contact', 1200)
  return track({ itemIds: ['about', 'projects', 'goods', 'contact'] })
}

describe('createScrollSpy', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    rafQueue = new Map()
    nextRafId = 1
    rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      const id = nextRafId++
      rafQueue.set(id, callback)
      return id
    })
    cancelRafSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => {
      rafQueue.delete(id)
    })
    addSpy = vi.spyOn(window, 'addEventListener')
    removeSpy = vi.spyOn(window, 'removeEventListener')
    clearTimeoutSpy = vi.spyOn(window, 'clearTimeout')
    replaceStateSpy = vi.spyOn(window.history, 'replaceState').mockImplementation(() => {})
    scrollYSpy = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)
    innerHeightSpy = vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(1000)
    vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(2000)
    matchMediaSpy = vi.spyOn(window, 'matchMedia')
    setReducedMotion(false)
  })

  afterEach(() => {
    for (const spy of created.splice(0)) spy.destroy()
    scrollIntoViewSpies.clear()
    document.body.innerHTML = ''
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('resolves the last section above the 40% line on start', () => {
    const spy = setup()
    spy.start()
    expect(spy.active.value).toBe('projects')
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
  })

  it('allows a custom line ratio', () => {
    section('about', 50)
    section('projects', 150)
    const spy = track({ itemIds: ['about', 'projects'], lineRatio: 0.1 })
    spy.start()
    expect(spy.active.value).toBe('about')
  })

  it('forces the last section at the bottom of the page', () => {
    const spy = setup()
    setScrollY(1000)
    spy.start()
    expect(spy.active.value).toBe('contact')
  })

  it('handles an empty item list', () => {
    const spy = track({ itemIds: [] })
    spy.start()
    expect(spy.active.value).toBe('')
  })

  it('falls back to an empty id at the bottom with no sections', () => {
    setScrollY(1000)
    const spy = track({ itemIds: [] })
    spy.start()
    expect(spy.active.value).toBe('')
  })

  it('coalesces scroll updates into one animation frame', () => {
    const spy = setup()
    spy.start()
    emit('scroll')
    emit('scroll')
    expect(rafSpy).toHaveBeenCalledTimes(1)
    flushAnimationFrame()
  })

  it('skips item ids without a matching section', () => {
    section('about', 0)
    const spy = track({ itemIds: ['about', 'missing'] })
    spy.start()
    expect(spy.active.value).toBe('about')
  })

  it('ignores keys when no navigation is pending', () => {
    const spy = setup()
    spy.start()
    pressKey('ArrowDown')
    expect(spy.active.value).toBe('projects')
  })

  it('updates active on resize', () => {
    const spy = setup()
    spy.start()
    expect(spy.active.value).toBe('projects')
    setInnerHeight(3000)
    emit('resize')
    flushAnimationFrame()
    expect(spy.active.value).toBe('contact')
  })

  it('navigates to an adjacent section without a jump', () => {
    const spy = setup()
    spy.start()
    const event = click()
    spy.go(event, 'goods')
    expect(event.defaultPrevented).toBe(true)
    expect(spy.active.value).toBe('goods')
    expect(spy.jumping.value).toBe(false)
    expect(scrollSpyFor('goods')).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(replaceStateSpy).toHaveBeenCalledWith(null, '', '#goods')
  })

  it('marks distant navigation as a jump', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    expect(spy.jumping.value).toBe(true)
  })

  it('ignores modified and non-primary clicks', () => {
    const spy = setup()
    spy.start()
    const prevented = click()
    prevented.preventDefault()
    const events = [
      click({ metaKey: true }),
      click({ ctrlKey: true }),
      click({ shiftKey: true }),
      click({ altKey: true }),
      click({ button: 2 }),
      prevented,
    ]
    for (const event of events) {
      spy.go(event, 'contact')
    }
    expect(events.slice(0, 5).every(event => !event.defaultPrevented)).toBe(true)
    expect(scrollSpyFor('contact')).not.toHaveBeenCalled()
  })

  it('ignores unknown item ids and missing elements', () => {
    const spy = setup()
    spy.start()
    section('unknown', 500)
    const unknownEvent = click()
    spy.go(unknownEvent, 'unknown')
    expect(unknownEvent.defaultPrevented).toBe(false)

    const missingEvent = click()
    spy.go(missingEvent, 'deleted')
    expect(missingEvent.defaultPrevented).toBe(false)
  })

  it('does not lock the spy when the target would not move', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'about')
    expect(spy.active.value).toBe('about')
    expect(scrollSpyFor('about')).toHaveBeenCalled()

    section('about', 500)
    section('projects', 300)
    spy.updateActive()
    expect(spy.active.value).toBe('projects')
  })

  it('honours prefers-reduced-motion', () => {
    const spy = setup()
    setReducedMotion(true)
    spy.start()
    spy.go(click(), 'contact')
    expect(scrollSpyFor('contact')).toHaveBeenCalledWith({ behavior: 'auto' })
  })

  it('falls back to smooth scrolling without matchMedia', () => {
    const spy = setup()
    vi.stubGlobal('matchMedia', undefined)
    spy.start()
    spy.go(click(), 'contact')
    expect(scrollSpyFor('contact')).toHaveBeenCalledWith({ behavior: 'smooth' })
    vi.unstubAllGlobals()
  })

  it('pauses updates while a navigation scroll is pending', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    section('about', 500)
    section('projects', 100)
    spy.updateActive()
    expect(spy.active.value).toBe('contact')
  })

  it('ignores user interrupts while idle', () => {
    const spy = setup()
    spy.start()
    emit('wheel')
    emit('touchstart')
    emit('scrollend')
    expect(rafSpy).not.toHaveBeenCalled()
    expect(spy.active.value).toBe('projects')
  })

  it('settles when the user interrupts with the wheel', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    emit('wheel')
    flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
    expect(spy.jumping.value).toBe(false)
  })

  it('settles when the user interrupts with touch', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    emit('touchstart')
    flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('settles when the user interrupts with a navigation key', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    pressKey('PageDown')
    flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('ignores unrelated keys while pending', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    pressKey('a')
    flushAnimationFrame()
    expect(spy.active.value).toBe('contact')
  })

  it('settles on scrollend', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    emit('scrollend')
    flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('settles after the fallback timeout without scroll events', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    vi.advanceTimersByTime(1999)
    flushAnimationFrame()
    expect(spy.active.value).toBe('contact')
    vi.advanceTimersByTime(1)
    flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('re-arms the settle timer on scroll events', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    vi.advanceTimersByTime(1000)
    emit('scroll')
    flushAnimationFrame()
    vi.advanceTimersByTime(149)
    flushAnimationFrame()
    expect(spy.active.value).toBe('contact')
    vi.advanceTimersByTime(1)
    flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
  })

  it('is safe to start twice and destroy twice', () => {
    const spy = setup()
    spy.start()
    spy.start()
    expect(addedTypes().filter(type => type === 'scroll')).toHaveLength(1)
    spy.destroy()
    spy.destroy()
    expect(removedTypes().filter(type => type === 'scroll')).toHaveLength(1)
  })

  it('is safe to destroy before starting', () => {
    const spy = setup()
    spy.destroy()
    expect(removeSpy).not.toHaveBeenCalled()
  })

  it('cleans up pending timers and frames on destroy', () => {
    const spy = setup()
    spy.start()
    spy.go(click(), 'contact')
    emit('scroll')
    spy.destroy()
    expect(clearTimeoutSpy).toHaveBeenCalled()
    expect(cancelRafSpy).toHaveBeenCalled()
    expect(spy.jumping.value).toBe(false)
    flushAnimationFrame()
    expect(spy.active.value).toBe('contact')

    spy.start()
    expect(spy.active.value).toBe('projects')
  })

  it('accepts custom settle delays', () => {
    section('about', 0)
    section('projects', 300)
    const spy = track({ itemIds: ['about', 'projects'], settleDelay: 50, fallbackDelay: 500 })
    spy.start()
    spy.go(click(), 'projects')
    section('projects', 500)
    vi.advanceTimersByTime(499)
    flushAnimationFrame()
    expect(spy.active.value).toBe('projects')
    vi.advanceTimersByTime(1)
    flushAnimationFrame()
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
