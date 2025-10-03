<script setup>
const images = ref([
  {
    medium: 'k1.webp',
    description: 'Galanthus nivalis - Žižkov',
  },
  {
    medium: 'k7.webp',
    description: 'Bougainvillea spectabilis - Puerto de la Cruz',
  },
  {
    medium: 'k9.webp',
    description: 'Pancratium maritimum - Praia da Comporta',
  },
  {
    medium: 'k11.webp',
    description: 'Prunus mahaleb - Žižkov',
  },
  {
    medium: 'k2.webp',
    description: 'Canna indica - Puerto de la Cruz',
  },
  {
    medium: 'k10.webp',
    description: 'Delosperma cooperi - Žižkov',
  },
  {
    medium: 'k5.webp',
    description: 'Pelargonium graveolens - Las Playitas',
  },
  {
    medium: 'k4.webp',
    description: 'Philadelphus indorus - Křivoklátsko',
  },
  {
    medium: 'k6.webp',
    description: 'Prunus spinosa - Žižkov',
  },
  {
    medium: 'k8.webp',
    description: 'Nerium oleander - Monopoli',
  },
  {
    medium: 'k12.webp',
    description: 'Pelargonium graveolens - Albertov',
  },
  {
    medium: 'k3.webp',
    description: 'Myrtus communis - Monopoli',
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
              description="Capturing beauty through my lens - especially the delicate world of flowers.
              These shots showcase my aesthetic eye and double as gorgeous placeholder images for your next project."/>
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
