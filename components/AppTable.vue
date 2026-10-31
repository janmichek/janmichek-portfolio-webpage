<script setup lang="ts">
import type { Group } from '~/data/karabiner'

defineProps<{
  group: Group
}>()
</script>

<template>
  <section
    :id="group.id"
    class="app-table">
    <div class="app-table__head">
      <h2>{{ group.title }}</h2>
    </div>

    <table class="app-table__table">
      <tbody>
        <tr
          v-for="row in group.rows"
          :key="`${row.keys.join('-')}-${row.hint ?? ''}-${row.action}`">
          <td
            class="app-table__keys"
            data-label="Key combo">
            <span
              v-for="(key, i) in row.keys"
              :key="i"
              class="app-table__key">
              <kbd class="app-table__kbd">{{ key }}</kbd>
              <span
                v-if="i < row.keys.length - 1"
                class="app-table__plus"
                aria-hidden="true">+</span>
            </span>
            <span
              v-if="row.hint"
              class="app-table__hint">
              {{ row.hint }}
            </span>
          </td>
          <td
            class="app-table__action"
            data-label="Function">
            {{ row.action }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style>
.karabiner-page .app-table {
  padding: 64px var(--sec-pad);
}

.karabiner-page .app-table__head {
  margin-bottom: 20px;
}

.karabiner-page .app-table__head h2 {
  margin-bottom: 0;
}

.karabiner-page .app-table__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

.karabiner-page .app-table__table th,
.karabiner-page .app-table__table td {
  border: 0;
}

.karabiner-page .app-table__table tbody td {
  padding: 8px 0;
  vertical-align: middle;
  border-bottom: 1px solid color-mix(in srgb, var(--g3) 22%, transparent);
}

.karabiner-page .app-table__table tbody tr:last-child td {
  border-bottom: 0;
}

.karabiner-page .app-table__table tbody td + td {
  padding-left: 32px;
}

.karabiner-page .app-table__keys {
  white-space: nowrap;
}

.karabiner-page .app-table__key {
  display: inline-flex;
  align-items: center;
}

.karabiner-page .app-table__plus {
  margin: 0 6px;
  color: var(--mute);
  font-size: 12px;
}

.karabiner-page .app-table__action {
  color: var(--lead);
}

.karabiner-page .app-table__kbd {
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

.karabiner-page .app-table__hint {
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
  color: var(--mute);
}

@media (width <= 900px) {
  .karabiner-page .app-table {
    padding: 48px var(--sec-pad);
  }
}

@media (width <= 560px) {
  .karabiner-page .app-table__table,
  .karabiner-page .app-table__table tbody,
  .karabiner-page .app-table__table tr,
  .karabiner-page .app-table__table td {
    display: block;
    width: 100%;
  }

  .karabiner-page .app-table__table tbody tr {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    gap: 4px 12px;
    padding: 8px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--g3) 35%, transparent);
  }

  .karabiner-page .app-table__table tbody tr:last-child {
    border-bottom: 0;
  }

  .karabiner-page .app-table__table tbody td,
  .karabiner-page .app-table__table tbody td + td {
    padding: 0;
    border: 0;
  }

  .karabiner-page .app-table__keys {
    white-space: normal;
  }
}
</style>
