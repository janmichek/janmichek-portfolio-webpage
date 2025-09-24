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
    <section>
      <app-swiper :images="images"/>
    </section>
  </article>
</template>

<style scoped>
.gallery {
  padding: var(--space-2xl) 0;

  &__content {
    display: grid;
    place-items: center;
  }

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
