import type { Block } from '~/types/block'

export interface Page<T = null> {
  id: string
  name: string
  code: string
  slug: string
  content: T
  blocks: Block[]
}

export type ContentHome = {
  intro: {
    title: string
    subtitle: string
    description: string
  }
}
