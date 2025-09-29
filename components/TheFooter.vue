<script setup>
defineProps({
  theme: {
    type: String,
    default: 'secondary',
  },
})
</script>

<template>
  <footer
    class="the-footer"
    :data-theme="theme">
    <div class="u-container">
      <title-section :variant="theme">
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
      </div>
    </div>
    §§
  </footer>
</template>

<style scoped>
[data-theme="primary"] {
  --footer-background: var(--ui-text-primary);
  --footer-link: var(--ui-text-secondary);
  --footer-link-hover: var(--ui-text-primary);
  @media (--dark) {
    --footer-link: var(--ui-text-tertiary);
  }
}

[data-theme="secondary"] {
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
  text-align: left;

  @media (max-width: 479px) {
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space);

    @media (--tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (--desktop) {
      grid-template-columns: repeat(4, 1fr);
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
