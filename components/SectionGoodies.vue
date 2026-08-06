<script setup>
const goodies = ref([
  {
    title: 'CV',
    image: 'book.webp',
    description: 'Download my curriculum vitae — experience, projects, and skills in one place.',
    link: 'https://drive.google.com/file/d/1JKoO3XYsx_8BGriNa9rMlt0nwgQajE3v/view?usp=drive_link',
  },
  {
    title: 'aeScan Walkthrough',
    image: 'aescan-video.png',
    description: 'A video of me dive into my latest project and explaining details',
    link: 'https://youtu.be/4jmVQlHASCY',
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
    title: 'Melodot Walkthrough',
    image: 'melodot-walkthrough.webp',
    description: 'Walkthrough of MeloDot — decentralized music discovery and donation dApp from the Polkadot Builder hackathon.',
    link: 'https://youtu.be/f7LlZRMdKm4',
  },
  {
    title: 'Claude Settings',
    image: 'claude-ai-icon.svg',
    description: 'Personal configuration and settings for Claude Code CLI to enhance development workflow from different tutorials in one place.',
    link: 'https://github.com/janmichek/claude-settings',
  },
  {
    title: 'Source Code',
    image: 'sourcecode.webp',
    description: 'Source code of this personal page. This web is hosted on Firebase.',
    link: 'https://github.com/janmichek/janmichek',
  },
  {
    title: 'Photos Gallery',
    image: 'k3.webp',
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
          :data-aos-offset="-1*(10 + (id * 60))">
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
