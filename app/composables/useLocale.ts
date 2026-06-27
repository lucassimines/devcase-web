import { DEFAULT_LOCALE, type LocaleCode } from '~/types/locale'

export function useLocale() {
  const { locale: i18nLocale, setLocale } = useNuxtApp().$i18n
  const locale = useState<LocaleCode>('locale', () => DEFAULT_LOCALE)
  const localeCookie = useCookie<LocaleCode>('locale')

  async function setAppLocale(code: LocaleCode) {
    await setLocale(code)
    locale.value = code
    localeCookie.value = code
  }

  watch(i18nLocale, (code) => {
    if (code === 'en-US' || code === 'pt-BR') {
      locale.value = code
    }
  })

  return {
    locale,
    localeCookie,
    setAppLocale
  }
}
