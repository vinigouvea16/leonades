import { shopifyFetch } from '@/lib/shopify'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const query = `{
      collection(handle: "destaques") {
        products(first: 3) {
          edges {
            node {
              id
              title
              handle
              featuredImage {
                url
                altText
              }
              images(first: 10) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              titlePt: metafield(namespace: "translations", key: "title_pt") {
                value
              }
              titleEn: metafield(namespace: "translations", key: "title_en") {
                value
              }
              titleEs: metafield(namespace: "translations", key: "title_es") {
                value
              }
              yearMetafield: metafield(namespace: "custom", key: "year") {
                value
              }
            }
          }
        }
      }
    }`

    const response = await shopifyFetch<{
      collection: {
        products: {
          edges: {
            node: {
              id: string
              title: string
              handle: string
              featuredImage: { url: string; altText: string } | null
              images: {
                edges: { node: { url: string; altText: string } }[]
              }
              priceRange: {
                minVariantPrice: { amount: string; currencyCode: string }
              }
              titlePt: { value: string } | null
              titleEn: { value: string } | null
              titleEs: { value: string } | null
              yearMetafield: { value: string } | null
            }
          }[]
        }
      }
    }>(query) 

    const products =
      response?.data?.collection?.products?.edges?.map(edge => {
        const product = edge.node
        const images = product.images.edges.map(imageEdge => imageEdge.node)
        const thirdImage = images[2] || product.featuredImage

        return {
          ...product,
          displayImage: thirdImage,
          metafield: {
            value: product.yearMetafield?.value || null
          },
          translations: {
            pt: {
              title: product.titlePt?.value || product.title,
            },
            en: {
              title: product.titleEn?.value || product.title,
            },
            es: {
              title: product.titleEs?.value || product.title,
            }
          }
        }
      }) || []

    return NextResponse.json({ products })
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar produtos em destaque' },
      { status: 500 }
    )
  }
}