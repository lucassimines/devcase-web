import { $api } from '~/utils/api'

export default defineCachedEventHandler(
  async (event) => {
    const params = getRouterParams(event)

    const normalizedName = params.name?.replace('.xml', '')

    const res = await $api<string>(`/sitemap/${normalizedName}`)

    setHeader(event, 'Content-Type', 'application/xml')

    return res
  },
  {
    maxAge: 60 * 60,
    swr: true,
    name: 'sitemap-part',
    getKey: (event) => getRouterParams(event).name?.replace('.xml', '') ?? 'unknown'
  }
)
