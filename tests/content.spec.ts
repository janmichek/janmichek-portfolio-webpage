import { describe, expect, it } from 'vitest'
import { useSiteContent } from '~/composables/useSiteContent'
import * as portfolio from '~/data/portfolioContent'
import { siteMeta } from '~/data/siteMeta'

const allowedIcons = ['github', 'linkedin', 'x', 'spotify', 'cv', 'link']

function isSafeUrl(url: string) {
  if (url.startsWith('/')) return !url.startsWith('//')
  const parsed = new URL(url)
  return parsed.protocol === 'http:' || parsed.protocol === 'https:'
}

describe('site content', () => {
  it('keeps all links http(s) or root-relative', () => {
    const urls = [
      ...portfolio.projects.map(project => project.url),
      ...portfolio.projects.flatMap(project => project.links.map(link => link.url)),
      ...portfolio.goodies.map(goodie => goodie.url),
      ...portfolio.contact.map(link => link.url),
    ]
    for (const url of urls) {
      expect(isSafeUrl(url), url).toBe(true)
    }
  })

  it('has unique project ids and goodie urls', () => {
    const projectIds = portfolio.projects.map(project => project.id)
    expect(new Set(projectIds).size).toBe(projectIds.length)

    const goodieUrls = portfolio.goodies.map(goodie => goodie.url)
    expect(new Set(goodieUrls).size).toBe(goodieUrls.length)
  })

  it('uses valid icon names', () => {
    for (const link of portfolio.contact) {
      expect(allowedIcons).toContain(link.icon)
    }
  })

  it('derives the contact copy from the profile role', () => {
    const linkedIn = portfolio.contact.find(link => link.label === 'LinkedIn')
    expect(linkedIn?.text).toBe(`${portfolio.profile.role}, Prague`)
    expect(linkedIn?.text?.match(/Prague/g)).toHaveLength(1)
  })

  it('has complete project, goodie and contact records', () => {
    expect(portfolio.profile.name).toBe('Jan Michek')
    expect(portfolio.profile.email).toContain('@')
    expect(portfolio.summary.length).toBeGreaterThan(0)
    expect(siteMeta.url).toBe('https://janmichek.cz')
    expect(siteMeta.role).toBe(portfolio.profile.role)

    for (const project of portfolio.projects) {
      expect(project.title).toBeTruthy()
      expect(project.image).toMatch(/^\/.+\.(webp|png|jpg|svg)$/)
      expect(project.links.length).toBeGreaterThan(0)
    }

    for (const goodie of portfolio.goodies) {
      expect(goodie.title).toBeTruthy()
      expect(goodie.image).toMatch(/^\/.+\.(webp|png|jpg|svg)$/)
    }

    for (const link of portfolio.contact) {
      expect(link.label).toBeTruthy()
      expect(link.icon).toBeTruthy()
    }
  })

  it('serves the fullstack portfolio as the site content', () => {
    const content = useSiteContent()
    expect(content.profile.role).toBe('Senior Fullstack Engineer')
    expect(content.siteMeta).toBe(siteMeta)
    expect(content.goodies).toBe(portfolio.goodies)
    expect(content.siteMeta.title).toContain('Senior Fullstack Engineer')
    expect(content.contact.find(link => link.label === 'CV')?.url).toBe(
      'https://drive.google.com/file/d/15UYhwj5YLYYs_Ax_uGOeV0DPhn_EsvDq/view?usp=sharing',
    )
  })
})
