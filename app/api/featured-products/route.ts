import { shopifyFetch } from '@/lib/shopify'
import { NextResponse } from 'next/server'

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
  priceRange: {
    minVariantPrice: ShopifyPrice
  }
  metafield: {
    value: string | null
  } | null
}

export async function GET() {
  try {
    const query = `
      query getFeaturedProducts {
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
                metafield(namespace: "custom", key: "year") {
                  value
                }
              }
            }
          }
        }
      }
    `

    const response = await shopifyFetch<{
      collection: {
        products: {
          edges: { node: ShopifyProduct }[]
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
