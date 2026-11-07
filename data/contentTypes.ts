export interface ContentLink {
  label: string
  url: string
  title?: string
  text?: string
  icon?: 'github' | 'linkedin' | 'x' | 'spotify' | 'cv' | 'link'
  iconOnly?: boolean
}

export interface ContentProject {
  id: string
  title: string
  tag: string
  url: string
  image: string
  lead: string
  links: ContentLink[]
}

export interface ContentGoodie {
  title: string
  image: string
  text: string
  url: string
  dark?: boolean
}
