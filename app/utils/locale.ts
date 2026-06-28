import type { LocaleCode, LocalizedString } from '~/types/locale'

const LOCALE_ALIASES: Record<string, LocaleCode> = {
  en: 'en-US',
  'en-US': 'en-US',
  pt: 'pt-BR',
  'pt-BR': 'pt-BR'
}

export function resolveLocaleCode(value: string | null | undefined): LocaleCode | null {
  if (!value) return null

  return LOCALE_ALIASES[value] ?? null
}

export function resolveLocalizedText(
  text: string | LocalizedString | undefined | null,
  locale: LocaleCode
): string {
  if (!text) return ''

  if (typeof text === 'string') return text

  return text[locale] || text['en-US'] || ''
}
