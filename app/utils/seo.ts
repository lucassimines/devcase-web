export interface BreadcrumbItem {
  name: string
  path: string
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[], baseUrl: string) {
  const normalizedBaseUrl = baseUrl.replace(/\/$/, '')

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${normalizedBaseUrl}${item.path.startsWith('/') ? '' : '/'}${item.path}`
    }))
  }
}

export function toOgLocale(locale: string) {
  return locale.replace('-', '_')
}
