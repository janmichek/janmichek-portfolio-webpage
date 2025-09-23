<script setup>
const checklist = [
  'hover state',
  'active / selected state',
  'error state',
  'disabled state',
  'loading state',
  'million of items',
  'empty state',
  'veeeeeeeeeery long inputs',
  'error page style',
  'scrolled viewport into half of the page',
  'touch controlled elements are at least 45px width',
  'pass variables as most parametrically as possible',
  'try to think of desktop & touch controls',
  'try to reuse existing components first (if previous UI available)',
  'Mobile first design (project specific, but mostly yes)',
]
</script>

<template>
  <nuxt-layout name="slug">
    <article>
      <slug-title
        title="Webdesign checklist"
        description="
      Nothing great is created alone, so I created this to make collaboration better.
      These are frequent requests on design sketches that applies almost ultimately.
      These requirements should be met before design sketches handoff."/>
      <app-checklist :list="checklist"/>
    </article>
  </nuxt-layout>
</template>
