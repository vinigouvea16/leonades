import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

export type ProductImage = {
  url: string
  altText: string | null
  width?: number
  height?: number
}

export type VariantSelectedOption = {
  name: string
  value: string
}

export type ProductVariant = {
  id: string
  title: string
  price: {
    amount: string
    currencyCode: string
  }
  availableForSale: boolean
  quantityAvailable?: number
  selectedOptions?: VariantSelectedOption[]
  image?: ProductImage
}

export type ProductOption = {
  name: string
  values: string[]
}

export type ProductTranslations = {
  pt: {
    title: string
    description: string
  }
  en: {
    title: string
    description: string
  }
}

export type ProductDetail = {
  id: string
  name: string
  handle: string
  description: string
  year: string | null
  images: ProductImage[]
  priceRange: {
    min: {
      amount: string
      currencyCode: string
    }
    max: {
      amount: string
      currencyCode: string
    }
  }
  variants: ProductVariant[]
  options?: ProductOption[]
  availableForSale: boolean
  tags: string[]
  translations: ProductTranslations
}

export function useProduct(handle: string) {
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const locale = useLocale() as 'pt' | 'en'

  useEffect(() => {
    async function fetchProduct() {
      if (!handle) {
        setError('Handle do produto é obrigatório')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const res = await fetch(`/api/product/${handle}`)

        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('Produto não encontrado')
          }
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data: { product: ProductDetail; error?: string } =
          await res.json()

        if (data.error) {
          throw new Error(data.error)
        }

        const translatedProduct = {
          ...data.product,
          name: data.product.translations[locale]?.title || data.product.name,
          description:
            data.product.translations[locale]?.description ||
            data.product.description,
        }

        setProduct(translatedProduct)
      } catch (err) {
        console.error('Erro ao buscar produto:', err)
        setError(err instanceof Error ? err.message : 'Erro ao buscar produto')
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [handle, locale])

  return { product, loading, error }
}

export function useProductTranslations(product: ProductDetail | null) {
  const locale = useLocale() as 'pt' | 'en'

  if (!product) return null

  return {
    title: product.translations[locale]?.title || product.name,
    description:
      product.translations[locale]?.description || product.description,
    originalTitle: product.name,
    originalDescription: product.description,
    availableLanguages: Object.keys(product.translations).filter(
      lang => product.translations[lang as keyof ProductTranslations]?.title
    ),
  }
}
