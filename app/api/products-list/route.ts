import { getProductsList } from '@/lib/queries/getProductsList'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const shopifyProducts = await getProductsList()
    
    const products = shopifyProducts.map((product) => {
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
        translations: {
          pt: {
            title: product.titlePt?.value || product.title,
            description: product.descriptionPt?.value || product.description || 'Produto sem descrição',
          },
          en: {
            title: product.titleEn?.value || product.title,
            description: product.descriptionEn?.value || product.description || 'Product without description',
          },
          es: {
            title: product.titleEs?.value || product.title,
            description: product.descriptionEs?.value || product.description || 'Producto sin descripción',
          }
        }
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