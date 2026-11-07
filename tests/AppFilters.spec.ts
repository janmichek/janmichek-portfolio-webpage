import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppFilters from '~/components/AppFilters.vue'
import type { Group } from '~/data/karabiner'

const groups: Group[] = [
  { id: 'firefox', title: 'Firefox', rows: [] },
  { id: 'webstorm', title: 'WebStorm', rows: [] },
]

describe('AppFilters', () => {
  it('renders an All button and one button per group', () => {
    const wrapper = mount(AppFilters, { props: { modelValue: 'all', groups } })
    const buttons = wrapper.findAll('button')
    expect(buttons.map(button => button.text())).toEqual(['All', 'Firefox', 'WebStorm'])
    expect(wrapper.find('[role="group"]').attributes('aria-label')).toBe('Filter by app')
  })

  it('marks only the current filter as active', () => {
    const wrapper = mount(AppFilters, { props: { modelValue: 'firefox', groups } })
    const buttons = wrapper.findAll('button')
    expect(buttons.map(button => button.attributes('aria-pressed'))).toEqual([
      'false',
      'true',
      'false',
    ])
    expect(buttons.map(button => button.classes('app-filters__button--active'))).toEqual([
      false,
      true,
      false,
    ])
  })

  it('emits update:modelValue when a filter is clicked', async () => {
    const wrapper = mount(AppFilters, { props: { modelValue: 'all', groups } })
    const buttons = wrapper.findAll('button')

    await buttons[1]?.trigger('click')
    await buttons[2]?.trigger('click')
    await buttons[0]?.trigger('click')

    expect(wrapper.emitted('update:modelValue')).toEqual([
      ['firefox'],
      ['webstorm'],
      ['all'],
    ])
  })
})
