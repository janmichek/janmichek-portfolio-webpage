import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SlugTitle from '~/components/SlugTitle.vue'

describe('SlugTitle', () => {
  it('renders the title and description', () => {
    const wrapper = mount(SlugTitle, {
      props: { title: 'Tech links', description: 'Sources I read' },
    })

    expect(wrapper.find('h2').text()).toBe('Tech links')
    expect(wrapper.find('h2').classes()).toContain('h3')
    expect(wrapper.find('.slug-title__description').text()).toBe('Sources I read')
  })
})
