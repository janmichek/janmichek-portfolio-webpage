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

<style scoped>
.checklist__checkbox:checked {
  color: var(--color-mint);
}

.checklist__checkbox:checked ~ .checklist__label {
  text-decoration: line-through;
  color: var(--color-mint);
}
</style>
