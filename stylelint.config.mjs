/**
 * BEM enforcement for CSS and Vue SFC styles.
 *
 * Contract (see AGENTS.md):
 *   block
 *   block__element
 *   block--modifier
 *   block__element--modifier
 *
 * Utility classes (`u-*`) and third-party classes (`swiper-*`) are exempt
 * through `allowPrefixes`. Nested `&__element` / `&--modifier` selectors are
 * resolved by the local plugin before checking, which the built-in
 * `selector-class-pattern` rule does not do.
 */
const BEM =
  '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$'

export default {
  extends: ['stylelint-config-recommended'],
  plugins: ['./stylelint-bem-plugin.mjs'],

  rules: {
    // The rule that actually enforces BEM.
    'bem/selector': [
      BEM,
      {
        allowPrefixes: ['u-', 'swiper-'],
      },
    ],

    // BEM exists to keep specificity flat; these keep it honest.
    'selector-max-id': 0,
    'declaration-no-important': true,
    'max-nesting-depth': [
      2,
      {
        ignoreAtRules: ['media', 'supports', 'container'],
        message:
          'Nest at most block > element > modifier/state. If you need more, the block is doing too much.',
      },
    ],

    // Vue scoped styles use :deep()/:global()/:slotted().
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['deep', 'global', 'slotted'] },
    ],

    // Not BEM-related and unreliable once CSS nesting is resolved.
    'no-descending-specificity': null,
  },

  ignoreFiles: [
    'node_modules/**',
    '.nuxt/**',
    '.output/**',
    'dist/**',
    'coverage/**',
  ],

  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      // Reset targets framework mount points by id on purpose.
      files: ['assets/styles/generic/_reset.css'],
      rules: {
        'selector-max-id': null,
      },
    },
  ],
}
