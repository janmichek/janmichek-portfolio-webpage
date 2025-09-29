<script setup>

</script>

<template>
  <header class="the-header">
    <div class="the-header__container u-container">
      <div class="the-header__avatar">
        <app-link to="/">
          <img
            class="the-header__image"
            src="/profile-pic.webp"
            width="230"
            alt="Jan Michek's avatar">
        </app-link>
      </div>
      <div>
        <h1 class="the-header__heading">
          Jan Michek
        </h1>
        <div class="the-header__subheading h2">
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
.the-header {
  padding: var(--space-xl) var(--space-xl) var(--space-2xl);
  background: var(--ui-bg);
  width: 100%;
  z-index: 900;

  @media (--tablet) {
    padding: var(--space-2xl);
  }

  &__container {
    @media (--tablet) {
      display: grid;
      grid-template-columns: 5fr 7fr;
      /*gap: 8px;*/
      gap: var(--space);
    }
  }

  &__avatar {
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {
      padding-bottom: 32px;
    }

    @media (--tablet) {
      justify-content: flex-start;
    }
  }

  &__heading {
    text-align: center;
    font-size: var(--text-6xl);

    @media (max-width: 479px) {
      font-size: var(--text-5xl);
    }

    @media (--tablet) {
      white-space: nowrap;
    }
  }

  &__subheading {
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
