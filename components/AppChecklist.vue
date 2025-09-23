<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <ul>
    <li
      v-for="(item, id) in list"
      :key="id">
      <input
        :id="`checkbox-${id}-${name}`"
        type="checkbox"
        class="checklist__checkbox">
      <label
        class="checklist__label"
        :for="`checkbox-${id}-${name}`">
        {{ item }}
      </label>
    </li>
  </ul>
</template>

<style scoped>
.checklist__checkbox:checked {
  color: var(--text-primary);
}

.checklist__checkbox:checked ~ .checklist__label {
  text-decoration: line-through;
  color: var(--text-primary);
}
</style>
