import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AppChecklist from '~/components/AppChecklist.vue'
import SlugTitle from '~/components/SlugTitle.vue'
import TitleSection from '~/components/TitleSection.vue'
import GitFlowPage from '~/pages/git-flow.vue'
describe('git-flow page', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('uses the slug layout and renders the three checklists', () => {
    const definePageMeta = vi.fn()
    vi.stubGlobal('definePageMeta', definePageMeta)

    const wrapper = mount(GitFlowPage, {
      global: { components: { AppChecklist, SlugTitle, TitleSection } },
    })

    expect(definePageMeta).toHaveBeenCalledWith({ layout: 'slug' })
    expect(wrapper.find('h2').text()).toBe('Git Flow')

    const titles = wrapper.findAll('.title-section')
    expect(titles.map(title => title.text())).toEqual(['Issues', 'Pull Request', 'Code Review'])

    const checklists = wrapper.findAllComponents(AppChecklist)
    expect(checklists).toHaveLength(3)
    expect(wrapper.findAll('li')).toHaveLength(6 + 14 + 12)

    expect(wrapper.find('#checkbox-0-issue').exists()).toBe(true)
    expect(wrapper.find('#checkbox-0-pull-request').exists()).toBe(true)
    expect(wrapper.find('#checkbox-0-code-review').exists()).toBe(true)
  })
})
