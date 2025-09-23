<template>
  <div class="preview">
    <nuxt-img
      v-if="imageLInk"
      format="webp"
      :src="imageLInk"
      alt="preview"/>
    <div
      v-else
      class="preview__loading">
      Loading preview
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const imageLInk = ref('')

onMounted(() => {
  nextTick(() => {
    imageLInk.value = `/screencaptures/preview-${route.params.id}.gif`
  })
})
</script>

<style scoped>
.preview {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__loading {
    display: flex;
    justify-content: center;
    padding: var(--gutter-xl);
  }
}
</style>
