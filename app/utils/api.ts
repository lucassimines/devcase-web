import type { NitroFetchOptions } from 'nitropack'

export function $api<T>(path: string, options: NitroFetchOptions<string> = {}) {
  const config = useRuntimeConfig()

  return $fetch<T>(path, {
    baseURL: config.public.appUrl,
    credentials: 'include',
    ...options
  })
}
