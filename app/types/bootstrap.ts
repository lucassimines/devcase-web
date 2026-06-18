export interface Bootstrap {
  menu: {
    links: {
      id: string
      name: string
      slug: string
    }[]
  }
}

export interface SocialMedia {
  name: string
  url: string
  icon: string
}
