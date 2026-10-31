<script setup lang="ts">
const { chatGoodies } = useSiteContent()

function isHttp(url: string) {
  return url.startsWith('http://') || url.startsWith('https://')
}

type Goodie = (typeof chatGoodies)[number]

function externalGoodie(goodie: Goodie) {
  return {
    ...goodie,
    href: goodie.url,
    to: undefined,
    target: '_blank',
    rel: 'noopener noreferrer',
  }
}

function internalGoodie(goodie: Goodie) {
  return {
    ...goodie,
    href: undefined,
    to: goodie.url,
    target: undefined,
    rel: undefined,
  }
}

function toGoodie(goodie: Goodie) {
  return isHttp(goodie.url) ? externalGoodie(goodie) : internalGoodie(goodie)
}

const goodies = chatGoodies.map(toGoodie)
</script>

<template>
  <section
    id="goods"
    class="app-goodies-section"
    data-wf="goodies">
    <h2 class="app-goodies-section__heading">
      Goodies
    </h2>
    <div class="app-goodies-section__list">
      <app-link
        v-for="goodie in goodies"
        :key="goodie.url"
        class="app-goodies-section__goodie"
        :to="goodie.to ?? goodie.href"
        :target="goodie.target">
        <span
          class="app-goodies-section__thumbnail"
          :class="{'app-goodies-section__thumbnail--dark': goodie.dark}">
          <img
            :src="goodie.image"
            alt="">
        </span>
        <span class="app-goodies-section__body">
          <b class="app-goodies-section__title">{{ goodie.title }}</b>
          <span class="app-goodies-section__text">{{ goodie.text }}</span>
        </span>
      </app-link>
    </div>
  </section>
</template>

<style scoped>
.app-goodies-section {
  padding: 64px 48px;

  &__heading {
    margin-bottom: 36px;
    font-size: clamp(38px, 4.6vw, 60px);
    letter-spacing: -0.035em;
  }

  &__list {
    display: grid;
    gap: 8px 28px;
  }

  &__goodie {
    display: grid;
    grid-template-columns: 104px 1fr;
    gap: 18px;
    align-items: start;
    padding: 12px 0;

    &:hover .app-goodies-section__title {
      color: var(--deep);
    }

    &:focus-visible {
      outline: 3px solid var(--deep);
      outline-offset: 3px;
    }
  }

  &__thumbnail {
    display: block;
    width: 104px;
    height: 104px;
    overflow: hidden;
    border-radius: 7px;
    background: var(--tint);

    &--dark img {
      filter: invert(1) hue-rotate(180deg);
    }

    img[src$='.svg'] {
      object-fit: contain;
      padding: 12px;
    }
  }

  &__thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    display: block;
    font-size: 19px;
    font-weight: 700;
  }

  &__text {
    display: block;
    min-height: 4.5em;
    font-size: 18px;
    line-height: 1.5;
    color: var(--mute);
  }
}

@media (width <= 900px) {
  .app-goodies-section {
    padding: 48px 24px;
  }
}
</style>
