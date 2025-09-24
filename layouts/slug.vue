<template>
  <div class="layout layout--default">
    <the-header/>
    <main class="layout__content">
      <div class="layout__container">
        <div class="layout__main">
          <slot/>
        </div>
      </div>
    </main>
    <the-footer
      theme="primary"
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
    max-width: var(--container-max-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    @media (--desktop) {
      padding-left: var(--space-xl);
      padding-right: var(--space-xl);
    }
  }

  &__main {
    width: 100%;

    @media (--tablet) {
      max-width: 66.666667%; /* 2/3 */
    }
  }

  &__footer {
    margin-top: auto;
  }
}
</style>
