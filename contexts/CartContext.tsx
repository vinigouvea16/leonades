'use client'
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

export type CartItem = {
  id: string
  productId: string
  variantId: string
  title: string
  handle: string
  image: string
  price: {
    amount: string
    currencyCode: string
  }
  quantity: number
  maxQuantity?: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  isLoading: boolean
  totalQuantity: number
  totalPrice: {
    amount: string
    currencyCode: string
  }
}

type CartAction =
  | {
      type: 'ADD_ITEM'
      payload: Omit<CartItem, 'quantity'> & { quantity?: number }
    }
  | { type: 'REMOVE_ITEM'; payload: { variantId: string } }
  | {
      type: 'UPDATE_QUANTITY'
      payload: { variantId: string; quantity: number }
    }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'TOGGLE_CART' }

const initialState: CartState = {
  items: [],
  isOpen: false,
  isLoading: false,
  totalQuantity: 0,
  totalPrice: {
    amount: '0',
    currencyCode: 'BRL',
  },
}

function calculateTotals(items: CartItem[]) {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => {
    return sum + Number.parseFloat(item.price.amount) * item.quantity
  }, 0)

  return {
    totalQuantity,
    totalPrice: {
      amount: totalAmount.toFixed(2),
      currencyCode: items[0]?.price.currencyCode || 'BRL',
    },
  }
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.variantId === action.payload.variantId
      )

      let newItems: CartItem[]

      if (existingItem) {
        newItems = state.items.map(item =>
          item.variantId === action.payload.variantId
            ? {
                ...item,
                quantity: item.quantity + (action.payload.quantity || 1),
              }
            : item
        )
      } else {
        const newItem: CartItem = {
          ...action.payload,
          quantity: action.payload.quantity || 1,
        }
        newItems = [...state.items, newItem]
      }

      const totals = calculateTotals(newItems)

      return {
        ...state,
        items: newItems,
        ...totals,
      }
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        item => item.variantId !== action.payload.variantId
      )
      const totals = calculateTotals(newItems)

      return {
        ...state,
        items: newItems,
        ...totals,
      }
    }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, {
          type: 'REMOVE_ITEM',
          payload: { variantId: action.payload.variantId },
        })
      }

      const newItems = state.items.map(item =>
        item.variantId === action.payload.variantId
          ? { ...item, quantity: action.payload.quantity }
          : item
      )

      const totals = calculateTotals(newItems)

      return {
        ...state,
        items: newItems,
        ...totals,
      }
    }

    case 'CLEAR_CART':
      return {
        ...initialState,
        isOpen: state.isOpen,
      }

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }

    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      }

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      }

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    default:
      return state
  }
}

const CartContext = createContext<{
  state: CartState
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (variantId: string) => void
  updateQuantity: (variantId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  formatPrice: (amount: string, currencyCode: string) => string
} | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && isInitialized) {
      localStorage.setItem('cart', JSON.stringify(state.items))
    }
  }, [state.items, isInitialized])

  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const items: CartItem[] = JSON.parse(savedCart)
          if (items.length > 0) {
            // biome-ignore lint/complexity/noForEach: <explanation>
            items.forEach(item => {
              dispatch({
                type: 'ADD_ITEM',
                payload: {
                  id: item.id,
                  productId: item.productId,
                  variantId: item.variantId,
                  title: item.title,
                  handle: item.handle,
                  image: item.image,
                  price: item.price,
                  maxQuantity: item.maxQuantity,
                  quantity: item.quantity,
                },
              })
            })
          }
        } catch (error) {
          console.error('Erro ao carregar carrinho do localStorage:', error)
          localStorage.removeItem('cart')
        }
      }
      setIsInitialized(true)
    }
  }, [isInitialized])

  const addItem = (
    item: Omit<CartItem, 'quantity'> & { quantity?: number }
  ) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (variantId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { variantId } })
  }

  const updateQuantity = (variantId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { variantId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' })
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const formatPrice = (amount: string, currencyCode: string) => {
    const price = Number.parseFloat(amount)
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currencyCode,
    }).format(price)
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider')
  }
  return context
}
