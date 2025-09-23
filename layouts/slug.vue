<template>
  <div class="layout layout--default">
    <the-header/>
    <main class="layout__content u-center">
      <div class="u-container u-grid-12">
        <div class="u-2/3@tablet">
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
  background: var(--brand-secondary);

  &__content {
    padding: var(--gutter-xxl) 0;
  }

  &__footer {
    margin-top: auto;
  }
}
</style>
