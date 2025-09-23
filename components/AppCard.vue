<template>
  <div class="card">
    <app-link
      v-if="link"
      class="card__link u-stretched-link"
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
    <nuxt-img
      format="webp"
      class="card__image"
      :src="`/${image}`"
      :alt="title" />
    <div class="card__description">
      <slot/>
    </div>
  </div>
</template>

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

<style scoped>
.card {
  width: 100%;
  display: inline-block;
  background: var(--brand-secondary);
  padding: var(--gutter);
  margin-bottom: var(--gutter-lg);
  position: relative;

  &__link {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__image {
    margin-bottom: var(--gutter-m);
  }

  &__description {
    margin-top: var(--gutter-xs);
    color: var(--text-color);
  }
}
</style>
