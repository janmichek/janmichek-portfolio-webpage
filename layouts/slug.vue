<template>
  <div class="layout">
    <the-header/>
    <main class="layout__content">
      <div class="layout__container u-container">
        <div class="layout__main">
          <slot/>
        </div>
      </div>
    </main>
    <the-footer
      variant="primary"
      class="layout__footer"/>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--ui-bg);

  &__content {
    display: grid;
    place-items: center;
    padding: var(--space-2xl) 0;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  &__main {
    width: 100%;

    @media (--tablet) {
      max-width: calc(100% * 2 / 3);
    }
  }

  &__footer {
    margin-top: auto;
  }
}
</style>
