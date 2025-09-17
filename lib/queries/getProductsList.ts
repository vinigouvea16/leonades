import { shopifyFetch } from '../shopify'

export type ShopifyImage = {
  url: string
  altText: string | null
}

export type ShopifyPrice = {
  amount: string
  currencyCode: string
}

export type ShopifyMetafield = {
  value: string | null
}

export type ShopifyProductSummary = {
  id: string
  title: string
  handle: string
  description: string
  firstImage: ShopifyImage | null
  priceRange: {
    minVariantPrice: ShopifyPrice
  }
  yearMetafield: ShopifyMetafield | null
  titlePt: ShopifyMetafield | null
  titleEn: ShopifyMetafield | null
  titleEs: ShopifyMetafield | null
  descriptionPt: ShopifyMetafield | null
  descriptionEn: ShopifyMetafield | null
  descriptionEs: ShopifyMetafield | null
}

export async function getProductsList(): Promise<ShopifyProductSummary[]> {
  const query = `
    query getProductsList {
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            description
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
          }
        }
      }
    }
  `

  const response = await shopifyFetch<{
    products: {
      edges: {
        node: {
          id: string
          title: string
          handle: string
          description: string
          featuredImage: ShopifyImage | null
          images: {
            edges: { node: ShopifyImage }[]
          }
          priceRange: {
            minVariantPrice: ShopifyPrice
          }
          metafield: ShopifyMetafield | null
          titlePt: ShopifyMetafield | null
          titleEn: ShopifyMetafield | null
          titleEs: ShopifyMetafield | null
          descriptionPt: ShopifyMetafield | null
          descriptionEn: ShopifyMetafield | null
          descriptionEs: ShopifyMetafield | null
        }
      }[]
    }
  }>(query)

  return response.data.products.edges.map(edge => {
    const node = edge.node
    const allImages = node.images.edges.map(imgEdge => imgEdge.node)
    const firstImage = allImages[0] || node.featuredImage

    return {
      id: node.id,
      title: node.title,
      handle: node.handle,
      description: node.description,
      firstImage: firstImage,
      priceRange: node.priceRange,
      yearMetafield: node.metafield,
      titlePt: node.titlePt,
      titleEn: node.titleEn,
      titleEs: node.titleEs,
      descriptionPt: node.descriptionPt,
      descriptionEn: node.descriptionEn,
      descriptionEs: node.descriptionEs,
    }
  })
}