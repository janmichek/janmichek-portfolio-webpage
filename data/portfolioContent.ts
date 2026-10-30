import type { ChatGoodie, ChatLink, ChatProject, ChatSkill } from './chatContent'

export const chatProfile = {
  name: 'Jan Michek',
  role: 'Frontend engineer',
  email: 'jan@janmichek.cz',
  avatar: '/profile-pic.webp',
}

export const chatSummary = [
  'Senior frontend engineer with 14 years of experience building web products end to end. I focus on the part people actually touch: interfaces that are fast, accessible and easy to use.',
  'My work sits where design and engineering meet. I care about the details, the people using the product and the codebase that has to live on after launch.',
  'I have led frontend development on data-heavy applications, built design systems and helped teams turn rough ideas into shipped features. I also enjoy the occasional side project, from browser extensions to music apps.',
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
    name: 'frontend',
    text: 'Frontend is my home. I build design systems, component libraries and interfaces that stay fast as products grow.',
  },
]

export const chatProjects: ChatProject[] = [
  {
    id: 'agent-chat',
    title: 'Agent chat',
    tag: 'Web3 chat UI',
    url: 'https://8004-web3-agent-chat.vercel.app/',
    image: '/agent-chat.webp',
    lead: 'Web3 chat UI to talk to trustless agents. The app can create ERC-8004 compliant agent and  prompt it to send funds, call contracts, managing ENS names and receiveing feedback.',
    links: [
      { label: 'Live app', url: 'https://8004-web3-agent-chat.vercel.app/' },
    ],
  },
  {
    id: 'melodot',
    title: 'Melodot',
    tag: 'Polkadot Hackathon winner',
    url: 'https://melodot.vercel.app/',
    image: '/melodot.webp',
    lead: 'Music discovery and donation dApp - placed among winners at the Polkadot Builder Party. Listeners find new music and tip the artists directly on-chain. Earnings withdrawal through a verification flow.',
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
    lead: 'Open-source blockchain explorer for the Aeternity network. Led the frontend with full autonomy over technical decisions. It makes blocks, transactions and contracts easy to browse.',
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
    lead: 'The first NFT pawnshop on Ethereum. Borrowers get liquidity against their NFTs without giving up the asset. Built a seamless web3 user experience using wallet and smart contract interaction.',
    links: [
      { label: 'pwn.xyz', url: 'https://pwn.xyz' },
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
    text: 'Chrome Store and FF browser extension. Highlight a number on any page, convert it to crypto or fiat inline.',
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
    url: 'https://www.linkedin.com/in/jan-michek-web3/',
    host: 'linkedin.com',
    title: 'Jan Michek',
    text: 'Frontend engineer, Prague',
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
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/52iWG2c2P0K6HmGrAAUyoP?si=SuOL9lY1QuyCI1FDBOzO9A',
    host: 'spotify.com',
    title: 'Jan Michek',
    text: 'Music on Spotify',
    icon: 'spotify',
    iconOnly: true,
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
