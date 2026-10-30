import { onBeforeUnmount, onMounted, ref } from 'vue'

export interface ScrollSpyOptions {
  itemIds: string[]
  doc?: Document
  win?: Window
  lineRatio?: number
  settleDelay?: number
  fallbackDelay?: number
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
  let settleTimer: ReturnType<typeof setTimeout> | undefined
  let frame = 0
  let started = false

  const getDoc = () => options.doc ?? document
  const getWin = () => options.win ?? window

  function resolveActive() {
    const win = getWin()
    const doc = getDoc()
    const line = win.innerHeight * lineRatio
    const atBottom = win.innerHeight + win.scrollY >= doc.documentElement.scrollHeight - 2
    let current = firstId
    for (const id of itemIds) {
      const el = doc.getElementById(id)
      if (el && el.getBoundingClientRect().top <= line) current = id
    }
    return atBottom ? itemIds[itemIds.length - 1] ?? firstId : current
  }

  function updateActive() {
    if (pendingId) return
    active.value = resolveActive()
  }

  function scheduleUpdate() {
    if (frame) return
    frame = getWin().requestAnimationFrame(() => {
      frame = 0
      updateActive()
    })
  }

  function clearSettle() {
    if (settleTimer !== undefined) {
      getWin().clearTimeout(settleTimer)
      settleTimer = undefined
    }
  }

  function armSettle(delay: number) {
    clearSettle()
    settleTimer = getWin().setTimeout(settle, delay)
  }

  function settle() {
    const hadPending = pendingId !== null
    pendingId = null
    jumping.value = false
    clearSettle()
    if (hadPending) scheduleUpdate()
  }

  function onScroll() {
    if (pendingId) armSettle(settleDelay)
    scheduleUpdate()
  }

  function onUserInterrupt() {
    if (pendingId !== null) settle()
  }

  function onKeyDown(event: KeyboardEvent) {
    if (!pendingId) return
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
      settle()
    }
  }

  function go(event: MouseEvent, id: string) {
    if (event.defaultPrevented) return
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
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
      armSettle(fallbackDelay)
    } else {
      pendingId = null
    }

    const reduce = typeof win.matchMedia === 'function'
      && win.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
    win.history.replaceState(null, '', `#${id}`)
  }

  function start() {
    if (started) return
    started = true
    updateActive()
    const win = getWin()
    win.addEventListener('scroll', onScroll, { passive: true })
    win.addEventListener('scrollend', settle)
    win.addEventListener('resize', onScroll)
    win.addEventListener('wheel', onUserInterrupt, { passive: true })
    win.addEventListener('touchstart', onUserInterrupt, { passive: true })
    win.addEventListener('keydown', onKeyDown)
  }

  function destroy() {
    pendingId = null
    jumping.value = false
    if (!started) return
    started = false
    const win = getWin()
    win.removeEventListener('scroll', onScroll)
    win.removeEventListener('scrollend', settle)
    win.removeEventListener('resize', onScroll)
    win.removeEventListener('wheel', onUserInterrupt)
    win.removeEventListener('touchstart', onUserInterrupt)
    win.removeEventListener('keydown', onKeyDown)
    clearSettle()
    if (frame) {
      win.cancelAnimationFrame(frame)
      frame = 0
    }
  }

  return { active, jumping, go, updateActive, settle, start, destroy }
}

export function useScrollSpy(itemIds: string[]) {
  const spy = createScrollSpy({ itemIds })
  onMounted(spy.start)
  onBeforeUnmount(spy.destroy)
  return spy
}
