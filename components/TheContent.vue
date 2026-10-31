<script setup lang="ts">
const {
  chatContact,
  chatGoodies,
  chatProfile,
  chatProjects,
  chatSummary,
} = useSiteContent()

function isHttp(url: string) {
  return url.startsWith('http://') || url.startsWith('https://')
}
</script>

<template>
  <div class="the-content">
    <section
      id="about"
      class="the-content__section"
      data-wf="about">
      <div class="the-content__prose">
        <p
          v-for="paragraph in chatSummary"
          :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section
      id="projects"
      class="the-content__section"
      data-wf="projects">
      <h2 class="the-content__heading">
        Projects
      </h2>
      <div class="the-content__grid">
        <article
          v-for="project in chatProjects"
          :key="project.id"
          class="the-content__card">
          <a
            class="the-content__card-media"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer">
            <img
              :src="project.image"
              :alt="project.title">
          </a>
          <div class="the-content__card-body">
            <p class="the-content__card-tag">
              {{ project.tag }}
            </p>
            <h3 class="the-content__card-title">
              {{ project.title }}
            </h3>
            <p class="the-content__text">
              {{ project.lead }}
            </p>
            <div class="the-content__links">
              <a
                v-for="link in project.links"
                :key="link.url"
                class="the-content__link"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer">
                <app-icon name="link"/>{{ link.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section
      id="goods"
      class="the-content__section"
      data-wf="goodies">
      <h2 class="the-content__heading">
        Goodies
      </h2>
      <div class="the-content__goodies">
        <template
          v-for="goodie in chatGoodies"
          :key="goodie.url">
          <a
            v-if="isHttp(goodie.url)"
            class="the-content__goodie"
            :href="goodie.url"
            target="_blank"
            rel="noopener noreferrer">
            <span
              class="the-content__goodie-thumbnail"
              :class="{'the-content__goodie-thumbnail--dark': goodie.dark}">
              <img
                :src="goodie.image"
                alt="">
            </span>
            <span class="the-content__goodie-body">
              <b class="the-content__goodie-title">{{ goodie.title }}</b>
              <span class="the-content__goodie-text">{{ goodie.text }}</span>
            </span>
          </a>
          <nuxt-link
            v-else
            class="the-content__goodie"
            :to="goodie.url">
            <span
              class="the-content__goodie-thumbnail"
              :class="{'the-content__goodie-thumbnail--dark': goodie.dark}">
              <img
                :src="goodie.image"
                alt="">
            </span>
            <span class="the-content__goodie-body">
              <b class="the-content__goodie-title">{{ goodie.title }}</b>
              <span class="the-content__goodie-text">{{ goodie.text }}</span>
            </span>
          </nuxt-link>
        </template>
      </div>
    </section>

    <section
      id="contact"
      class="the-content__section the-content__section--contact"
      data-wf="contact">
      <h2 class="the-content__heading">
        Say hello
      </h2>
      <a
        class="the-content__mail"
        :href="`mailto:${chatProfile.email}`">{{ chatProfile.email }}</a>
      <div class="the-content__contacts">
        <a
          v-for="link in chatContact.filter(l => !l.iconOnly)"
          :key="link.url"
          class="the-content__button the-content__button--small"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer">{{ link.label }}</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.the-content {
  &__section {
    padding: 64px 48px;

    &--contact {
      margin: 0;
      padding: 64px 48px;
      border-top: 0;
      color: var(--white);
      background: var(--deep);
    }

    &:first-child {
      padding-top: 200px;
    }
  }

  &__heading {
    margin-bottom: 36px;
    font-size: clamp(38px, 4.6vw, 60px);
    letter-spacing: -0.035em;
  }

  &__section--contact &__heading {
    margin-bottom: 20px;
    color: var(--white);
    font-size: clamp(24px, 2.8vw, 36px);
  }

  &__prose {
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 18px;
    line-height: 1.65;
  }

  &__text {
    font-size: 18px;
    line-height: 1.6;
  }

  &__grid {
    display: grid;
    gap: 24px;
  }

  &__card {
    padding: 0;
    overflow: hidden;
    border-radius: 10px;
    background: var(--tint);
  }

  &__card-media {
    display: block;
    aspect-ratio: 16 / 10;
  }

  &__card-media img,
  &__goodie-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__card-body {
    padding: 22px 24px 26px;
  }

  &__card-tag {
    font-size: 14px;
    font-weight: 500;
    color: var(--deep);
  }

  &__card-title {
    margin: 6px 0 10px;
    font-size: 30px;
    line-height: 1.1;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 22px;
    margin-top: 16px;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: var(--ink);
    transition: color 0.2s ease;

    svg {
      width: 14px;
      height: 14px;
      color: var(--g3);
      transition: color 0.2s ease;
    }

    &:hover {
      color: var(--deep);

      svg {
        color: var(--deep);
      }
    }
  }

  &__goodies {
    display: grid;
    gap: 8px 28px;
  }

  &__goodie {
    display: grid;
    grid-template-columns: 104px 1fr;
    gap: 18px;
    align-items: start;
    padding: 12px 0;

    &:hover .the-content__goodie-title {
      color: var(--deep);
    }
  }

  &__goodie-thumbnail {
    display: block;
    width: 104px;
    height: 104px;
    overflow: hidden;
    border-radius: 7px;
    background: var(--tint);

    &--dark img {
      filter: invert(1) hue-rotate(180deg);
    }

    img[src$='.svg'] {
      object-fit: contain;
      padding: 12px;
    }
  }

  &__goodie-title {
    display: block;
    font-size: 19px;
    font-weight: 700;
  }

  &__goodie-text {
    display: block;
    min-height: 4.5em;
    font-size: 18px;
    line-height: 1.5;
    color: var(--mute);
  }

  &__mail {
    display: inline-block;
    font-size: clamp(22px, 2.6vw, 34px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.035em;
    word-break: break-all;
    color: inherit;

    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }

  &__contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 28px;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 24px;
    border: 2px solid var(--ink);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;

    &--small {
      height: 38px;
      padding: 0 16px;
      border-width: 1.5px;
      font-size: 14px;
    }

    &:hover {
      background: #fff;
      color: var(--deep);
      border-color: #fff;

      @media (--dark) {
        background: var(--color-carbon);
        color: var(--color-sky);
        border-color: var(--color-carbon);
      }
    }
  }

  &__link:focus-visible,
  &__mail:focus-visible,
  &__goodie:focus-visible,
  &__button:focus-visible {
    outline: 3px solid var(--deep);
    outline-offset: 3px;
  }

  &__section--contact &__button {
    border-color: var(--white);
  }
}

@media (width <= 900px) {
  .the-content__section {
    padding: 48px 24px;
  }

  .the-content__section:first-child {
    padding-top: 120px;
  }

  .the-content__section--contact {
    padding: 48px 24px;
  }
}
</style>
