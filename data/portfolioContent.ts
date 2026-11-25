// fallow-ignore-file duplicate-export -- re-exports shared projects and goodies for useSiteContent
import { baseProfile, goodies, projects, createContact } from './sharedContent'

export { goodies, projects }

export const profile = {
  ...baseProfile,
  role: 'Senior Fullstack Engineer',
}

export const summary = [
  'Senior fullstack engineer with 14 years of experience building web products end to end. I focus on the part people actually touch: interfaces that are fast, accessible and easy to use.',
  'My work sits where design and engineering meet. I care about the details, the people using the product and the codebase that has to live on after launch.',
  'I have led frontend development on data-heavy applications, built design systems and helped teams turn rough ideas into shipped features. I also enjoy the occasional side project, from browser extensions to music apps.',
]

export const contact = createContact(profile.role)
