<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="slug-title">
    <h2 class="h3 slug-title__title">
      {{ title }}
    </h2>
    <p
      class="slug-title__description"
      v-html="description"/>
  </div>
</template>

<style scoped>
.slug-title {
  margin-bottom: var(--space-xxl);

  &__title {
    color: var(--color-sky);
    margin-bottom: var(--space);
    text-align: center;

    @media (--tablet) {
      text-align: left;
    }
  }

  &__description {
    font-size: var(--text-lg);
  }
}
</style>
