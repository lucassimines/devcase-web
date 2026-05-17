import type { Block } from '~/types/block'
import type { Solution } from '~/types/solution'
import type { Technology } from '~/types/technology'

export interface Project {
  id: string
  name: string
  url: string
  description: string
  background: string
  image: string
  slug: string
  blocks: Block[]
  technologies: Technology[]
  solutions: Solution[]
}

export type AdjacentProject = {
  id: string
  slug: string
  name: string
}

export interface ProjectResponse {
  data: Project
  meta: {
    next: AdjacentProject | null
  }
}
