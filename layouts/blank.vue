<template>
  <div class="layout">
    <the-header/>
    <div class="layout__main">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--ui-bg);

  &__main {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);

    @media (--tablet) {
      max-width: calc(100% * 2 / 3);
    }
  }
}
</style>
