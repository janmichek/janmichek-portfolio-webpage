<script setup lang="ts">
import { chatContact, chatProfile } from '~/data/chatContent'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'goods', label: 'Goodies' },
  { id: 'contact', label: 'Contact' },
]

const active = ref(navItems[0].id)

// Last section whose top has crossed a line 40% down the viewport wins.
// At the very bottom of the page the last section is forced active,
// since short final sections may never reach that line.
function updateActive() {
  const line = window.innerHeight * 0.4
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
  let current = navItems[0].id
  for (const { id } of navItems) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= line) current = id
  }
  active.value = atBottom ? navItems[navItems.length - 1].id : current
}

let frame = 0
function onScroll() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    updateActive()
  })
}

onMounted(() => {
  updateActive()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (frame) cancelAnimationFrame(frame)
})

function go(event: MouseEvent, id: string) {
  event.preventDefault()
  active.value = id
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
  })
}
</script>

<template>
  <div class="home">
    <div class="page">
      <aside class="side">
        <div>
          <img
            class="ph"
            :src="chatProfile.avatar"
            alt="Jan Michek">
          <h1 class="name h">
            Jan Michek
          </h1>
          <p class="role">
            Web3 full-stack engineer
          </p>
          <p class="lead">
            <span class="t">
              I design and build with Agents, Web3 and UX<br>
              to the product that is joy to use.
            </span>
          </p>
          <nav class="nav">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              :class="{'is-active': active === item.id}"
              :aria-current="active === item.id ? 'true' : undefined"
              @click="go($event, item.id)">
              <span class="bar"/>{{ item.label }}
            </a>
          </nav>
        </div>
        <nav
          class="side-foot"
          aria-label="Contact">
          <a
            v-for="link in chatContact"
            :key="link.url"
            class="ci"
            :href="link.url"
            :title="link.label"
            :aria-label="link.label"
            target="_blank"
            rel="noopener noreferrer">
            <home-icon :name="link.icon"/>
          </a>
        </nav>
      </aside>
      <home-bands/>
    </div>
  </div>
</template>

<style>
.home {
  --white: var(--color-cream);
  --ink: var(--color-carbon);
  --sky: var(--color-sky);
  --deep: #2f7fa3;
  --tint: #eef6f9;
  --mute: #5b6b6b;
  --g1: #e8eded;
  --g2: #c7d2d2;
  --g3: #889a9a;
  background: var(--white);
  color: var(--ink);
  color-scheme: light;
  font-family: var(--font-sans);
  font-size: 17px;
  font-weight: 300;
  line-height: 1.6;
}

body:has(.home) {
  background: #fbfbfb;
  color: #082626;
}

.home a {
  color: inherit;
  text-decoration: none;
}

.home p {
  margin: 0;
}

.home h1,
.home h2,
.home h3 {
  margin: 0;
  font-family: var(--font-sans);
  font-weight: 700;
  line-height: 1;
}

.home .page {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  max-width: 1240px;
  margin: 0 auto;
}

.home .side {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 80px 36px 72px 32px;
}

.home .ph {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--sky);
}

.home .name {
  margin-top: 24px;
  font-size: clamp(38px, 4.3vw, 58px);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.home .role {
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
}

.home .lead {
  max-width: 26em;
  margin-top: 14px;
  font-size: 18px;
  line-height: 1.6;
}

.home .nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
}

.home .nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home .nav .bar {
  width: 28px;
  height: 2px;
  background: var(--ink);
  transition: width 0.2s ease;
}

.home .nav a:hover .bar,
.home .nav a.is-active .bar {
  width: 56px;
  background: var(--deep);
}

.home .nav a.is-active {
  color: var(--deep);
}

.home .btn {
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 24px;
  border: 2px solid var(--ink);
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
}

.home .btn.pri {
  background: var(--ink);
  color: var(--white);
}

.home .btn.sm {
  height: 38px;
  padding: 0 16px;
  border-width: 1.5px;
  font-size: 14px;
}

