<script setup>
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

function isLocalLink(to) {
  if (typeof to === 'object' && to !== null) return true
  return typeof to === 'string' && to.startsWith('/') && !to.startsWith('//')
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
