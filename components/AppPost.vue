<template>
  <div class="projects__project">
    <h4 class="post__heading">
      <slot name="heading"/>
    </h4>
    <div class="post__body">
      <div class="post__image">
        <slot name="image"/>
      </div>
      <div class="post__description">
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>

<style>
.post {
  &__heading {
    margin-bottom: var(--space-sm);
  }

  &__body {
    @apply u-grid-12;
  }

  &__image {
    @apply u-1/3@tablet;
  }

  &__description {
    @apply u-2/3@tablet;
    margin-left: 0;
    margin-top: var(--space-sm);

    @media (--tablet) {
      margin-left: var(--space-lg);
      margin-top: 0;
    }
  }
}
</style>
