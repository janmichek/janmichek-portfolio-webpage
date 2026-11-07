import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { siteMeta } from '~/data/siteMeta'

interface FakeEvent {
  headers: Map<string, string>
  status?: number
  url: string
}

function createEvent(pathname: string, accept?: string): FakeEvent {
  const headers = new Map<string, string>()
  if (accept !== undefined) headers.set('accept', accept)
  return { headers, url: `https://janmichek.cz${pathname}` }
}

const config: { variant: string } = { variant: 'web3' }

function stubRuntime() {
  vi.stubGlobal('getHeader', (event: FakeEvent, name: string) => event.headers.get(name.toLowerCase()))
  vi.stubGlobal('setHeader', (event: FakeEvent, name: string, value: string) => {
    event.headers.set(name.toLowerCase(), value)
  })
  vi.stubGlobal('getRequestURL', (event: FakeEvent) => new URL(event.url))
  vi.stubGlobal('setResponseStatus', (event: FakeEvent, status: number) => {
    event.status = status
  })
  vi.stubGlobal('useRuntimeConfig', () => ({ public: { siteVariant: config.variant } }))
}

async function run(event: FakeEvent): Promise<unknown> {
  const middleware = await import('~/server/middleware/markdown')
  const handler: unknown = Reflect.get(middleware, 'default')
  if (typeof handler !== 'function') throw new Error('markdown middleware is not a function')
  return Reflect.apply(handler, undefined, [event])
}

describe('markdown middleware', () => {
  beforeEach(() => {
    config.variant = 'web3'
    stubRuntime()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it.each([
    '/_nuxt/app.js',
    '/api/content',
    '/.well-known/security.txt',
    '/docs/readme',
    '/profile-pic.webp',
  ])('ignores asset path %s', async (pathname) => {
    const event = createEvent(pathname, 'text/markdown')
    expect(await run(event)).toBeUndefined()
    expect(event.headers.get('vary')).toBeUndefined()
  })

  it('leaves html requests alone but adds Vary', async () => {
    const event = createEvent('/', 'text/html')
    expect(await run(event)).toBeUndefined()
    expect(event.headers.get('vary')).toBe('Accept')
  })

  it('handles requests without an Accept header', async () => {
    const event = createEvent('/')
    expect(await run(event)).toBeUndefined()
    expect(event.headers.get('vary')).toBe('Accept')
  })

  it('merges Vary without duplicating Accept', async () => {
    const first = createEvent('/', 'text/html')
    first.headers.set('vary', 'Origin')
    await run(first)
    expect(first.headers.get('vary')).toBe('Origin, Accept')

    const second = createEvent('/', 'text/html')
    second.headers.set('vary', 'origin, accept')
    await run(second)
    expect(second.headers.get('vary')).toBe('origin, accept')
  })

  it('serves markdown for the homepage when preferred', async () => {
    const event = createEvent('/', 'text/markdown')
    const body = await run(event)

    expect(typeof body).toBe('string')
    expect(body).toContain('# Jan Michek')
    expect(body).toContain('Personal portfolio of Jan Michek - Web3')
    expect(body).toContain(`${siteMeta.web3.url}/gallery`)
    expect(event.headers.get('content-type')).toBe('text/markdown; charset=utf-8')
    expect(event.headers.get('cache-control')).toBe('public, max-age=0, must-revalidate')
    expect(event.headers.get('vary')).toBe('Accept')
    expect(event.headers.get('x-markdown-tokens')).toBe(
      Math.ceil(String(body).length / 4).toString(),
    )
    expect(event.status).toBeUndefined()
  })

  it('honours quality weights', async () => {
    const preferred = createEvent('/', 'text/html;q=0.5, text/markdown;q=0.9')
    expect(await run(preferred)).toContain('# Jan Michek')

    const html = createEvent('/', 'text/html;q=0.9, text/markdown;q=0.5')
    expect(await run(html)).toBeUndefined()

    const zero = createEvent('/', 'text/markdown;q=0')
    expect(await run(zero)).toBeUndefined()
  })

  it('treats unparsable quality values as unacceptable', async () => {
    const event = createEvent('/', 'text/markdown;q=abc')
    expect(await run(event)).toBeUndefined()
  })

  it('falls back to defaults when no q parameter is present', async () => {
    const event = createEvent('/', 'text/html, text/markdown;level=1')
    expect(await run(event)).toContain('# Jan Michek')
  })

  it.each([
    ['/gallery', '# Gallery'],
    ['/git-flow', '# Git Flow'],
    ['/karabiner', '# Karabiner'],
    ['/tech-links', '# Tech Links'],
    ['/webdesign-checklist', '# Webdesign Checklist'],
  ])('serves markdown for %s', async (pathname, heading) => {
    const event = createEvent(pathname, 'text/markdown')
    const body = await run(event)
    expect(body).toContain(heading)
    expect(body).toContain(`${siteMeta.web3.url}${pathname}`)
  })

  it('normalises trailing slashes', async () => {
    const body = await run(createEvent('/gallery///', 'text/markdown'))
    expect(body).toContain('# Gallery')
  })

  it('serves the portfolio copy for the portfolio variant', async () => {
    config.variant = 'portfolio'
    const body = await run(createEvent('/', 'text/markdown'))
    expect(body).toContain('Personal portfolio of Jan Michek - senior frontend engineer')
    expect(body).toContain(siteMeta.portfolio.url)
  })

  it('returns a markdown 404 for unknown pages', async () => {
    const event = createEvent('/missing', 'text/markdown')
    const body = await run(event)

    expect(body).toBe('# Not found\n')
    expect(event.status).toBe(404)
    expect(event.headers.get('content-type')).toBe('text/markdown; charset=utf-8')
  })
})
