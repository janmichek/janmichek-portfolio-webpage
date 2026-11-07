import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AppChecklist from '~/components/AppChecklist.vue'
import SlugTitle from '~/components/SlugTitle.vue'
import WebdesignChecklistPage from '~/pages/webdesign-checklist.vue'

describe('webdesign-checklist page', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('uses the slug layout and renders every checklist item', () => {
    const definePageMeta = vi.fn()
    vi.stubGlobal('definePageMeta', definePageMeta)

    const wrapper = mount(WebdesignChecklistPage, {
      global: { components: { AppChecklist, SlugTitle } },
    })

    expect(definePageMeta).toHaveBeenCalledWith({ layout: 'slug' })
    expect(wrapper.find('h2').text()).toBe('Webdesign checklist')
    expect(wrapper.findAll('li')).toHaveLength(15)
    expect(wrapper.find('label').text()).toBe('hover state')
    expect(wrapper.findAll('input')).toHaveLength(15)
  })
})
