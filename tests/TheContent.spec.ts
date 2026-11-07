import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import TheContent from '~/components/TheContent.vue'
import type { ContentLink } from '~/data/contentTypes'

const contact: ContentLink[] = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/example', title: 'LinkedIn', icon: 'linkedin' },
  { label: 'Spotify', url: 'https://spotify.com/artist/1', title: 'Spotify', icon: 'spotify', iconOnly: true },
]

const summary = ['First paragraph', 'Second paragraph']

function mountContent() {
  return mount(TheContent, {
    global: {
      stubs: {
        AppProjectsSection: true,
        AppGoodiesSection: true,
      },
    },
  })
}

describe('TheContent', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the about summary paragraphs', () => {
    vi.stubGlobal('useSiteContent', () => ({
      contact,
      profile: { email: 'jan@example.com' },
      summary,
    }))
    const wrapper = mountContent()

    expect(wrapper.find('#about').exists()).toBe(true)
    expect(wrapper.findAll('#about p').map(paragraph => paragraph.text())).toEqual(summary)
  })

  it('renders the email and only non-icon contact links', () => {
    vi.stubGlobal('useSiteContent', () => ({
      contact,
      profile: { email: 'jan@example.com' },
      summary,
    }))
    const wrapper = mountContent()

    expect(wrapper.find('.the-content__mail').attributes('href')).toBe('mailto:jan@example.com')
    expect(wrapper.find('.the-content__mail').text()).toBe('jan@example.com')

    const buttons = wrapper.findAll('.the-content__button')
    expect(buttons).toHaveLength(1)
    expect(buttons[0]?.text()).toBe('LinkedIn')
    expect(buttons[0]?.attributes('href')).toBe('https://linkedin.com/in/example')
    expect(buttons[0]?.attributes('target')).toBe('_blank')
    expect(buttons[0]?.attributes('rel')).toBe('noopener noreferrer')
  })

  it('mounts the projects and goodies sections', () => {
    vi.stubGlobal('useSiteContent', () => ({
      contact,
      profile: { email: 'jan@example.com' },
      summary,
    }))
    const wrapper = mountContent()

    expect(wrapper.find('app-projects-section-stub').exists()).toBe(true)
    expect(wrapper.find('app-goodies-section-stub').exists()).toBe(true)
  })
})
