'use client'

import Image from 'next/image'
import * as React from 'react'
import type { Product } from './types'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface StoreCarouselProps {
  products: Product[]
  onChange?: (index: number) => void
}

export default function StoreCarousel({
  products,
  onChange,
}: StoreCarouselProps) {
  // const [api, setApi] = React.useState<any>()
  // const [activeIndex, setActiveIndex] = React.useState(0)

  // React.useEffect(() => {
  //   if (!api) return

  //   api.on('select', () => {
  //     const selectedIndex = api.selectedScrollSnap()
  //     setActiveIndex(selectedIndex)
  //     if (onChange) onChange(selectedIndex)
  //   })
  // }, [api, onChange])

  // const handleDotClick = (index: number) => {
  //   if (api) api.scrollTo(index)
  // }

  return (
    <div className="relative w-fit mx-3 mb-4">
      <Carousel className="w-fit">
        <CarouselContent className="-ml-1">
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative flex flex-col rounded-lg border-1 pt-4 border-[#333]/20 h-[350px] cursor-pointer">
                {/* Tags */}
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
                    <p className="uppercase font-light">{product.price}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div
                      className={`w-5 h-5 rounded-full ${product.yearColor}`}
                    />
                    <p className="uppercase font-light">{product.year}</p>
                  </div>
                </div>

                {/* Imagem */}
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

        {/* Botões de navegação */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-leon-new-sand" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-leon-new-sand" />
      </Carousel>

      {/* Pontinhos de navegação */}
      {/* <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? 'bg-leon-black' : 'bg-leon-concrete/40'
            }`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div> */}
    </div>
  )
}