.home .sec {
  padding: 64px 48px;
}

.home .main .sec:first-child {
  padding-top: 200px;
}

.home h2 {
  margin-bottom: 36px;
  font-size: clamp(38px, 4.6vw, 60px);
  letter-spacing: -0.035em;
}

.home .prose {
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 18px;
  line-height: 1.65;
}

.home .skills {
  display: grid;
  gap: 16px;
  margin-top: 40px;
}

.home .card {
  padding: 24px;
  border-radius: 10px;
  background: var(--tint);
}

.home .sk h3 {
  margin-bottom: 8px;
  font-size: 24px;
}

.home .sk p {
  font-size: 15px;
  line-height: 1.6;
}

.home .grid {
  display: grid;
  gap: 24px;
}

.home .pj {
  padding: 0;
  overflow: hidden;
}

.home .img {
  display: block;
  aspect-ratio: 16 / 10;
}

.home .img img,
.home .th img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home .th--dark img {
  filter: invert(1) hue-rotate(180deg);
}

.home .pb {
  padding: 22px 24px 26px;
}

.home .tag {
  font-size: 14px;
  font-weight: 500;
  color: var(--deep);
}

.home .pj h3 {
  margin: 6px 0 10px;
  font-size: 30px;
  line-height: 1.1;
}

.home .pj p {
  font-size: 18px;
  line-height: 1.6;
}

.home .links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  margin-top: 16px;
}

.home .lk {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  transition: color 0.2s ease;
}

.home .lk svg {
  width: 14px;
  height: 14px;
  color: var(--g3);
}

.home .lk:hover {
  color: var(--deep);
}

.home .list {
  display: grid;
  gap: 8px 28px;
}

.home .row {
  display: grid;
  grid-template-columns: 104px 1fr;
  gap: 18px;
  align-items: start;
  padding: 12px 0;
}

.home .th {
  display: block;
  width: 104px;
  height: 104px;
  overflow: hidden;
  border-radius: 7px;
  background: var(--tint);
}

.home .th img[src$='.svg'] {
  object-fit: contain;
  padding: 12px;
}

.home .rt b {
  display: block;
  font-size: 19px;
  font-weight: 700;
}

.home .rt .t {
  display: block;
  min-height: 4.5em;
  font-size: 18px;
  line-height: 1.5;
  color: var(--mute);
}

.home .row:hover b {
  color: var(--deep);
}

.home .sec-contact {
  margin: 0;
  padding: 64px 48px 80px;
  border-top: 0;
  color: var(--white);
  background: #0c3a54;
}

.home .sec-contact h2 {
  margin-bottom: 20px;
  color: var(--white);
  font-size: clamp(24px, 2.8vw, 36px);
}

.home .mail {
  display: inline-block;
  font-size: clamp(22px, 2.6vw, 34px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.035em;
  word-break: break-all;
}

.home .cl {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.home .sec-contact .btn {
  border-color: var(--white);
}

.home .side-foot {
  display: flex;
  gap: 24px;
}

.home .ci {
  display: inline-flex;
  color: var(--g3);
  transition: color 0.2s ease;
}

.home .ci:hover {
  color: var(--deep);
}

.home a.btn:hover {
  background: var(--sky);
  color: var(--ink);
  border-color: var(--sky);
}

.home a:focus-visible {
  outline: 3px solid var(--deep);
  outline-offset: 3px;
}

@media (width <= 900px) {
  .home .page {
    grid-template-columns: 1fr;
  }

  .home .side {
    position: static;
    height: auto;
    padding: 80px 24px 64px;
    gap: 32px;
  }

  .home .nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px 24px;
    margin-top: 32px;
  }

  .home .nav .bar {
    display: none;
  }

  .home .sec {
    padding: 48px 24px;
  }

  .home .main .sec:first-child {
    padding-top: 120px;
  }

  .home .sec-contact {
    padding: 48px 24px 64px;
  }
}
</style>
