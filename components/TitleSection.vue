<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'secondary',
    },
  },
}
</script>

<template>
  <h3
    class="title-section"
    :data-variant="variant">
    <slot/>
  </h3>
</template>

<style scoped>
[data-variant="primary"] {
  --title-section-color: var(--ui-text-secondary);
  @media (--dark) {
    --title-section-color: var(--ui-text-primary);
  }
}

[data-variant="secondary"] {
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
