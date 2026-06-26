import type { Block } from '~/types/block'
import type { LocalizedString } from '~/types/locale'
import type { Solution } from '~/types/solution'
import type { Technology } from '~/types/technology'

export interface Project {
  id: string
  name: LocalizedString
  url: LocalizedString | null
  description: LocalizedString
  background: LocalizedString
  image: LocalizedString
  slug: string
  blocks: Block[]
  technologies: Technology[]
  solutions: Solution[]
}

export type AdjacentProject = {
  id: string
  slug: string
  name: LocalizedString
}

export interface ProjectResponse {
  data: Project
  meta: {
    next: AdjacentProject | null
  }
}
