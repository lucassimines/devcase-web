import type { MaybeRefOrGetter } from 'vue'
import { buildBreadcrumbSchema, toOgLocale, type BreadcrumbItem } from '~/utils/seo'

type SchemaValue = Record<string, unknown> | Record<string, unknown>[]

interface SiteSeoOptions {
  title?: MaybeRefOrGetter<string | null | undefined>
  description?: MaybeRefOrGetter<string | null | undefined>
  path?: MaybeRefOrGetter<string | null | undefined>
  image?: MaybeRefOrGetter<string | null | undefined>
  type?: 'website' | 'article'
  robots?: MaybeRefOrGetter<string | null | undefined>
  noindex?: MaybeRefOrGetter<boolean | null | undefined>
  publishedTime?: MaybeRefOrGetter<string | null | undefined>
  modifiedTime?: MaybeRefOrGetter<string | null | undefined>
  breadcrumbs?: MaybeRefOrGetter<BreadcrumbItem[] | null | undefined>
  schema?: MaybeRefOrGetter<SchemaValue | null | undefined>
}

const siteName = 'LBS Web - Lucas Simines'
const defaultOgImage = '/images/og-image.png'
const themeColor = '#0f172a'
const defaultRobots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export function useSiteSeo(options: SiteSeoOptions = {}) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const requestUrl = useRequestURL()
  const { locale, locales, t } = useI18n()
  const { profile } = useBootstrap()

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
  const title = () => getValue(options.title) || t('seo.defaultTitle', { name: profile.value.name })
  const description = () => getValue(options.description) || t('meta.description')
  const image = () => absoluteUrl(getValue(options.image) || defaultOgImage)
  const robots = () => {
    const explicitRobots = getValue(options.robots)
    if (explicitRobots) return explicitRobots

    return getValue(options.noindex) ? 'noindex, follow' : defaultRobots
  }

  const ogLocaleAlternates = computed(() =>
    locales.value
      .map((entry) => toOgLocale(typeof entry === 'string' ? entry : entry.code))
      .filter((entry) => entry !== toOgLocale(locale.value))
  )

  const resolvedSchema = () => {
    const schema = getValue(options.schema)
    const breadcrumbs = getValue(options.breadcrumbs)
    const breadcrumbSchema = breadcrumbs?.length
      ? buildBreadcrumbSchema(breadcrumbs, baseUrl)
      : null

    const schemas = [
      ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
      ...(breadcrumbSchema ? [breadcrumbSchema] : [])
    ]

    return schemas.length ? schemas : null
  }

  useSeoMeta({
    title,
    description,
    author: profile.value.name,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogImageAlt: title,
    ogSiteName: siteName,
    ogType: options.type || 'website',
    ogUrl: canonicalUrl,
    ogLocale: () => toOgLocale(locale.value),
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    robots,
    articleAuthor: () =>
      options.type === 'article' && profile.value.name ? [profile.value.name] : undefined,
    articlePublishedTime: () => getValue(options.publishedTime) || undefined,
    articleModifiedTime: () => getValue(options.modifiedTime) || undefined
  })

  useHead({
    htmlAttrs: {
      lang: locale
    },
    meta: () => [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: themeColor },
      { name: 'format-detection', content: 'telephone=no' },
      ...ogLocaleAlternates.value.map((alternateLocale) => ({
        key: `og-locale-alternate-${alternateLocale}`,
        property: 'og:locale:alternate',
        content: alternateLocale
      }))
    ],
    link: [
      {
        key: 'canonical',
        rel: 'canonical',
        href: canonicalUrl
      }
    ],
    script: () => {
      const schemas = resolvedSchema()

      if (!schemas) return []

      return schemas.map((entry, index) => ({
        key: `schema-org-${index}`,
        type: 'application/ld+json',
        innerHTML: JSON.stringify(entry)
      }))
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
