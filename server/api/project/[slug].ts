import { $api } from '~/utils/api'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  const projects = await $api<Project[]>('/projects')

  return projects.find((project) => project.slug === slug)
})
