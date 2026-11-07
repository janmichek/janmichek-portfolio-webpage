import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TitleSection from '~/components/TitleSection.vue'

describe('TitleSection', () => {
  it('renders the slot in a heading with the default variant', () => {
    const wrapper = mount(TitleSection, { slots: { default: 'Issues' } })
    expect(wrapper.find('h3').text()).toBe('Issues')
    expect(wrapper.find('h3').classes()).toContain('title-section--secondary')
  })

  it('applies the primary variant', () => {
    const wrapper = mount(TitleSection, {
      props: { variant: 'primary' },
      slots: { default: 'Contact' },
    })
    expect(wrapper.find('h3').classes()).toContain('title-section--primary')
  })
})
