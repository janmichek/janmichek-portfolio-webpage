<script setup lang="ts">
const icons = import.meta.glob('~/assets/icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const props = defineProps<{
  name: 'github' | 'linkedin' | 'x' | 'spotify' | 'cv' | 'link'
}>()

const markup = computed(() => {
  const entry = Object.entries(icons).find(([path]) => path.endsWith(`/${props.name}.svg`))
  if (!entry) return ''
  const source = entry[1]
  return source.replace('<svg ', '<svg class="icon__svg" aria-hidden="true" focusable="false" ')
})
</script>

<template>
  <span
    class="icon"
    aria-hidden="true"
    v-html="markup"/>
</template>

<style scoped>
.icon {
  display: inline-flex;
  flex: none;
  width: 24px;
  height: 24px;
}

.icon :deep(.icon__svg) {
  width: 100%;
  height: 100%;
}
</style>
