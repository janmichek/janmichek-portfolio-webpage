export type SiteVariant = 'web3' | 'portfolio'

export interface SiteMeta {
  variant: SiteVariant
  url: string
  title: string
  description: string
  role: string
  lead: string[]
  keywords: string
  jobTitle: string
}

export const siteMeta: Record<SiteVariant, SiteMeta> = {
  web3: {
    variant: 'web3',
    url: 'https://janmichek.cz',
    title: 'Jan Michek - Web3 Full-Stack Engineer | Portfolio',
    description: 'Senior engineer with 14 years of experience, including 5+ years of building Web3 experiences on smart contracts.',
    role: 'Web3 full-stack engineer',
    lead: [
      'I design and build with Agents, Web3 and UX',
      'to the product that is joy to use.',
    ],
    keywords: 'Jan Michek, Web3, Solidity, frontend, fullstack, engineer, developer, portfolio, Vue, Nuxt, blockchain',
    jobTitle: 'Web3 Full-Stack Engineer',
  },
  portfolio: {
    variant: 'portfolio',
    url: 'https://portfolio.janmichek.cz',
    title: 'Jan Michek - Full-Stack Engineer | Portfolio',
    description: 'Senior full-stack engineer with 14 years of experience building fast, accessible and thoughtful web products.',
    role: 'Full-stack engineer & frontend specialist',
    lead: [
      'I turn complex products into clear, fast',
      'and friendly web interfaces.',
    ],
    keywords: 'Jan Michek, full-stack engineer, frontend, web developer, product engineer, UX, Vue, Nuxt, TypeScript, portfolio',
    jobTitle: 'Full-Stack Engineer',
  },
}
