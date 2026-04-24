import type { Block } from '~/types/block'

export interface Page<T = null> {
  id: string
  name: string
  code: string
  slug: string
  fields?: T // @TODO: implement
  blocks: Block[]
}
