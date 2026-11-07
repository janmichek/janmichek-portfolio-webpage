import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AppLink from '~/components/AppLink.vue'
import AppGoodiesSection from '~/components/AppGoodiesSection.vue'

const NuxtLink = {
  props: ['to'],
  template: '<a :href="to"><slot/></a>',
}

const goodies = [
  {
    title: 'External',
    text: 'Opens elsewhere',
    url: 'https://example.com/tool',
    image: '/external.webp',
    dark: true,
  },
  {
    title: 'Internal',
    text: 'Stays here',
    url: '/goodies/internal',
    image: '/internal.webp',
    dark: false,
  },
]

function mountSection() {
  return mount(AppGoodiesSection, {
    global: {
      components: { AppLink },
      stubs: { NuxtLink },
    },
  })
}

describe('AppGoodiesSection', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders each goodie with its thumbnail and copy', () => {
    vi.stubGlobal('useSiteContent', () => ({ goodies }))
    const wrapper = mountSection()

    expect(wrapper.find('#goods').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('Goodies')

    const items = wrapper.findAll('.app-goodies-section__goodie')
    expect(items).toHaveLength(2)
    expect(items.map(item => item.find('.app-goodies-section__title').text())).toEqual([
      'External',
      'Internal',
    ])
    expect(items.map(item => item.find('.app-goodies-section__text').text())).toEqual([
      'Opens elsewhere',
      'Stays here',
    ])
    expect(items.map(item => item.find('img').attributes('src'))).toEqual([
      '/external.webp',
      '/internal.webp',
    ])
  })

  it('applies the dark thumbnail modifier only when requested', () => {
    vi.stubGlobal('useSiteContent', () => ({ goodies }))
    const wrapper = mountSection()

    const thumbnails = wrapper.findAll('.app-goodies-section__thumbnail')
    expect(thumbnails.map(thumbnail => thumbnail.classes('app-goodies-section__thumbnail--dark')))
      .toEqual([true, false])
  })

  it('sends external goodies to a new tab and keeps internal ones internal', () => {
    vi.stubGlobal('useSiteContent', () => ({ goodies }))
    const wrapper = mountSection()

    const links = wrapper.findAll('a')
    expect(links[0]?.attributes('href')).toBe('https://example.com/tool')
    expect(links[0]?.attributes('target')).toBe('_blank')
    expect(links[0]?.attributes('rel')).toBe('noopener noreferrer')

    expect(links[1]?.attributes('href')).toBe('/goodies/internal')
    expect(links[1]?.attributes('target')).toBeUndefined()
  })
})
