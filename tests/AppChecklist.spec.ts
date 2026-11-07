import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppChecklist from '~/components/AppChecklist.vue'

function at<T>(items: T[], index: number): T {
  const item = items[index]
  if (item === undefined) throw new Error(`No item at index ${index}`)
  return item
}

describe('AppChecklist', () => {
  it('renders a labelled checkbox per item', () => {
    const wrapper = mount(AppChecklist, {
      props: { list: ['First task', 'Second task'], name: 'review' },
    })

    const inputs = wrapper.findAll('input[type="checkbox"]')
    expect(inputs).toHaveLength(2)
    expect(inputs.map(input => input.attributes('id'))).toEqual([
      'checkbox-0-review',
      'checkbox-1-review',
    ])

    const labels = wrapper.findAll('label')
    expect(labels.map(label => label.text())).toEqual(['First task', 'Second task'])
    expect(at(labels, 0).attributes('for')).toBe('checkbox-0-review')
    expect(at(labels, 1).attributes('for')).toBe('checkbox-1-review')
  })

  it('omits the name suffix when no name is given', () => {
    const wrapper = mount(AppChecklist, { props: { list: ['Only'] } })
    expect(wrapper.find('input').attributes('id')).toBe('checkbox-0-')
  })

  it('renders an empty list without rows', () => {
    const wrapper = mount(AppChecklist, { props: { list: [] } })
    expect(wrapper.findAll('li')).toHaveLength(0)
    expect(wrapper.find('ul').exists()).toBe(true)
  })
})
