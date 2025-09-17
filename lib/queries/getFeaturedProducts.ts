import { shopifyFetch } from '../shopify'

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
  description?: string
  featuredImage: ShopifyImage | null
  priceRange: {
    minVariantPrice: ShopifyPrice
  }
  metafield: {
    value: string | null
  } | null
}

export async function getFeaturedProducts() {
  const query = `
    query getFeaturedProducts {
      collection(handle: "Destaques") {
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

  return shopifyFetch<{
    collection: {
      products: {
        edges: { node: ShopifyProduct }[]
      }
    }
  }>(query)
}
