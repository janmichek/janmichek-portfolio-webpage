<script setup>

</script>

<template>
  <section class="skills">
    <div class="skills__container u-container">
      <title-section
        variant="primary"
        data-aos="fade-up">
        My skillset
      </title-section>
      <div
        class="skills__row"
        data-aos="fade-up">
        <div class="skills__name skills__name--web3">
          web3
        </div>
        <p class="skills__description">
          Let me translate complexity of DeFi into smooth and modern web app which is intuitive to use.
        </p>
      </div>
      <div
        class="skills__row"
        data-aos="fade-up">
        <div class="skills__name">
          JS
        </div>
        <p class="skills__description">
          Vue is, effective and joy to code. The smoothest DX framework I had a chance to work with.
          React is cool too!
        </p>
      </div>
      <div
        class="skills__row"
        data-aos="fade-up">
        <div class="skills__name">
          UX
        </div>
        <p class="skills__description">
          I love to bridge computer code with human perception.
          "Don't let users think" is my ultimate motto. I live on the front side of frontend.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background: var(--ui-primary);

  &__container {
  }

  &__row {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (--tablet) {
      flex-direction: row;
    }

    &:not(:last-of-type) {
      margin-bottom: var(--space-lg);
    }
  }

  &__name {
    font-family: var(--font-serif);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ui-secondary);
    font-size: var(--text-4xl);
    text-align: center;
    min-width: 118px;
    line-height: 1;
    margin-bottom: var(--space-sm);

    @media (--tablet) {
      margin-bottom: 0;
    }

    &--web3 {
      @media (--tablet) {
        font-size: var(--text-xl);
      }
    }
  }

  &__description {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (--tablet) {
      text-align: left;
    }
  }
}
</style>
