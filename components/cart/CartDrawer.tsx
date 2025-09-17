'use client'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/contexts/CartContext'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function CartDrawer() {
  const t = useTranslations('Cart')
  const { state, removeItem, updateQuantity, closeCart, formatPrice } =
    useCart()

  const handleCheckout = async () => {
    if (state.items.length === 0) return

    try {
      const lineItems = state.items.map(item => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }))

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lineItems }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar checkout')
      }

      if (data.checkout?.webUrl) {
        window.location.href = data.checkout.webUrl
      } else {
        throw new Error('URL de checkout não encontrada')
      }
    } catch (error) {
      console.error('Erro no checkout:', error)
      alert('Erro ao processar checkout. Tente novamente.')
    }
  }

  const handleQuantityChange = (
    variantId: string,
    currentQuantity: number,
    change: number
  ) => {
    const newQuantity = currentQuantity + change
    if (newQuantity > 0) {
      updateQuantity(variantId, newQuantity)
    }
  }

  return (
    <Drawer open={state.isOpen} onOpenChange={closeCart}>
      <DrawerContent className="h-full h-screen text-[#764B28] px-3 bg-leon-new-sand flex flex-col">
        <div className="lg:mx-auto 2xl:w-4/5 w-full flex flex-col flex-1">
          <DrawerHeader className="text-center mb-3 flex-shrink-0">
            <div className="flex justify-between items-center">
              <DrawerTitle className="text-xl font-medium text-[#764B28]">
                {t('cartHeader')} ({state.totalQuantity})
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <X className="size-8" strokeWidth={1} />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto lg:px-4 pb-4 min-h-0 max-h-[calc(66vh-150px)] xl:max-h-[calc(66vh-180px)]">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <div className="text-4xl mb-4">🛒</div>
                <p className="text-gray-500 mb-4">{t('emptyCartH1')}</p>
                <DrawerClose asChild>
                  <Link href="/store">
                    <Button variant="outline">{t('emptyCartH2')}</Button>
                  </Link>
                </DrawerClose>
              </div>
            ) : (
              <div className="space-y-4 pb-4">
                {state.items.map(item => (
                  <div
                    key={item.variantId}
                    className="flex gap-4 p-4 border rounded-lg flex-col lg:flex-row items-center bg-white/50"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={120}
                        height={120}
                        unoptimized
                        className="rounded-md w-full object-cover lg:object-contain size-40 lg:size-60"
                      />
                    </div>

                    {/* product info */}
                    <div className="flex-1 min-w-0 my-auto items-center lg:items-start flex flex-col ">
                      <h3 className="text-lg lg:text-2xl font-medium text-[#764B28] truncate text-center lg:text-left">
                        {item.title}
                      </h3>

                      {/* quantity */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            handleQuantityChange(
                              item.variantId,
                              item.quantity,
                              -1
                            )
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>

                        <span className="px-3 py-1 text-lg font-light rounded min-w-[3rem] text-center">
                          {item.quantity}
                        </span>

                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            handleQuantityChange(
                              item.variantId,
                              item.quantity,
                              1
                            )
                          }
                          disabled={
                            item.maxQuantity
                              ? item.quantity >= item.maxQuantity
                              : false
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {/* preço total */}
                    <div className="flex flex-col lg:items-end items-center gap-2 justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-700 hover:text-red-500"
                        onClick={() => removeItem(item.variantId)}
                      >
                        <Trash2 className="size-5" />
                      </Button>

                      <p className="text-sm lg:text-base lg:font-medium font-light text-leon-black/75">
                        {formatPrice(
                          (
                            Number.parseFloat(item.price.amount) * item.quantity
                          ).toFixed(2),
                          item.price.currencyCode
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* footer */}
          {state.items.length > 0 && (
            <div className="border-t bg-leon-new-sand flex-shrink-0 p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg font-medium">
                  <span>Total:</span>
                  <span>
                    {formatPrice(
                      state.totalPrice.amount,
                      state.totalPrice.currencyCode
                    )}
                  </span>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button
                    className="w-full bg-[#764B28] hover:bg-green-900 font-light text-lg"
                    size="xl"
                    onClick={handleCheckout}
                    disabled={state.isLoading}
                  >
                    {state.isLoading
                      ? `${t('CartButton1State1')}`
                      : `${t('CartButton1State2')}`}
                  </Button>

                  <DrawerClose asChild>
                    <Button
                      variant="outline"
                      size="xl"
                      className="w-full font-light text-lg"
                    >
                      {t('CartButton2')}
                    </Button>
                  </DrawerClose>
                </div>
              </div>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
