<script setup>
defineProps({
  variant: {
    type: String,
    default: 'secondary',
  },
})
</script>

<template>
  <footer
    class="the-footer"
    :data-variant="variant">
    <div
      class="u-container"
      data-aos="fade-up">
      <title-section :variant="variant">
        Contact
      </title-section>

      <div class="the-footer__grid">
        <div class="the-footer__container">
          <app-link
            class="the-footer__link"
            to="mailto:jan@janmichek.cz">
            jan@janmichek.cz
          </app-link>
        </div>

        <div class="the-footer__container">
          <app-link
            class="the-footer__link"
            to="https://cz.linkedin.com/in/jan-michek-aba913103">
            Linked In
          </app-link>
        </div>

        <div class="the-footer__container">
          <app-link
            class="the-footer__link"
            to="https://github.com/janmichek/">
            Github
          </app-link>
        </div>

        <div class="the-footer__container">
          <app-link
            class="the-footer__link"
            to="https://www.twitter.com/jan_michek">
            Twitter
          </app-link>
        </div>

        <div class="the-footer__container">
          <app-link
            class="the-footer__link"
            to="https://drive.google.com/file/d/1zqSU7Gq8hmqqhy65obWP-801D2SX_ycy/view?usp=drive_link">
            CV
          </app-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
[data-variant="primary"] {
  --footer-background: var(--ui-secondary);
  --footer-link: var(--ui-text-primary);
  --footer-link-hover: var(--ui-text-primary);
  @media (--dark) {
    --footer-link: var(--ui-primary);
  }
}

[data-variant="secondary"] {
  --footer-background: var(--ui-secondary);
  --footer-link: var(--ui-text-secondary);
  --footer-link-hover: var(--ui-text-primary);
  @media (--dark) {
    --footer-link: var(--ui-text-primary);
    --footer-link-hover: var(--ui-text-secondary);
  }
}

.the-footer {
  background: var(--footer-background);
  padding: var(--space-xl) 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space);

    @media (--tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (--desktop) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__link {
    font-size: var(--text-lg);
    color: var(--footer-link);

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
