<script setup lang="ts">
const { chatContact, chatProfile, siteMeta } = useSiteContent()

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'goods', label: 'Goodies' },
  { id: 'contact', label: 'Contact' },
]

const { active, jumping, go } = useScrollSpy(navItems.map(item => item.id))
</script>

<template>
  <div class="home site-theme">
    <div class="page">
      <site-sidebar
        :name="chatProfile.name"
        :role="siteMeta.role"
        :avatar="chatProfile.avatar"
        :contact="chatContact"
        :lead="siteMeta.lead"
        :items="navItems"
        nav-label="Sections"
        :active-id="active"
        :jumping="jumping"
        @select="go"/>
      <home-bands/>
    </div>
  </div>
</template>

<style>
.home .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

.home.site-theme h2 {
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

.home .card {
  padding: 24px;
  border-radius: 10px;
  background: var(--tint);
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
  padding: 64px 48px;
  border-top: 0;
  color: var(--white);
  background: var(--deep);
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

.home a.btn:hover {
  background: #fff;
  color: var(--deep);
  border-color: #fff;
}

@media (--dark) {
  .home a.btn:hover {
    background: var(--color-carbon);
    color: var(--color-sky);
    border-color: var(--color-carbon);
  }
}

.home a:focus-visible {
  outline: 3px solid var(--deep);
  outline-offset: 3px;
}

@media (width <= 900px) {
  .home.site-theme .page {
    grid-template-columns: 1fr;
  }

  .home .sec {
    padding: 48px 24px;
  }

  .home .main .sec:first-child {
    padding-top: 120px;
  }

  .home .sec-contact {
    padding: 48px 24px;
  }
}
</style>
