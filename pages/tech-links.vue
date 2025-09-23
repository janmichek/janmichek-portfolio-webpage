<script setup lang="ts">
</script>

<template>
  <NuxtLayout name="slug">
    <article class="tech-links">
      <slug-title
        title="Tech links"
        description="These are the main sources of my outer world contact. I do open them mostly on Sundays.
        There are more links I read about music production and psychology. But lets stick with these 10 top links."/>
      <ul>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://www.smashingmagazine.com/">
              smashingmagazine.com
            </app-link>
          </h4>
          <div>Frontend goodies proved by time</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://cointelegraph.com/">
              cointelegraph.com
            </app-link>
          </h4>
          <div>Trustworthy crypto news</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://www.webdesignernews.com/">
              webdesignernews.com
            </app-link>
          </h4>
          <div>Cool feed of frontend related articles and tools</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="http://frontendisti.cz/">
              frontendisti.cz
            </app-link>
          </h4>
          <div>Czech frontend community also organizing meetups</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://www.morningbrew.com/emerging-tech">
              morningbrew/emerging-tech
            </app-link>
          </h4>
          <div>Future proof feed you need</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://designyoutrust.com/">
              designyoutrust.com
            </app-link>
          </h4>
          <div>Inspirational eye candies</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://www.theverge.com/">
              theverge.com
            </app-link>
          </h4>
          <div>Wider scale tech news</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://science.org/">
              science.org
            </app-link>
          </h4>
          <div>Scientific breakthroughs in the purest form</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://news.ycombinator.com/">
              Hacker news
            </app-link>
          </h4>
          <div>Art of code and underground scene</div>
        </li>
        <li class="tech-links__item">
          <h4>
            <app-link to="https://www.reddit.com/r/badUIbattles/">
              reddit/badUIbattles/
            </app-link>
          </h4>
          <div>Really bad UI's</div>
        </li>
      </ul>
    </article>
  </NuxtLayout>
</template>

<style scoped>
.tech-links {
  &__item {
    margin-bottom: var(--space);
  }
}
</style>
