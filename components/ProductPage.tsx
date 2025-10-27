'use client'
import Footer from '@/components/homapage-components/footer/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from '@/i18n/navigation'
import { useAddToCart } from '@/lib/hooks/useAddToCart'
import { type ProductVariant, useProduct } from '@/lib/hooks/useProduct'
import { useProductOptionTranslation } from '@/lib/hooks/useProductOptionTranslation'
import { motion } from 'framer-motion'
import { ChevronsDown, Undo } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'

interface ProductPageProps {
  handle: string
}

interface SelectedOptions {
  [key: string]: string
}

export default function ProductPage({ handle }: ProductPageProps) {
  const t = useTranslations('Product')
  const { product, loading, error } = useProduct(handle)

  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const router = useRouter()

  const { addToCart } = useAddToCart()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  )
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})
  const { translateOptionName, translateOptionValue } =
    useProductOptionTranslation()

  useEffect(() => {
    if (product?.variants && product.variants.length > 0) {
      const firstVariant = product.variants[0]
      setSelectedVariant(firstVariant)

      const initialOptions: SelectedOptions = {}
      if (firstVariant.selectedOptions) {
        for (const option of firstVariant.selectedOptions) {
          initialOptions[option.name] = option.value
        }
      }
      setSelectedOptions(initialOptions)
    }
  }, [product])

  useEffect(() => {
    if (!product?.variants) return

    const variant = product.variants.find(v => {
      return v.selectedOptions?.every(
        (option: { name: string | number; value: string }) => {
          return selectedOptions[option.name] === option.value
        }
      )
    })

    if (variant) {
      setSelectedVariant(variant)
    }
  }, [selectedOptions, product])

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value,
    }))
  }

  const handleAddToCart = async () => {
    if (!selectedVariant || !product) return

    setIsLoading(true)

    try {
      const success = addToCart(
        {
          productId: product.id,
          variantId: selectedVariant.id,
          title: product.name,
          handle: product.handle,
          image: product.images[0]?.url || '/placeholder-image.jpg',
          price: {
            amount: selectedVariant.price.amount,
            currencyCode: selectedVariant.price.currencyCode,
          },
          quantity: 1,
          maxQuantity: undefined,
          selectedOptions: selectedVariant.selectedOptions,
        },
        {
          openCart: true,
          showToast: true,
        }
      )

      if (success) {
        console.log('Produto adicionado com sucesso!')
      }
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    router.push('/store')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const formatPrice = (amount: string, currencyCode: string) => {
    const price = Number.parseFloat(amount)
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currencyCode,
    })
      .format(price)
      .replace('R$', '')
      .trim()
  }

  const productOptions = useMemo(() => {
    if (!product?.options) return []

    return product.options.map(
      (option: { name: string; values: string[] }) => ({
        name: option.name,
        values: option.values,
      })
    )
  }, [product])

  const availabilityStatus = useMemo(() => {
    if (!selectedVariant) return 'Indisponível'

    if (!selectedVariant.availableForSale) return 'Indisponível'

    if (
      typeof selectedVariant.quantityAvailable === 'number' &&
      selectedVariant.quantityAvailable > 0
    ) {
      return 'Disponível'
    }

    return 'Sob Encomenda'
  }, [selectedVariant])

  if (loading) {
    return (
      <div className="flex flex-col bg-leon-new-sand overflow-x-hidden min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-leon-black" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col bg-leon-new-sand overflow-x-hidden min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-leon-black mb-4">Erro</h1>
            <p className="text-leon-concrete">{error}</p>
            <Link href="/store" className="mt-4 inline-block">
              <Button
                variant="leon"
                size="store"
                className="lg:text-xl text-lg"
              >
                <Undo />
                Voltar para Loja
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex flex-col bg-leon-new-sand overflow-x-hidden min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-leon-black mb-4">
              Produto não encontrado
            </h1>
            <p className="text-leon-concrete">
              O produto solicitado não existe.
            </p>
            <Link href="/store" className="mt-4 inline-block">
              <Button
                variant="leon"
                size="store"
                className="lg:text-xl text-lg"
              >
                <Undo />
                Voltar para Loja
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const mainImage = product.images?.[0] || {
    url: '/placeholder-image.jpg',
    altText: product.name || 'Produto',
  }

  const productTitle = product.name || 'Produto sem título'
  const productYear = product.year || '—'

  const currentPrice = selectedVariant
    ? formatPrice(
        selectedVariant.price.amount,
        selectedVariant.price.currencyCode
      )
    : formatPrice(
        product.priceRange.min.amount,
        product.priceRange.min.currencyCode
      )

  return (
    <div
      className="flex flex-col  bg-leon-new-sand overflow-x-hidden"
      id="hero"
    >
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute lg:right-[20%] top-[60%] right-[5%] z-20"
          style={{ position: 'absolute' }}
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center text-leon-black/75"
          >
            <ChevronsDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      )}
      <div className="flex flex-col lg:my-auto mt-20 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
          className="flex flex-col-reverse lg:flex-row items-center xl:w-11/12 justify-between mx-auto"
        >
          <Image
            src={mainImage.url}
            width={1019}
            unoptimized
            height={605}
            alt={mainImage.altText || productTitle}
            className="lg:w-2/3 h-full object-center object-contain max-h-[750px]"
          />
          <div className="flex flex-col mx-auto gap-0 px-4">
            {/* product info */}
            <div className="flex gap-2 font-light text-nowrap lg:w-full">
              <div className="flex flex-col items-end lg:text-xl">
                <p className="text-leon-concrete lg:text-xl lg:w-[120px] w-[80px] text-right flex-shrink-0">
                  {t('product')}
                </p>
                <p className="text-leon-concrete lg:text-xl lg:w-[120px] w-[80px] text-right flex-shrink-0">
                  {t('year')}
                </p>
                <p className="text-leon-concrete lg:text-xl lg:w-[120px] w-[80px] text-right flex-shrink-0">
                  {t('status')}
                </p>
                {product.tags?.length > 0 && (
                  <p className="text-leon-concrete lg:text-xl lg:w-[120px] w-[80px] text-right flex-shrink-0">
                    {t('category')}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start lg:text-xl">
                <p className="text-leon-black w-full">{productTitle}</p>
                <p className="text-leon-black">{productYear}</p>
                <p className="text-leon-black">{availabilityStatus}</p>
                {product.tags?.length > 0 && (
                  <p className="text-leon-black">{product.tags[0]}</p>
                )}
              </div>
            </div>

            {productOptions.length > 0 && (
              <div className="flex flex-col gap-0 lg:mr-auto w-full">
                {productOptions.map(
                  (option: { name: string; values: string[] }) => (
                    <div
                      key={option.name}
                      className="flex gap-2 items-center lg:mx-0"
                    >
                      <label
                        htmlFor={`select-${option.name}`}
                        className="font-light text-leon-concrete lg:text-xl lg:w-[120px] w-[80px] text-right flex-shrink-0 lg:mx-0"
                      >
                        {translateOptionName(option.name)}
                      </label>
                      <Select
                        value={selectedOptions[option.name] || ''}
                        onValueChange={value =>
                          handleOptionChange(option.name, value)
                        }
                      >
                        <SelectTrigger
                          id={`select-${option.name}`}
                          className="w-fit bg-leon-new-sand border-leon-concrete/30"
                        >
                          <SelectValue
                            placeholder={`Selecione ${translateOptionName(option.name)}`}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {option.values.map((value: string) => (
                            <SelectItem key={value} value={value}>
                              {translateOptionValue(value)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )
                )}
              </div>
            )}

            <div className="flex gap-2 font-light text-nowrap lg:w-full">
              <div className="flex flex-col items-end lg:text-xl">
                <p className="text-leon-concrete lg:text-xl lg:w-[120px] w-[80px] text-right flex-shrink-0">
                  {t('price')}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-leon-black lg:text-2xl text-xl">
                  R$ {currentPrice}
                </p>
              </div>
            </div>

            {/* NOVO: Prazo de Produção - apenas para produtos "Sob Encomenda" */}
            {availabilityStatus === 'Sob Encomenda' && (
              <div className="flex gap-2 font-light lg:w-full ">
                <p className="text-leon-concrete lg:text-xl lg:w-[120px] w-[80px] text-right text-nowrap flex-shrink-0">
                  {t('deliveryTime')}
                </p>
                <p className="text-leon-black lg:text-xl">
                  90 {t('businessDays')}
                </p>
              </div>
            )}

            <Button
              variant="leon"
              size="store"
              className="text-lg w-fit mt-8 lg:ml-[80px] mx-auto"
              disabled={!selectedVariant?.availableForSale || isLoading}
              onClick={handleAddToCart}
            >
              {isLoading
                ? `${t('addToCartButtonState1')}`
                : selectedVariant?.availableForSale
                  ? `${t('addToCartButtonState2')}`
                  : `${t('addToCartButtonState3')}`}
            </Button>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          className="text-[min(12vw,7rem)] lg:text-[min(10vw,8rem)] 2xl:text-[min(10vw,9rem)] font-light lg:bg-gradient-to-r lg:from-[#999]/50 lg:to-[#333]/100
            bg-gradient-to-t from-[#F0EDE6] from-0 to-[#333]/100 to-100%
            uppercase bg-clip-text text-transparent h-fit mx-auto text-center"
        >
          {productTitle}
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
        className="flex flex-col items-center space-y-12"
      >
        <div className="lg:text-xl font-light text-center mx-3 lg:w-2/3">
          {product.description ? (
            <p>{product.description}</p>
          ) : (
            <p>Produto sem descrição disponível.</p>
          )}
        </div>
        <Button
          variant="leon"
          size="store"
          className="lg:text-xl text-lg"
          onClick={handleBack}
        >
          <Undo />
          {t('back')}
        </Button>
      </motion.div>

      {product.images && product.images.length > 1 && (
        <>
          <ProductCarouselDesktop images={product.images.slice(1)} />
          <ProductCarouselMobile images={product.images.slice(1)} />
        </>
      )}

      <Footer />
    </div>
  )
}

interface ProductCarouselProps {
  images: Array<{
    url: string
    altText: string | null
    width?: number
    height?: number
  }>
}

function ProductCarouselDesktop({ images }: ProductCarouselProps) {
  const getCardWidth = (width: number, height: number) => {
    const aspectRatio = width / height
    const fixedHeight = 700
    const calculatedWidth = fixedHeight * aspectRatio

    const minWidth = 400
    const maxWidth = 1200
    const normalizedWidth = Math.max(
      minWidth,
      Math.min(maxWidth, calculatedWidth)
    )

    return normalizedWidth
  }

  return (
    <div className="hidden my-20 lg:flex justify-center items-center">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {images.map((image, index) => {
            const width = image.width || 800
            const height = image.height || 600
            const cardWidth = getCardWidth(width, height)

            return (
              <CarouselItem
                key={index}
                className="pl-1"
                style={{ flexBasis: `${cardWidth}px`, flexShrink: 0 }}
              >
                <div className="p-1">
                  <Card className="h-[700px] flex items-center justify-center overflow-hidden py-0">
                    <CardContent className="flex h-full w-full items-center justify-center p-0">
                      <Image
                        src={image.url}
                        alt={image.altText || `Produto ${index + 1}`}
                        width={width}
                        height={height}
                        unoptimized
                        className="h-full w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-leon-new-sand/75" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-leon-new-sand/75" />
      </Carousel>
    </div>
  )
}

function ProductCarouselMobile({ images }: ProductCarouselProps) {
  const getCardWidth = (width: number, height: number) => {
    const aspectRatio = width / height
    const fixedHeight = 384
    const calculatedWidth = fixedHeight * aspectRatio

    const minWidth = 300
    const maxWidth = 700
    const normalizedWidth = Math.max(
      minWidth,
      Math.min(maxWidth, calculatedWidth)
    )

    return normalizedWidth
  }

  return (
    <div className="lg:hidden my-20 flex justify-center items-center">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {images.map((image, index) => {
            const width = image.width || 500
            const height = image.height || 384
            const cardWidth = getCardWidth(width, height)

            return (
              <CarouselItem
                key={index}
                className="pl-1"
                style={{ flexBasis: `${cardWidth}px`, flexShrink: 0 }}
              >
                <div className="p-1">
                  <Card className="h-[500px] flex items-center justify-center overflow-hidden py-0">
                    <CardContent className="flex h-full w-full items-center justify-center p-0">
                      <Image
                        src={image.url}
                        alt={image.altText || `Produto ${index + 1}`}
                        width={width}
                        height={height}
                        className="h-full w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-leon-new-sand/75" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-leon-new-sand/75" />
      </Carousel>
    </div>
  )
}
