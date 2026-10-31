import type { SiteVariant } from './siteMeta'

export function resolveSiteVariant(value: unknown): SiteVariant {
  return value === 'portfolio' ? 'portfolio' : 'web3'
}
