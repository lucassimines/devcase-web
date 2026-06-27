import type { Locale } from '~/types/locale'

declare module 'nuxt/schema' {
  interface AppConfigInput {
    locales?: Locale[]
  }

  interface AppConfig {
    locales: Locale[]
  }
}

export {}
