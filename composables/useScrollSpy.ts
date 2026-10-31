import { onBeforeUnmount, onMounted, ref } from 'vue'

export interface ScrollSpyOptions {
  itemIds: string[]
  doc?: Document
  win?: Window
  lineRatio?: number
  settleDelay?: number
  fallbackDelay?: number
}

interface WindowHandlers {
  onScroll: () => void
  settle: () => void
  onUserInterrupt: () => void
  onKeyDown: (event: KeyboardEvent) => void
}

const SETTLE_KEYS = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']

function resolveActiveId(itemIds: string[], doc: Document, win: Window, lineRatio: number): string {
  const firstId = itemIds[0] ?? ''
  const line = win.innerHeight * lineRatio
  const atBottom = win.innerHeight + win.scrollY >= doc.documentElement.scrollHeight - 2
  if (atBottom) return itemIds[itemIds.length - 1] ?? firstId

  let current = firstId
  for (const id of itemIds) {
    const el = doc.getElementById(id)
    if (el && el.getBoundingClientRect().top <= line) current = id
  }
  return current
}

function isPlainPrimaryClick(event: MouseEvent) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
}

function prefersReducedMotion(win: Window) {
  return typeof win.matchMedia === 'function'
    && win.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function attachListeners(win: Window, handlers: WindowHandlers) {
  win.addEventListener('scroll', handlers.onScroll, { passive: true })
  win.addEventListener('scrollend', handlers.settle)
  win.addEventListener('resize', handlers.onScroll)
  win.addEventListener('wheel', handlers.onUserInterrupt, { passive: true })
  win.addEventListener('touchstart', handlers.onUserInterrupt, { passive: true })
  win.addEventListener('keydown', handlers.onKeyDown)
}

function detachListeners(win: Window, handlers: WindowHandlers) {
  win.removeEventListener('scroll', handlers.onScroll)
  win.removeEventListener('scrollend', handlers.settle)
  win.removeEventListener('resize', handlers.onScroll)
  win.removeEventListener('wheel', handlers.onUserInterrupt)
  win.removeEventListener('touchstart', handlers.onUserInterrupt)
  win.removeEventListener('keydown', handlers.onKeyDown)
}

function createTimers(getWin: () => Window) {
  let settleTimer: number | undefined
  let frame = 0

  function clearSettle() {
    if (settleTimer !== undefined) {
      getWin().clearTimeout(settleTimer)
      settleTimer = undefined
    }
  }

  function armSettle(delay: number, callback: () => void) {
    clearSettle()
    settleTimer = getWin().setTimeout(callback, delay)
  }

  function scheduleFrame(callback: () => void) {
    if (frame) return
    frame = getWin().requestAnimationFrame(() => {
      frame = 0
      callback()
    })
  }

  function cancelFrame() {
    if (frame) {
      getWin().cancelAnimationFrame(frame)
      frame = 0
    }
  }

  return { clearSettle, armSettle, scheduleFrame, cancelFrame }
}

export function createScrollSpy(options: ScrollSpyOptions) {
  const { itemIds } = options
  const firstId = itemIds[0] ?? ''
  const lineRatio = options.lineRatio ?? 0.4
  const settleDelay = options.settleDelay ?? 150
  const fallbackDelay = options.fallbackDelay ?? 2000

  const active = ref(firstId)
  const jumping = ref(false)
  let pendingId: string | null = null
  let started = false

  const getDoc = () => options.doc ?? document
  const getWin = () => options.win ?? window
  const timers = createTimers(getWin)

  function updateActive() {
    if (pendingId) return
    active.value = resolveActiveId(itemIds, getDoc(), getWin(), lineRatio)
  }

  function settle() {
    const hadPending = pendingId !== null
    pendingId = null
    jumping.value = false
    timers.clearSettle()
    if (hadPending) timers.scheduleFrame(updateActive)
  }

  function onScroll() {
    if (pendingId) timers.armSettle(settleDelay, settle)
    timers.scheduleFrame(updateActive)
  }

  function onUserInterrupt() {
    if (pendingId !== null) settle()
  }

  function onKeyDown(event: KeyboardEvent) {
    if (pendingId && SETTLE_KEYS.includes(event.key)) settle()
  }

  function go(event: MouseEvent, id: string) {
    if (event.defaultPrevented || !isPlainPrimaryClick(event)) return
    const to = itemIds.indexOf(id)
    const el = getDoc().getElementById(id)
    if (to === -1 || !el) return

    event.preventDefault()
    const win = getWin()
    const targetY = el.getBoundingClientRect().top + win.scrollY
    const willMove = Math.abs(targetY - win.scrollY) > 2
    const from = itemIds.indexOf(active.value)

    active.value = id
    jumping.value = willMove && Math.abs(to - from) > 1

    if (willMove) {
      pendingId = id
      timers.armSettle(fallbackDelay, settle)
    } else {
      pendingId = null
    }

    el.scrollIntoView({ behavior: prefersReducedMotion(win) ? 'auto' : 'smooth' })
    win.history.replaceState(null, '', `#${id}`)
  }

  const handlers: WindowHandlers = { onScroll, settle, onUserInterrupt, onKeyDown }

  function start() {
    if (started) return
    started = true
    updateActive()
    attachListeners(getWin(), handlers)
  }

  function destroy() {
    pendingId = null
    jumping.value = false
    if (!started) return
    started = false
    detachListeners(getWin(), handlers)
    timers.clearSettle()
    timers.cancelFrame()
  }

  return { active, jumping, go, updateActive, settle, start, destroy }
}

export function useScrollSpy(itemIds: string[]) {
  const spy = createScrollSpy({ itemIds })
  onMounted(spy.start)
  onBeforeUnmount(spy.destroy)
  return spy
}
