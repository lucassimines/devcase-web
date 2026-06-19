export interface Bootstrap {
  menu: {
    links: {
      id: string
      name: string
      slug: string
    }[]
  }
}

export interface FooterLink {
  name: string
  slug?: string
  url?: string
  newTab?: boolean
}

export interface SocialMedia {
  name: string
  url: string
  icon: string
}
