import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AppFilters from '~/components/AppFilters.vue'
import AppTable from '~/components/AppTable.vue'
import KarabinerPage from '~/pages/karabiner.vue'

const TheSidebar = {
  name: 'TheSidebar',
  props: ['name', 'role', 'avatar', 'contact', 'items', 'navLabel', 'activeTo'],
  template: '<aside class="sidebar-stub"/>',
}

const content = {
  contact: [{ label: 'GitHub', url: 'https://github.com/example', title: 'GitHub', icon: 'github' }],
  profile: { name: 'Jan Michek', avatar: '/profile-pic.webp' },
  siteMeta: { role: 'Web3 full-stack engineer' },
}

function mountPage() {
  vi.stubGlobal('useSiteContent', () => content)
  return mount(KarabinerPage, {
    global: {
      components: { AppFilters, AppTable },
      stubs: { TheSidebar },
    },
  })
}

describe('karabiner page', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders every shortcut group by default', () => {
    const wrapper = mountPage()

    expect(wrapper.find('h2').text()).toBe('Karabiner Shortcuts')
    expect(wrapper.find('.meta__link').attributes('href'))
      .toBe('https://github.com/janmichek/karabiner-elements-settings/blob/main/karabiner.json')
    expect(wrapper.findComponent(TheSidebar).props('activeTo')).toBe('/karabiner')
    expect(wrapper.findAllComponents(AppTable)).toHaveLength(7)
  })

  it('filters the tables through the app filters', async () => {
    const wrapper = mountPage()
    const buttons = wrapper.findAll('button')
    expect(buttons.map(button => button.attributes('aria-pressed'))).toEqual([
      'true',
      'false',
      'false',
      'false',
      'false',
      'false',
      'false',
      'false',
    ])

    const firefox = buttons.find(button => button.text() === 'Firefox')
    await firefox?.trigger('click')

    expect(wrapper.findAll('section.app-table').map(section => section.attributes('id'))).toEqual([
      'firefox',
    ])
    const firefoxButton = wrapper.findAll('button').find(button => button.text() === 'Firefox')
    expect(firefoxButton?.attributes('aria-pressed')).toBe('true')

    const all = wrapper.findAll('button').find(button => button.text() === 'All')
    await all?.trigger('click')
    expect(wrapper.findAll('section.app-table')).toHaveLength(7)
  })
})
