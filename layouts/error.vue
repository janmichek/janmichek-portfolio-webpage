<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="error">
    <h1
      v-if="error.statusCode === 404"
      class="error__heading">
      Page not found
    </h1>
    <h1
      v-else
      class="error__heading">
      Error
    </h1>
    <div class="error__excerpt">
      Sorry for inconvenience
    </div>
    <div class="error__action">
      <app-link to="/">
        Back to homepage
      </app-link>
    </div>
  </div>
</template>

<style scoped>
.error {
  @apply .u-container;
  margin: var(--space-xl) 0;

  &__heading {
    text-align: center;
  }

  &__excerpt {
    text-align: center;
    padding-bottom: var(--space-xl);
  }

  &__action {
    text-align: center;
  }
}
</style>
