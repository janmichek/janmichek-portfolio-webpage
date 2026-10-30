<script setup lang="ts">
const { chatContact, chatProfile, siteMeta } = useSiteContent()

const images = [
  { medium: 'k1.webp', description: 'Galanthus nivalis - Žižkov' },
  { medium: 'k7.webp', description: 'Bougainvillea spectabilis - Puerto de la Cruz' },
  { medium: 'k9.webp', description: 'Pancratium maritimum - Praia da Comporta' },
  { medium: 'k11.webp', description: 'Prunus mahaleb - Žižkov' },
  { medium: 'k2.webp', description: 'Canna indica - Puerto de la Cruz' },
  { medium: 'k10.webp', description: 'Delosperma cooperi - Žižkov' },
  { medium: 'k5.webp', description: 'Pelargonium graveolens - Las Playitas' },
  { medium: 'k4.webp', description: 'Philadelphus indorus - Křivoklátsko' },
  { medium: 'k6.webp', description: 'Prunus spinosa - Žižkov' },
  { medium: 'k8.webp', description: 'Nerium oleander - Monopoli' },
  { medium: 'k12.webp', description: 'Pelargonium graveolens - Albertov' },
  { medium: 'k3.webp', description: 'Myrtus communis - Monopoli' },
]

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
]
</script>

<template>
  <div class="gallery-page site-theme">
    <div class="page">
      <site-sidebar
        :name="chatProfile.name"
        :role="siteMeta.role"
        :avatar="chatProfile.avatar"
        :contact="chatContact"
        :items="navItems"
        nav-label="Pages"
        active-to="/gallery"/>

      <main class="main">
        <section class="sec">
          <h2>Photo Gallery</h2>
          <p class="intro">
            Capturing beauty through my lens - especially the delicate world of flowers.
            These shots showcase my aesthetic eye and double as gorgeous placeholder images for your next project.
          </p>

          <div class="slider">
            <app-swiper :images="images"/>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style>
.gallery-page {
  --sec-pad: 48px;
}

.gallery-page .main {
  min-width: 0;
}

.gallery-page .sec {
  padding: 64px var(--sec-pad);
}

.gallery-page .main .sec:first-child {
  padding-top: 200px;
}

.gallery-page.site-theme h2 {
  margin-bottom: 36px;
  font-size: clamp(38px, 4.6vw, 60px);
  letter-spacing: -0.035em;
  color: var(--deep);
}

.gallery-page .intro {
  max-width: 34em;
  font-size: 18px;
  line-height: 1.65;
  color: var(--lead);
}

.gallery-page .slider {
  margin: 40px calc(-1 * var(--sec-pad)) 0;
}

.gallery-page a:focus-visible {
  outline: 2px solid var(--deep);
  outline-offset: 3px;
}

@media (width <= 900px) {
  .gallery-page {
    --sec-pad: 24px;
  }

  .gallery-page.site-theme .page {
    grid-template-columns: 1fr;
  }

  .gallery-page .sec {
    padding: 48px var(--sec-pad);
  }

  .gallery-page .main .sec:first-child {
    padding-top: 120px;
  }

  .gallery-page .slider {
    margin-top: 32px;
  }
}
</style>
