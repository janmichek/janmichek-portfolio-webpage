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
    class="the-content__section"
    data-wf="goodies">
    <h2 class="the-content__heading">
      Goodies
    </h2>
    <div class="the-content__goodies">
      <app-link
        v-for="goodie in goodies"
        :key="goodie.url"
        class="the-content__goodie"
        :to="goodie.to ?? goodie.href"
        :target="goodie.target">
        <span
          class="the-content__goodie-thumbnail"
          :class="{'the-content__goodie-thumbnail--dark': goodie.dark}">
          <img
            :src="goodie.image"
            alt="">
        </span>
        <span class="the-content__goodie-body">
          <b class="the-content__goodie-title">{{ goodie.title }}</b>
          <span class="the-content__goodie-text">{{ goodie.text }}</span>
        </span>
      </app-link>
    </div>
  </section>
</template>

<style scoped>
.the-content {
  &__goodies {
    display: grid;
    gap: 8px 28px;
  }

  &__goodie {
    display: grid;
    grid-template-columns: 104px 1fr;
    gap: 18px;
    align-items: start;
    padding: 12px 0;

    &:hover .the-content__goodie-title {
      color: var(--deep);
    }
  }

  &__goodie-thumbnail {
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

  &__goodie-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__goodie-title {
    display: block;
    font-size: 19px;
    font-weight: 700;
  }

  &__goodie-text {
    display: block;
    min-height: 4.5em;
    font-size: 18px;
    line-height: 1.5;
    color: var(--mute);
  }
}
</style>
