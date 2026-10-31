import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { afterEach, describe, expect, it } from 'vitest'
import AppSwiper from '~/components/AppSwiper.vue'

const images = [
  { medium: '/k1.webp', description: 'Galanthus nivalis' },
  { medium: '/k2.webp', description: 'Canna indica' },
  { medium: '/k3.webp', description: 'Myrtus communis' },
]

describe('AppSwiper integration', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('initializes Swiper and binds the custom navigation buttons', async () => {
    const wrapper = mount(AppSwiper, {
      props: { images },
      attachTo: document.body,
    })
    await nextTick()

    expect(wrapper.find('.swiper-initialized').exists()).toBe(true)
    expect(wrapper.find('.gallery-swiper__prev svg').exists()).toBe(true)
    expect(wrapper.find('.gallery-swiper__next svg').exists()).toBe(true)
    expect(wrapper.find('.swiper-slide-active').attributes('aria-label')).toBe('1 / 3')

    await wrapper.find('.gallery-swiper__next').trigger('click')
    await new Promise(resolve => setTimeout(resolve, 350))
    const activeSlides = wrapper.findAll('.swiper-slide-active')
    expect(activeSlides.some(slide => slide.text().includes('Canna indica'))).toBe(true)

    wrapper.unmount()
  })
})
