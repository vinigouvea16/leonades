import { getProductByHandle } from '@/lib/queries/getProductByHandle'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await params

    if (!handle) {
      return NextResponse.json(
        { error: 'Handle do produto é obrigatório' },
        { status: 400 }
      )
    }

    const shopifyProduct = await getProductByHandle(handle)

    if (!shopifyProduct) {
      return NextResponse.json(
        { error: 'Produto não encontrado' },
        { status: 404 }
      )
    }

    const product = {
      id: shopifyProduct.id,
      name: shopifyProduct.title,
      handle: shopifyProduct.handle,
      description: shopifyProduct.description,
      year: shopifyProduct.yearMetafield?.value || null,
      images: shopifyProduct.images.edges.map(edge => edge.node),
      priceRange: {
        min: {
          amount: shopifyProduct.priceRange.minVariantPrice.amount,
          currencyCode: shopifyProduct.priceRange.minVariantPrice.currencyCode,
        },
        max: {
          amount: shopifyProduct.priceRange.maxVariantPrice.amount,
          currencyCode: shopifyProduct.priceRange.maxVariantPrice.currencyCode,
        },
      },
      variants: shopifyProduct.variants.edges.map(edge => edge.node),
      availableForSale: shopifyProduct.availableForSale,
      tags: shopifyProduct.tags,
    }

    return NextResponse.json({ product })
  } catch (error) {
    console.error('Erro ao buscar produto:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
