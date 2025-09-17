'use client'

import { useProductList } from '@/lib/hooks/useProductsList'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

type ComponentProduct = {
  id: string
  name: string
  handle: string
  price: string
  year: string
  img: string
  bgColor: string
  priceColor: string
  yearColor: string
  description: string
}
interface StoreGridProps {
  products: ComponentProduct[]
  activeProduct: ComponentProduct
  setActiveProduct: (product: ComponentProduct) => void
}

interface StoreCarouselProps {
  products: ComponentProduct[]
  onChange?: (index: number) => void
}

export default function StoreSection() {
  const { products: fetchedProducts, loading, error } = useProductList()

  const formatPrice = (
    priceRange: { amount: string; currencyCode: string } | null
  ) => {
    if (!priceRange) return '0'
    const price = Number.parseFloat(priceRange.amount)
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: priceRange.currencyCode,
    })
      .format(price)
      .replace('R$', '')
      .trim()
  }

  const variants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -0 },
  }

  const products: ComponentProduct[] = fetchedProducts.map(p => ({
    id: p.id,
    name: p.name,
    handle: p.handle,
    price: formatPrice(p.priceRange),
    year: p.year || '—',
    img: p.img,
    description: p.description,
    bgColor: 'bg-leon-concrete',
    priceColor: 'bg-leon-black',
    yearColor: 'bg-[#EFB639]',
  }))

  const [activeProduct, setActiveProduct] = useState<ComponentProduct | null>(
    null
  )
  // const [isHovering, setIsHovering] = useState(false)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (products.length > 0 && !activeProduct) {
      setActiveProduct(products[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length])

  if (loading) {
    return (
      <div className="flex flex-col lg:flex-row lg:mx-5 gap-5 items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
        <p>Carregando produtos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col lg:flex-row lg:mx-5 gap-5 items-center justify-center min-h-[50vh]">
        <p className="text-red-600">Erro: {error}</p>
      </div>
    )
  }

  if (!products.length || !activeProduct) {
    return (
      <div className="flex flex-col lg:flex-row lg:mx-5 gap-5 items-center justify-center min-h-[50vh]">
        <p>Nenhum produto encontrado.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row lg:mx-5 gap-5">
      {/* Left-side */}
      <div className="flex-1 lg:ml-8 lg:mr-5 bg-leon-concrete/0 w-full h-fit flex flex-col lg:justify-between overflow-y-hidden lg:h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            <h1 className="2xl:text-8xl text-7xl font-light uppercase bg-clip-text text-transparent bg-gradient-to-t from-[#F0EDE6] to-[#333]/100 h-fit lg:mx-0 mx-3 break-words">
              {activeProduct.name}
            </h1>
            <p className="text-left text-leon-black font-light lg:text-base text-sm mt-3 w-[95%] lg:mx-0 mx-3">
              {activeProduct.description}
            </p>
            <div className="relative flex flex-col lg:mt-5">
              <div className="flex flex-col absolute lg:top-0 lg:left-0 top-3 left-3 gap-1.5">
                <div className="flex gap-3 items-center">
                  <div
                    className={`w-5 h-5 rounded-full ${activeProduct.bgColor}`}
                  />
                  <p className="uppercase font-light">{activeProduct.name}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div
                    className={`w-5 h-5 rounded-full ${activeProduct.priceColor}`}
                  />
                  <p className="uppercase font-light">
                    R$ {activeProduct.price}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div
                    className={`w-5 h-5 rounded-full ${activeProduct.yearColor}`}
                  />
                  <p className="uppercase font-light">{activeProduct.year}</p>
                </div>
              </div>

              <Image
                src={activeProduct.img}
                alt={activeProduct.name}
                className="object-cover lg:w-fit mx-auto lg:max-h-[750px] w-fit max-h-[350px] mt-20 lg:mt-10"
                width={785}
                quality={95}
                height={753}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Central line */}
      <div className="w-[1px] bg-gradient-to-b from-leon-concrete/15 via-leon-concrete to-leon-concrete/15 lg:block hidden" />

      {/* Right-side / Grid */}
      <div className="lg:flex-1 lg:block hidden">
        <StoreGrid
          products={products}
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
        />
      </div>

      {/* Mobile carousel */}
      <div className="block lg:hidden">
        <StoreCarousel
          products={products}
          onChange={index => setActiveProduct(products[index])}
        />
      </div>
    </div>
  )
}

function StoreGrid({ products, setActiveProduct }: StoreGridProps) {
  const [, setIsHovering] = useState(false)

  const handleMouseEnter = (product: ComponentProduct) => {
    setIsHovering(true)
    setActiveProduct(product)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (products.length > 0) {
      setActiveProduct(products[0])
    }
  }

  const handleProductClick = (product: ComponentProduct) => {
    window.location.href = `/product/${product.handle}`
  }

  return (
    <div
      className="overflow-y-auto max-h-[99vh] lg:grid lg:grid-cols-2 flex flex-col gap-5 pb-20"
      onMouseLeave={handleMouseLeave}
    >
      {products.map(product => (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          key={product.id}
          onMouseEnter={() => handleMouseEnter(product)}
          onClick={() => handleProductClick(product)}
          className="relative flex flex-col border-1 pt-4 border-[#333]/40 lg:border-0 h-[400px] cursor-pointer transition-all duration-300 rounded-bl-sm rounded-tr-sm hover:shadow-sm"
        >
          <div className="flex flex-col absolute top-5 left-5 gap-1.5">
            <div className="flex gap-2 items-center">
              <div className={`w-5 h-5 rounded-full ${product.bgColor}`} />
              <p className="uppercase font-light">{product.name}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className={`w-5 h-5 rounded-full ${product.priceColor}`} />
              <p className="uppercase font-light">R$ {product.price}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className={`w-5 h-5 rounded-full ${product.yearColor}`} />
              <p className="uppercase font-light">{product.year}</p>
            </div>
          </div>

          <div className="flex items-center justify-center h-full w-full">
            <Image
              src={product.img}
              alt={product.name}
              className="object-contain max-h-[350px] w-full"
              width={345}
              quality={95}
              height={250}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function StoreCarousel({ products, onChange }: StoreCarouselProps) {
  const handleProductClick = (product: ComponentProduct) => {
    window.location.href = `/product/${product.handle}`
  }

  return (
    <div className="relative w-fit mx-3 mb-4">
      <Carousel
        className="w-fit"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {products.map((product, index) => (
            <CarouselItem
              key={product.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
              onClick={() => {
                onChange?.(index)
                handleProductClick(product)
              }}
            >
              <div className="relative flex flex-col rounded-lg border-1 pt-4 border-[#333]/20 h-[350px] cursor-pointer">
                <div className="flex flex-col absolute top-5 left-5 gap-1.5">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`w-5 h-5 rounded-full ${product.bgColor}`}
                    />
                    <p className="uppercase font-light">{product.name}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div
                      className={`w-5 h-5 rounded-full ${product.priceColor}`}
                    />
                    <p className="uppercase font-light">R$ {product.price}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div
                      className={`w-5 h-5 rounded-full ${product.yearColor}`}
                    />
                    <p className="uppercase font-light">{product.year}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center h-full w-full">
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="object-contain max-h-[350px] w-full"
                    width={345}
                    height={250}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-leon-new-sand" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-leon-new-sand" />
      </Carousel>
    </div>
  )
}
