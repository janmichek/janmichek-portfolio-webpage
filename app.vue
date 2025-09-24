<script setup lang="ts">
</script>

<template>
  <Html>
    <Head>
      <Title>Jan Michek</Title>
      <Meta
        name="description"
        content="Jan Michek personal page"/>
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/janmichek-2.webp"/>
      <Meta
        name="description"
        content="Jan Michek's portfolio page"/>
      <Meta
        name="keywords"
        content="portfolio, Jan Michek, frontend, engineer, developer"/>
      <Meta
        property="og:type"
        content="website"/>
      <Meta
        property="og:title"
        content="Jan Michek"/>
      <Meta
        property="og:description"
        content="Jan Michek's portfolio page"/>
      <Meta
        property="og:image"
        content="/janmichek.webp"/>
      <Meta
        property="og:image:alt"
        content="Jan Michek"/>
      <Meta
        property="og:url"
        content="https://janmichek.cz"/>
      <Meta
        name="twitter:card"
        content="summary_large_image"/>
      <Meta
        name="twitter:site"
        content="Jan Michek"/>
      <Meta
        name="twitter:creator"
        content="Jan Michek"/>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"/>
    </Head>
  </Html>
  <NuxtPage/>
</template>

<style scoped>
.page {
  &__section {
    padding: var(--space-xxl) 0;
  }
}
</style>
