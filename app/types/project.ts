import type { Block } from '~/types/block'

export interface Project {
  id: number
  name: string
  url: string
  description: string
  image: string
  slug: string
  blocks: Block[]
}
