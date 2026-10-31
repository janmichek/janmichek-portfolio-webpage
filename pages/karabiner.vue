<script setup lang="ts">
const { chatContact, chatProfile, siteMeta } = useSiteContent()

const SETTINGS_URL = 'https://github.com/janmichek/karabiner-elements-settings/blob/main/karabiner.json'

interface Row {
  keys: string[]
  action: string
  hint?: 'tap' | 'hold'
}

interface Group {
  id: string
  title: string
  rows: Row[]
}

const groups: Group[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    rows: [
      { keys: ['Shift', 'Cmd', '←'], action: 'Select word left' },
      { keys: ['Shift', 'Cmd', '→'], action: 'Select word right' },
      { keys: ['Cmd', '←'], action: 'Move word left' },
      { keys: ['Cmd', '→'], action: 'Move word right' },
      { keys: ['End'], action: 'Cursor to end of line' },
      { keys: ['Home'], action: 'Cursor to beginning of line' },
    ],
  },
  {
    id: 'firefox',
    title: 'Firefox',
    rows: [
      { keys: ['F1'], action: 'Switch to previous tab' },
      { keys: ['F2'], hint: 'tap', action: 'Close tab' },
      { keys: ['F2'], hint: 'hold', action: 'Reopen closed tab' },
      { keys: ['F4'], action: 'Open downloads' },
      { keys: ['F12'], hint: 'tap', action: 'Developer tools' },
      { keys: ['F12'], hint: 'hold', action: 'Open inspector' },
    ],
  },
  {
    id: 'webstorm',
    title: 'WebStorm',
    rows: [
      { keys: ['Cmd', 'C'], action: 'Enhanced copy' },
      { keys: ['F1'], action: 'Switch tabs' },
      { keys: ['F2'], action: 'Search files' },
      { keys: ['F6'], action: 'New file / Quick actions' },
      { keys: ['F7'], action: 'Quick actions' },
      { keys: ['F8'], action: 'Stash changes' },
      { keys: ['F9'], action: 'Unstash changes' },
      { keys: ['F10'], action: 'Show usage + Run' },
      { keys: ['F11'], action: 'Find files' },
      { keys: ['F12'], action: 'Terminal' },
    ],
  },
  {
    id: 'ableton',
    title: 'Ableton',
    rows: [
      { keys: ['F1'], action: 'Fold tracks' },
      { keys: ['F2'], hint: 'tap', action: 'Fade tool' },
      { keys: ['F2'], hint: 'hold', action: 'Show automation' },
      { keys: ['F3'], action: 'Split clips' },
      { keys: ['F4'], action: 'Glue clips' },
      { keys: ['F5'], action: 'Trim clips' },
      { keys: ['F6'], action: 'Quantize' },
    ],
  },
  {
    id: 'finder',
    title: 'Finder',
    rows: [
      { keys: ['Enter'], action: 'Open folder / file' },
      { keys: ['Delete Forward'], action: 'Move to trash' },
      { keys: ['Cmd', 'H'], action: 'Toggle hidden files' },
    ],
  },
  {
    id: 'system',
    title: 'System',
    rows: [
      { keys: ['~'], hint: 'hold', action: 'Hide / show Dock' },
      { keys: ['Left Cmd'], hint: 'tap', action: 'Open Alfred' },
      { keys: ['Esc', 'Esc'], action: 'Quit current app' },
      { keys: ['Cmd', 'F1'], action: 'Brightness down' },
      { keys: ['Cmd', 'F2'], action: 'Brightness up' },
      { keys: ['Cmd', 'F3'], action: 'Keyboard backlight down' },
      { keys: ['Cmd', 'F4'], action: 'Keyboard backlight up' },
      { keys: ['Cmd', 'F5'], action: 'Screenshot area' },
      { keys: ['Cmd', 'F6'], action: 'Focus change' },
      { keys: ['Cmd', 'F7'], action: 'Previous track' },
      { keys: ['Cmd', 'F8'], action: 'Play / Pause' },
      { keys: ['Cmd', 'F9'], action: 'Next track' },
      { keys: ['Cmd', 'F10'], action: 'Mute' },
      { keys: ['Cmd', 'F11'], action: 'Volume down' },
      { keys: ['Cmd', 'F12'], action: 'Volume up' },
    ],
  },
  {
    id: 'apps',
    title: 'Apps',
    rows: [
      { keys: ['Caps Lock', 'A'], hint: 'hold', action: 'Ableton Live 12' },
      { keys: ['Caps Lock', 'B'], hint: 'hold', action: 'Beeper Desktop' },
      { keys: ['Caps Lock', 'C'], hint: 'hold', action: 'Calendar' },
      { keys: ['Caps Lock', 'D'], hint: 'hold', action: 'Firefox Nightly' },
      { keys: ['Caps Lock', 'E'], hint: 'hold', action: 'Finder' },
      { keys: ['Caps Lock', 'F'], hint: 'hold', action: 'Firefox' },
      { keys: ['Caps Lock', 'I'], hint: 'hold', action: 'Instagram in Firefox' },
      { keys: ['Caps Lock', 'K'], hint: 'hold', action: 'Google Keep' },
      { keys: ['Caps Lock', 'M'], hint: 'hold', action: 'Gmail' },
      { keys: ['Caps Lock', 'N'], hint: 'hold', action: 'MEGAsync' },
      { keys: ['Caps Lock', 'P'], hint: 'hold', action: 'Photopea' },
      { keys: ['Caps Lock', 'S'], hint: 'hold', action: 'Spotify' },
      { keys: ['Caps Lock', 'V'], hint: 'hold', action: 'Surfshark' },
      { keys: ['Caps Lock', 'W'], hint: 'hold', action: 'WebStorm' },
      { keys: ['Caps Lock', 'Y'], hint: 'hold', action: 'YouTube in Firefox' },
    ],
  },
]

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/karabiner', label: 'Karabiner' },
]

