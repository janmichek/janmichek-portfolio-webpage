<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'secondary',
      validator: value => ['primary', 'secondary'].includes(value),
    },
  },
}
</script>

<template>
  <h3
    :class="['title-section', `title-section--${variant}`]">
    <slot/>
  </h3>
</template>

<style scoped>
.title-section--primary {
  --title-section-color: var(--ui-text-secondary);

  @media (--dark) {
    --title-section-color: var(--ui-text-primary);
  }
}

.title-section--secondary {
  --title-section-color: var(--ui-text-primary);

  @media (--dark) {
    --title-section-color: var(--ui-text-secondary);
  }
}

.title-section {
  color: var(--title-section-color);
  text-align: center;

  @media (--tablet) {
    text-align: left;
  }
}
</style>
