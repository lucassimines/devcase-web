import type { Page } from '~/types/page'

export function usePageFetch<T = null>(slug: string) {
  return useApi<Page<T>>(`/pages/${slug}`)
}
