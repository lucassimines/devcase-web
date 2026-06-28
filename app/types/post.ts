import type { LocalizedString } from '~/types/locale'

export interface PostCategory {
  id: string
  name: LocalizedString
  slug: string
}

export interface Post {
  id: string
  name: LocalizedString
  excerpt: LocalizedString | null
  content: LocalizedString | null
  image: LocalizedString | null
  slug: string
  order: number
  categories: PostCategory[]
  createdAt: string
  updatedAt: string
}

export type AdjacentPost = {
  id: string
  slug: string
  name: LocalizedString
}

export interface PostResponse {
  data: Post
  meta: {
    next: AdjacentPost | null
  }
}
