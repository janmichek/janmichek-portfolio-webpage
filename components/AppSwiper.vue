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
      <nuxt-img
        format="webp"
        :src="slide.medium"
        class="swiper__image"/>
      <div class="swiper__text">
        {{ slide.altText }}
      </div>
    </swiper-slide>
  </swiper>
</template>

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

<style>
.swiper__image {
  margin: 0 auto;
  width: 85vw;
}

.swiper-button-prev {
  &:after {
    content: "";
  }

  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 30px 15px 0;
  border-color: transparent var(--brand-primary) transparent transparent;

  @media (--tablet) {
    left: var(--gutter);
  }
}

.swiper-button-next {
  &:after {
    content: "";
  }

  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 30px;
  border-color: transparent transparent transparent var(--brand-primary);

  @media (--tablet) {
    right: var(--gutter);
  }
}

.swiper__text {
  text-align: center;
}
</style>
