import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import AppSwiper from '~/components/AppSwiper.vue'

vi.mock('swiper/modules', () => ({
  A11y: { name: 'A11y' },
  Navigation: { name: 'Navigation' },
}))

vi.mock('swiper/vue', async () => {
  const { h } = await import('vue')
  return {
    Swiper: {
      name: 'Swiper',
      props: ['modules', 'loop', 'navigation', 'grabCursor', 'spaceBetween'],
      setup(_props: unknown, { slots }: { slots: { default?: () => unknown } }) {
        return () => h('div', { class: 'swiper-mock' }, slots.default?.() as never)
      },
    },
    SwiperSlide: {
      name: 'SwiperSlide',
      setup(_props: unknown, { slots }: { slots: { default?: () => unknown } }) {
        return () => h('div', { class: 'swiper-slide-mock' }, slots.default?.() as never)
      },
    },
  }
})

const images = [
  { medium: '/k1.webp', description: 'Galanthus nivalis' },
  { medium: '/k2.webp', description: 'Canna indica' },
]

describe('AppSwiper', () => {
  it('renders nothing without images', () => {
    for (const value of [undefined, null, []]) {
      const wrapper = mount(AppSwiper, { props: value === undefined ? {} : { images: value } })
      expect(wrapper.find('.gallery-swiper').exists()).toBe(false)
    }
  })

  it('renders a single image without navigation', () => {
    const wrapper = mount(AppSwiper, { props: { images: images.slice(0, 1) } })
    expect(wrapper.findAll('.swiper-slide-mock')).toHaveLength(1)
    expect(wrapper.find('.gallery-swiper__prev').exists()).toBe(false)
    expect(wrapper.find('.gallery-swiper__next').exists()).toBe(false)

    const swiper = wrapper.findComponent({ name: 'Swiper' })
    expect(swiper.props('loop')).toBe(false)
    expect(swiper.props('navigation')).toBe(false)
  })

  it('renders labelled controls and loop for multiple images', () => {
    const wrapper = mount(AppSwiper, { props: { images } })
    expect(wrapper.findAll('.swiper-slide-mock')).toHaveLength(2)

    const prev = wrapper.find('.gallery-swiper__prev')
    const next = wrapper.find('.gallery-swiper__next')
    expect(prev.attributes('type')).toBe('button')
    expect(prev.attributes('aria-label')).toBe('Previous image')
    expect(next.attributes('type')).toBe('button')
    expect(next.attributes('aria-label')).toBe('Next image')

    const swiper = wrapper.findComponent({ name: 'Swiper' })
    expect(swiper.props('loop')).toBe(true)
    expect(swiper.props('navigation')).toEqual({
      prevEl: `#${prev.attributes('id')}`,
      nextEl: `#${next.attributes('id')}`,
    })
  })

  it('uses the caption as the single accessible description', () => {
    const wrapper = mount(AppSwiper, { props: { images } })
    const image = wrapper.find('img')
    expect(image.attributes('alt')).toBe('')
    expect(image.attributes('loading')).toBe('lazy')
    expect(wrapper.find('figcaption').text()).toBe('Galanthus nivalis')
  })
})
