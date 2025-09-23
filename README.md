# Jan Michek - Personal Portfolio

A modern portfolio website built with Nuxt 4, showcasing skills, projects, and professional experience. The site
features a clean, responsive design with custom CSS architecture and Firebase integration for dynamic content
management.

## Features

- **Modern Tech Stack**: Built with Nuxt 4 in SPA mode for optimal performance
- **Responsive Design**: Custom CSS using ITCSS methodology with PostCSS
- **Firebase Integration**: Real-time database and hosting via Firebase
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
bun lint:js       # ESLint only
bun lint:style    # Stylelint only
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

Deploy to Firebase Hosting on janmichek.cz domain:

```bash
bun deploy
```

### Firebase Emulators

Run Firebase emulators locally for development:

```bash
bun emulators
```

## Architecture

The application follows modern Vue.js patterns with:

- **Component Architecture**: Organized into App, Section, and utility components
- **CSS Methodology**: ITCSS structure with custom properties and PostCSS
- **State Management**: Firebase real-time database integration

## Technologies

- **Framework**: Nuxt 4 (Vue 3)
- **Styling**: Custom CSS with PostCSS, Lost Grid System
- **Backend**: Firebase (Database, Hosting)
- **Tooling**: ESLint, Stylelint, bun

## License

Personal portfolio project - all rights reserved.
