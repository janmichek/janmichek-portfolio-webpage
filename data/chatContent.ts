import { baseProfile, chatGoodies, chatProjects, createChatContact } from './sharedContent'

export { chatGoodies, chatProjects }

export const chatProfile = {
  ...baseProfile,
  role: 'Web3 full-stack engineer',
}

export const chatSummary = [
  'Senior engineer with 14 years of experience, including 5+ years of building Web3 experiences on smart contracts. I combine full-stack expertise in JS frameworks with Solidity to build dApps that are a joy to use.',
  'In addition to the Web3 + AI + UX combo, I have an overlap to Product and graphic design, and backend engineering as well.',
  'My background includes leading the development of blockchain explorer aescan.io, crafting smooth Web3 UX flows for an NFT lending platform at PWN. I am proud of winning an award at the Polkadot Hackathon.',
]

export const chatContact = createChatContact(chatProfile.role)
