export interface ChatLink {
  label: string
  url: string
  title?: string
  text?: string
  icon?: 'github' | 'linkedin' | 'x' | 'spotify' | 'cv' | 'link'
  iconOnly?: boolean
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
