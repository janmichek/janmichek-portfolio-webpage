<script setup lang="ts">
import { chatContact, chatProfile } from '~/data/chatContent'

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
  <div class="gallery-page">
    <div class="page">
      <aside class="side">
        <div>
          <img
            class="ph"
            :src="chatProfile.avatar"
            alt="Jan Michek">
          <h1 class="name">
            Jan Michek
          </h1>
          <p class="role">
            Web3 full-stack engineer
          </p>
          <nav
            class="nav"
            aria-label="Pages">
            <nuxt-link
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              :aria-current="item.to === '/gallery' ? 'page' : undefined"
              :class="{'is-active': item.to === '/gallery'}">
              <span class="bar"/>{{ item.label }}
            </nuxt-link>
          </nav>
        </div>
        <nav
          class="side-foot"
          aria-label="Contact">
          <a
            v-for="link in chatContact"
            :key="link.url"
            class="ci"
            :href="link.url"
            :title="link.label"
            :aria-label="link.label"
            target="_blank"
            rel="noopener noreferrer">
            <home-icon :name="link.icon"/>
          </a>
        </nav>
      </aside>

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
  --white: var(--color-cream);
  --ink: var(--color-carbon);
  --sky: var(--color-sky);
  --deep: #2f7fa3;
  --tint: #eef6f9;
  --mute: #5b6b6b;
  --lead: #1d3b3b;
  --g3: #889a9a;
  --sec-pad: 48px;
  background: var(--white);
  color: var(--ink);
  color-scheme: light dark;
  font-family: var(--font-sans);
  font-size: 17px;
  font-weight: 300;
  line-height: 1.6;
}

@media (--dark) {
  .gallery-page {
    --white: var(--color-carbon);
    --ink: var(--color-cream);
    --deep: var(--color-sky);
    --tint: #0f3434;
    --mute: var(--color-pale);
    --lead: #d6e6e6;
    --g3: #6f8a8a;
    color-scheme: dark;
  }
}

.gallery-page a {
  color: inherit;
  text-decoration: none;
}

.gallery-page p,
.gallery-page figure {
  margin: 0;
}

.gallery-page h1,
.gallery-page h2 {
  margin: 0;
  font-family: var(--font-sans);
  font-weight: 700;
  line-height: 1;
}

.gallery-page .page {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  max-width: 1240px;
  margin: 0 auto;
}

.gallery-page .side {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 80px 36px 72px 32px;
}

.gallery-page .ph {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--sky);
}

.gallery-page .name {
  margin-top: 24px;
  font-size: clamp(38px, 4.3vw, 58px);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.gallery-page .role {
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
}

.gallery-page .nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
}

.gallery-page .nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.gallery-page .nav .bar {
  width: 28px;
  height: 2px;
  background: var(--ink);
  transition: width 0.2s ease;
}

.gallery-page .nav a:hover .bar,
.gallery-page .nav a.is-active .bar {
  width: 56px;
  background: var(--deep);
}

.gallery-page .nav a.is-active {
  color: var(--deep);
}

.gallery-page .side-foot {
  display: flex;
  gap: 24px;
}

.gallery-page .ci {
  display: inline-flex;
  color: var(--g3);
  transition: color 0.2s ease;
}

.gallery-page .ci:hover {
  color: var(--deep);
}

.gallery-page .ci .icon {
  width: 20px;
  height: 20px;
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

.gallery-page h2 {
  margin-bottom: 36px;
  font-size: clamp(38px, 4.6vw, 60px);
  letter-spacing: -0.035em;
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

  .gallery-page .page {
    grid-template-columns: 1fr;
  }

  .gallery-page .side {
    position: static;
    height: auto;
    padding: 80px 24px 64px;
    gap: 32px;
  }

  .gallery-page .nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px 24px;
    margin-top: 32px;
  }

  .gallery-page .nav .bar {
    display: none;
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
