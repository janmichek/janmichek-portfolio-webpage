# AGENTS.md

Conventions for working in this repository. Follow them even if you see older code that does not.

## Stack

Nuxt 4 + Vue 3 SFCs + TypeScript, PostCSS with CSS nesting and custom media,
Bun for tooling. Styles are hand-written CSS with design tokens; there is no
CSS framework.

## Commands

```bash
bun run dev        # local dev server on :8080
bun run lint:js    # oxlint
bun run lint:style # biome
bun run lint:css   # stylelint — enforces BEM
bun run test       # vitest
bun run test:e2e   # Playwright end-to-end (starts the dev server)
bun run check      # lint + vitest + fallow
```

Run `bun run check` before considering a change done.

## CSS & BEM

Class names are BEM and this is enforced by `stylelint.config.mjs` through a
local rule (`stylelint-bem-plugin.mjs`) that also resolves nested `&__element`
selectors.

Allowed shapes:

```
block
block__element
block--modifier
block__element--modifier
```

Rules:

1. Lowercase. Words inside a name are separated by a single `-`. Element is
   `__`, modifier is `--`.
   - Good: `app-card`, `app-card__title`, `app-card__title--large`
   - Bad: `app_card`, `appCard`, `AppCard`, `app-card__title__icon`
2. One level of element. Never `block__element__subelement`; make the
   subelement its own element or extract a new block.
3. A modifier never exists alone. It is always applied together with its base
   class (`class="app-card app-card--featured"`), and is styled as
   `.app-card--featured`, not as a new block.
4. Block names are unique and descriptive, and should match the component or
   page in kebab-case: `TheSidebar.vue` → `the-sidebar`, `AppTable.vue` →
   `app-table`. Do not add new generic blocks. Existing `header`, `footer`,
   `sidebar`, `layout` and `slide` blocks are legacy and should be renamed when
   you touch them. (`layout-*` in `_animations.css` is a Vue transition name,
   not a CSS class.)
5. No IDs, no `!important`.
6. Nest at most `block` → `&__element` → `&:state` / `&--modifier`. If you need
   more, the block is doing too much — extract a component.
7. Utility classes are the only exception: `u-*` (`u-container`, `u-grid`,
   `u-masonry`, `u-stretched-link`). Third-party classes (`swiper-*`) are
   allowed only when they come from a library; never style your own markup with
   a vendor prefix.

### Where styles live

- Prefer a single `<style scoped>` block in the component that owns the markup.
- Use `:deep()` only to reach DOM rendered by a third-party component
  (`Swiper`, `AOS`). `components/AppSwiper.vue` keeps a second, unscoped
  `<style>` block for Swiper's generated arrow markup; do not copy that
  pattern for new components.
- Shared primitives belong in `assets/styles/` (ITCSS-ish order: `settings`,
  `generic`, `elements`, `utilities`), not in page components.
- Page-level layout that only exists on one page may live in that page's
  `<style scoped>`.

### Values come from tokens

Structure comes from BEM; values come from CSS custom properties in
`assets/styles/settings/`. Use `var(--space-*)`, `var(--text-*)`,
`var(--ui-*)`, `var(--duration-*)` instead of hard-coded sizes and colors.
New one-off values are a smell — add a token or explain the exception.

## Vue conventions

- `<script setup lang="ts">` with typed props/emits for new components.
- Components are auto-imported; file prefix communicates role (`App*` shared
  UI, `The*` layout singletons).
- Do not add dependencies for styling.
