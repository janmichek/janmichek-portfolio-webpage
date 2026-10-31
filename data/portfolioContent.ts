// fallow-ignore-file duplicate-export -- intentional: site variants, consumed via namespace imports in composables/useSiteContent.ts
import { baseProfile, chatGoodies, chatProjects, createChatContact } from './sharedContent'

export { chatGoodies, chatProjects }

export const chatProfile = {
  ...baseProfile,
  role: 'Frontend engineer',
}

export const chatSummary = [
  'Senior frontend engineer with 14 years of experience building web products end to end. I focus on the part people actually touch: interfaces that are fast, accessible and easy to use.',
  'My work sits where design and engineering meet. I care about the details, the people using the product and the codebase that has to live on after launch.',
  'I have led frontend development on data-heavy applications, built design systems and helped teams turn rough ideas into shipped features. I also enjoy the occasional side project, from browser extensions to music apps.',
]

export const chatContact = createChatContact(chatProfile.role)
