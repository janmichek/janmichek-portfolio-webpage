<script setup lang="ts">
</script>

<template>
  <section class="projects">
    <div class="projects__container">
      <title-section>Recent projects</title-section>

      <div class="projects__content">
        <app-post>
          <template #heading>
            aeScan.io
          </template>
          <template #image>
            <app-link to="https://aescan.io/">
              <nuxt-img
                format="webp"
                src="/aescan.webp"
                :width="686"
                alt="aescan"/>
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/aescan">
              Preview
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                Led development of aeScan.io, an open-source blockchain explorer for the Aeternity network,
                full autonomy over technical decisions.
                Built comprehensive blockchain data visualization aggregating multiple sources.
              </li>
              <li>
                Architected responsive user interfaces handling blockchain interactions, statistics
                visualization,
                and real-time data updates. Implemented contextual educational hints to help users understand
                different aspects of blockchain technology.
              </li>
              <li>
                <app-link
                  to="https://github.com/aeternity/aescan/"
                  target="_blank">
                  Open source
                </app-link>
                project where I collaborated with contract developers, designers, community users,
                and stakeholders to continuously improve the platform and shape product vision.
              </li>
              <li>
                Used tech:
                <project-link
                  label="Nuxt"
                  to="https://nuxt.com/"/>
                <project-link
                  label="Typescript"
                  to="https://www.typescriptlang.org/"/>
                <project-link
                  label="aepp SDK"
                  to="https://sdk.aeternity.io/latest/"/>
                <project-link
                  label="Docker"
                  to="https://www.docker.com/"/>
                <project-link
                  label="Node.js"
                  to="https://www.nodejs.org/"/>
                <project-link
                  label="Cypress"
                  to="https://www.cypress.io/"/>
                <project-link
                  label="Eslint"
                  to="https://eslint.org/"/>
                <project-link
                  label="Sentry"
                  to="https://sentry.io/"/>
                <project-link
                  label="Figma"
                  to="https://www.figma.com/"/>
                <project-link
                  label="Plausible"
                  to="https://plausible.io/"
                  is-last/>
              </li>
            </ul>
          </template>
        </app-post>

        <app-post>
          <template #heading>
            PWN Finance
          </template>
          <template #image>
            <app-link to="http://pwn.finance">
              <nuxt-img
                src="/pwn.webp"
                :width="686"
                alt="PWN Finance"/>
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/pwn1">
              Preview 1
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/pwn2">
              Preview 2
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                Collaborated on frontend for PWN, the first web3 NFT pawnshop platform on Ethereum,
                handling user interactions with wallets and smart contracts. Built a seamless web3 user
                experience from scratch.
              </li>
              <li>
                Collaborated on visual design and UX architecture while engaging directly with the crypto
                community during volatile market conditions. Rapidly iterated based on user feedback and
                market demands as part of a small, agile startup team.
              </li>
              <li>
                Contributed to product vision and working closely with all team members to shape
                the platform's direction.
              </li>
              <li>
                Used tech:
                <project-link
                  label="Vue3"
                  to="https://vuejs.org/"/>
                <project-link
                  label="Typescript"
                  to="https://www.typescriptlang.org/"/>
                <project-link
                  label="Ethers.js"
                  to="https://docs.ethers.io/v5/"/>
                <project-link
                  label="Alchemy"
                  to="https://www.alchemy.com/"/>
                <project-link
                  label="Moralis"
                  to="https://moralis.io/"/>
                <project-link
                  label="Postcss"
                  to="https://postcss.org"/>
                <project-link
                  label="Eslint"
                  to="https://eslint.org/"/>
                <project-link
                  label="Sentry"
                  to="https://sentry.io/"/>
                <project-link
                  label="Figma"
                  to="https://www.figma.com/"/>
                <project-link
                  label="CSS Variables"
                  to="https://www.w3schools.com/css/css3_variables.asp"
                  is-last/>
              </li>
            </ul>
          </template>
        </app-post>

        <app-post>
          <template #heading>
            Chatbot Builder
          </template>
          <template #image>
            <app-link to="https://www.nice.com/websites/cxone-next-gen-cx/">
              <nuxt-img
                src="/chatbot.webp"
                :width="686"
                alt="Chabot Builder"/>
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/chatbot1">
              Preview 1
            </app-link>
            <app-link
              class="projects__preview"
              to="/preview/chatbot2">
              Preview 2
            </app-link>
          </template>
          <template #description>
            <ul class="projects__list">
              <li>
                Built the complete frontend for an innovative pre-LLM AI chatbot builder platform delivered to
                <app-link to="https://www.nice.com/websites/cxone-next-gen-cx/">
                  a telemarketing industry leader
                </app-link>
                . Developed complex conversation flow interfaces enabling intuitive bot creation.
              </li>
              <li>
                Led frontend architecture decisions and established development guidelines while mentoring
                junior developer. Collaborated closely with backend developers and designers to shape
                overall product vision and user experience flows.
              </li>
              <li>
                Implemented an innovative approach to building conversations tree and
                creatied seamless user flows.
              </li>
              <li>
                Used tech:
                <project-link
                  label="Vue 2"
                  to="https://vuejs.org/"/>
                <project-link
                  label="Vuex"
                  to="https://vuex.vuejs.org/"/>
                <project-link
                  label="Laravel"
                  to="https://laravel.com/"/>
                <project-link
                  label="Jest"
                  to="https://jestjs.io/"/>
                <project-link
                  label="Postcss"
                  to="https://postcss.org"/>
                <project-link
                  label="Eslint"
                  to="https://eslint.org/"/>
                <project-link
                  label="Adobe XD"
                  to="https://www.adobe.com/products/xd.html"/>
                <project-link
                  label="CSS Variables"
                  to="https://www.w3schools.com/css/css3_variables.asp"/>
                <project-link
                  label="CSS Animations"
                  to="https://www.w3schools.com/css/css3_animations.asp"
                  is-last/>
              </li>
            </ul>
          </template>
        </app-post>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("../assets/styles/utilities/_grid.css");

.projects {
  &__container {
    @apply .u-container;
  }

  &__content {
    margin: 0 var(--space-sm);
  }

  &__project:not(:last-of-type) {
    margin-bottom: var(--space-xxl);
  }

  &__preview {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-right: var(--space-xs);
    font-size: var(--text-sm);
  }
}
</style>
