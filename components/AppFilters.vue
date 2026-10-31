<script setup lang="ts">
import type { Group } from '~/data/karabiner'

defineProps<{
  modelValue: string
  groups: Group[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div
    class="filters"
    role="group"
    aria-label="Filter by app">
    <button
      type="button"
      class="filter"
      :class="{'filter--active': modelValue === 'all'}"
      :aria-pressed="modelValue === 'all'"
      @click="emit('update:modelValue', 'all')">
      All
    </button>
    <button
      v-for="group in groups"
      :key="group.id"
      type="button"
      class="filter"
      :class="{'filter--active': modelValue === group.id}"
      :aria-pressed="modelValue === group.id"
      @click="emit('update:modelValue', group.id)">
      {{ group.title }}
    </button>
  </div>
</template>

<style>
.karabiner-page .filters {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 24px;
  margin-top: 28px;
}

.karabiner-page .filter {
  padding: 0 0 2px;
  border: 0;
  border-bottom: 1px solid transparent;
  background: none;
  color: var(--mute);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.karabiner-page .filter:hover {
  color: var(--ink);
}

.karabiner-page .filter--active {
  border-bottom-color: currentcolor;
  color: var(--ink);
}
</style>
