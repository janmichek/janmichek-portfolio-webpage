<script setup lang="ts">
const { siteMeta } = useSiteContent()

const siteUrl = `${siteMeta.url}/`

useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: siteUrl }],
})

useSeoMeta({
  title: siteMeta.title,
  description: siteMeta.description,
  ogTitle: siteMeta.title,
  ogDescription: siteMeta.description,
  ogImage: `${siteMeta.url}/janmichek.webp`,
  ogImageAlt: 'Jan Michek',
  ogUrl: siteUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: siteMeta.title,
  twitterDescription: siteMeta.description,
  twitterImage: `${siteMeta.url}/janmichek.webp`,
  viewport: 'width=device-width, initial-scale=1',
  author: 'Jan Michek',
  keywords: siteMeta.keywords,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Person', 'name': 'Jan Michek', 'url': siteMeta.url, 'image': `${siteMeta.url}/janmichek.webp`, 'jobTitle': siteMeta.jobTitle },
          { '@type': 'WebSite', 'name': siteMeta.title, 'url': siteMeta.url },
        ],
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