const activeId = ref('all')

const visibleGroups = computed(() =>
  activeId.value === 'all' ? groups : groups.filter(g => g.id === activeId.value),
)

const totalBindings = groups.reduce((sum, g) => sum + g.rows.length, 0)
</script>

<template>
  <div class="karabiner-page site-theme">
    <div class="page">
      <the-sidebar
        :name="chatProfile.name"
        :role="siteMeta.role"
        :avatar="chatProfile.avatar"
        :contact="chatContact"
        :items="navItems"
        nav-label="Pages"
        active-to="/karabiner"/>

      <main class="main">
        <section class="sec">
          <h2>Karabiner Shortcuts</h2>
          <p class="intro">
            My personal way to tune ergonomics. I believe this is ultimate good, but it may serve as
            inspiration. At least this setting helped me to save tons of seconds today.
          </p>

          <div class="meta">
            <p class="meta__count">
              {{ totalBindings }} bindings in {{ groups.length }} groups
            </p>
            <a
              class="meta__link"
              :href="SETTINGS_URL"
              target="_blank"
              rel="noopener noreferrer">
              View settings on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div
            class="filters"
            role="group"
            aria-label="Filter by app">
            <button
              type="button"
              class="filter"
              :class="{'filter--active': activeId === 'all'}"
              :aria-pressed="activeId === 'all'"
              @click="activeId = 'all'">
              All
            </button>
            <button
              v-for="group in groups"
              :key="group.id"
              type="button"
              class="filter"
              :class="{'filter--active': activeId === group.id}"
              :aria-pressed="activeId === group.id"
              @click="activeId = group.id">
              {{ group.title }}
            </button>
          </div>
        </section>

        <section
          v-for="group in visibleGroups"
          :id="group.id"
          :key="group.id"
          class="sec">
          <div class="group-head">
            <h2>{{ group.title }}</h2>
            <span class="group-head__count">{{ group.rows.length }}</span>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  Key combo
                </th>
                <th scope="col">
                  Function
                </th>
              </tr>
            </thead>
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
      </main>
    </div>
  </div>
</template>

<style>
.karabiner-page {
  --sec-pad: 48px;
}

.karabiner-page .main {
  min-width: 0;
}

.karabiner-page .sec {
  padding: 64px var(--sec-pad);
}

.karabiner-page .main .sec:first-child {
  padding-top: 200px;
}

.karabiner-page.site-theme h2 {
  margin-bottom: 36px;
  font-size: clamp(38px, 4.6vw, 60px);
  letter-spacing: -0.035em;
}

.karabiner-page .intro {
  max-width: 34em;
  font-size: 18px;
  line-height: 1.65;
  color: var(--lead);
}

.karabiner-page .meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 32px;
}

.karabiner-page .meta__count {
  font-size: 14px;
  color: var(--mute);
}

.karabiner-page .meta__link {
  font-size: 14px;
  font-weight: 600;
  color: var(--deep);
  border-bottom: 1px solid currentcolor;
}

.karabiner-page .filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.karabiner-page .filter {
  padding: 6px 14px;
  border: 1px solid var(--g3);
  border-radius: 999px;
  background: transparent;
  color: var(--lead);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: background var(--duration-fast) ease, color var(--duration-fast) ease;
}

.karabiner-page .filter:hover {
  border-color: var(--deep);
  color: var(--deep);
}

.karabiner-page .filter--active,
.karabiner-page .filter--active:hover {
  border-color: var(--deep);
  background: var(--deep);
  color: var(--white);
}

.karabiner-page .group-head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 24px;
}

.karabiner-page .group-head h2 {
  margin-bottom: 0;
}

.karabiner-page .group-head__count {
  font-size: 14px;
  color: var(--g3);
}

.karabiner-page .table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

.karabiner-page .table thead th {
  padding: 0 16px 10px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--g3);
  border-bottom: 1px solid var(--g3);
}

.karabiner-page .table tbody td {
  padding: 12px 16px;
  vertical-align: middle;
  border-bottom: 1px solid color-mix(in srgb, var(--g3) 35%, transparent);
}

.karabiner-page .table tbody tr {
  transition: background var(--duration-fast) ease;
}

.karabiner-page .table tbody tr:hover {
  background: var(--tint);
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
  color: var(--g3);
  font-size: 12px;
}

.karabiner-page .table__action {
  color: var(--lead);
}

.karabiner-page .kbd {
  display: inline-block;
  min-width: 1.9em;
  padding: 3px 8px;
  border: 1px solid var(--g3);
  border-bottom-width: 2px;
  border-radius: 6px;
  background: var(--white);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  color: var(--ink);
}

.karabiner-page .hint {
  display: inline-block;
  margin-left: 10px;
  padding: 1px 8px;
  border-radius: 4px;
  background: var(--sky);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-carbon);
}

.karabiner-page a:focus-visible {
  outline: 2px solid var(--deep);
  outline-offset: 3px;
}

@media (width <= 900px) {
  .karabiner-page {
    --sec-pad: 24px;
  }

  .karabiner-page.site-theme .page {
    grid-template-columns: 1fr;
  }

  .karabiner-page .sec {
    padding: 48px var(--sec-pad);
  }

  .karabiner-page .main .sec:first-child {
    padding-top: 120px;
  }
}

@media (width <= 560px) {
  .karabiner-page .table thead {
    display: none;
  }

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
    gap: 6px 12px;
    padding: 12px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--g3) 35%, transparent);
  }

  .karabiner-page .table tbody td {
    padding: 0;
    border: 0;
  }

  .karabiner-page .table__keys {
    white-space: normal;
  }
}
</style>
