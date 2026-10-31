<script setup lang="ts">
const { chatProjects } = useSiteContent()
</script>

<template>
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
</template>

<style scoped>
.the-content {
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

  &__card-media img {
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
}
</style>
