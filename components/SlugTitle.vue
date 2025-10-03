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
  margin-bottom: var(--space-2xl);

  &__title {
    color: var(--ui-text-primary);
    margin-bottom: var(--space-md);
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
