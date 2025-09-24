# CSS Architecture Concept: A Tailwind Alternative Based on Simplicity

## The Origins of Utility-First CSS: A Journey Back to Simplicity

Over the past few years, Tailwind CSS has evolved from a simple utility framework into a complex ecosystem. While it
brought innovative ideas to CSS architecture, its growing complexity - from setup to learning curve - has made it
challenging for many developers to adopt effectively.

Learn CSS, Save Deps!

Yes, css is hard, So easy to play with, but super hard to make system and maintain, which TW solves nicely.
And this is my personal documentation, for anyone including LLM model agents.

My personal journey with Tailwind spans multiple attempts. The first experience left me unconvinced about its benefits.
Even after giving it another chance later with a fresh perspective, I still found myself questioning whether its
complexity was truly justified. However, these experiences weren't wasted - they helped shape my understanding of what
makes CSS architecture maintainable and efficient.

This led me to explore an alternative approach: returning to fundamental CSS principles while incorporating the best
practices learned from various methodologies. The goal? To create a simpler, more maintainable CSS architecture that
leverages native tools and combines proven patterns into an optimal solution.


[//]: # (Tailwind grow so complex, right? not easy to setup, learning curve,)

[//]: # (I tried first time, wasnt aamazed. Second after long time and didnt convince me. I learnt something tho)

[//]: # (So this is back to the roots. Le'ts use as most native tools as possible. Lets take from every past concept the best amc create best practivcses composite)

## Principles

1. Component aproach React or Vue
1. [ITCSS Structure](#1-itcss-inverted-triangle-css-structure)
2. [CSS Variables System](#2-css-custom-properties-variables-system)
3. [Semantic UI Mapping](#3-semantic-ui-mapping)
4. [Automatic Theme Support](#4-automatic-theme-support)
5. [Nested Syntax](#5-nested-syntax)
6. [Custom Media Queries](#6-custom-media-queries)
7. Apply class

[//]: # ()

[//]: # (2. &#40;Variables&#41; System**)

[//]: # ()

[//]: # (- Component-based naming &#40;with [BEM methodology]&#40;https://getbem.com/&#41; highly recommended but not mandatory&#41;)


[//]: # (5. [Nested Syntax]&#40;#5-nested-syntax&#41;)

[//]: # (   **Nested Syntax** to work around repeating BEM classes)

[//]: # (6. **Custom Media Queries**)

[//]: # (4. **Semantic Component Naming** taken from BEM)

[//]: # ()

[//]: # (- Semantic HTML with elements ideally having single, meaningful classes)

[//]: # (-)

[//]: # (   3. **Semantic UI Mapping** &#40;taken from &#41;)

[//]: # (- Semantic design tokens that express purpose, not appearance &#40;taken from tailwind and bootstrap&#41;)

[//]: # (- [ITCSS]&#40;https://itcss.io/&#41; architecture for logical organization)

[//]: # (- Predictable naming conventions, smartly reuse naming, with full words over abbreviations)

[//]: # (- Utilities as a spark, not utility-first development)

## Overview

This project demonstrates a CSS architecture that takes **the best from many frameworks** while providing an alternative
to [Tailwind CSS](https://tailwindcss.com/), focusing on **simplicity and native tools** over bringing new layer the
utility-first
approach that has made Tailwind grow so large it has "become something else."

While [Tailwind](https://tailwindcss.com/) started as a simple utility framework, it has evolved into a complex
ecosystem with thousands of classes, arbitrary value syntax, and increasing complexity. This concept returns to
fundamental CSS principles while maintaining developer productivity, borrowing proven patterns
from [Bootstrap](https://getbootstrap.com/), [BEM](https://getbem.com/), and [ITCSS](https://itcss.io/).

## Core Philosophy

**Readability over brevity** - Following the principle from
the [Frontend Developer Manifesto](https://github.com/janmichek/frontend-developer-manifesto): "It's mainly about DX and
Optimizing code for readability - we spend much more time looking at the code."

Instead of memorizing hundreds of utility classes, this approach uses semantic design tokens that express purpose, not
appearance. Component-based styling (with [BEM methodology](https://getbem.com/) highly recommended but not mandatory)
provides [ITCSS](https://itcss.io/) architecture for logical organization. Predictable naming conventions with full
words over abbreviations ensure semantic HTML with elements ideally having single, meaningful classes. Utilities serve
as a spark, not utility-first development.

## My Solution vs Tailwind: 4-Quadrant Comparison

### ✅ My Solution Pros

- **Separation of Concerns** - HTML focuses on structure, CSS on presentation
- **Performance** - Smaller CSS bundle, better compression, faster builds
- **No Memorization** - No need to memorize hundreds of utility classes
- **Better IDE Support** - Cleaner autocomplete, readable templates
- **Standards Compliance** - Uses standard CSS features, progressive enhancement
- **Flexibility** - Easy complex layouts without arbitrary values
- **Design Systems** - Better suited for component-based styling

### ❌ My Solution Cons

- **More Setup** - Requires understanding of ITCSS, BEM, PostCSS configuration
- **Jumping Between Files** - Need to switch between template and style blocks
- **Learning Curve** - Developers need to understand CSS fundamentals
- **Not Trendy** - Goes against current utility-first movement

### ✅ Tailwind Pros

- **Unified Development** - Everything has its place, consistent approach
- **Class Tokens** - Property and value at once, smart naming system
- **Rapid Prototyping** - Once setup, development is fast and fun
- **Less Jumping** - Styles directly in template, no switching files
- **Popular** - Large community, lots of resources

### ❌ Tailwind Cons

- **Strange Class Names** - eg. `grid`, confusing abstractions
- **Figma to Tailwind** - Design handoff complexity
- **Class Hell** - So many classes (editor plugin needed to hide them)
- **Responsive Classes** - Tragedy of responsive breakpoint classes
- **CSS Inspector Hell** - Not as straightforward as CSS variables
- **Mixing Concepts** - Style and template code mixed together
- **Poor Code Orientation** - Hard to understand structure at glance
- **Still Need CSS Knowledge** - Must understand specificity, flex, grid
- **Setup Overhead** - Small projects suffer from configuration complexity

## PostCSS Configuration

The build system uses several [PostCSS](https://postcss.org/) plugins for enhanced functionality:

- [@csstools/postcss-global-data](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-global-data) -
  Global variables
- [postcss-custom-media](https://github.com/postcss/postcss-custom-media) - Custom breakpoints
- [postcss-apply-class](https://github.com/pascalduez/postcss-apply) - @apply functionality
- [postcss-nested](https://github.com/postcss/postcss-nested) - Nested CSS syntax

```
 postcss: {
    plugins: {
      '@csstools/postcss-global-data': {
        files: ['assets/styles/settings/_theme.css'],
      },
      'postcss-custom-media': {},
      'postcss-apply-class': {},
      'postcss-nested': {},
    },
  },
```

## Key Architecture Principles

### 1. Component aproach React or Vue

stles needs to be isolated as well as global stylesheet

### 1. ITCSS (Inverted Triangle CSS) Structure

The CSS is organized following ITCSS principles, from generic to specific:

```
/* From main.css - ITCSS Layer Organization */
@import "settings/_theme.css";      /* Variables & config */
@import "settings/_mapping.css";   /* Design token mapping */
@import "generic/_animations.css"; /* Generic styles */
@import "generic/_reset.css";      /* CSS reset */
@import "elements/_*.css";         /* Element defaults */
@import "utilities/_*.css";        /* Utility classes */
```

### 2. [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (Variables) System

Instead of hardcoded values scattered throughout utility classes, all design tokens are centralized. This provides a
consistent system where design decisions are made once and applied consistently across the entire project.

```
/* Design tokens - express look, not to to be use directly in temlates */
--color-sky: #78c4e4;
--color-teal: #6fbad8;
--color-carbon: #082626;

/* Typography scale (consistent sizing nomenclature: xs, sm, md, lg, xl) */
--text-sm: 0.875rem;
--text-base: 16px;   
--text-lg: 1.375rem; 

/* Spacing system - exception from abbrevations */
--space-xs: 8px;
--space: 20px;      
--space-lg: 32px;
```

### 3. Semantic UI Mapping

Raw design tokens are mapped to semantic UI variables for better maintainability. Following the manifesto principle: "
Classname should express what element is, not what it looks like", this creates a semantic layer that abstracts visual
properties into meaningful, purpose-driven names.

```
/* Semantic mapping layer - purpose over appearance */
--ui-primary: var(--color-sky);        /* Primary brand color */
--ui-secondary: var(--color-cream);    /* Secondary surface color */
--ui-text-primary: var(--color-teal);  /* Primary text color */
--ui-text-secondary: var(--color-carbon); /* Secondary text color */
--ui-bg: var(--ui-secondary);          /* Default background */
--ui-text: var(--ui-text-secondary);   /* Default text */
```

### 5. Nested Syntax

Using [PostCSS nested](https://github.com/postcss/postcss-nested) syntax to work around repeating BEM classes while
maintaining readable, hierarchical CSS structure.
Due to using ideally single on element, there is no specificity fight

```
.the-header {
  padding: var(--space-xl) var(--space-xl) var(--space-2xl);

  @media (--tablet) {
    padding: var(--space-2xl);
  }

  &__heading {
    /* Layout */
    text-align: center;

    /* Typography */
    font-size: var(--text-5xl);

    @media (--tablet) {
      white-space: nowrap;
    }
  }
}
```

### 6. Custom Media Queries

Consistent breakpoint system using [PostCSS custom media](https://github.com/postcss/postcss-custom-media) with semantic
names that eliminate magic numbers and provide meaningful breakpoint references throughout the codebase.

```
@custom-media --mobile (min-width: 480px);   /* Mobile-first approach */
@custom-media --tablet (min-width: 768px);   /* Tablet breakpoint */
@custom-media --desktop (min-width: 992px);  /* Desktop breakpoint */
```

## Semantic HTML

Elements should ideally have **single, meaningful classes** that express their purpose:

```html
<!-- ✅ Good: Single, semantic classes -->
<article class="blog-post">
  <header class="post-header">
    <h1 class="post-title">Article Title</h1>
    <time class="post-date">2024-01-15</time>
  </header>
  <div class="post-content">
    <p>Article content...</p>
  </div>
</article>

<!-- ❌ Bad: Multiple utility classes -->
<article class="bg-white p-6 rounded shadow border">
  <header class="mb-4 border-b">
    <h1 class="text-2xl font-bold">Article Title</h1>
  </header>
</article>
```

### 4. Automatic Theme Support

Dark mode is handled automatically
through [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), not by duplicating classes. This
approach eliminates the need for separate dark mode classes while maintaining full theme control.

```

@custom-media --dark (prefers-color-scheme: dark);


@media (--dark) {
  :root {
    --ui-bg: var(--color-carbon);        /* Dark background */
    --ui-text: var(--color-cream);       /* Light text for contrast */
    --ui-text-primary: var(--color-cream); /* Consistent light text */
    --ui-text-muted: var(--color-pale);  /* Muted text for dark theme */
  }
}
```

Use in template

```
    @media (--dark) {
      color: var(--ui-text-primary);
    }
```

## Naming Conventions

### Good Examples

Consolidated naming practices for maintainable CSS:

#### 1. Semantic Component Naming

Every styled element needs a class name that expresses what it is, not how it looks:

```
/* ✅ Good: Semantic naming that expresses purpose */
.preview-file__video { width: 100%; }  /* Clear purpose */
.element--warning {}                   /* State, not appearance */
.navigation-menu {}                    /* Full words, not abbreviated */
.user__link {}                        /* Simple, not overly nested */

/* ❌ Bad: Visual-based naming */
.element--yellow {}                    /* Describes appearance */
.btn-dbu {}                           /* Cryptic abbreviations */
.user__list-item-link {}              /* Overly nested */
```

`components/TheHeader.vue:39-88`

#### 2. Utility Classes as a Spark, Not Utility-First

Utilities should complement component-based styling, not replace it:

```
/* ✅ Good: Utilities as helpers */
.u-container        /* Layout utility - full word, not abbreviated */
.u-grid-2          /* Grid utility with variant - predictable pattern */
.u-center          /* Alignment utility - describes what it does */
.button--xl        /* Component variant */
```

#### 3. Element Class Naming ([Bootstrap](https://getbootstrap.com/) Pattern)

```
/* ✅ Good: Reusable heading classes alongside native elements */
h1, .h1 { font-size: var(--text-6xl); }  /* Largest heading */
h2, .h2 { font-size: var(--text-4xl); }  /* Section heading */
h3, .h3 { font-size: var(--text-4xl); }  /* Subsection heading */

/* ✅ Allows semantic HTML with visual flexibility */
<!-- ✅ Semantic HTML with flexible styling -->
<span class="h2">Visually looks like h2 but semantically appropriate</span>
```

### Antipatterns (What to Avoid)

#### 4. Dependent Selectors

```
/* ❌ Bad: Dependent selectors create fragile CSS */
.button .icon {}     /* Icon depends on being inside button */
.card .title {}      /* Title depends on card context */
.nav ul li a {}      /* Deep nesting creates dependencies */

/* ✅ Good: Independent, reusable classes */
.button__icon {}     /* Self-contained icon class */
.card__title {}      /* Independent title class */
.nav__link {}        /* Standalone navigation link */
```

## Component Architecture

### Scoped Styles with Global Utilities

Components use scoped CSS for component-specific styles while leveraging global utilities:

```vue

<style scoped>
  @import "assets/styles/utilities/_grid.css";

  .the-header {
    /* Component-specific styles with proper property ordering */
    /* Layout first */
    display: block;
    width: 100%;

    /* Spacing */
    padding: var(--space-xl) var(--space-xl) var(--space-2xl);

    /* Visual */
    background: var(--ui-bg);

    &__container {
      /* Utility class application - reusing global patterns */
      @apply .u-container;
    }
  }
</style>
```

`components/TheHeader.vue:36-51`

### Layout??

Use Grid, still, you cannot go aroun d grid even with TW

### Clean Template Markup

Templates remain semantic and clean without utility class pollution:

```vue

<template>
  <header class="the-header">
    <div class="the-header__container">
      <div class="the-header__row">
        <div class="the-header__avatar">
          <!-- Clean, semantic HTML -->
        </div>
      </div>
    </div>
  </header>
</template>
```

`components/TheHeader.vue:5-33`

## Implementation Examples

### Grid System (Predictable & Semantic)

```
/* Simple, predictable grid utilities with consistent naming */
.u-grid {                                    /* Base grid utility */
  display: grid;
  gap: var(--space);
}

.u-grid-2 {                                 /* 2-column variant */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space);
}

.u-grid-3 {                                 /* 3-column variant */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space);
}
```

`assets/styles/utilities/_grid.css:15-36`

### Typography System (Following Property Order Guidelines)

```
/* Consistent typography with semantic classes and proper ordering */
h1, .h1 {
  /* Typography properties grouped together */
  font-family: var(--font-sans);    /* Font family first */
  font-size: var(--text-6xl);       /* Size second */
  line-height: 1;                   /* Line height third */

  /* Spacing properties */
  margin: 0 0 var(--space-lg) 0;    /* Consistent margin pattern */
}
```

`assets/styles/elements/_h.css:9-14`

### Theme Variables (Semantic Over Visual)

```
/* Semantic color system - purpose over appearance */
--ui-primary: var(--color-sky);           /* Primary action color */
--ui-text: var(--ui-text-secondary);      /* Default text color */
--ui-bg: var(--ui-secondary);             /* Default background */

/* This allows themes to change while maintaining semantic meaning */
```

`assets/styles/settings/_theme.css:36-44`

## Component Naming Strategy

### Minimum Two Words Rule

Every component should have **at least two words** to avoid conflicts and improve clarity:

```
/* ✅ Good: Descriptive component names */
.the-header          /* Site header component */
.project-link        /* Project link component */
.app-card            /* Application card component */
.title-section       /* Title section component */

/* ❌ Bad: Single word components */
.header              /* Too generic */
.link                /* Conflicts with element */
.card                /* Not descriptive enough */
```

`components/TheHeader.vue`, `components/ProjectLink.vue`, `components/AppCard.vue`

### State Classes

Use clear state indicators for component states:

```
/* ✅ Good: Clear state indicators */
.is-loaded           /* Component has finished loading */
.has-error           /* Component encountered an error */

/* ❌ Bad: Present tense is ambiguous */
.loading             /* Is it loading or a loading indicator? */
.error               /* Is this an error or error handling? */
```

## Avoiding Technical Debt

### No Abbreviations

Prioritize full words over abbreviations for better readability:

```
/* ✅ Good: Full semantic words */
.navigation-menu
.container-max-width
.button-primary

/* ❌ Bad: Unclear abbreviations */
.nav-menu            /* nav could mean navigate or navigation */
.cont-max-w          /* Unclear what cont means */
.btn-prim            /* Cryptic abbreviations */
```

### Consistent Sizing Nomenclature

Use predictable size naming across all utilities:

```
/* ✅ Good: Consistent size scale */
--space-xs: 8px;
--space-sm: 12px;
--space: 20px;       /* Base size */
--space-lg: 32px;
--space-xl: 40px;

.u-grid-2           /* 2 columns */
.u-grid-3           /* 3 columns */
.u-grid-4           /* 4 columns */

/* ❌ Bad: Inconsistent sizing */
--space-tiny: 8px;
--space-medium: 12px;
--space-big: 32px;

.u-grid-double      /* Unclear size */
.u-grid-triple      /* Not scalable */
```

## Conclusion

This CSS architecture demonstrates that **simplicity can coexist with productivity**. By following principles from
the [Frontend Developer Manifesto](https://github.com/janmichek/frontend-developer-manifesto) and leveraging CSS custom
properties, PostCSS features, and thoughtful organization, we create maintainable stylesheets that scale better than
utility-first approaches.

**Key Principles Applied:**

- **Readability over brevity** - Every class name explains its purpose
- **Semantic naming** - Classes express what they are, not how they look
- **Consistent property ordering** - Predictable CSS structure
- **Full words over abbreviations** - No cryptic class names
- **Minimum two words** - Clear component identification

The key is finding the right balance between utility and semantic styling, using each approach where it makes the most
sense rather than forcing everything into a utility-first paradigm that prioritizes brevity over maintainability.

## Real-World Example: Aescan CSS Classes Analysis

Based on analysis of
the [Aescan GitHub repository](https://github.com/aeternity/aescan/tree/69d26e48f7142cbf849ae68214e550fc91c76ad5/src),
here's a comprehensive list of CSS classes that demonstrates excellent naming conventions and architecture principles:

Blocks (last word shoud be ideally UI-like, ideally something taken from HTML)

default-layout
header
button
panel
card
dashboard
line-chart
account-activities-panel
hint-tooltip
chip
link

Elements

- approach by purpose
- aproach naming by ui part. Both are Valid, prioritize UI

__controls (container for buttons or other controls)
__body (container that comes with header and footer)
__container (generic container x wrap/wrapper)
__account-activities-table (inherited from used Vue component)
__paragraph (inherited from html)
__hamburger (inherited from know concepts)

## Not Recommended Words for Naming

Here are common mistakes when naming variables or functions and suggestions on how to fix them. These examples may be
confusing, too general, quickly go into conflict, or express subjective evaluation. There may be cases where these would
be valid of course:

### ❌ Avoid → ✅ Use Instead

**data** → **details**

```css
/* ❌ Too generic */
.user__data {
}

/* ✅ More specific */
.user__details {
}

.user__profile {
}
```

**info** → **description**

```css
/* ❌ Vague purpose */
.product__info {
}

/* ✅ Clear purpose */
.product__description {
}

.product__specifications {
}
```

**type** → **variant** / **[specific]Type**

```css
/* ❌ Conflicts easily */
.button--type {
}

/* ✅ Clear meaning */
.button--variant {
}

.button--primaryType {
}
```

**item** → **[specific]** / **[specific]Item**

```css
/* ❌ Generic */
.list__item {
}

/* ✅ Specific */
.menu__link {
}

.product__card {
}

.todo__listItem {
}
```

**value** → **formattedValue** / **[specific]Value**

```css
/* ❌ Too broad */
.input__value {
}

/* ✅ More descriptive */
.input__formattedValue {
}

.price__displayValue {
}
```

**result** → **response** / **[specific]Result**

```css
/* ❌ Unclear */
.search__result {
}

/* ✅ Clearer */
.search__response {
}

.api__searchResult {
}
```

**text** → **heading** / **paragraph** / **[specific]Text**

```css
/* ❌ Generic */
.card__text {
}

/* ✅ Specific */
.card__heading {
}

.card__paragraph {
}

.card__bodyText {
}
```

**box** → **container** / **input** / **[specific]Box**

```css
/* ❌ Ambiguous */
.form__box {
}

/* ✅ Clear purpose */
.form__container {
}

.form__input {
}

.form__textBox {
}
```

**pretty** → **formatted** / **[specific]Style**

```css
/* ❌ Subjective */
.code--pretty {
}

/* ✅ Objective */
.code--formatted {
}

.code--highlighted {
}
```

## Component Whitespace Isolation

For proper component isolation, component root element should be free of whitespacing. Spacing of component should be
done on parent level. This should be done on styles level. No need to parametrize styles through props.

### ❌ Bad: Props for spacing

```vue

<template>
  <user-item>
    <user-item>
      <user-item :no-bottom-padding="true">
</template>
```

### ✅ Good: Parent-level spacing

```vue

<template>
  <user-item class="user-list__item">
    <user-item class="user-list__item">
      <user-item class="user-list__item">
</template>

<style>
  .user-list__item {
    margin: 16px;

    &:last-of-type {
      margin: 0;
    }
  }
</style>
```

## Vue-Specific Best Practices

### Keep Component Length Reasonable

As for the method length, components easily grow larger. In most cases, there is no such thing as over-componentization.
The opposite is true. Let's keep components on reasonable length. Personal preference: 150 lines of code.

### Write Events in Past Tense

Event represents action and bound method represents reaction. So the way that you read is: when something happened →
then do this. This is a self-imposed rule, but it's nothing against Vue styleguide.

#### ❌ Bad: Present tense events

```vue

<button @send-button-press="uploadImage()"/>
```

#### ✅ Good: Past tense events

```vue

<button @send-button-pressed="uploadImage()"/>
```

### Less Logic in the Template

Keep the template part free from logic. A nice place to accommodate logic is in computed block. If the condition should
be a composite of 2 or more conditions, extract them to computed. The new name of the computed condition should reflect
what UI is doing.

#### ❌ Bad: Complex template logic

```vue

<template>
  <button v-if="!isLoading || userCount > 1 && isTraining">
</template>
```

#### ✅ Good: Extract to computed

```vue

<template>
  <button v-if="isButtonHidden"/>
</template>

<script>
  computed: {
    isButtonHidden()
    {
      return this.isLoading || this.userCount > 1 && this.isTraining
    }
  }
</script>
```

### Components Naming

Components are written in PascalCase, minimum 2 words. Component name should consist of Domain of the feature and
Element type (preferably imitating known UI patterns). Component can also be named with the modifier state. Mostly when
componentizing complex state behaviour.

`dialogue__message--delivered` → `DialogueMessageDelivered.vue`

#### ❌ Bad: Generic or unclear names

```
ComingSoon.vue
LayoutLogin.vue
```

#### ✅ Good: Domain + Element pattern

```
LoginLayout.vue
ChatForm.vue
BotCard.vue
DialogueActionMenu.vue
TrainingButton.vue
```

__warning
__row
__cell (X data)
__logo
__separator
__heading
__title
__loader
__blank (x Empty)

Modifiers
--active
--success (take from purpose)
--disabled (take from html)
--horizontal (take from UI concept)
--muted (tailwind)
--closed (X --open)
--collapsed (X --expanded)
--lg
--primary
--light
--error

Good Naming Examples from This Selection:

Semantic Elements

- __powered-by - clearly expresses purpose (attribution section)
- __network-select - describes functionality (network selection component)
- __blank-state - indicates empty/placeholder state
- __loader-panel - loading indicator container

Descriptive Modifiers

- --exact-active - precise state indicator
- --link-error - error state for links
- --horizontal - layout orientation
- --text-link - link that appears as text

Consistent Size Scale

- --sm, --lg, --2xl - predictable sizing nomenclature

These examples demonstrate excellent BEM naming that expresses purpose rather than appearance.

### **CSS Architecture Observations from Aescan**

1. **Consistent BEM Methodology**: The codebase follows BEM (Block Element Modifier) naming convention with:
    - Double underscores for elements (`__`)
    - Double hyphens for modifiers (`--`)

2. **Semantic Component Names**: Every class name clearly expresses its purpose:
    - `footer__powered-by` - clearly indicates footer section for attribution
    - `header__network-select--open` - specific state of a header component
    - `dashboard__paragraph--horizontal` - layout variant of dashboard text

3. **Minimal Utility Classes**: Only 8 utility classes found, prefixed with `u-`
    - Utilities complement components rather than replacing them
    - Typography uses simple numbered hierarchy (`h1`, `h2`, etc.)

4. **State Management**: State modifiers use BEM pattern:
    - `--open`, `--active`, `--exact-active`
    - Clear indication of component states

5. **Component Isolation**: Each component maintains its own namespace:
    - `button__icon` vs `header__icon` - same element type, different contexts
    - No global conflicts or dependencies

### **Key Takeaways from Aescan Implementation**

**Total Classes Analyzed: 70+**

- **Component Classes**: 60+ BEM-style semantic classes
- **Utility Classes**: 8 purposeful utilities
- **System Classes**: 1 framework class

This represents a **well-structured, maintainable CSS architecture** that:

✅ **Prioritizes readability** - Every class name is self-documenting
✅ **Follows semantic naming** - Classes express purpose, not appearance
✅ **Maintains component isolation** - No style leakage between components
✅ **Uses utilities sparingly** - Utilities complement, don't dominate
✅ **Scales effectively** - Clear patterns that new developers can follow

This real-world example validates the architectural principles outlined in this document, demonstrating that semantic,
component-based CSS can deliver both maintainability and developer productivity without relying on utility-first
frameworks.
