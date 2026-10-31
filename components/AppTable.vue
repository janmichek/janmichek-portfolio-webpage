<script setup lang="ts">
import type { Group } from '~/data/karabiner'

defineProps<{
  group: Group
}>()
</script>

<template>
  <section
    :id="group.id"
    class="sec">
    <div class="group-head">
      <h2>{{ group.title }}</h2>
    </div>

    <table class="table">
      <tbody>
        <tr
          v-for="row in group.rows"
          :key="`${row.keys.join('-')}-${row.hint ?? ''}-${row.action}`">
          <td
            class="table__keys"
            data-label="Key combo">
            <span
              v-for="(key, i) in row.keys"
              :key="i"
              class="table__key">
              <kbd class="kbd">{{ key }}</kbd>
              <span
                v-if="i < row.keys.length - 1"
                class="table__plus"
                aria-hidden="true">+</span>
            </span>
            <span
              v-if="row.hint"
              class="hint">
              {{ row.hint }}
            </span>
          </td>
          <td
            class="table__action"
            data-label="Function">
            {{ row.action }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style>
.karabiner-page .group-head {
  margin-bottom: 20px;
}

.karabiner-page .group-head h2 {
  margin-bottom: 0;
}

.karabiner-page .table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

.karabiner-page .table th,
.karabiner-page .table td {
  border: 0;
}

.karabiner-page .table tbody td {
  padding: 8px 0;
  vertical-align: middle;
  border-bottom: 1px solid color-mix(in srgb, var(--g3) 22%, transparent);
}

.karabiner-page .table tbody tr:last-child td {
  border-bottom: 0;
}

.karabiner-page .table tbody td + td {
  padding-left: 32px;
}

.karabiner-page .table__keys {
  white-space: nowrap;
}

.karabiner-page .table__key {
  display: inline-flex;
  align-items: center;
}

.karabiner-page .table__plus {
  margin: 0 6px;
  color: var(--mute);
  font-size: 12px;
}

.karabiner-page .table__action {
  color: var(--lead);
}

.karabiner-page .kbd {
  display: inline-block;
  min-width: 1.9em;
  padding: 2px 6px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--g3) 18%, transparent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  color: var(--ink);
}

.karabiner-page .hint {
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
  color: var(--mute);
}

@media (width <= 560px) {
  .karabiner-page .table,
  .karabiner-page .table tbody,
  .karabiner-page .table tr,
  .karabiner-page .table td {
    display: block;
    width: 100%;
  }

  .karabiner-page .table tbody tr {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    gap: 4px 12px;
    padding: 8px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--g3) 35%, transparent);
  }

  .karabiner-page .table tbody tr:last-child {
    border-bottom: 0;
  }

  .karabiner-page .table tbody td,
  .karabiner-page .table tbody td + td {
    padding: 0;
    border: 0;
  }

  .karabiner-page .table__keys {
    white-space: normal;
  }
}
</style>
