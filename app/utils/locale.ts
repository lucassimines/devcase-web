import { DEFAULT_LOCALE, type LocaleCode, type LocalizedString } from '~/types/locale'

export function resolveLocalizedText(
  text: string | LocalizedString | undefined | null,
  locale: LocaleCode
): string {
  if (!text) return ''

  if (typeof text === 'string') return text

  return text[locale] || text[DEFAULT_LOCALE]
}
