import type { LocaleCode } from '~/types/locale'

export function useLocale() {
  const { locale, setLocale } = useI18n()

  async function setAppLocale(code: LocaleCode) {
    await setLocale(code)
  }

  return {
    locale,
    setAppLocale
  }
}
