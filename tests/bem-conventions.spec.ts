// @vitest-environment node
import { fileURLToPath } from 'node:url'
import stylelint from 'stylelint'
import { describe, expect, it } from 'vitest'

const configFile = fileURLToPath(new URL('../stylelint.config.mjs', import.meta.url))

async function lintVueStyle(css: string) {
  const result = await stylelint.lint({
    code: `<template><div /></template>\n<style scoped>\n${css}\n</style>`,
    codeFilename: 'fixture.vue',
    configFile,
  })

  return result.results.flatMap(file => file.warnings)
}

function bemWarnings(warnings: Awaited<ReturnType<typeof lintVueStyle>>) {
  return warnings.filter(warning => warning.rule === 'bem/selector')
}

describe('BEM convention', () => {
  it('accepts block, element and modifier names, including nested `&` selectors', async () => {
    const warnings = await lintVueStyle(`
      .app-card {
        &__title { color: red; }
        &__title--large { color: red; }
        &:hover { color: red; }
        &:hover &__title { color: blue; }
      }
      .app-card--featured { color: red; }
    `)

    expect(bemWarnings(warnings)).toHaveLength(0)
  })

  it('exempts utility and third-party prefixes', async () => {
    const warnings = await lintVueStyle(`
      .u-container { color: red; }
      .swiper-button-prev { color: red; }
    `)

    expect(bemWarnings(warnings)).toHaveLength(0)
  })

  it('rejects snake_case and camelCase class names', async () => {
    const warnings = await lintVueStyle(`
      .app_card { color: red; }
      .appCard { color: red; }
    `)

    expect(bemWarnings(warnings).map(warning => warning.text)).toEqual([
      expect.stringContaining('app_card'),
      expect.stringContaining('appCard'),
    ])
  })

  it('rejects invalid nested element and modifier names', async () => {
    const warnings = await lintVueStyle(`
      .app-card {
        &__Title { color: red; }
        &__title--Large { color: red; }
        &__title__nested { color: red; }
      }
    `)

    expect(bemWarnings(warnings)).toHaveLength(3)
  })

  it('restricts nesting depth to block > element > state', async () => {
    const warnings = await lintVueStyle(`
      .app-card {
        &__title {
          &:hover {
            span { color: red; }
          }
        }
      }
    `)

    expect(warnings.some(warning => warning.rule === 'max-nesting-depth')).toBe(true)
  })
})
