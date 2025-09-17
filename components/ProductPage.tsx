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
import { useRouter } from '@/i18n/navigation'
import { useProduct } from '@/lib/hooks/useProduct'
import { motion } from 'framer-motion'
import { ChevronsDown, Undo } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface ProductPageProps {
  handle: string
}

export default function ProductPage({ handle }: ProductPageProps) {
  const t = useTranslations('Product')
  const { product, loading, error } = useProduct(handle)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/store')
    }
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

  const mainImage = product.images[0] || {
    url: '/placeholder-image.jpg',
    altText: product.name,
  }

  const price =
    product.priceRange.min.amount === product.priceRange.max.amount
      ? formatPrice(
          product.priceRange.min.amount,
          product.priceRange.min.currencyCode
        )
      : `${formatPrice(product.priceRange.min.amount, product.priceRange.min.currencyCode)} - ${formatPrice(product.priceRange.max.amount, product.priceRange.max.currencyCode)}`

  return (
    <div className="flex flex-col bg-leon-new-sand overflow-x-hidden" id="hero">
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
              y: [0, 16, 0], // movimento
            }}
            transition={{
              duration: 1.5,
              // biome-ignore lint/style/useNumberNamespace: <explanation>
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center text-leon-black/75"
          >
            {/* <p className="text-sm font-light mb-2">Role para ver mais</p> */}
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
            alt={mainImage.altText || product.name}
            className="lg:w-2/3 h-full object-center object-contain max-h-[750px]"
          />
          <div className="flex flex-col lg:w-1/3 items-center lg:gap-12 gap-5">
            <div className="flex gap-2 font-light text-nowrap">
              <div className="flex flex-col items-end lg:text-xl">
                <p className="text-leon-concrete">Produto</p>
                <p className="text-leon-concrete">Ano</p>
                <p className="text-leon-concrete">Status</p>
                {product.tags.length > 0 && (
                  <p className="text-leon-concrete">Categoria</p>
                )}
                <p className="text-leon-concrete">Preço</p>
              </div>

              <div className="flex flex-col items-start lg:text-xl">
                <p className="text-leon-black">{product.name}</p>
                <p className="text-leon-black">{product.year || '—'}</p>
                <p className="text-leon-black">
                  {product.availableForSale ? 'Disponível' : 'Indisponível'}
                </p>
                {product.tags.length > 0 && (
                  <p className="text-leon-black">{product.tags[0]}</p>
                )}
                <p className="text-leon-black lg:text-2xl text-xl">
                  R$ {price}
                </p>
              </div>
            </div>
            <Button
              variant="leon"
              size="store"
              className="text-lg"
              disabled={!product.availableForSale}
            >
              {product.availableForSale ? 'Encomendar' : 'Indisponível'}
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
          {product.name}
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
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          ) : (
            <p>Produto sem descrição disponível.</p>
          )}
        </div>
        <Link href={'/store'}>
          <Button
            variant="leon"
            size="store"
            className="lg:text-xl text-lg"
            onClick={handleBack}
          >
            <Undo />
            {t('back')}
          </Button>
        </Link>
      </motion.div>

      {product.images.length > 1 && (
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

            console.log(`Imagem ${index + 1}:`, {
              url: image.url,
              width: image.width,
              height: image.height,
              calculatedWidth: cardWidth,
            })

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
    const maxWidth = 500
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
