import {
  normalizeOptionName,
  optionTranslations,
  optionValuesTranslations,
} from '@/lib/product-option-translations'
import { useLocale } from 'next-intl'

export function useProductOptionTranslation() {
  const locale = useLocale() as 'pt' | 'en' | 'es'

  /**
   * @param name
   * @returns
   */
  const translateOptionName = (name: string): string => {
    const slug = normalizeOptionName(name)

    const translations =
      optionTranslations[slug as keyof typeof optionTranslations]

    return translations?.[locale] || name
  }

  /**
   * @param value
   * @returns
   */
  const translateOptionValue = (value: string): string => {
    const slug = normalizeOptionName(value)

    const translations =
      optionValuesTranslations[slug as keyof typeof optionValuesTranslations]

    return translations?.[locale] || value
  }

  return { translateOptionName, translateOptionValue }
}
