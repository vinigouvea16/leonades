import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

export type ProductTranslations = {
  pt: {
    title: string
    description: string
  }
  en: {
    title: string
    description: string
  }
  es: {
    title: string
    description: string
  }
}

export type Product = {
  id: string
  name: string
  handle: string
  description: string
  year: string | null
  img: string
  priceRange: {
    amount: string
    currencyCode: string
  } | null
  translations: ProductTranslations
}

export function useProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const locale = useLocale() as 'pt' | 'en' | 'es'

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)
        
        const res = await fetch('/api/products-list')
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data: { products: Product[]; error?: string } = await res.json()
        
        if (data.error) {
          throw new Error(data.error)
        }

        const translatedProducts = data.products?.map((product: Product) => ({
          ...product,
          name: product.translations[locale]?.title || product.name,
          description: product.translations[locale]?.description || product.description,
        })) || []

        setProducts(translatedProducts)
      } catch (err) {
        console.error('Erro ao buscar produtos:', err)
        setError(err instanceof Error ? err.message : 'Erro ao buscar produtos')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [locale]) 

  return { products, loading, error }
}