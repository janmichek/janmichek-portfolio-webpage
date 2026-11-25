export interface SiteMeta {
  url: string
  title: string
  description: string
  role: string
  lead: string[]
  keywords: string
  jobTitle: string
}

export const siteMeta: SiteMeta = {
  url: 'https://janmichek.cz',
  title: 'Jan Michek - Senior Fullstack Engineer | Portfolio',
  description: 'Senior fullstack engineer with 14 years of experience building fast, accessible and thoughtful web products.',
  role: 'Senior Fullstack Engineer',
  lead: [
    'I turn complex products into clear, fast',
    'and friendly web interfaces.',
  ],
  keywords: 'Jan Michek, senior fullstack engineer, frontend developer, web developer, UI, UX, Vue, Nuxt, TypeScript, design systems, portfolio',
  jobTitle: 'Senior Fullstack Engineer',
}
