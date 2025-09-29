<script setup>
const goodies = ref([
  {
    title: 'aeScan Walkthrough',
    image: 'aescan-video.png',
    description: 'A video of me dive into my latest project and explaining details',
    link: 'https://youtu.be/4jmVQlHASCY',
  },
  {
    title: 'Claude Settings',
    image: 'claude-ai-icon.svg',
    description: 'Personal configuration and settings for Claude Code CLI to enhance development workflow from different tutorials in one place.',
    link: 'https://github.com/janmichek/claude-settings',
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
    title: 'CRUD animations',
    image: 'crud_actions.webp',
    description: 'I bet your CRUD does not have this! Intuitive, elegant copy-pasteble solution. That is my evergreen solution. Just hover around.',
    link: 'https://codepen.io/janmichek/pen/bGEoozW',
  },
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
    image: 'honey-t.webp',
    description: 'I invest my free time into music production: creative organization proven by 5+ millions of'
      + ' streams, and personal building of communities worldwide. Have a listen.',
    link: 'https://open.spotify.com/artist/52iWG2c2P0K6HmGrAAUyoP?si=SuOL9lY1QuyCI1FDBOzO9A',
  },
  // {
  //   title: 'Tailwind Alternative',
  //   image: 'sourcecode.webp',
  //   description: 'Unpopular opinion, but I am not a fan of Tailwind. I like to use my own CSS framework. This is my attempt to create something similar.',
  //   link: 'https://github.com/janmichek/claude-settings',
  // },
])
</script>

<template>
  <section class="goodies">
    <div class="u-container">
      <title-section
        variant="primary"
        data-aos="fade-up">
        Goodies
      </title-section>
      <div
        class="u-masonry"
        data-aos="fade-up">
        <app-card
          v-for="(goodie, id) in goodies"
          :key="id"
          :image="goodie.image"
          :title="goodie.title"
          :link="goodie.link"
          data-aos="zoom-in"
          :data-aos-delay="10 + (id * 15)">
          <div v-html="goodie.description"/>
        </app-card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.goodies {
  background: var(--ui-primary);
}
</style>
