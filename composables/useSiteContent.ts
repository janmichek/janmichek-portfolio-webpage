import * as portfolioContent from '~/data/portfolioContent'
import { siteMeta } from '~/data/siteMeta'

export function useSiteContent() {
  return {
    ...portfolioContent,
    siteMeta,
  }
}
