export const useApi = createUseFetch((callerOptions) => ({
  $fetch: useNuxtApp().$api as typeof $fetch,
  lazy: true,
  ...callerOptions
}))
