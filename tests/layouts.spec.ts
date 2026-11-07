import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import DefaultLayout from '~/layouts/default.vue'
import SlugLayout from '~/layouts/slug.vue'

const TheHeader = {
  name: 'TheHeader',
  template: '<header class="header-stub"/>',
}

const TheFooter = {
  name: 'TheFooter',
  props: ['variant'],
  template: '<footer class="footer-stub"/>',
}

describe('layouts', () => {
  it('renders the default layout as a plain container', () => {
    const wrapper = mount(DefaultLayout, {
      slots: { default: '<p class="slot-content">Page</p>' },
    })

    expect(wrapper.find('.layout .slot-content').text()).toBe('Page')
  })

  it('wraps slug content with the header and primary footer', () => {
    const wrapper = mount(SlugLayout, {
      slots: { default: '<article class="slot-content">Article</article>' },
      global: {
        stubs: { TheHeader, TheFooter },
      },
    })

    expect(wrapper.findComponent(TheHeader).exists()).toBe(true)
    expect(wrapper.find('.layout__main .slot-content').text()).toBe('Article')
    expect(wrapper.findComponent(TheFooter).props('variant')).toBe('primary')
    expect(wrapper.findComponent(TheFooter).classes()).toContain('layout__footer')
  })
})
