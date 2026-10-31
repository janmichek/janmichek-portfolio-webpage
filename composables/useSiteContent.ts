import * as portfolioContent from '~/data/portfolioContent'
import * as web3Content from '~/data/chatContent'
import { siteMeta } from '~/data/siteMeta'
import { resolveSiteVariant } from '~/data/siteVariant'

export function useSiteContent() {
  const config = useRuntimeConfig()
  const variant = resolveSiteVariant(config.public.siteVariant)
  const content = variant === 'portfolio' ? portfolioContent : web3Content

  return {
    ...content,
    siteMeta: siteMeta[variant],
  }
}
