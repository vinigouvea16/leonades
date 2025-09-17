import { useEffect, useState } from 'react'

export type ProductImage = {
  url: string
  altText: string | null
}

export type ProductVariant = {
  id: string
  title: string
  price: {
    amount: string
    currencyCode: string
  }
  availableForSale: boolean
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
  availableForSale: boolean
  tags: string[]
}

export function useProduct(handle: string) {
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

        setProduct(data.product)
      } catch (err) {
        console.error('Erro ao buscar produto:', err)
        setError(err instanceof Error ? err.message : 'Erro ao buscar produto')
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [handle])

  return { product, loading, error }
}
