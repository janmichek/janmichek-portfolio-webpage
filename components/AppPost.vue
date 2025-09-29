<script setup lang="ts">
</script>

<template>
  <div class="post">
    <h4 class="post__heading">
      <slot name="heading"/>
    </h4>
    <div class="post__body">
      <div class="post__image">
        <slot name="image"/>
      </div>
      <div class="post__description">
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.post {
  &__heading {
    margin-bottom: var(--space-sm);
  }

  &__body {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-sm);

    @media (--tablet) {
      grid-template-columns: 1fr 2fr;
      gap: 32px;
    }
  }

  &__image {
    /* Grid item - no width needed */
  }

  &__description {
    /* Grid item - no width needed */
  }
}
</style>
