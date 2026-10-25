<script setup>
defineProps({
  variant: {
    type: String,
    default: 'secondary',
    validator: value => ['primary', 'secondary'].includes(value),
  },
})
</script>

<template>
  <footer
    :class="['footer', `footer--${variant}`]">
    <div
      class="u-container"
      data-aos="fade-up">
      <title-section :variant="variant">
        Contact
      </title-section>

      <div class="footer__grid">
        <div class="footer__container">
          <app-link
            class="footer__link"
            to="https://open.spotify.com/artist/52iWG2c2P0K6HmGrAAUyoP?si=SuOL9lY1QuyCI1FDBOzO9A">
            Spotify
          </app-link>
        </div>

        <div class="footer__container">
          <app-link
            class="footer__link"
            to="mailto:jan@janmichek.cz">
            jan@janmichek.cz
          </app-link>
        </div>

        <div class="footer__container">
          <app-link
            class="footer__link"
            to="https://cz.linkedin.com/in/jan-michek-aba913103">
            LinkedIn
          </app-link>
        </div>

        <div class="footer__container">
          <app-link
            class="footer__link"
            to="https://github.com/janmichek/">
            GitHub
          </app-link>
        </div>

        <div class="footer__container">
          <app-link
            class="footer__link"
            to="https://drive.google.com/file/d/1JKoO3XYsx_8BGriNa9rMlt0nwgQajE3v/view?usp=drive_link">
            CV
          </app-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer--primary {
  --footer-background: var(--ui-secondary);
  --footer-link: var(--ui-text-primary);
  --footer-link-hover: var(--ui-text-primary);

  @media (--dark) {
    --footer-link: var(--ui-primary);
  }
}

.footer--secondary {
  --footer-background: var(--ui-secondary);
  --footer-link: var(--ui-text-secondary);
  --footer-link-hover: var(--ui-text-primary);

  @media (--dark) {
    --footer-link: var(--ui-text-primary);
    --footer-link-hover: var(--ui-text-secondary);
  }
}

.footer {
  --deep: #2f7fa3;

  background: var(--footer-background);
  padding: var(--space-xl) 0 var(--space-md);

  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space-md);

    @media (--tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (--desktop) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__link {
    font-size: var(--text-sm);
    color: var(--deep);

    &:hover {
      color: var(--footer-link-hover);
    }
  }

  &__container {
    text-align: center;
    margin-bottom: var(--space-sm);

    @media (--tablet) {
      margin-bottom: 0;
    }
  }
}
</style>
