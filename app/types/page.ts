import type { Block } from '~/types/block'
import type { LocalizedString } from '~/types/locale'

export interface Page<T = null> {
  id: string
  name: LocalizedString
  code: string
  slug: string
  content: T
  blocks: Block[]
}

export type ContentHome = {
  intro: {
    title: LocalizedString
    description: LocalizedString
  }
}
