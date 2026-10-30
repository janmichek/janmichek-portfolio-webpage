import type { ChatGoodie, ChatLink, ChatProject } from './contentTypes'

export const baseProfile = {
  name: 'Jan Michek',
  email: 'jan@janmichek.cz',
  avatar: '/profile-pic.webp',
}

export const chatProjects: ChatProject[] = [
  {
    id: 'agent-chat',
    title: 'Agent chat',
    tag: 'Web3 chat UI',
    url: 'https://8004-web3-agent-chat.vercel.app/',
    image: '/agent-chat.webp',
    lead: 'Web3 chat UI to talk to trustless agents. The app can create ERC-8004 compliant agent and prompt it to send funds, call contracts, manage ENS names and receive feedback.',
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
    text: 'And I am UX freak. All my setup is heavily customized! Many of them are genuinely useful for everyone.',
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

export function createChatContact(role: string): ChatLink[] {
  return [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jan-michek-web3/',
      title: 'Jan Michek',
      text: `${role}, Prague`,
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/janmichek/',
      title: 'janmichek',
      text: 'Profile and repositories',
      icon: 'github',
    },
    {
      label: 'X',
      url: 'https://x.com/jan_michek',
      title: 'Jan Michek',
      text: '@jan_michek',
      icon: 'x',
    },
    {
      label: 'Spotify',
      url: 'https://open.spotify.com/artist/52iWG2c2P0K6HmGrAAUyoP?si=SuOL9lY1QuyCI1FDBOzO9A',
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
      icon: 'cv',
    },
  ]
}
