import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import TheHeader from '~/components/TheHeader.vue'

function mountHeader() {
  return mount(TheHeader, {
    global: {
      stubs: {
        AppLink: {
          props: ['to'],
          template: '<a :href="to"><slot/></a>',
        },
      },
    },
  })
}

describe('TheHeader', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the profile name, role and avatar', () => {
    vi.stubGlobal('useSiteContent', () => ({
      profile: { name: 'Jan Michek', avatar: '/profile-pic.webp' },
      siteMeta: { role: 'Web3 full-stack engineer' },
    }))
    const wrapper = mountHeader()

    expect(wrapper.find('h1').text()).toBe('Jan Michek')
    expect(wrapper.find('.header__subheading').text()).toBe('Web3 full-stack engineer')
    expect(wrapper.find('.header__excerpt').text()).toContain('Czechia / Prague /')
  })

  it('links the avatar back home with an accessible description', () => {
    vi.stubGlobal('useSiteContent', () => ({
      profile: { name: 'Jan Michek', avatar: '/profile-pic.webp' },
      siteMeta: { role: 'Web3 full-stack engineer' },
    }))
    const wrapper = mountHeader()

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('/')
    const image = wrapper.find('img')
    expect(image.attributes('src')).toBe('/profile-pic.webp')
    expect(image.attributes('alt')).toBe("Jan Michek's avatar")
    expect(image.attributes('width')).toBe('230')
  })
})
