export interface ChatLink {
  label: string
  url: string
  host?: string
  title?: string
  text?: string
  file?: string
  icon?: 'github' | 'linkedin' | 'x' | 'cv' | 'link'
}

export interface ChatProject {
  id: string
  title: string
  tag: string
  url: string
  image: string
  lead: string
  links: ChatLink[]
}

export interface ChatGoodie {
  title: string
  image: string
  text: string
  url: string
  dark?: boolean
}

export interface ChatSkill {
  name: string
  text: string
}

export const chatProfile = {
  name: 'Jan Michek',
  role: 'Web3 full-stack engineer, Prague',
  email: 'jan@janmichek.cz',
  avatar: '/profile-pic.webp',
}

export const chatSummary = [
  'Senior engineer with 14 years of experience, including 5+ years of building Web3 experiences on smart contracts. I combine full-stack expertise in JS frameworks with Solidity to build dApps that are a joy to use.',
  'In addition to the Web3 +AI +UX combo, I have an overlap to Product design, graphic design and backend engineering as well.',
  'My background includes leading the development of blockchain explorer aescan.io, crafting smooth Web3 UX flows for an NFT lending platform at PWN. I am proud of winning an award at the Polkadot Hackathon.',
]

export const chatSkills: ChatSkill[] = [
  {
    name: 'JS',
    text: 'Vue is effective and joy to code. The smoothest DX framework I had a chance to work with. React is cool too!',
  },
  {
    name: 'UX',
    text: 'I love to bridge computer code with human perception. “Don’t let users think” is my ultimate motto. I live on the front side of frontend.',
  },
  {
    name: 'web3',
    text: 'Specializing in web3 dapps. Let me translate complexity of DeFi into smooth and modern web app which is intuitive to use.',
  },
]

export const chatProjects: ChatProject[] = [
  {
    id: 'melodot',
    title: 'Melodot',
    tag: 'Polkadot Hackathon winner',
    url: 'https://melodot.vercel.app/',
    image: '/melodot.webp',
    lead: 'Decentralized music discovery and donation dApp — placed among winners at the Polkadot Builder Party.',
    links: [
      { label: 'Live app', url: 'https://melodot.vercel.app/' },
      { label: 'Walkthrough video', url: 'https://youtu.be/f7LlZRMdKm4' },
    ],
  },
  {
    id: 'aescan',
    title: 'aeScan',
    tag: 'Blockchain explorer',
    url: 'https://aescan.io/',
    image: '/aescan.webp',
    lead: 'Open-source blockchain explorer for the Aeternity network. Led the frontend with full autonomy over technical decisions.',
    links: [
      { label: 'aescan.io', url: 'https://aescan.io/' },
      { label: 'Walkthrough video', url: 'https://youtu.be/4jmVQlHASCY' },
      { label: 'Source', url: 'https://github.com/aeternity/aescan/' },
    ],
  },
  {
    id: 'pwn',
    title: 'PWN Finance',
    tag: 'NFT lending',
    url: 'https://pwn.xyz',
    image: '/pwn.webp',
    lead: 'The first NFT pawnshop on Ethereum. Built a seamless web3 user experience from scratch.',
    links: [
      { label: 'pwn.xyz', url: 'https://pwn.xyz' },
    ],
  },
  {
    id: 'agent-chat',
    title: 'Agent chat',
    tag: 'Web3 chat UI',
    url: 'https://8004-web3-agent-chat.vercel.app/',
    image: '/agent-chat.webp',
    lead: 'Web3 chat UI to talk to trustless agents: contract calls, funds, feedback.',
    links: [
      { label: 'Live app', url: 'https://8004-web3-agent-chat.vercel.app/' },
    ],
  },
]

export const chatGoodies: ChatGoodie[] = [
  {
    title: 'EngineBox',
    image: '/enginebox.webp',
    text: 'Converts Engine OS playlists to Rekordbox. Web app and macOS app, free.',
    url: 'https://engine-box.vercel.app/',
  },
  {
    title: 'CoinLine',
    image: '/coinline.webp',
    text: 'Highlight a number on any page, convert it to crypto or fiat inline.',
    url: 'https://chromewebstore.google.com/detail/coinline/dafllilkihbickomgiohcjhabcdfeckf',
  },
  {
    title: 'aeScan walkthrough',
    image: '/aescan-video.png',
    text: 'A video of me diving into the project and explaining the details.',
    url: 'https://youtu.be/4jmVQlHASCY',
  },
  {
    title: 'Music production',
    image: '/honey-t.webp',
    text: '12+ million streams and communities built worldwide. Have a listen.',
    url: 'https://open.spotify.com/artist/52iWG2c2P0K6HmGrAAUyoP?si=SuOL9lY1QuyCI1FDBOzO9A',
  },
  {
    title: 'Karabiner shortcuts',
    image: '/karabiner.webp',
    text: 'And I am UX freak. All my setup is heavily customized!',
    url: '/karabiner',
  },
  {
    title: 'Melodot walkthrough',
    image: '/melodot-walkthrough.webp',
    text: 'Music discovery & donation dApp from the Polkadot Builder hackathon.',
    url: 'https://youtu.be/f7LlZRMdKm4',
  },
  {
    title: 'Photo gallery',
    image: '/k3.webp',
    text: 'I like shooting photos too. Especially flowers.',
    url: '/gallery',
  },
]

export const chatContact: ChatLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://cz.linkedin.com/in/jan-michek-aba913103',
    host: 'linkedin.com',
    title: 'Jan Michek',
    text: 'Web3 full-stack engineer, Prague',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/janmichek/',
    host: 'github.com',
    title: 'janmichek',
    text: 'Profile and repositories',
    icon: 'github',
  },
  {
    label: 'X',
    url: 'https://x.com/jan_michek',
    host: 'x.com',
    title: 'Jan Michek',
    text: '@jan_michek',
    icon: 'x',
  },
  {
    label: 'CV',
    url: 'https://drive.google.com/file/d/1JKoO3XYsx_8BGriNa9rMlt0nwgQajE3v/view?usp=drive_link',
    title: 'CV.pdf',
    text: 'PDF · Download',
    file: 'PDF',
    icon: 'cv',
  },
]
