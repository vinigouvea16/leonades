import { shopifyFetch } from '@/lib/shopify'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await context.params

    console.log('=== DEBUG ===')
    console.log('Handle:', handle)

    if (!handle) {
      return NextResponse.json(
        { error: 'Handle do produto é obrigatório' },
        { status: 400 }
      )
    }

    const queryWithMetafields = `{
      product(handle: "${handle}") {
        id
        title
        handle
        description
        availableForSale
        images(first: 10) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
        tags
        titlePt: metafield(namespace: "translations", key: "title_pt") {
          value
        }
        titleEn: metafield(namespace: "translations", key: "title_en") {
          value
        }
        titleEs: metafield(namespace: "translations", key: "title_es") {
          value
        }
        descriptionPt: metafield(namespace: "translations", key: "description_pt") {
          value
        }
        descriptionEn: metafield(namespace: "translations", key: "description_en") {
          value
        }
        descriptionEs: metafield(namespace: "translations", key: "description_es") {
          value
        }
        yearMetafield: metafield(namespace: "custom", key: "year") {
          value
        }
      }
    }`

    console.log('Query com metafields sendo enviada...')

    const response = await shopifyFetch<{
      product: {
        id: string
        title: string
        handle: string
        description: string
        availableForSale: boolean
        images: {
          edges: {
            node: {
              width: number
              height: number
              url: string
              altText: string | null
            }
          }[]
        }
        priceRange: {
          minVariantPrice: { amount: string; currencyCode: string }
          maxVariantPrice: { amount: string; currencyCode: string }
        }
        variants: {
          edges: {
            node: {
              id: string
              title: string
              price: { amount: string; currencyCode: string }
              availableForSale: boolean
            }
          }[]
        }
        tags: string[]
        titlePt: { value: string } | null
        titleEn: { value: string } | null
        titleEs: { value: string } | null
        descriptionPt: { value: string } | null
        descriptionEn: { value: string } | null
        descriptionEs: { value: string } | null
        yearMetafield: { value: string } | null
      }
    }>(queryWithMetafields)

    console.log('Resposta recebida:', !!response?.data?.product)

    if (!response?.data?.product) {
      return NextResponse.json(
        { error: 'Produto não encontrado' },
        { status: 404 }
      )
    }

    const rawProduct = response.data.product

    const product = {
      id: rawProduct.id,
      name: rawProduct.title,
      handle: rawProduct.handle,
      description: rawProduct.description,
      availableForSale: rawProduct.availableForSale,
      images: rawProduct.images.edges.map(edge => ({
        url: edge.node.url,
        altText: edge.node.altText,
        width: edge.node.width,
        height: edge.node.height,
      })),
      priceRange: {
        min: rawProduct.priceRange.minVariantPrice,
        max: rawProduct.priceRange.maxVariantPrice,
      },
      variants: rawProduct.variants.edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.title,
        price: edge.node.price,
        availableForSale: edge.node.availableForSale,
      })),
      tags: rawProduct.tags,
      year: rawProduct.yearMetafield?.value || null,
      translations: {
        pt: {
          title: rawProduct.titlePt?.value || rawProduct.title,
          description: rawProduct.descriptionPt?.value || rawProduct.description,
        },
        en: {
          title: rawProduct.titleEn?.value || rawProduct.title,
          description: rawProduct.descriptionEn?.value || rawProduct.description,
        },
        es: {
          title: rawProduct.titleEs?.value || rawProduct.title,
          description: rawProduct.descriptionEs?.value || rawProduct.description,
        }
      }
    }

    console.log('Produto processado com sucesso!')
    return NextResponse.json({ product })

  } catch (error) {
    console.error('Erro ao buscar produto:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}