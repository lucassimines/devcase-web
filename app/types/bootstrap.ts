import type { LocalizedString } from '~/types/locale'

export interface Bootstrap {
  menu: {
    links: {
      id: string
      name: LocalizedString
      slug: string
    }[]
  }
  settings: {
    profile: {
      name: string
      email: string
      role: LocalizedString
      image: LocalizedString
      location: LocalizedString
      resumeUrl: LocalizedString
    }
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
