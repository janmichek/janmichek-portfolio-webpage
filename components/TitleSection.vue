<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'light',
    },
  },
}
</script>

<template>
  <h3
    class="title-section"
    :data-theme="theme">
    <slot/>
  </h3>
</template>

<style scoped>
[data-theme="primary"] {
  --title-section-color: var(--text-color);
}

[data-theme="light"] {
  --title-section-color: var(--color-sky);
}

.title-section {
  color: var(--title-section-color);
  text-align: center;

  @media (--tablet) {
    text-align: left;
  }
}
</style>
