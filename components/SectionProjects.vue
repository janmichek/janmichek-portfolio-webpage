<script setup lang="ts">
</script>

<template>
  <section class="projects">
    <div class="u-container">
      <title-section data-aos="fade-up">
        Recent projects
      </title-section>

      <app-post
        class="projects__post"
        data-aos="fade-up">
        <template #heading>
          Melodot — Polkadot Hackathon Winner
        </template>
        <template #image>
          <app-link to="https://melodot.vercel.app/">
            <img
              src="/melodot.webp"
              width="686"
              alt="MeloDot - decentralized music discovery and donation dApp">
          </app-link>
          <app-link
            class="projects__preview"
            to="https://youtu.be/f7LlZRMdKm4">
            Walkthrough Video
          </app-link>
        </template>
        <template #description>
          <ul class="projects__list">
            <li>
              Placed among
              <app-link to="https://devpost.com/software/melodot-decentralized-music-discovery-and-donation-dapp">
                winners
              </app-link>
              at the Polkadot Builder Party. Built
              <app-link to="https://melodot.vercel.app/">
                Melodot
              </app-link>
              , a decentralized music discovery and donation
              dApp combining music recognition technology with blockchain-based donations - bridging art and
              technology.
            </li>
            <li>
              Developed a full-stack blockchain application - proof-of-concept that solves a real-life problem.
            </li>
            <li>
              Covered the full spectrum of modern app development: communication, product vision, wireframing,
              UI/UX design, smart contract development and deployment, API design, frontend,
              and app deployment.
            </li>
            <li>
              Used tech:
              <project-link
                label="React"
                to="https://react.dev/"/>
              <project-link
                label="Solidity"
                to="https://soliditylang.org/"/>
              <project-link
                label="Vercel"
                to="https://vercel.com/"/>
              <project-link
                label="Typescript"
                to="https://www.typescriptlang.org/"/>
              <project-link
                label="Wagmi"
                to="https://wagmi.sh/"/>
              <project-link
                label="Viem"
                to="https://viem.sh/"/>
              <project-link
                label="Claude"
                to="https://www.anthropic.com/claude"/>
              <project-link
                label="Cursor"
                to="https://cursor.com/"/>
              <project-link
                label="Node.js"
                to="https://www.nodejs.org/"/>
              <project-link
                label="Web3Auth"
                to="https://web3auth.io/"/>
              <project-link
                label="RapidApi"
                to="https://rapidapi.com/"/>
              <project-link
                label="Tailwind"
                to="https://tailwindcss.com/"/>
              <project-link
                label="Shadcn"
                to="https://ui.shadcn.com/"
                is-last/>
            </li>
          </ul>
        </template>
      </app-post>

      <app-post
        class="projects__post"
        data-aos="fade-up">
        <template #heading>
          aeScan.io
        </template>
        <template #image>
          <app-link to="https://aescan.io/">
            <img
              src="/aescan.webp"
              width="686"
              alt="aescan">
          </app-link>

          <app-link
            class="projects__preview"
            to="https://youtu.be/4jmVQlHASCY">
            Walktrhough Video
          </app-link>
        </template>
        <template #description>
          <ul class="projects__list">
            <li>
              An open-source blockchain explorer of
              <app-link to="http://aeScan.io">
                aeScan.io
              </app-link>
              , an for the Aeternity network, where I took a leader part,
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

      <app-post
        class="projects__post"
        data-aos="fade-up">
        <template #heading>
          PWN Finance
        </template>
        <template #image>
          <app-link to="http://pwn.finance">
            <img
              src="/pwn.webp"
              width="686"
              alt="PWN Finance">
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
              The first NFT pawnshop on Ethereum
              <app-link to="https://pwn.xyz">
                pwn.xyz
              </app-link>
              where I collaborated on frontend, handling user interactions with
              wallets and smart contracts. Built a seamless web3 user experience from scratch.
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
    </div>
  </section>
</template>

<style scoped>
.projects {
  &__post {
    margin-bottom: var(--space-2xl);
  }

  &__list {
    margin-top: 0;
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
