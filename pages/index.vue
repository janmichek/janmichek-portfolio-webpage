<script setup lang="ts">
const { chatContact, chatProfile, siteMeta } = useSiteContent()

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'goods', label: 'Goodies' },
  { id: 'contact', label: 'Contact' },
]

const { active, jumping, go } = useScrollSpy(navItems.map(item => item.id))
</script>

<template>
  <div class="home-page site-theme">
    <div class="page">
      <the-sidebar
        :name="chatProfile.name"
        :role="siteMeta.role"
        :avatar="chatProfile.avatar"
        :contact="chatContact"
        :lead="siteMeta.lead"
        :items="navItems"
        nav-label="Sections"
        :active-id="active"
        :jumping="jumping"
        @select="go"/>
      <the-content/>
    </div>
  </div>
</template>

<style scoped>
@media (width <= 900px) {
  .home-page .page {
    grid-template-columns: 1fr;
  }
}
</style>
