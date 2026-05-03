export const useApi = createUseFetch((callerOptions) => ({
  baseURL: useNuxtApp().$config.public.apiUrl,
  $fetch: useNuxtApp().$api as typeof $fetch,
  lazy: true,
  ...callerOptions,
  getCachedData: (key, nuxtApp) => {
    return nuxtApp.payload.data[key] ?? nuxtApp.static?.data?.[key]
  }
}))
