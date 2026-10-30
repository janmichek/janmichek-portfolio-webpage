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
    title: 'Jan Michek - Frontend Developer | Portfolio',
    description: 'Senior frontend developer with 14 years of experience building fast, accessible and thoughtful web products.',
    role: 'Frontend developer',
    lead: [
      'I turn complex products into clear, fast',
      'and friendly web interfaces.',
    ],
    keywords: 'Jan Michek, frontend developer, frontend engineer, web developer, UI, UX, Vue, Nuxt, TypeScript, design systems, portfolio',
    jobTitle: 'Frontend Developer',
  },
}
