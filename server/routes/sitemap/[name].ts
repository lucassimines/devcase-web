import { $api } from '~/utils/api'

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event)

  const normalizedName = params.name?.replace('.xml', '')

  const res = await $api<string>(`/sitemap/${normalizedName}`)

  setHeader(event, 'Content-Type', 'application/xml')

  return res
})
