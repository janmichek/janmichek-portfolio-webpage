<template>
  <nuxt-layout name="default">
    <article class="page">
      <section-skills class="page__section"/>
      <section-projects class="page__section"/>
      <section-goodies class="page__section"/>
    </article>
  </nuxt-layout>
</template>

<style scoped>
.page__section {
  padding: var(--space-2xl) 0;
}
</style>
