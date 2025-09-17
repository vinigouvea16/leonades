export interface ProductVariant {
  id: string
  title?: string
  priceV2?: {
    amount: string
    currencyCode: string
  }
  price?: {
    amount: string
    currencyCode: string
  }
  quantityAvailable?: number
  available?: boolean
}

export interface ProductImage {
  url: string
  altText: string | null
  width?: number
  height?: number
}

export interface ProductDetail {
  id: string
  title?: string
  name?: string
  handle: string
  description?: string
  availableForSale: boolean
  featuredImage?: {
    url: string
    altText?: string
  }
  images?: ProductImage[]
  variants?: ProductVariant[]
  tags?: string[]
  year?: string
  metafield?: {
    value: string
  }
  priceRange: {
    min: {
      amount: string
      currencyCode: string
    }
    max: {
      amount: string
      currencyCode: string
    }
  }
}
