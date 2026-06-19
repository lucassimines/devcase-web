import type { MaybeRefOrGetter } from 'vue'

type SchemaValue = Record<string, unknown> | Record<string, unknown>[]

interface SiteSeoOptions {
  title?: MaybeRefOrGetter<string | null | undefined>
  description?: MaybeRefOrGetter<string | null | undefined>
  path?: MaybeRefOrGetter<string | null | undefined>
  image?: MaybeRefOrGetter<string | null | undefined>
  type?: 'website' | 'article'
  robots?: MaybeRefOrGetter<string | null | undefined>
  schema?: MaybeRefOrGetter<SchemaValue | null | undefined>
}

const siteName = 'Lucas Simines'
const defaultDescription =
  'Full stack developer specializing in Nuxt, Vue, Laravel, and Node.js, building scalable web applications from concept to production.'
const defaultOgImage = '/images/og-image.png'

export function useSiteSeo(options: SiteSeoOptions = {}) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const requestUrl = useRequestURL()

  const baseUrl = (config.public.appUrl || requestUrl.origin).replace(/\/$/, '')

  const getValue = <T>(value: MaybeRefOrGetter<T> | undefined) => {
    if (typeof value === 'function') {
      return (value as () => T)()
    }

    return unref(value)
  }

  const absoluteUrl = (url: string | null | undefined) => {
    if (!url) return undefined
    if (/^https?:\/\//.test(url)) return url

    return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`
  }

  const canonicalUrl = () => absoluteUrl(getValue(options.path) || route.path)
  const title = () => getValue(options.title) || `${siteName} - Full Stack Developer`
  const description = () => getValue(options.description) || defaultDescription
  const image = () => absoluteUrl(getValue(options.image) || defaultOgImage)

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogSiteName: siteName,
    ogType: options.type || 'website',
    ogUrl: canonicalUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    robots: () => getValue(options.robots) || undefined
  })

  useHead({
    link: [
      {
        key: 'canonical',
        rel: 'canonical',
        href: canonicalUrl
      }
    ],
    script: () => {
      const schema = getValue(options.schema)

      if (!schema) return []

      return [
        {
          key: 'schema-org',
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schema)
        }
      ]
    }
  })
}

export function useSiteUrl(path = '/') {
  const config = useRuntimeConfig()
  const requestUrl = useRequestURL()
  const baseUrl = (config.public.appUrl || requestUrl.origin).replace(/\/$/, '')

  if (/^https?:\/\//.test(path)) return path

  return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`
}
