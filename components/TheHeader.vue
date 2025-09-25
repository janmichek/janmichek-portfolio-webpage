<script setup>

</script>

<template>
  <header class="the-header">
    <div class="the-header__container">
      <div class="the-header__avatar">
        <app-link to="/">
          <nuxt-img
            format="webp"
            class="the-header__image"
            src="/profile-pic-2022.webp"
            :width="230"
            alt="Jan Michek's avatar"/>
        </app-link>
      </div>
      <div>
        <h1 class="the-header__heading">
          Jan Michek
        </h1>
        <div class="the-header__subheading">
          web3 frontend engineer
        </div>
        <div class="the-header__excerpt">
          Czechia / Prague / <span title="That is 38">1987</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url("../assets/styles/utilities/_grid.css");
@import url("../assets/styles/elements/_h.css");

.the-header {
  padding: var(--space-xl) var(--space-xl) var(--space-2xl);
  background: var(--ui-bg);
  width: 100%;
  z-index: 900;

  @media (--tablet) {
    padding: var(--space-2xl);
  }

  &__container {
    @apply .u-container;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space);

    @media (--tablet) {
      grid-template-columns: 5fr 7fr;
      gap: 32px;
    }
  }

  &__avatar {
    display: flex;
    justify-content: center;

    @media (--tablet) {
      justify-content: flex-start;
    }
  }

  &__heading {
    text-align: center;
    font-size: var(--text-5xl);

    @media (--tablet) {
      white-space: nowrap;
    }

    @media (--mobile) {
      font-size: var(--text-6xl);
    }
  }

  &__subheading {
    @apply .h2;
    color: var(--ui-text-primary);
    text-align: center;

    @media (--tablet) {
      white-space: nowrap;
    }

    @media (--dark) {
      color: var(--ui-text-secondary);
    }
  }

  &__excerpt {
    text-align: center;
    color: var(--ui-text-muted);
    margin-bottom: 0;
    font-size: 32px;
  }
}
</style>
