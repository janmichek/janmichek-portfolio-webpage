import type { ChatGoodie, ChatLink, ChatProject, ChatSkill } from './chatContent'

export const chatProfile = {
  name: 'Jan Michek',
  role: 'Full-stack engineer & frontend specialist, Prague',
  email: 'jan@janmichek.cz',
  avatar: '/profile-pic.webp',
}

export const chatSummary = [
  'Senior full-stack engineer with 14 years of experience building web products end to end. I combine a strong frontend craft with practical backend skills to ship interfaces that are fast, accessible and easy to use.',
  'My work sits where design, engineering and product meet: I care about the details, the people using the product and the codebase that has to live on after launch.',
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
    tag: 'AI product UI',
    url: 'https://8004-web3-agent-chat.vercel.app/',
    image: '/agent-chat.webp',
    lead: 'A conversational interface for creating and managing AI agents. Built the chat experience, tool controls and feedback flows in one focused workspace.',
    links: [
      { label: 'Live app', url: 'https://8004-web3-agent-chat.vercel.app/' },
    ],
  },
  {
    id: 'melodot',
    title: 'Melodot',
    tag: 'Hackathon winner',
    url: 'https://melodot.vercel.app/',
    image: '/melodot.webp',
    lead: 'Music discovery and donation app that placed among the winners at the Polkadot Builder Party. Built the listening experience and a straightforward flow for supporting artists, including payouts and verification.',
    links: [
      { label: 'Live app', url: 'https://melodot.vercel.app/' },
      { label: 'Walkthrough video', url: 'https://youtu.be/f7LlZRMdKm4' },
    ],
  },
  {
    id: 'aescan',
    title: 'aeScan',
    tag: 'Data-heavy web app',
    url: 'https://aescan.io/',
    image: '/aescan.webp',
    lead: 'Open-source network explorer. Led the frontend with full autonomy over technical decisions, making large sets of records, transactions and accounts easy to browse.',
    links: [
      { label: 'aescan.io', url: 'https://aescan.io/' },
      { label: 'Walkthrough video', url: 'https://youtu.be/4jmVQlHASCY' },
      { label: 'Source', url: 'https://github.com/aeternity/aescan/' },
    ],
  },
  {
    id: 'pwn',
    title: 'PWN Finance',
    tag: 'Fintech product',
    url: 'https://pwn.xyz',
    image: '/pwn.webp',
    lead: 'A peer-to-peer lending product on Ethereum. Built a clear, trustworthy experience around asset management, wallet connections and transaction flows.',
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
    text: 'Chrome and Firefox extension. Highlight a number on any page and convert it to another currency inline.',
    url: 'https://chromewebstore.google.com/detail/coinline/dafllilkihbickomgiohcjhabcdfeckf',
  },
  {
    title: 'aeScan walkthrough',
    image: '/aescan-video.png',
    text: 'A video walkthrough where I explain the product and the technical decisions behind it.',
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
    text: 'A short walkthrough of the music discovery and donation app from the hackathon.',
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
    text: 'Full-stack engineer, Prague',
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
