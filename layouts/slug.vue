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
    @apply .u-center;
    padding: var(--space-xxl) 0;
  }

  &__container {
    @apply .u-container;
    @apply .u-grid-12;
  }

  &__main {
    @apply .u-2/3-tablet;
  }

  &__footer {
    margin-top: auto;
  }
}
</style>
