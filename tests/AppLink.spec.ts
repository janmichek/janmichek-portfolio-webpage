import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppLink from '~/components/AppLink.vue'

const NuxtLink = {
  name: 'NuxtLink',
  props: ['to'],
  template: '<a class="nuxt-link" :href="typeof to === \'string\' ? to : \'/object\'"><slot/></a>',
}

function mountLink(props: Record<string, unknown>) {
  return mount(AppLink, {
    props,
    global: { stubs: { NuxtLink } },
    slots: { default: 'Link text' },
  })
}

describe('AppLink', () => {
  it('routes root-relative paths through NuxtLink', () => {
    const wrapper = mountLink({ to: '/gallery' })
    expect(wrapper.findComponent(NuxtLink).props('to')).toBe('/gallery')
    expect(wrapper.find('a').attributes('href')).toBe('/gallery')
    expect(wrapper.find('a').text()).toBe('Link text')
  })

  it('routes object locations through NuxtLink', () => {
    const to = { name: 'gallery' }
    const wrapper = mountLink({ to })
    expect(wrapper.findComponent(NuxtLink).props('to')).toEqual(to)
  })

  it('renders external urls with a new-tab rel by default', () => {
    const wrapper = mountLink({ to: 'https://example.com' })
    const anchor = wrapper.find('a')
    expect(wrapper.findComponent(NuxtLink).exists()).toBe(false)
    expect(anchor.attributes('href')).toBe('https://example.com')
    expect(anchor.attributes('target')).toBe('_blank')
    expect(anchor.attributes('rel')).toBe('noopener noreferrer')
  })

  it('omits rel for same-tab links', () => {
    const wrapper = mountLink({ to: 'mailto:jan@example.com', target: '_self' })
    const anchor = wrapper.find('a')
    expect(anchor.attributes('href')).toBe('mailto:jan@example.com')
    expect(anchor.attributes('target')).toBe('_self')
    expect(anchor.attributes('rel')).not.toBe('noopener noreferrer')
  })

  it('treats protocol-relative and mailto urls as external', () => {
    for (const to of ['//cdn.example.com/file', 'mailto:jan@example.com']) {
      const wrapper = mountLink({ to })
      expect(wrapper.findComponent(NuxtLink).exists()).toBe(false)
      expect(wrapper.find('a').attributes('href')).toBe(to)
    }
  })
})
