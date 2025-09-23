<script setup>
const images = ref([
  {
    medium: 'k1.webp',
    altText: 'Galanthus nivalis - Žižkov',
  },
  {
    medium: 'k2.webp',
    altText: 'Philadelphus indorus - Křivoklátsko',
  },
  {
    medium: 'k3.webp',
    altText: 'Canna indica - Puerto de la Cruz',
  },
  {
    medium: 'k4.webp',
    altText: 'Prunus mahaleb - Žižkov',
  },
  {
    medium: 'k5.webp',
    altText: 'Pelargonium graveolens - Las Playitas',
  },
  {
    medium: 'k6.webp',
    altText: 'Nerium oleander - Monopoli',
  },
  {
    medium: 'k7.webp',
    altText: 'Bougainvillea spectabilis - Puerto de la Cruz',
  },
  {
    medium: 'k8.webp',
    altText: 'Prunus spinosa - Žižkov',
  },
  {
    medium: 'k9.webp',
    altText: 'Pancratium maritimum - Praia da Comporta',
  },
  {
    medium: 'k10.webp',
    altText: 'Delosperma cooperi - Žižkov',
  },
  {
    medium: 'k11.webp',
    altText: 'Myrtus communis - Monopoli',
  },
  {
    medium: 'k12.webp',
    altText: 'Pelargonium graveolens - Albertov',
  },
])
</script>

<template>
  <article class="gallery">
    <!--    todo is the class needed? -->
    <div class="layout__content gallery__content">
      <div class="gallery__container">
        <div class="gallery__main">
          <section>
            <slug-title
              title="Photo Gallery"
              description="I like shooting photography too. Especially flowers. Here is a small presentation of my
              esthetics skills. I am using them as placeholder images when building new app."/>
          </section>
        </div>
      </div>
    </div>
    <section>
      <app-swiper :images="images"/>
    </section>
  </article>
</template>

<style scoped>
@import url("../assets/styles/utilities/_grid.css");

.gallery {
  padding: var(--space-xxl) 0;

  &__content {
    @apply .u-center;
  }

  &__container {
    @apply .u-container;
    @apply .u-grid-12;
  }

  &__main {
    @apply .u-2/3
  }
}
</style>
