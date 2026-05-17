export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig(event)

  const siteUrl = runtimeConfig.public.appUrl
  const normalizedSiteUrl = siteUrl.replace(/\/$/, '')

  const content = `User-Agent: *
Disallow:
Allow: /
Sitemap: ${normalizedSiteUrl}/sitemap.xml
`

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  return content
})
