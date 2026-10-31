<script setup lang="ts">
import type { ChatLink } from '~/data/contentTypes'

interface SidebarNavItem {
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
  <aside class="sidebar">
    <div>
      <img
        class="sidebar__avatar"
        :src="avatar"
        :alt="name">
      <h1 class="sidebar__name">
        {{ name }}
      </h1>
      <p class="sidebar__role">
        {{ role }}
      </p>
      <p
        v-if="lead?.length"
        class="sidebar__lead">
        <span class="sidebar__lead-text">
          <template
            v-for="(line, index) in lead"
            :key="line">
            {{ line }}<br v-if="index < lead.length - 1">
          </template>
        </span>
      </p>
      <nav
        class="sidebar__nav"
        :class="{'sidebar__nav--jumping': jumping}"
        :aria-label="navLabel">
        <template
          v-for="item in items"
          :key="item.to ?? item.id ?? item.label">
          <nuxt-link
            v-if="item.to"
            :to="item.to"
            class="sidebar__link"
            :class="{'sidebar__link--active': isActive(item)}"
            :aria-current="isActive(item) ? 'page' : undefined">
            <span class="sidebar__link-bar"/>{{ item.label }}
          </nuxt-link>
          <a
            v-else
            :href="`#${item.id}`"
            class="sidebar__link"
            :class="{'sidebar__link--active': isActive(item)}"
            :aria-current="isActive(item) ? 'location' : undefined"
            @click="onSelect($event, item)">
            <span class="sidebar__link-bar"/>{{ item.label }}
          </a>
        </template>
      </nav>
    </div>
    <nav
      class="sidebar__footer"
      aria-label="Contact">
      <a
        v-for="link in contact"
        :key="link.url"
        class="sidebar__contact"
        :href="link.url"
        :title="link.label"
        :aria-label="link.label"
        target="_blank"
        rel="noopener noreferrer">
        <app-icon :name="link.icon"/>
      </a>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 80px 36px 72px 32px;

  &__avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    background: var(--sky);
  }

  &__name {
    margin: 24px 0 0;
    color: var(--deep);
    font-family: var(--font-sans);
    font-size: clamp(38px, 4.3vw, 58px);
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.045em;
  }

  &__role {
    margin: 12px 0 0;
    font-size: 18px;
    font-weight: 500;
  }

  &__lead {
    max-width: 26em;
    margin: 14px 0 0;
    font-size: 18px;
    line-height: 1.6;
    color: var(--lead);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;

    &--jumping .sidebar__link--active .sidebar__link-bar {
      transition: none;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    &--active {
      color: var(--deep);
    }
  }

  &__link-bar {
    width: 28px;
    height: 2px;
    background: var(--ink);
    transition: width 0.2s ease;
  }

  &__link--active &__link-bar,
  &__link:hover &__link-bar {
    width: 56px;
    background: var(--deep);
  }

  &__footer {
    display: flex;
    gap: 24px;
  }

  &__contact {
    display: inline-flex;
    padding: 10px;
    margin: -10px;
    color: var(--g3);
    transition: color 0.2s ease;

    &:hover {
      color: var(--deep);
    }
  }

  &__link:focus-visible,
  &__contact:focus-visible {
    outline: 2px solid var(--deep);
    outline-offset: 3px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sidebar__link-bar,
  .sidebar__contact {
    transition: none;
  }
}

@media (width <= 900px) {
  .sidebar {
    position: static;
    height: auto;
    padding: 80px 24px 64px;
    gap: 32px;
  }

  .sidebar__nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 24px;
    margin-top: 32px;
  }

  .sidebar__link {
    min-height: 44px;
  }

  .sidebar__link-bar {
    display: none;
  }
}
</style>
