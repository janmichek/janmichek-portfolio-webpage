import * as portfolioContent from '~/data/portfolioContent'
import * as web3Content from '~/data/chatContent'
import { siteMeta, type SiteVariant } from '~/data/siteMeta'

export function useSiteContent() {
  const config = useRuntimeConfig()
  const variant: SiteVariant = config.public.siteVariant === 'portfolio' ? 'portfolio' : 'web3'
  const content = variant === 'portfolio' ? portfolioContent : web3Content

  return {
    ...content,
    siteMeta: siteMeta[variant],
  }
}
