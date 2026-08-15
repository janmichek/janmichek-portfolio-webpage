<script setup lang="ts">
</script>

<template>
  <div class="post">
    <div class="post__body">
      <div>
        <slot name="image"/>
      </div>
      <div>
        <h4 class="post__heading">
          <slot name="heading"/>
        </h4>
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  &__heading {
    margin-top: 0;
    margin-bottom: var(--space-sm);
  }

  &__body {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-sm);

    @media (--tablet) {
      grid-template-columns: 1fr 2fr;
      gap: var(--space-lg);
    }
  }
}
</style>
