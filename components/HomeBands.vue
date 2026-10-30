<script setup lang="ts">
const {
  chatContact,
  chatGoodies,
  chatProfile,
  chatProjects,
  chatSummary,
} = useSiteContent()

function isHttp(url: string) {
  return url.startsWith('http')
}
</script>

<template>
  <div class="main">
    <section
      id="about"
      class="sec"
      data-wf="about">
      <div class="prose">
        <p
          v-for="paragraph in chatSummary"
          :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section
      id="projects"
      class="sec"
      data-wf="projects">
      <h2 class="h">
        Projects
      </h2>
      <div class="grid">
        <article
          v-for="project in chatProjects"
          :key="project.id"
          class="card pj">
          <a
            class="img"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer">
            <img
              :src="project.image"
              :alt="project.title">
          </a>
          <div class="pb">
            <p class="tag">
              {{ project.tag }}
            </p>
            <h3 class="h">
              {{ project.title }}
            </h3>
            <p>
              <span class="t">{{ project.lead }}</span>
            </p>
            <div class="links">
              <a
                v-for="link in project.links"
                :key="link.url"
                class="lk"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer">
                <home-icon name="link"/>{{ link.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section
      id="goods"
      class="sec"
      data-wf="goodies">
      <h2 class="h">
        Goodies
      </h2>
      <div class="list">
        <template
          v-for="goodie in chatGoodies"
          :key="goodie.url">
          <a
            v-if="isHttp(goodie.url)"
            class="row"
            :href="goodie.url"
            target="_blank"
            rel="noopener noreferrer">
            <span
              class="th"
              :class="{'th--dark': goodie.dark}">
              <img
                :src="goodie.image"
                alt="">
            </span>
            <span class="rt">
              <b class="h">{{ goodie.title }}</b>
              <span class="t">{{ goodie.text }}</span>
            </span>
          </a>
          <nuxt-link
            v-else
            class="row"
            :to="goodie.url">
            <span
              class="th"
              :class="{'th--dark': goodie.dark}">
              <img
                :src="goodie.image"
                alt="">
            </span>
            <span class="rt">
              <b class="h">{{ goodie.title }}</b>
              <span class="t">{{ goodie.text }}</span>
            </span>
          </nuxt-link>
        </template>
      </div>
    </section>

    <section
      id="contact"
      class="sec sec-contact"
      data-wf="contact">
      <h2 class="h">
        Say hello
      </h2>
      <a
        class="mail h"
        :href="`mailto:${chatProfile.email}`">{{ chatProfile.email }}</a>
      <div class="cl">
        <a
          v-for="link in chatContact.filter(l => !l.iconOnly)"
          :key="link.url"
          class="btn sm"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer">{{ link.label }}</a>
      </div>
    </section>
  </div>
</template>
