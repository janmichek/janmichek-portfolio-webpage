import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AppLink from '~/components/AppLink.vue'
import SlugTitle from '~/components/SlugTitle.vue'
import TechLinksPage from '~/pages/tech-links.vue'

const NuxtLink = {
  props: ['to'],
  template: '<a :href="to"><slot/></a>',
}

describe('tech-links page', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('uses the slug layout and lists the curated links', () => {
    const definePageMeta = vi.fn()
    vi.stubGlobal('definePageMeta', definePageMeta)

    const wrapper = mount(TechLinksPage, {
      global: {
        components: { AppLink, SlugTitle },
        stubs: { NuxtLink },
      },
    })

    expect(definePageMeta).toHaveBeenCalledWith({ layout: 'slug' })
    expect(wrapper.find('h2').text()).toBe('Tech links')
    expect(wrapper.findAll('li')).toHaveLength(10)

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(10)
    expect(links.map(link => link.text())).toEqual([
      'smashingmagazine.com',
      'cointelegraph.com',
      'webdesignernews.com',
      'frontendisti.cz',
      'morningbrew/emerging-tech',
      'designyoutrust.com',
      'theverge.com',
      'science.org',
      'Hacker news',
      'reddit/badUIbattles/',
    ])
    expect(links[0]?.attributes('href')).toBe('https://www.smashingmagazine.com/')
  })
})
