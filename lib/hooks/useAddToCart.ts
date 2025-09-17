import { type CartItem, useCart } from '@/contexts/CartContext'
import { toast } from 'sonner'

type AddToCartParams = {
  productId: string
  variantId: string
  title: string
  handle: string
  image: string
  price: {
    amount: string
    currencyCode: string
  }
  quantity?: number
  maxQuantity?: number
}

export function useAddToCart() {
  const { addItem, openCart } = useCart()

  const addToCart = (
    product: AddToCartParams,
    options?: { openCart?: boolean; showToast?: boolean }
  ) => {
    try {
      const cartItem: Omit<CartItem, 'quantity'> & { quantity?: number } = {
        id: `${product.variantId}-${Date.now()}`,
        productId: product.productId,
        variantId: product.variantId,
        title: product.title,
        handle: product.handle,
        image: product.image,
        price: product.price,
        quantity: product.quantity || 1,
        maxQuantity: product.maxQuantity,
      }

      addItem(cartItem)

      if (options?.showToast !== false) {
        toast.success(`${product.title} adicionado ao carrinho!`)
      }

      if (options?.openCart) {
        openCart()
      }

      return true
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error)

      if (options?.showToast !== false) {
        toast.error('Erro ao adicionar produto ao carrinho')
      }

      return false
    }
  }

  return { addToCart }
}
