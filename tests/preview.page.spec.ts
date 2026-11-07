import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import PreviewPage from '~/pages/preview/[id].vue'

function mountPreview(params: Record<string, unknown>) {
  vi.stubGlobal('useRoute', () => ({ params }))
  return mount(PreviewPage)
}

describe('preview page', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('builds the screenshot url from a valid id', () => {
    const wrapper = mountPreview({ id: 'demo-1' })
    expect(wrapper.find('img').attributes('src')).toBe('/screencaptures/preview-demo-1.gif')
    expect(wrapper.find('img').attributes('alt')).toBe('preview')
    expect(wrapper.find('.preview__loading').exists()).toBe(false)
  })

  it('accepts the first segment when the id is an array', () => {
    const wrapper = mountPreview({ id: ['gallery-2', 'extra'] })
    expect(wrapper.find('img').attributes('src')).toBe('/screencaptures/preview-gallery-2.gif')
  })

  it.each([
    ['missing id', {}],
    ['a non-string id', { id: 7 }],
    ['path traversal', { id: '../secret' }],
    ['spaces', { id: 'bad id' }],
  ])('shows the fallback for %s', (_, params) => {
    const wrapper = mountPreview(params)
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.preview__loading').text()).toBe('Preview not found')
  })
})
