<script setup lang="ts">
import { groups, type Group } from '~/data/karabiner'

const { chatContact, chatProfile, siteMeta } = useSiteContent()

const SETTINGS_URL = 'https://github.com/janmichek/karabiner-elements-settings/blob/main/karabiner.json'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/karabiner', label: 'Karabiner' },
]

const activeId = ref('all')

const visibleGroups = computed<Group[]>(() =>
  activeId.value === 'all' ? groups : groups.filter(group => group.id === activeId.value),
)
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
            <a
              class="meta__link"
              :href="SETTINGS_URL"
              target="_blank"
              rel="noopener noreferrer">
              View settings on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <app-filters
            v-model="activeId"
            :groups="groups"/>
        </section>

        <app-table
          v-for="group in visibleGroups"
          :key="group.id"
          :group="group"/>
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

.karabiner-page .meta__link {
  font-size: 14px;
  color: var(--deep);
  border-bottom: 1px solid currentcolor;
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
</style>
