<script setup>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

defineProps({
  images: {
    type: Array,
    default: null,
  },
})

const modules = [Navigation]
</script>

<template>
  <swiper
    v-if="images?.length"
    :modules="modules"
    :loop="images?.length > 1"
    :navigation="true"
    :space-between="48">
    <swiper-slide
      v-for="(slide, index) in images"
      :key="index">
      <img
        :src="slide.medium"
        class="swiper__image"
        :alt="slide.description">
      <div class="swiper__text">
        {{ slide.description }}
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  &__image {
    margin: 0 auto;
    width: 85%;
  }

  &__text {
    text-align: center;
    color: var(--ui-text-muted);
  }
}
</style>

<style>
.swiper {
  &-button-prev {
    &:after {
      content: "";
    }
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: var(--space-sm) var(--space-lg) var(--space-sm) 0;
    border-color: transparent var(--ui-primary) transparent transparent;
  }

  &-button-next {
    &:after {
      content: "";
    }
    width: 0;
    height: 0;
    border-style: solid;
    border-width: var(--space-sm) 0 var(--space-sm) var(--space-lg);
    border-color: transparent transparent transparent var(--ui-primary);
  }
}
</style>
