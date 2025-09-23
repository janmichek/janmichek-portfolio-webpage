<template>
  <header class="the-header">
    <div class="u-container u-grid-12">
      <div class="u-5/12@tablet the-header__avatar">
        <app-link to="/">
          <nuxt-img
            format="webp"
            class="the-header__image"
            src="/janmichek.webp"
            :width="230"
            alt="Jan Michek's avatar"/>
        </app-link>
      </div>
      <div class="u-7/12@tablet the-header__content">
        <h1 class="the-header__heading">
          Jan Michek
        </h1>
        <div class="h2 the-header__subheading">
          web3 frontend engineer
        </div>
        <div class="h3 the-header__excerpt">
          Czechia / Prague / <span title="That is 34">1987</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
.the-header {
  padding: var(--gutter-xl) var(--gutter-xl) var(--gutter-xxl);
  background: var(--brand-secondary);
  width: 100%;
  z-index: 900;

  @media (--tablet) {
    padding: var(--gutter-xxl);
  }

  &__avatar {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: var(--gutter);

    @media (--tablet) {
      justify-content: flex-start;
      margin-bottom: 0;
    }
  }

  &__content {
    width: 100%;
  }

  &__heading {
    text-align: center;
    font-size: 56px;

    @media (--tablet) {
      white-space: nowrap;
    }

    @media (--mobile) {
      font-size: 72px;
    }
  }

  &__subheading {
    text-align: center;
    color: var(--brand-primary);

    @media (--tablet) {
      white-space: nowrap;
    }
  }

  &__excerpt {
    text-align: center;
    color: var(--text-color-secondary);
    font-size: 32px;
    margin-bottom: 0;
  }
}
</style>
