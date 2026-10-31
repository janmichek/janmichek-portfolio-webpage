<script setup lang="ts">
const { chatContact, chatProfile, chatSummary } = useSiteContent()
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

    <app-projects-section/>
    <app-goodies-section/>

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

  &__mail:focus-visible,
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
