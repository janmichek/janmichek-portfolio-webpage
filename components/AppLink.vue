<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  target: {
    type: String,
    default: '_blank',
  },
})

const isOpenedInNewTab = computed(() => props.target === '_blank')

function isObjectLink(to) {
  return typeof to === 'object' && to !== null
}

function isLocalPath(to) {
  return typeof to === 'string' && to.startsWith('/') && !to.startsWith('//')
}

function isLocalLink(to) {
  if (isObjectLink(to)) return true
  return isLocalPath(to)
}
</script>

<template>
  <nuxt-link
    v-if="isLocalLink(to)"
    :to="to"
    class="link">
    <slot/>
  </nuxt-link>
  <a
    v-else
    :rel="isOpenedInNewTab ? 'noopener noreferrer' : false"
    :target="target"
    :href="to"
    class="link">
    <slot/>
  </a>
</template>

<style scoped>
.link {
  display: inline-flex;
}
</style>
