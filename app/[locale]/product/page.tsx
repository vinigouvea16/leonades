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
import { motion } from 'framer-motion'
import { Undo } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductPage() {
  return (
    <div className="flex flex-col bg-leon-new-sand overflow-x-hidden" id="hero">
      <div className="flex flex-col  lg:my-auto mt-20 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
          className="flex flex-col-reverse lg:flex-row items-center xl:w-11/12 justify-between mx-auto"
        >
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756751847/mesaiba_y6diqe.png'
            }
            width={1019}
            unoptimized
            height={605}
            alt={'cadeira vaivem leon ades'}
            className="lg:w-2/3 h-full object-center object-contain max-h-[750px]"
          />
          <div className="flex flex-col lg:w-1/3 items-center lg:gap-12 gap-5">
            <div className="flex gap-2 font-light text-nowrap">
              <div className="flex flex-col items-end lg:text-xl">
                <p className="text-leon-concrete">Estofado</p>
                <p className="text-leon-concrete">Madeira</p>
                <p className="text-leon-concrete">Tecidos 400 fios</p>
                <p className="text-leon-concrete">Dimensões</p>
                <p className="text-leon-concrete">Preço</p>
              </div>

              <div className="flex flex-col items-start lg:text-xl">
                <p className="text-leon-black ">Espuma Premium</p>
                <p className="text-leon-black ">Imbuia</p>
                <p className="text-leon-black ">Eco-Friendly-Density</p>
                <p className="text-leon-black ">83cm x 83cm x 85cm</p>
                <p className="text-leon-black lg:text-2xl text-xl">$9300</p>
              </div>
            </div>
            <Button variant="leon" size="store" className="text-lg">
              Encomendar
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
          Mesa Ibá
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
        className="flex flex-col items-center space-y-12"
      >
        <p className="lg:text-xl font-light text-center mx-3 lg:w-2/3">
          A Mesa Ibá, com seu tampo redondo, é uma mesa de jantar que pode ser
          feita em diferentes diâmetros. O chanfro do tampo e bordas bem
          arredondas aliviam seu peso e a tornam visualmente leve sem perder a
          estabilidade e firmeza que uma mesa de jantar necessita ter.
        </p>
        <Link href={'/store'}>
          <Button variant="leon" size="store" className="lg:text-xl text-lg">
            <Undo />
            Back
          </Button>
        </Link>
      </motion.div>
      <MyCarouselDesktop />
      <MyCarouselMobile />
      <Footer />
    </div>
  )
}

const images = [
  {
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756819768/micheleminerbo_x_leonades-20_1_qscm5c.png',
    alt: 'Retrato 1',
    width: 400,
    height: 800,
  },
  {
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756819768/SNY08547_1_lhvdyn.png',
    alt: 'Paisagem 1',
    width: 1200,
    height: 700,
  },
  {
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756819767/micheleminerbo_x_leonades-12_1_eocyl4.png',
    alt: 'Retrato 2',
    width: 700,
    height: 1000,
  },
  {
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756819767/IMG_5535_1_ifgz94.png',
    alt: 'Paisagem 2',
    width: 1000,
    height: 500,
  },
  {
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756819766/DSC_0208_1_vsrges.png',
    alt: 'Retrato 3',
    width: 700,
    height: 1000,
  },
  {
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756819767/IMG_5576_1_spgkez.png',
    alt: 'Paisagem 3',
    width: 1000,
    height: 500,
  },
]

function MyCarouselDesktop() {
  const getCardWidth = (width: number, height: number) => {
    const aspectRatio = width / height
    const fixedHeight = 700 // altura fixa do card
    const calculatedWidth = fixedHeight * aspectRatio

    // Normalize width to a reasonable range (200px to 500px)
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
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {images.map((image, index) => {
            const cardWidth = getCardWidth(image.width, image.height)

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
                        src={image.src || '/placeholder.svg'}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

function MyCarouselMobile() {
  const getCardWidth = (width: number, height: number) => {
    const aspectRatio = width / height
    const fixedHeight = 384 // altura fixa do card
    const calculatedWidth = fixedHeight * aspectRatio

    // Normalize width to a reasonable range (200px to 500px)
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
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {images.map((image, index) => {
            const cardWidth = getCardWidth(image.width, image.height)

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
                        src={image.src || '/placeholder.svg'}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        // unoptimized
                        className="h-full w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
