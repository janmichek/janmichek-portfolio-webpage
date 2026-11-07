import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AppLink from '~/components/AppLink.vue'
import TheFooter from '~/components/TheFooter.vue'
import TitleSection from '~/components/TitleSection.vue'
import * as portfolioContent from '~/data/portfolioContent'
import { cvUrls } from '~/data/sharedContent'

const NuxtLink = {
  props: ['to'],
  template: '<a :href="to"><slot/></a>',
}

function mountFooter(props: Record<string, unknown> = {}) {
  return mount(TheFooter, {
    props,
    global: {
      components: { AppLink, TitleSection },
      stubs: { NuxtLink },
    },
  })
}

describe('TheFooter', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('defaults to the secondary variant', () => {
    const wrapper = mountFooter()
    const footer = wrapper.find('footer')
    expect(footer.classes()).toContain('footer--secondary')
    expect(wrapper.find('h3').classes()).toContain('title-section--secondary')
    expect(wrapper.find('h3').text()).toBe('Contact')
  })

  it('accepts the primary variant', () => {
    const wrapper = mountFooter({ variant: 'primary' })
    expect(wrapper.find('footer').classes()).toContain('footer--primary')
    expect(wrapper.find('h3').classes()).toContain('title-section--primary')
  })

  it('renders the five contact links', () => {
    const wrapper = mountFooter()
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(5)
    expect(links.map(link => link.text())).toEqual([
      'Spotify',
      'jan@janmichek.cz',
      'LinkedIn',
      'GitHub',
      'CV',
    ])
    expect(links.map(link => link.attributes('href'))).toEqual([
      'https://open.spotify.com/artist/52iWG2c2P0K6HmGrAAUyoP?si=SuOL9lY1QuyCI1FDBOzO9A',
      'mailto:jan@janmichek.cz',
      'https://www.linkedin.com/in/jan-michek-web3/',
      'https://github.com/janmichek/',
      cvUrls.web3,
    ])
  })

  it('uses the portfolio CV link for the portfolio variant', () => {
    vi.stubGlobal('useSiteContent', () => portfolioContent)
    const wrapper = mountFooter()
    const cvLink = wrapper.findAll('a').at(-1)
    expect(cvLink?.text()).toBe('CV')
    expect(cvLink?.attributes('href')).toBe(cvUrls.portfolio)
  })
})
