import type { LocalizedString } from '~/types/locale'

export default defineNuxtPlugin((nuxtApp) => {
  const { locale } = useLocale()

  return {
    provide: {
      imageUrl: (filename: string | LocalizedString | null | undefined) => {
        const resolved = resolveLocalizedText(filename, locale.value)

        if (!resolved) return ''

        return `${nuxtApp.$config.public.imagesUrl}/${resolved}`
      }
    }
  }
})
