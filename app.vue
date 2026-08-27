<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://janmichek.cz/' }],
})

useSeoMeta({
  title: 'Jan Michek — Web3 Full-Stack Engineer | Portfolio',
  description: 'Senior Web3 full-stack engineer (14y exp) — Solidity, Vue/Nuxt, dApps. Creator of aescan.io explorer, ex-PWN Finance. Prague, Czechia. Available for freelance.',
  ogTitle: 'Jan Michek — Web3 Full-Stack Engineer',
  ogDescription: 'Senior Web3 full-stack engineer — Solidity, Vue/Nuxt, dApps. Creator of aescan.io, ex-PWN Finance.',
  ogImage: 'https://janmichek.cz/janmichek.webp',
  ogImageAlt: 'Jan Michek',
  ogUrl: 'https://janmichek.cz/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jan Michek — Web3 Full-Stack Engineer',
  twitterDescription: 'Senior Web3 full-stack engineer — Solidity, Vue/Nuxt, dApps.',
  twitterImage: 'https://janmichek.cz/janmichek.webp',
  viewport: 'width=device-width, initial-scale=1',
  author: 'Jan Michek',
  keywords: 'Jan Michek, Web3, Solidity, frontend, fullstack, engineer, developer, portfolio, Vue, Nuxt, blockchain',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Person', 'name': 'Jan Michek', 'url': 'https://janmichek.cz', 'image': 'https://janmichek.cz/janmichek.webp', 'jobTitle': 'Web3 Full-Stack Engineer' },
          { '@type': 'WebSite', 'name': 'Jan Michek — Web3 Full-Stack Engineer', 'url': 'https://janmichek.cz' },
        ],
      }),
    },
  ],
})
</script>

<template>
  <NuxtPage />
</template>
