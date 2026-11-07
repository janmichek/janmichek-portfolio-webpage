import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AppProjectsSection from '~/components/AppProjectsSection.vue'
import type { ContentProject } from '~/data/contentTypes'

const projects: ContentProject[] = [
  {
    id: 'one',
    title: 'First project',
    tag: 'Web3',
    lead: 'A first lead',
    url: 'https://example.com/one',
    image: '/one.webp',
    links: [
      { label: 'Live', url: 'https://example.com/one' },
      { label: 'Code', url: 'https://github.com/example/one' },
    ],
  },
  {
    id: 'two',
    title: 'Second project',
    tag: 'Frontend',
    lead: 'A second lead',
    url: 'https://example.com/two',
    image: '/two.webp',
    links: [{ label: 'Live', url: 'https://example.com/two' }],
  },
]

const AppIcon = {
  name: 'AppIcon',
  props: ['name'],
  template: '<span class="icon-stub"/>',
}

function mountSection() {
  return mount(AppProjectsSection, {
    global: { stubs: { AppIcon } },
  })
}

describe('AppProjectsSection', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders every project with media, tag, title and lead', () => {
    vi.stubGlobal('useSiteContent', () => ({ projects }))
    const wrapper = mountSection()

    expect(wrapper.find('#projects').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('Projects')

    const cards = wrapper.findAll('.app-projects-section__card')
    expect(cards).toHaveLength(2)
    expect(cards.map(card => card.find('img').attributes('src'))).toEqual([
      '/one.webp',
      '/two.webp',
    ])
    expect(cards.map(card => card.find('img').attributes('alt'))).toEqual([
      'First project',
      'Second project',
    ])
    expect(cards.map(card => card.find('.app-projects-section__card-tag').text())).toEqual([
      'Web3',
      'Frontend',
    ])
    expect(cards.map(card => card.find('.app-projects-section__card-title').text())).toEqual([
      'First project',
      'Second project',
    ])
    expect(cards.map(card => card.find('.app-projects-section__text').text())).toEqual([
      'A first lead',
      'A second lead',
    ])
  })

  it('links media and project links in a new tab', () => {
    vi.stubGlobal('useSiteContent', () => ({ projects }))
    const wrapper = mountSection()

    const media = wrapper.findAll('.app-projects-section__card-media')
    expect(media.map(link => link.attributes('href'))).toEqual([
      'https://example.com/one',
      'https://example.com/two',
    ])
    for (const link of media) {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
    }

    const links = wrapper.findAll('.app-projects-section__link')
    expect(links).toHaveLength(3)
    expect(links.map(link => link.text())).toEqual(['Live', 'Code', 'Live'])
    expect(links.map(link => link.attributes('href'))).toEqual([
      'https://example.com/one',
      'https://github.com/example/one',
      'https://example.com/two',
    ])
    for (const link of links) {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
      expect(link.findComponent(AppIcon).props('name')).toBe('link')
    }
  })
})
