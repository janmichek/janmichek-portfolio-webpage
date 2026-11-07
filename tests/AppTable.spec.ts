import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppTable from '~/components/AppTable.vue'
import type { Group } from '~/data/karabiner'

const group: Group = {
  id: 'navigation',
  title: 'Navigation',
  rows: [
    { keys: ['Shift', 'Cmd', '←'], action: 'Select word left' },
    { keys: ['End'], hint: 'tap', action: 'Cursor to end of line' },
    { keys: ['F2'], hint: 'hold', action: 'Reopen closed tab' },
  ],
}

describe('AppTable', () => {
  it('renders the group heading and a row per shortcut', () => {
    const wrapper = mount(AppTable, { props: { group } })

    expect(wrapper.find('section').attributes('id')).toBe('navigation')
    expect(wrapper.find('h2').text()).toBe('Navigation')
    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
  })

  it('renders every key and separates combinations with plus signs', () => {
    const wrapper = mount(AppTable, { props: { group } })

    const keys = wrapper.findAll('.app-table__key')
    expect(keys).toHaveLength(5)
    expect(keys.map(key => key.find('kbd').text())).toEqual([
      'Shift',
      'Cmd',
      '←',
      'End',
      'F2',
    ])

    const pluses = wrapper.findAll('.app-table__plus')
    expect(pluses).toHaveLength(2)
    expect(pluses.map(plus => plus.text())).toEqual(['+', '+'])
  })

  it('shows the optional tap or hold hint', () => {
    const wrapper = mount(AppTable, { props: { group } })

    const hints = wrapper.findAll('.app-table__hint')
    expect(hints.map(hint => hint.text())).toEqual(['tap', 'hold'])
    expect(wrapper.findAll('.app-table__action').map(action => action.text())).toEqual([
      'Select word left',
      'Cursor to end of line',
      'Reopen closed tab',
    ])
  })
})
