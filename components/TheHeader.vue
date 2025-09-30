<script setup>

</script>

<template>
  <header class="the-header">
    <div class="the-header__container u-container">
      <div class="the-header__avatar">
        <app-link to="/">
          <img
            width="230"
            src="/profile-pic.webp"
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
        <div class="h3 the-header__excerpt">
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
    padding: var(--space-2xl) var(--space-lg);
  }

  &__container {
    @media (--tablet) {
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: var(--space);
    }
  }

  &__avatar {
    display: flex;
    justify-content: center;
    padding-bottom: var(--space-xl);

    @media (--tablet) {
      padding-bottom: 0;
      justify-content: flex-start;
    }
  }

  &__heading {
    text-align: center;

    @media (--tablet) {
      white-space: nowrap;
    }
  }

  &__subheading {
    font-size: var(--text-2xl);
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
    font-size: var(--text-xl);
  }
}
</style>
