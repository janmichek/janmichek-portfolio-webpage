import { describe, expect, it } from 'vitest'
import { groups } from '~/data/karabiner'

describe('karabiner data', () => {
  it('keeps group ids unique and populated', () => {
    const ids = groups.map(group => group.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(groups.length).toBeGreaterThan(0)

    for (const group of groups) {
      expect(group.id).toBeTruthy()
      expect(group.title).toBeTruthy()
      expect(group.rows.length).toBeGreaterThan(0)
    }
  })

  it('keeps every row complete and valid', () => {
    const hints = ['tap', 'hold']

    for (const group of groups) {
      for (const row of group.rows) {
        expect(row.keys.length).toBeGreaterThan(0)
        expect(row.action).toBeTruthy()
        for (const key of row.keys) {
          expect(key).toBeTruthy()
        }
        if (row.hint !== undefined) {
          expect(hints).toContain(row.hint)
        }
      }
    }
  })

  it('keeps row keys unique within a group', () => {
    for (const group of groups) {
      const keys = group.rows.map(row => `${row.keys.join('+')}|${row.hint ?? ''}|${row.action}`)
      expect(new Set(keys).size).toBe(keys.length)
    }
  })
})
