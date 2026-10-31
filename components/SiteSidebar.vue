<script setup lang="ts">
import type { ChatLink } from '~/data/contentTypes'

export interface SidebarNavItem {
  id?: string
  label: string
  to?: string
}

const props = defineProps<{
  name: string
  role: string
  avatar: string
  contact: ChatLink[]
  items: SidebarNavItem[]
  navLabel: string
  lead?: string[]
  activeId?: string
  activeTo?: string
  jumping?: boolean
}>()

const emit = defineEmits<{
  select: [event: MouseEvent, id: string]
}>()

function isActive(item: SidebarNavItem) {
  return item.id ? item.id === props.activeId : item.to === props.activeTo
}

function onSelect(event: MouseEvent, item: SidebarNavItem) {
  if (item.id) emit('select', event, item.id)
}
</script>

<template>
  <aside class="side">
    <div>
      <img
        class="ph"
        :src="avatar"
        :alt="name">
      <h1 class="name">
        {{ name }}
      </h1>
      <p class="role">
        {{ role }}
      </p>
      <p
        v-if="lead?.length"
        class="lead">
        <span class="t">
          <template
            v-for="(line, index) in lead"
            :key="line">
            {{ line }}<br v-if="index < lead.length - 1">
          </template>
        </span>
      </p>
      <nav
        class="nav"
        :class="{'is-jump': jumping}"
        :aria-label="navLabel">
        <template
          v-for="item in items"
          :key="item.to ?? item.id ?? item.label">
          <nuxt-link
            v-if="item.to"
            :to="item.to"
            :aria-current="isActive(item) ? 'page' : undefined"
            :class="{'is-active': isActive(item)}">
            <span class="bar"/>{{ item.label }}
          </nuxt-link>
          <a
            v-else
            :href="`#${item.id}`"
            :aria-current="isActive(item) ? 'location' : undefined"
            :class="{'is-active': isActive(item)}"
            @click="onSelect($event, item)">
            <span class="bar"/>{{ item.label }}
          </a>
        </template>
      </nav>
    </div>
    <nav
      class="side-foot"
      aria-label="Contact">
      <a
        v-for="link in contact"
        :key="link.url"
        class="ci"
        :href="link.url"
        :title="link.label"
        :aria-label="link.label"
        target="_blank"
        rel="noopener noreferrer">
        <home-icon :name="link.icon"/>
      </a>
    </nav>
  </aside>
</template>

<style scoped>
.side {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 80px 36px 72px 32px;
}

.ph {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--sky);
}

.name {
  margin: 24px 0 0;
  font-family: var(--font-sans);
  font-size: clamp(38px, 4.3vw, 58px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.role {
  margin: 12px 0 0;
  font-size: 18px;
  font-weight: 500;
}

.lead {
  max-width: 26em;
  margin: 14px 0 0;
  font-size: 18px;
  line-height: 1.6;
  color: var(--lead);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
}

.nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 32px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.bar {
  width: 28px;
  height: 2px;
  background: var(--ink);
  transition: width 0.2s ease;
}

.nav.is-jump .bar {
  transition: none;
}

.nav a:hover .bar,
.nav a.is-active .bar {
  width: 56px;
  background: var(--deep);
}

.nav a.is-active {
  color: var(--deep);
}

.side-foot {
  display: flex;
  gap: 24px;
}

.ci {
  display: inline-flex;
  padding: 10px;
  margin: -10px;
  color: var(--g3);
  transition: color 0.2s ease;
}

.ci:hover {
  color: var(--deep);
}

.nav a:focus-visible,
.ci:focus-visible {
  outline: 2px solid var(--deep);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .bar,
  .ci {
    transition: none;
  }
}

@media (width <= 900px) {
  .side {
    position: static;
    height: auto;
    padding: 80px 24px 64px;
    gap: 32px;
  }

  .nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 24px;
    margin-top: 32px;
  }

  .nav a {
    min-height: 44px;
  }

  .nav .bar {
    display: none;
  }
}
</style>
