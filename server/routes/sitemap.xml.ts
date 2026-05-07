import { $api } from '~/utils/api'

export default defineEventHandler(async (event) => {
  const res = await $api<string>('/sitemap')

  setHeader(event, 'Content-Type', 'application/xml')

  return res
})
