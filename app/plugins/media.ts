import type { LocalizedString } from '~/types/locale'

export default defineNuxtPlugin({
  name: 'media',
  dependsOn: ['i18n:plugin'],
  setup(nuxtApp) {
    const { locale } = getAppI18n()

    return {
      provide: {
        imageUrl: (filename: string | LocalizedString | null | undefined) => {
          const resolved = resolveLocalizedText(filename, locale.value)

          if (!resolved) return ''

          return `${nuxtApp.$config.public.imagesUrl}/${resolved}`
        }
      }
    }
  }
})
