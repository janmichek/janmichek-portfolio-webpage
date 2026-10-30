<script setup>
import { Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

defineProps({
  images: {
    type: Array,
    default: null,
  },
})

const modules = [Navigation, Keyboard]
</script>

<template>
  <swiper
    v-if="images?.length"
    class="gallery-swiper"
    :modules="modules"
    :loop="images.length > 1"
    :navigation="true"
    :keyboard="{enabled: true, onlyInViewport: true}"
    :grab-cursor="true"
    :space-between="24">
    <swiper-slide
      v-for="(slide, index) in images"
      :key="index">
      <figure class="slide">
        <img
          :src="slide.medium"
          class="slide__image"
          :alt="slide.description"
          loading="lazy">
        <figcaption class="slide__text">
          {{ slide.description }}
        </figcaption>
      </figure>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.gallery-swiper {
  width: 100%;
}

.slide {
  margin: 0;
}

.slide__image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 10px;
  background: var(--tint, #eef6f9);
}

.slide__text {
  margin-top: 14px;
  text-align: center;
  font-size: 15px;
  line-height: 1.5;
  color: var(--mute, var(--ui-text-muted));
}

@media (width <= 560px) {
  .slide__image {
    aspect-ratio: 4 / 3;
  }
}
</style>

<style>
.gallery-swiper {
  --swiper-navigation-color: var(--deep, var(--ui-primary));
  --swiper-navigation-size: 44px;
  --nav-top: 50%;
  --nav-bottom: auto;
  --nav-margin-top: -18px;
  --nav-left: 8px;
  --nav-right: 8px;
}

.gallery-swiper .swiper-button-prev,
.gallery-swiper .swiper-button-next {
  display: grid;
  place-items: center;
  top: var(--nav-top);
  bottom: var(--nav-bottom);
  width: 36px;
  height: 36px;
  margin-top: var(--nav-margin-top);
  border-radius: 50%;
  background: var(--white, var(--color-cream));
  box-shadow: 0 2px 12px rgb(8 38 38 / 12%);
  transition: background 0.2s ease, color 0.2s ease;
}

.gallery-swiper .swiper-button-prev svg,
.gallery-swiper .swiper-button-next svg {
  width: 10px;
  height: 18px;
  fill: currentcolor;
}

.gallery-swiper .swiper-button-prev {
  left: var(--nav-left);
}

.gallery-swiper .swiper-button-next {
  right: var(--nav-right);
}

.gallery-swiper .swiper-button-prev:hover,
.gallery-swiper .swiper-button-next:hover {
  background: var(--deep, var(--ui-primary));
  color: var(--white, var(--color-cream));
}

@media (width <= 560px) {
  .gallery-swiper {
    --nav-top: auto;
    --nav-bottom: 0;
    --nav-margin-top: 0;
    --nav-left: calc(50% - 44px);
    --nav-right: calc(50% - 44px);
    padding: 0 0 48px;
  }
}
</style>
