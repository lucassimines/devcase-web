import { DEFAULT_LOCALE, localeCodes, type LocaleCode } from '~/types/locale'

function resolveInitialLocale(): LocaleCode {
  const { $i18n } = useNuxtApp()
  const detected = $i18n.getLocaleCookie() || $i18n.getBrowserLocale()

  console.log({ detected1: detected })

  console.log(
    detected && localeCodes.includes(detected as LocaleCode)
      ? (detected as LocaleCode)
      : DEFAULT_LOCALE
  )

  return detected && localeCodes.includes(detected as LocaleCode)
    ? (detected as LocaleCode)
    : DEFAULT_LOCALE
}

export function useLocale() {
  const locale = useState<LocaleCode>('locale', resolveInitialLocale)

  return {
    locale
  }
}
