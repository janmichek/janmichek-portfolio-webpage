<template>
  <div class="layout">
    <the-header/>
    <main>
      <slot/>
    </main>
    <the-footer class="layout__footer"/>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__footer {
    margin-top: auto;
  }
}
</style>
