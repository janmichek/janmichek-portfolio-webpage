# Jan Michek - Personal Portfolio

A modern portfolio website built with Nuxt 4, showcasing skills, projects, and professional experience. The site
features a clean, responsive design with a custom CSS architecture.

## Features

- **Modern Tech Stack**: Built with Nuxt 4 in SPA mode for optimal performance
- **Responsive Design**: Custom CSS using ITCSS methodology with PostCSS
- **Static Deployment**: Pre-rendered site hosted on Vercel
- **Visual Testing**: Automated visual regression testing with Percy
- **Multi-language Ready**: Configured for Czech locale (cs-CZ)
- **SEO Optimized**: Complete meta tags and social media integration

## Development

### Prerequisites

- Node.js 18+
- Bun package manager

### Setup

Install dependencies:

```bash
bun install
```

### Development Server

Start the development server on `http://localhost:8080`:

```bash
bun dev
```

### Code Quality

Run linting and formatting:

```bash
bun lint          # Run all linting (JS + CSS)
bun lint:fix      # Auto-fix linting issues
bun lint:js       # oxlint only
bun lint:style    # Biome (CSS) only
```

### Tests

Unit tests run with Vitest, end-to-end tests with Playwright. The Playwright
config starts the dev server automatically, so no separate process is needed:

```bash
bun test                 # Vitest
bun test:e2e             # Playwright (Chromium)
bun test:e2e:ui          # Playwright interactive UI
```

Install the browser once on a new machine:

```bash
bunx playwright install chromium
```

### Utilities

Utility scripts for development:

```bash
bun reset         # Clean reinstall and start dev server
bun reinstall     # Remove node_modules and reinstall
```

## Production

### Build

Generate static site for production:

```bash
bun generate
```

### Preview

Preview the production build locally:

```bash
bun preview
```

### Deployment

The site is deployed to Vercel on the janmichek.cz domain. Vercel builds and deploys the project automatically from
the connected repository. To produce the same static output locally:

```bash
bun generate
```

## Architecture

The application follows modern Vue.js patterns with:

- **Component Architecture**: Organized into App, Section, and utility components
- **CSS Methodology**: ITCSS structure with custom properties and PostCSS
- **State Management**: Reactive composables backed by local content modules

## Technologies

- **Framework**: Nuxt 4 (Vue 3)
- **Styling**: Custom CSS with PostCSS
- **Hosting**: Vercel (static pre-rendered output)
- **Tooling**: oxlint, Biome, bun

## License

Personal portfolio project - all rights reserved.
