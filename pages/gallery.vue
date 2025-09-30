<script setup>
const images = ref([
  {
    medium: 'k1.webp',
    altText: 'Galanthus nivalis - Žižkov',
  },
  {
    medium: 'k7.webp',
    altText: 'Bougainvillea spectabilis - Puerto de la Cruz',
  },
  {
    medium: 'k9.webp',
    altText: 'Pancratium maritimum - Praia da Comporta',
  },
  {
    medium: 'k11.webp',
    altText: 'Myrtus communis - Monopoli',
  },
  {
    medium: 'k2.webp',
    altText: 'Philadelphus indorus - Křivoklátsko',
  },
  {
    medium: 'k10.webp',
    altText: 'Delosperma cooperi - Žižkov',
  },
  {
    medium: 'k5.webp',
    altText: 'Pelargonium graveolens - Las Playitas',
  },
  {
    medium: 'k4.webp',
    altText: 'Prunus mahaleb - Žižkov',
  },
  {
    medium: 'k6.webp',
    altText: 'Nerium oleander - Monopoli',
  }, {
    medium: 'k8.webp',
    altText: 'Prunus spinosa - Žižkov',
  },
  {
    medium: 'k12.webp',
    altText: 'Pelargonium graveolens - Albertov',
  },
  {
    medium: 'k3.webp',
    altText: 'Canna indica - Puerto de la Cruz',
  },
])
</script>

<template>
  <nuxt-layout name="blank">
    <article class="gallery">
      <div class="gallery__container">
        <div class="gallery__main">
          <section>
            <slug-title
              title="Photo Gallery"
              description="Capturing beauty through my lens - especially the delicate world of flowers. These shots showcase my aesthetic eye and double as gorgeous placeholder images for your next project."/>
          </section>
        </div>
      </div>
      <section>
        <app-swiper :images="images"/>
      </section>
    </article>
  </nuxt-layout>
</template>

<style scoped>
.gallery {
  padding: var(--space-2xl) 0;

  &__container {
    max-width: var(--container-max-width);
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    margin: 0 auto;
    padding: 0 var(--space-sm);

    @media (--desktop) {
      padding: 0 var(--space-xl);
    }
  }

  &__main {
    width: 100%;
    max-width: calc(2 / 3 * 100%);
  }
}
</style>
