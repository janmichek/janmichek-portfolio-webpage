<template>
  <footer
    class="the-footer"
    :data-theme="theme">
    <div class="u-container">
      <title-section theme="primary">
        Contact
      </title-section>

      <div class="u-grid-12">
        <div class="u-1/4@desktop u-1/2@tablet the-footer__link-wrap">
          <app-link
            class="the-footer__link"
            to="mailto:jan@janmichek.cz">
            jan@janmichek.cz
          </app-link>
        </div>

        <div class="u-1/4@desktop u-1/2@tablet the-footer__link-wrap">
          <app-link
            class="the-footer__link"
            to="https://cz.linkedin.com/in/jan-michek-aba913103">
            Linked In
          </app-link>
        </div>

        <div class="u-1/4@desktop u-1/2@tablet the-footer__link-wrap">
          <app-link
            class="the-footer__link"
            to="https://github.com/janmichek/">
            Github
          </app-link>
        </div>

        <div class="u-1/4@desktop u-1/2@tablet the-footer__link-wrap">
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

<script setup>
defineProps({
  theme: {
    type: String,
    default: 'secondary',
  },
})
</script>

<style scoped>
[data-theme="primary"] {
  --footer-background: var(--brand-primary);
  --footer-link: var(--brand-secondary);
  --footer-link-hover: var(--text-color);
}

[data-theme="secondary"] {
  --footer-background: var(--brand-secondary);
  --footer-link: var(--brand-primary);
  --footer-link-hover: var(--text-color);
}

.the-footer {
  background: var(--footer-background);
  padding: var(--gutter-xl) 0;
  text-align: center;

  @media (--mobile) {
    text-align: left;
  }

  &__link {
    font-size: 22px;
    color: var(--footer-link);

    &:hover {
      color: var(--footer-link-hover);
    }
  }

  &__link-wrap {
    width: 100%;
    text-align: center;
    margin-bottom: var(--gutter-sm);
  }
}
</style>
