export const normalizeOptionName = (name: string): string => {
  return (
    name
      .toLowerCase()
      .normalize('NFD')
      // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/\s+/g, '-') // Espaços → hífens
      .trim()
  )
}

export const optionTranslations: Record<string, Record<string, string>> = {
  madeira: {
    pt: 'Madeira',
    en: 'Wood',
    es: 'Madera',
  },
  tamanho: {
    pt: 'Tamanho',
    en: 'Size',
    es: 'Tamaño',
  },
  assento: {
    pt: 'Assento',
    en: 'Upholstery',
    es: 'Tapizado',
  },
}

export const optionValuesTranslations: Record<
  string,
  Record<string, string>
> = {
  estofado: {
    pt: 'Estofado',
    en: 'Upholstered',
    es: 'Tapizado',
  },
  plana: {
    pt: 'Plano',
    en: 'Flat',
    es: 'Plano',
  },
}
