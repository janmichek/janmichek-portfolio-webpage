<template>
  <NuxtLayout name="default">
    <article class="page">
      <section-skills class="page__section"/>
      <section-projects class="page__section"/>
      <section-goodies class="page__section"/>
    </article>
  </NuxtLayout>
</template>

<style scoped>
.page {
  &__section {
    padding: var(--space-xxl) 0;
  }
}
</style>
