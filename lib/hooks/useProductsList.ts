import { useEffect, useState } from 'react'

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
  bgColor: string
  priceColor: string
  yearColor: string
}

export function useProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

        setProducts(data.products || [])
      } catch (err) {
        console.error('Erro ao buscar produtos:', err)
        setError(err instanceof Error ? err.message : 'Erro ao buscar produtos')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
