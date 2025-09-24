<script setup>
const goodies = ref([
  {
    title: 'Git Flow',
    image: 'checklist.webp',
    description: 'No worry if our team does not have solid workflow yet. We can iterate from here.',
    link: '/git-flow',
  },
  {
    title: 'Weekly News Feed',
    image: 'news.webp',
    description: 'List of tech, frontend & crypto related links I am going through every Sunday.',
    link: '/tech-links',
  },
  {
    title: 'Karabiner Shortcuts',
    image: 'karabiner.webp',
    description: 'My personal way to tune ergonomics. I believe this is ultimate good, but it may serve as inspiration.',
    link: '/karabiner',
  },
  {
    title: 'Webdesign checklist',
    image: 'checklist.webp',
    description: 'When I am working with designers I want to make sure all formal requirements on design handoff are met.',
    link: '/webdesign-checklist',
  },
  {
    title: 'Source Code',
    image: 'sourcecode.webp',
    description: 'Source code of this personal page. This web is hosted on Firebase.',
    link: 'https://github.com/janmichek/janmichek',
  },
  {
    title: 'Vue 2 File Template By Styleguide',
    image: 'vue-logo.svg',
    description: 'A template for new .vue file creation in IntelliJ family editors. This template creates new file according to official styleguide so we can save some time.',
    link: 'https://gist.github.com/janmichek/9a40c8e481a1f8d3fa3a07fe79733e27',
  },
  {
    title: 'CRUD animations',
    image: 'crud_actions.webp',
    description: 'I bet your CRUD does not have this! Intuitive, elegant copy-pasteble solution. That is my evergreen solution. Just hover around.',
    link: 'https://codepen.io/janmichek/pen/bGEoozW',
  },
  // {
  //   title: 'Frontend Developer Manifesto',
  //   image: 'janmichek.webp',
  //   description: 'The set of evergreen rules, best practices, commonly mistaken concepts and personal preferences in a structured form.',
  //   link: 'https://github.com/janmichek/frontend-developer-manifesto/blob/main/README.md',
  // },
  {
    title: 'Linter Settings',
    image: 'eslint.svg',
    description: 'In the case of my team lacks linter settings - here are my preferred ones as a good starter for a new project.'
      + '<a target="_blank" rel="noopener noreferrer" href="https://github.com/janmichek/preferred-eslint-settings/blob/master/eslint.config.mjs">Vue Eslint Settings</a> and '
      + '<a target="_blank" rel="noopener noreferrer" href="https://github.com/janmichek/preferred-stylelint-settings/blob/master/.stylelintrc.js">Stylelint settings</a>.',
  },
  {
    title: 'Photos Gallery',
    image: 'k6.webp',
    description: 'I like shooting photos too. Especially flowers. Here is a small presentation of my esthetics skills. Or they can be used as a nice placeholders images.',
    link: '/gallery',
  },
  {
    title: 'Music Production',
    image: 'honeytcz.webp',
    description: 'I invest most of my free time into music production, traveling the world with my music and building communities.  Have a listen.',
    link: 'https://open.spotify.com/artist/52iWG2c2P0K6HmGrAAUyoP?si=SuOL9lY1QuyCI1FDBOzO9A',
  },
])
</script>

<template>
  <section class="goodies">
    <div class="goodies__container">
      <title-section variant="primary">
        Goodies
      </title-section>
      <div class="goodies__masonry">
        <app-card
          v-for="(goodie, id) in goodies"
          :key="id"
          :image="goodie.image"
          :title="goodie.title"
          :link="goodie.link">
          <div v-html="goodie.description"/>
        </app-card>
      </div>
    </div>
  </section>
</template>

<style>
/*TODO INJECT*/
@import url("../assets/styles/utilities/_grid.css");

.goodies {
  background: var(--ui-primary);

  &__container {
    @apply .u-container;
  }

  &__masonry {
    @apply .u-masonry;
  }
}
</style>
