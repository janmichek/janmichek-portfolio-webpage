import { afterEach, describe, expect, it, vi } from 'vitest'
import * as portfolio from '~/data/portfolioContent'
import * as web3 from '~/data/chatContent'
import { siteMeta } from '~/data/siteMeta'
import { resolveSiteVariant } from '~/data/siteVariant'

const allowedIcons = ['github', 'linkedin', 'x', 'spotify', 'cv', 'link']
const variants = [
  ['web3', web3, siteMeta.web3],
  ['portfolio', portfolio, siteMeta.portfolio],
] as const

function isSafeUrl(url: string) {
  if (url.startsWith('/')) return !url.startsWith('//')
  const parsed = new URL(url)
  return parsed.protocol === 'http:' || parsed.protocol === 'https:'
}

describe('shared content', () => {
  it('shares project and goodie objects between variants', () => {
    expect(web3.chatProjects).toBe(portfolio.chatProjects)
    expect(web3.chatGoodies).toBe(portfolio.chatGoodies)
  })

  it('keeps all links http(s) or root-relative', () => {
    for (const [, content] of variants) {
      const urls = [
        ...content.chatProjects.map(project => project.url),
        ...content.chatProjects.flatMap(project => project.links.map(link => link.url)),
        ...content.chatGoodies.map(goodie => goodie.url),
        ...content.chatContact.map(link => link.url),
      ]
      for (const url of urls) {
        expect(isSafeUrl(url), url).toBe(true)
      }
    }
  })

  it('has unique project ids and goodie urls', () => {
    const projectIds = web3.chatProjects.map(project => project.id)
    expect(new Set(projectIds).size).toBe(projectIds.length)

    const goodieUrls = web3.chatGoodies.map(goodie => goodie.url)
    expect(new Set(goodieUrls).size).toBe(goodieUrls.length)
  })

  it('uses valid icon names', () => {
    for (const link of web3.chatContact) {
      expect(allowedIcons).toContain(link.icon)
    }
  })

  it.each(variants)('derives the %s contact copy from the profile role', (_, content) => {
    const linkedIn = content.chatContact.find(link => link.label === 'LinkedIn')
    expect(linkedIn?.text).toBe(`${content.chatProfile.role}, Prague`)
    expect(linkedIn?.text?.match(/Prague/g)).toHaveLength(1)
  })

  it.each(variants)('has complete project, goodie and contact records for %s', (_, content, meta) => {
    expect(content.chatProfile.name).toBe('Jan Michek')
    expect(content.chatProfile.email).toContain('@')
    expect(content.chatSummary.length).toBeGreaterThan(0)
    expect(meta.variant).toBe(content === web3 ? 'web3' : 'portfolio')

    for (const project of content.chatProjects) {
      expect(project.title).toBeTruthy()
      expect(project.image).toMatch(/^\/.+\.(webp|png|jpg|svg)$/)
      expect(project.links.length).toBeGreaterThan(0)
    }

    for (const goodie of content.chatGoodies) {
      expect(goodie.title).toBeTruthy()
      expect(goodie.image).toMatch(/^\/.+\.(webp|png|jpg|svg)$/)
    }

    for (const link of content.chatContact) {
      expect(link.label).toBeTruthy()
      expect(link.icon).toBeTruthy()
    }
  })
})

describe('resolveSiteVariant', () => {
  it('accepts the portfolio variant', () => {
    expect(resolveSiteVariant('portfolio')).toBe('portfolio')
  })

  it.each([undefined, null, '', 'web3', 'PORTFOLIO', 'other'])('falls back to web3 for %s', value => {
    expect(resolveSiteVariant(value)).toBe('web3')
  })
})

describe('useSiteContent', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('selects the portfolio variant', async () => {
    vi.stubGlobal('useRuntimeConfig', () => ({ public: { siteVariant: 'portfolio' } }))
    const { useSiteContent } = await import('~/composables/useSiteContent')
    const content = useSiteContent()
    expect(content.chatProfile.role).toBe('Frontend engineer')
    expect(content.siteMeta).toBe(siteMeta.portfolio)
    expect(content.chatGoodies).toBe(portfolio.chatGoodies)
  })

  it('selects the web3 variant', async () => {
    vi.stubGlobal('useRuntimeConfig', () => ({ public: { siteVariant: 'web3' } }))
    const { useSiteContent } = await import('~/composables/useSiteContent')
    const content = useSiteContent()
    expect(content.chatProfile.role).toBe('Web3 full-stack engineer')
    expect(content.siteMeta).toBe(siteMeta.web3)
  })

  it('falls back to web3 for unknown variants', async () => {
    vi.stubGlobal('useRuntimeConfig', () => ({ public: { siteVariant: 'something-else' } }))
    const { useSiteContent } = await import('~/composables/useSiteContent')
    expect(useSiteContent().siteMeta).toBe(siteMeta.web3)
  })
})
