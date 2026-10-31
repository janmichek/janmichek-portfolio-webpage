<script setup lang="ts">
const route = useRoute()

const previewId = computed(() => {
  const raw = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  return typeof raw === 'string' && /^[a-z0-9-]+$/i.test(raw) ? raw : ''
})

const imageLink = computed(() => previewId.value
  ? `/screencaptures/preview-${encodeURIComponent(previewId.value)}.gif`
  : '')
</script>

<template>
  <div class="preview">
    <img
      v-if="imageLink"
      :src="imageLink"
      alt="preview">
    <div
      v-else
      class="preview__loading">
      Preview not found
    </div>
  </div>
</template>

<style scoped>
.preview {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__loading {
    display: flex;
    justify-content: center;
    padding: var(--space-xl);
  }
}
</style>
