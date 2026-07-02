import type { Composer } from 'vue-i18n'

export function getAppI18n(): Composer {
  return useNuxtApp().$i18n
}
