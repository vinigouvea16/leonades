import { getProductsList } from '@/lib/queries/getProductsList'
import { NextResponse } from 'next/server'

const bgColors = [
  'bg-slate-100',
  'bg-gray-100',
  'bg-neutral-100',
  'bg-stone-100',
  'bg-amber-50',
  'bg-orange-50',
  'bg-red-50',
  'bg-pink-50',
  'bg-rose-50',
  'bg-fuchsia-50',
]

const textColors = [
  'text-slate-800',
  'text-gray-800',
  'text-neutral-800',
  'text-stone-800',
  'text-amber-800',
  'text-orange-800',
  'text-red-800',
  'text-pink-800',
  'text-rose-800',
  'text-fuchsia-800',
]

export async function GET() {
  try {
    const shopifyProducts = await getProductsList()

    const products = shopifyProducts.map((product, index) => {
      const colorIndex = index % bgColors.length

      return {
        id: product.id,
        name: product.title,
        handle: product.handle,
        description: product.description || 'Produto sem descrição',
        year: product.yearMetafield?.value || null,
        img: product.firstImage?.url || '/placeholder-image.jpg',
        priceRange: product.priceRange
          ? {
              amount: product.priceRange.minVariantPrice.amount,
              currencyCode: product.priceRange.minVariantPrice.currencyCode,
            }
          : null,
        bgColor: bgColors[colorIndex],
        priceColor: textColors[colorIndex],
        yearColor: textColors[colorIndex],
      }
    })

    const reversedProducts = products.reverse()

    return NextResponse.json({ products: reversedProducts })
  } catch (error) {
    console.error('Erro ao buscar lista de produtos:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar produtos' },
      { status: 500 }
    )
  }
}
