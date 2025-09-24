<script setup>
defineProps({
  to: {
    required: true,
    type: String,
  },
  label: {
    required: true,
    type: String,
  },
  isLast: {
    default: false,
    type: Boolean,
  },
})
</script>

<template>
  <div class="project-link">
    <app-link :to="to">
      <span>{{ label }}</span>
    </app-link>
    <template v-if="!isLast">
      ,
    </template>
  </div>
</template>

<style scoped>
.project-link {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: 3px;
}
</style>
