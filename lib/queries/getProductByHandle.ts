import { shopifyFetch } from '../shopify'

export type ShopifyImage = {
  url: string
  altText: string | null
  width?: number
  height?: number
}

export type ShopifyPrice = {
  amount: string
  currencyCode: string
}

export type ShopifyMetafield = {
  value: string | null
}

export type ShopifyVariant = {
  id: string
  title: string
  price: {
    amount: string
    currencyCode: string
  }
  availableForSale: boolean
}

export type ShopifyProductDetail = {
  id: string
  title: string
  handle: string
  description: string
  images: {
    edges: { node: ShopifyImage }[]
  }
  priceRange: {
    minVariantPrice: ShopifyPrice
    maxVariantPrice: ShopifyPrice
  }
  variants: {
    edges: { node: ShopifyVariant }[]
  }
  yearMetafield: ShopifyMetafield | null
  availableForSale: boolean
  tags: string[]
}

export async function getProductByHandle(
  handle: string
): Promise<ShopifyProductDetail | null> {
  const query = `
    query getProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        availableForSale
        tags
        images(first: 20) {
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
        metafield(namespace: "custom", key: "year") {
          value
        }
      }
    }
  `

  const response = await shopifyFetch<{
    product: {
      id: string
      title: string
      handle: string
      description: string
      availableForSale: boolean
      tags: string[]
      images: {
        edges: {
          node: {
            url: string
            altText: string | null
            width?: number
            height?: number
          }
        }[]
      }
      priceRange: {
        minVariantPrice: { amount: string; currencyCode: string }
        maxVariantPrice: { amount: string; currencyCode: string }
      }
      variants: {
        edges: { node: ShopifyVariant }[]
      }
      metafield: { value: string | null } | null
    } | null
  }>(query, { handle })

  if (!response.data.product) {
    return null
  }

  const product = response.data.product

  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    description: product.description,
    availableForSale: product.availableForSale,
    tags: product.tags,
    images: product.images,
    priceRange: product.priceRange,
    variants: product.variants,
    yearMetafield: product.metafield,
  }
}
