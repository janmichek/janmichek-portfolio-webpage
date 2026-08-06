<template>
  <section class="summary">
    <div class="u-container">
      <title-section
        variant="primary"
        data-aos="fade-up">
        Summary
      </title-section>
      <p
        class="summary__text"
        data-aos="fade-up">
        Senior engineer with 14 years of experience, including 5+ years of building Web3 experiences on smart contracts.
        My background includes leading the development of aescan.io, an open-source blockchain explorer, and crafting
        smooth Web3 UX flows for an NFT lending platform at PWN. I am proud of winning an award at the Polkadot
        Hackathon. I combine full-stack expertise in JS frameworks with Solidity to build dApps that are a joy to use.
      </p>
    </div>
  </section>
</template>

<style scoped>
.summary {
  background: var(--ui-primary);

  &__text {
    max-width: 52rem;
    margin: 0 auto;
    text-align: center;
    font-size: var(--text-lg);
    line-height: 1.6;

    @media (--tablet) {
      text-align: left;
      margin: 0;
    }
  }
}
</style>
