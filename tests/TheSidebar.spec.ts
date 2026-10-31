import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppLink from '~/components/AppLink.vue'
import TheSidebar from '~/components/TheSidebar.vue'

function at<T>(items: T[], index: number): T {
  const item = items[index]
  if (item === undefined) throw new Error(`No item at index ${index}`)
  return item
}

const contact = [
  {
    label: 'GitHub',
    url: 'https://github.com/janmichek/',
    title: 'janmichek',
    text: 'Profile and repositories',
    icon: 'github' as const,
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/1',
    title: 'Jan Michek',
    text: 'Music on Spotify',
    icon: 'spotify' as const,
    iconOnly: true,
  },
]

const stubs = {
  NuxtLink: {
    props: ['to'],
    template: '<a :href="to"><slot/></a>',
  },
  AppIcon: true,
}

type SidebarProps = {
  name: string
  role: string
  avatar: string
  contact: typeof contact
  items: { id?: string, label: string, to?: string }[]
  navLabel: string
  lead?: string[]
  activeId?: string
  activeTo?: string
  jumping?: boolean
}

function mountSidebar(overrides: Partial<SidebarProps> = {}) {
  return mount(TheSidebar, {
    props: {
      name: 'Jan Michek',
      role: 'Engineer',
      avatar: '/profile-pic.webp',
      contact,
      items: [
        { id: 'about', label: 'About' },
        { to: '/gallery', label: 'Gallery' },
      ],
      navLabel: 'Sections',
      lead: ['First line', 'Second line'],
      activeId: 'about',
      activeTo: '/gallery',
      ...overrides,
    },
    global: { stubs, components: { AppLink } },
  })
}

describe('TheSidebar', () => {
  it('renders profile, lead and section links', () => {
    const wrapper = mountSidebar()
    expect(wrapper.find('img').attributes('src')).toBe('/profile-pic.webp')
    expect(wrapper.find('img').attributes('alt')).toBe('Jan Michek')
    expect(wrapper.find('.sidebar__role').text()).toBe('Engineer')
    expect(wrapper.find('.sidebar__lead').text()).toContain('First line')
    expect(wrapper.findAll('.sidebar__lead br')).toHaveLength(1)
    expect(wrapper.find('nav[aria-label="Sections"]').exists()).toBe(true)
  })

  it('marks active anchors and router links', () => {
    const wrapper = mountSidebar()
    const links = wrapper.findAll('nav[aria-label="Sections"] a')
    expect(links).toHaveLength(2)
    const [first, second] = [at(links, 0), at(links, 1)]
    expect(first.classes()).toContain('sidebar__link--active')
    expect(first.attributes('aria-current')).toBe('location')
    expect(second.classes()).toContain('sidebar__link--active')
    expect(second.attributes('aria-current')).toBe('page')
  })

  it('omits active markers when nothing is active', () => {
    const wrapper = mountSidebar({ activeId: undefined, activeTo: '/elsewhere' })
    const links = wrapper.findAll('nav[aria-label="Sections"] a')
    expect(at(links, 0).classes()).not.toContain('sidebar__link--active')
    expect(at(links, 0).attributes('aria-current')).toBeUndefined()
    expect(at(links, 1).attributes('aria-current')).toBeUndefined()
  })

  it('emits select for in-page links only', async () => {
    const wrapper = mountSidebar()
    const links = wrapper.findAll('nav[aria-label="Sections"] a')
    await at(links, 0).trigger('click')
    await at(links, 1).trigger('click')
    const emitted = wrapper.emitted('select') ?? []
    expect(emitted).toHaveLength(1)
    expect(at(at(emitted, 0), 1)).toBe('about')
  })

  it('ignores in-page items without an id', async () => {
    const wrapper = mountSidebar({ items: [{ label: 'Dead link' }] })
    await wrapper.find('nav[aria-label="Sections"] a').trigger('click')
    expect(wrapper.emitted('select')).toBeUndefined()
  })

  it('applies the jump class', () => {
    const wrapper = mountSidebar({ jumping: true })
    expect(wrapper.find('nav[aria-label="Sections"]').classes()).toContain('sidebar__nav--jumping')
  })

  it('renders safe contact links', () => {
    const wrapper = mountSidebar()
    const links = wrapper.findAll('.sidebar__contact')
    expect(links).toHaveLength(2)
    for (const link of links) {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
      expect(link.attributes('aria-label')).toBeTruthy()
    }
  })

  it('omits the lead when none is provided', () => {
    const wrapper = mountSidebar({ lead: undefined })
    expect(wrapper.find('.sidebar__lead').exists()).toBe(false)
  })
})
