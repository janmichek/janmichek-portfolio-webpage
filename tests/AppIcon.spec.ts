import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppIcon from '~/components/AppIcon.vue'

const icons = ['github', 'linkedin', 'x', 'spotify', 'cv', 'link'] as const

describe('AppIcon', () => {
  it.each(icons)('inlines the %s svg with the shared modifier class', (name) => {
    const wrapper = mount(AppIcon, { props: { name } })
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
    expect(svg.classes()).toContain('icon__svg')
    expect(svg.attributes('aria-hidden')).toBe('true')
  })

  it('marks the wrapper as decorative', () => {
    const wrapper = mount(AppIcon, { props: { name: 'github' } })
    const span = wrapper.find('span.icon')
    expect(span.attributes('aria-hidden')).toBe('true')
    expect(span.html()).toContain('<svg')
  })

  it('renders nothing for an unknown icon', () => {
    const wrapper = mount(AppIcon, { props: { name: 'missing' } })
    expect(wrapper.find('svg').exists()).toBe(false)
    expect(wrapper.find('span.icon').text()).toBe('')
  })
})
