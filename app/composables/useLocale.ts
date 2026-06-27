import { DEFAULT_LOCALE, type LocaleCode } from '~/types/locale'

export function useLocale() {
  const { locale: i18nLocale, setLocale } = useNuxtApp().$i18n
  const localeState = useState<LocaleCode>('locale', () => DEFAULT_LOCALE)
  const localeCookie = useCookie<LocaleCode>('locale')

  const locale = computed<LocaleCode>({
    get() {
      return import.meta.server ? DEFAULT_LOCALE : localeState.value
    },
    set(value) {
      localeState.value = value
    }
  })

  async function setAppLocale(code: LocaleCode) {
    await setLocale(code)
    locale.value = code
    localeCookie.value = code
  }

  if (import.meta.client) {
    watch(i18nLocale, (code) => {
      if (code === 'en-US' || code === 'pt-BR') {
        localeState.value = code
      }
    })
  }

  return {
    locale,
    localeCookie,
    setAppLocale
  }
}
