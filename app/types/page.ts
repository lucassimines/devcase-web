import type { Block } from '~/types/block'

export interface Page {
  id: string
  name: string
  code: string
  slug: string
  blocks: Block[]
}
