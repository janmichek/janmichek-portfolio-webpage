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
    <div class="the-footer__container">
      <title-section theme="primary">
        Contact
      </title-section>

      <div class="the-footer__grid">
        <div class="the-footer__link-wrap">
          <app-link
            class="the-footer__link"
            to="mailto:jan@janmichek.cz">
            jan@janmichek.cz
          </app-link>
        </div>

        <div class="the-footer__link-wrap">
          <app-link
            class="the-footer__link"
            to="https://cz.linkedin.com/in/jan-michek-aba913103">
            Linked In
          </app-link>
        </div>

        <div class="the-footer__link-wrap">
          <app-link
            class="the-footer__link"
            to="https://github.com/janmichek/">
            Github
          </app-link>
        </div>

        <div class="the-footer__link-wrap">
          <app-link
            class="the-footer__link"
            to="https://www.twitter.com/jan_michek">
            Twitter
          </app-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
[data-theme="primary"] {
  --footer-background: var(--ui-primary);
  --footer-link: var(--ui-text-secondary);
  --footer-link-hover: var(--ui-text-primary);
}

toto not consistent naming
[data-theme="secondary"] {
  --footer-background: var(--ui-secondary);
  --footer-link: var(--ui-text-primary);
  --footer-link-hover: var(--ui-text-primary);
}

.the-footer {
  background: var(--footer-background);
  padding: var(--space-xl) 0;
  text-align: center;

  @media (--mobile) {
    text-align: left;
  }

  &__container {
    @apply .u-container;
  }

  &__grid {
    @apply .u-grid-12;
  }

  &__link {
    font-size: var(--text-lg);
    color: var(--footer-link);

    &:hover {
      color: var(--footer-link-hover);
    }
  }

  &__link-wrap {
    @apply .u-1/4-desktop;
    @apply .u-1/2-tablet;
    width: 100%;
    text-align: center;
    margin-bottom: var(--space-sm);
  }
}
</style>
