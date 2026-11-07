import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import GalleryPage from '~/pages/gallery.vue'

const TheSidebar = {
  name: 'TheSidebar',
  props: ['name', 'role', 'avatar', 'contact', 'items', 'navLabel', 'activeTo'],
  template: '<aside class="sidebar-stub"/>',
}

const AppSwiper = {
  name: 'AppSwiper',
  props: ['images'],
  template: '<div class="swiper-stub"/>',
}

const content = {
  contact: [{ label: 'GitHub', url: 'https://github.com/example', title: 'GitHub', icon: 'github' }],
  profile: { name: 'Jan Michek', avatar: '/profile-pic.webp' },
  siteMeta: { role: 'Web3 full-stack engineer' },
}

describe('gallery page', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the gallery copy and feeds all images to the swiper', () => {
    vi.stubGlobal('useSiteContent', () => content)
    const wrapper = mount(GalleryPage, {
      global: { stubs: { TheSidebar, AppSwiper } },
    })

    const sidebar = wrapper.findComponent(TheSidebar)
    expect(sidebar.props('navLabel')).toBe('Pages')
    expect(sidebar.props('activeTo')).toBe('/gallery')
    expect(sidebar.props('items')).toEqual([
      { to: '/', label: 'Home' },
      { to: '/gallery', label: 'Gallery' },
    ])

    expect(wrapper.find('h2').text()).toBe('Photo Gallery')
    expect(wrapper.find('.intro').text()).toContain('Capturing beauty through my lens')

    const swiper = wrapper.findComponent(AppSwiper)
    expect(swiper.props('images')).toHaveLength(12)
    expect(swiper.props('images')).toEqual(
      expect.arrayContaining([
        { medium: 'k1.webp', description: 'Galanthus nivalis - Žižkov' },
        { medium: 'k3.webp', description: 'Myrtus communis - Monopoli' },
      ]),
    )
  })
})
