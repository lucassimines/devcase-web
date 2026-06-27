import { DEFAULT_LOCALE } from '~/types/locale'

export default defineNuxtPlugin(async () => {
  const { setLocale } = useNuxtApp().$i18n
  await setLocale(DEFAULT_LOCALE)
})
