import { useEffect, useState } from 'react'

type ShopifyImage = {
  url: string
  altText: string | null
}

type ShopifyPrice = {
  amount: string
  currencyCode: string
}

type ShopifyProduct = {
  id: string
  title: string
  handle: string
  featuredImage: ShopifyImage | null
  images: {
    edges: {
      node: ShopifyImage
    }[]
  }
  displayImage: ShopifyImage | null
  priceRange: {
    minVariantPrice: ShopifyPrice
  }
  metafield: {
    value: string | null
  } | null
}

export function useFeaturedProducts() {
  const [products, setProducts] = useState<ShopifyProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/featured-products')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setProducts(data.products || [])
      } catch (err) {
        console.error('Erro ao buscar produtos:', err)
        setError(err as Error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
