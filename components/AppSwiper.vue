<script setup>
import { computed, useId } from 'vue'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

const props = defineProps({
  images: {
    type: Array,
    default: null,
  },
})

const modules = [A11y, Navigation]
const uid = useId()
const imageCount = computed(() => props.images?.length ?? 0)
const hasImages = computed(() => imageCount.value > 0)
const hasMultiple = computed(() => imageCount.value > 1)
const navigation = computed(() => (hasMultiple.value
  ? { prevEl: `#${uid}-prev`, nextEl: `#${uid}-next` }
  : false))
</script>

<template>
  <div
    v-if="hasImages"
    class="gallery-swiper">
    <template v-if="hasMultiple">
      <button
        :id="`${uid}-prev`"
        type="button"
        class="gallery-swiper__prev swiper-button-prev"
        aria-label="Previous image"/>
      <button
        :id="`${uid}-next`"
        type="button"
        class="gallery-swiper__next swiper-button-next"
        aria-label="Next image"/>
    </template>
    <swiper
      class="gallery-swiper__track"
      :modules="modules"
      :loop="hasMultiple"
      :navigation="navigation"
      :grab-cursor="true"
      :space-between="24">
      <swiper-slide
        v-for="(slide, index) in images"
        :key="index">
        <figure class="slide">
          <img
            :src="slide.medium"
            class="slide__image"
            alt=""
            loading="lazy">
          <figcaption class="slide__text">
            {{ slide.description }}
          </figcaption>
        </figure>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.gallery-swiper {
  position: relative;
  overflow: hidden;
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
  --nav-size: 200px;
  --caption-offset: 19px;
  --nav-arrow-pad: calc(var(--nav-size) * 0.075 - 3px);
  --nav-shift: -0.85;
}

.gallery-swiper .swiper-button-prev,
.gallery-swiper .swiper-button-next {
  display: flex;
  align-items: center;
  top: 50%;
  width: var(--nav-size);
  height: var(--nav-size);
  margin-top: calc(-1 * var(--nav-size) / 2 - var(--caption-offset));
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--white, var(--color-cream));
  box-shadow: 0 2px 12px rgb(8 38 38 / 12%);
  transition: transform 0.35s ease, background 0.2s ease, color 0.2s ease;
}

.gallery-swiper .swiper-button-prev {
  left: calc(var(--nav-size) * var(--nav-shift));
  justify-content: flex-end;
  padding-right: var(--nav-arrow-pad);
  transform: translateX(-100%);
}

.gallery-swiper .swiper-button-next {
  right: calc(var(--nav-size) * var(--nav-shift));
  justify-content: flex-start;
  padding-left: var(--nav-arrow-pad);
  transform: translateX(100%);
}

.gallery-swiper .swiper-button-prev svg,
.gallery-swiper .swiper-button-next svg {
  width: 12px;
  height: 22px;
  fill: currentcolor;
  transition: translate 0.2s ease;
}

.gallery-swiper:hover .swiper-button-prev,
.gallery-swiper:hover .swiper-button-next,
.gallery-swiper .swiper-button-prev:hover,
.gallery-swiper .swiper-button-next:hover,
.gallery-swiper .swiper-button-prev:focus-visible,
.gallery-swiper .swiper-button-next:focus-visible {
  transform: translateX(0);
}

.gallery-swiper .swiper-button-prev:hover svg {
  translate: -3px 0;
}

.gallery-swiper .swiper-button-next:hover svg {
  translate: 3px 0;
}

.gallery-swiper .swiper-button-prev:focus-visible,
.gallery-swiper .swiper-button-next:focus-visible {
  outline: 3px solid var(--deep, var(--ui-primary));
  outline-offset: -3px;
}

@media (hover: none) {
  .gallery-swiper .swiper-button-prev,
  .gallery-swiper .swiper-button-next {
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-swiper .swiper-button-prev,
  .gallery-swiper .swiper-button-next,
  .gallery-swiper .swiper-button-prev svg,
  .gallery-swiper .swiper-button-next svg {
    transition: none;
  }
}

@media (width <= 560px) {
  .gallery-swiper {
    --nav-size: 48px;
    --nav-arrow-pad: 0px;
    padding-bottom: 64px;
  }

  .gallery-swiper .swiper-button-prev,
  .gallery-swiper .swiper-button-next {
    top: auto;
    bottom: 8px;
    margin-top: 0;
    justify-content: center;
  }

  .gallery-swiper .swiper-button-prev {
    left: 8px;
  }

  .gallery-swiper .swiper-button-next {
    right: 8px;
  }

  .gallery-swiper .swiper-button-prev svg,
  .gallery-swiper .swiper-button-next svg {
    width: 10px;
    height: 18px;
  }
}
</style>
