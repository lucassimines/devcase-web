import type { Block } from '~~/shared/types/block'

export interface Project {
  id: number
  name: string
  description: string
  image: string
  slug: string
  blocks: Block[]
}
