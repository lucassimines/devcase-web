import type { LocalizedString } from '~/types/locale'

export default defineNuxtPlugin({
  name: 'translate',
  dependsOn: ['i18n:plugin'],
  setup() {
    const { locale } = getAppI18n()

    return {
      provide: {
        tr: (text: string | LocalizedString | undefined | null): string => {
          return resolveLocalizedText(text, locale.value)
        }
      }
    }
  }
})
