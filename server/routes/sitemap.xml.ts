import { $api } from '~/utils/api'

export default defineCachedEventHandler(
  async (event) => {
    const res = await $api<string>('/sitemap')

    setHeader(event, 'Content-Type', 'application/xml')

    return res
  },
  {
    maxAge: 60 * 60,
    swr: true,
    name: 'sitemap-index',
    getKey: () => 'index'
  }
)
