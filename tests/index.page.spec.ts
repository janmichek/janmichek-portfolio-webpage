import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import IndexPage from '~/pages/index.vue'

const TheSidebar = {
  name: 'TheSidebar',
  props: ['name', 'role', 'avatar', 'contact', 'lead', 'items', 'navLabel', 'activeId', 'jumping'],
  emits: ['select'],
  template: '<button class="select-projects" @click="$emit(\'select\', $event, \'projects\')">select</button>',
}

const content = {
  contact: [{ label: 'GitHub', url: 'https://github.com/example', title: 'GitHub', icon: 'github' }],
  profile: { name: 'Jan Michek', avatar: '/profile-pic.webp' },
  siteMeta: { role: 'Web3 full-stack engineer', lead: ['First line', 'Second line'] },
}

function mountPage(overrides: { go?: ReturnType<typeof vi.fn> } = {}) {
  const go = overrides.go ?? vi.fn()
  vi.stubGlobal('useSiteContent', () => content)
  vi.stubGlobal('useScrollSpy', () => ({
    active: ref('about'),
    jumping: ref(true),
    go,
  }))

  const wrapper = mount(IndexPage, {
    global: {
      stubs: { TheSidebar, TheContent: true },
    },
  })

  return { wrapper, go }
}

describe('index page', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('drives the sidebar from the site content and scroll spy', () => {
    const { wrapper } = mountPage()
    const sidebar = wrapper.findComponent(TheSidebar)

    expect(sidebar.props('name')).toBe('Jan Michek')
    expect(sidebar.props('role')).toBe('Web3 full-stack engineer')
    expect(sidebar.props('avatar')).toBe('/profile-pic.webp')
    expect(sidebar.props('lead')).toEqual(['First line', 'Second line'])
    expect(sidebar.props('navLabel')).toBe('Sections')
    expect(sidebar.props('activeId')).toBe('about')
    expect(sidebar.props('jumping')).toBe(true)
    expect(sidebar.props('items')).toEqual([
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'goods', label: 'Goodies' },
      { id: 'contact', label: 'Contact' },
    ])
    expect(wrapper.findComponent({ name: 'TheContent' }).exists()).toBe(true)
  })

  it('forwards sidebar selections to the scroll spy', async () => {
    const { wrapper, go } = mountPage()
    await wrapper.find('.select-projects').trigger('click')
    expect(go).toHaveBeenCalledWith(expect.any(MouseEvent), 'projects')
  })
})
