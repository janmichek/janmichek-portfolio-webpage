import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '~/app.vue'
import { siteMeta } from '~/data/siteMeta'

function at<T>(items: T[], index: number): T {
  const item = items[index]
  if (item === undefined) throw new Error(`No item at index ${index}`)
  return item
}

function scriptHtml(input: Record<string, unknown>): string {
  const script = input.script
  if (!Array.isArray(script)) return ''
  const first: unknown = script[0]
  if (typeof first !== 'object' || first === null) return ''
  const html: unknown = Reflect.get(first, 'innerHTML')
  return typeof html === 'string' ? html : ''
}

function mountApp() {
  return mount(App, {
    global: {
      stubs: {
        NuxtLayout: { template: '<div class="layout-stub"><slot/></div>' },
        NuxtPage: { template: '<div class="page-stub"/>' },
      },
    },
  })
}

describe('app shell', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('sets the canonical link and page metadata', () => {
    const headCalls: Record<string, unknown>[] = []
    const seoCalls: Record<string, unknown>[] = []
    vi.stubGlobal('useHead', (input: Record<string, unknown>) => {
      headCalls.push(input)
    })
    vi.stubGlobal('useSeoMeta', (input: Record<string, unknown>) => {
      seoCalls.push(input)
    })

    mountApp()

    const meta = siteMeta.web3
    expect(at(headCalls, 0)).toMatchObject({
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'canonical', href: `${meta.url}/` }],
    })

    expect(at(seoCalls, 0)).toMatchObject({
      title: meta.title,
      description: meta.description,
      ogTitle: meta.title,
      ogDescription: meta.description,
      ogImage: `${meta.url}/janmichek-2.webp`,
      ogImageAlt: 'Jan Michek',
      ogUrl: `${meta.url}/`,
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: meta.title,
      twitterDescription: meta.description,
      twitterImage: `${meta.url}/janmichek-2.webp`,
      viewport: 'width=device-width, initial-scale=1',
      author: 'Jan Michek',
      keywords: meta.keywords,
    })
  })

  it('embeds person and website structured data', () => {
    const headCalls: Record<string, unknown>[] = []
    vi.stubGlobal('useHead', (input: Record<string, unknown>) => {
      headCalls.push(input)
    })
    vi.stubGlobal('useSeoMeta', vi.fn())

    mountApp()

    const structuredData = at(headCalls, 1)
    expect(structuredData).toMatchObject({
      script: [{ type: 'application/ld+json' }],
    })
    expect(scriptHtml(structuredData)).toContain('"@type":"Person"')
    expect(scriptHtml(structuredData)).toContain('"@type":"WebSite"')
    expect(scriptHtml(structuredData)).toContain('"name":"Jan Michek"')
  })

  it('renders the active layout and page', () => {
    const wrapper = mountApp()
    expect(wrapper.find('.layout-stub').exists()).toBe(true)
    expect(wrapper.find('.page-stub').exists()).toBe(true)
  })
})
