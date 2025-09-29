<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="card">
    <app-link
      v-if="link"
      class="card__link"
      :to="link">
      <h4 class="card__title">
        {{ title }}
      </h4>
    </app-link>
    <h4
      v-else
      class="card__title">
      {{ title }}
    </h4>
    <img
      class="card__image"
      :src="`/${image}`"
      :alt="title">
    <div class="card__description">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

.card {
  width: 100%;
  display: inline-block;
  background: var(--ui-secondary);
  padding: var(--space);
  margin-bottom: var(--space-lg);
  position: relative;

  &__link {
    text-decoration: none;

    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      content: "";
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__image {
    margin-bottom: var(--space);
  }

  &__description {
    margin-top: var(--space-xs);
    color: var(--ui-text-secondary);

    @media (--dark) {
      color: var(--ui-text-primary);
    }
  }
}
</style>
