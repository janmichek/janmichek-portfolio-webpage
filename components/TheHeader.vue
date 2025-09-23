<script setup>

</script>

<template>
  <header class="the-header">
    <div class="the-header__container">
      <div class="the-header__row">
        <!--        todo fix -->
        <div class="the-header__avatar">
          <app-link to="/">
            <nuxt-img
              format="webp"
              class="the-header__image"
              src="/profile-pic-2022.png"
              :width="230"
              alt="Jan Michek's avatar"/>
          </app-link>
        </div>
        <div class="the-header__content">
          <h1 class="the-header__heading">
            Jan Michek
          </h1>
          <div class="h2 the-header__subheading">
            web3 frontend engineer
          </div>
          <div class="h3 the-header__excerpt">
            Czechia / Prague / <span title="That is 38">1987</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url("../assets/styles/utilities/_grid.css");

.the-header {
  padding: var(--space-xl) var(--space-xl) var(--space-xxl);
  background: var(--ui-bg);
  width: 100%;
  z-index: 900;

  @media (--tablet) {
    padding: var(--space-xxl);
  }

  &__container {
    @apply .u-container;
  }

  &__row {
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

  &__content {
    /* Grid item - no width needed */
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
    color: var(--ui-text-primary);

    text-align: center;
    @media (--tablet) {
      white-space: nowrap;
    }
  }

  &__excerpt {
    text-align: center;
    color: var(--ui-text-muted);
    font-size: var(--text-3xl);
    margin-bottom: 0;
  }
}
</style>
