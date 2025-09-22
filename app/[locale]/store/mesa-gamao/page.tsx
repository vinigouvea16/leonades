'use client'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { useState } from 'react'

interface GalleryImage {
  id: number
  src: string
  alt: string
}

interface Dimension {
  value: string
  unit: string
}

interface ProductInfo {
  name: string
  status: string
  materials: string[]
  dimensions: Dimension[]
  description: string
  nextProduct: string
}

interface GalleryProps {
  images: GalleryImage[]
  className?: string
}

interface MobileGalleryProps {
  images: GalleryImage[]
}

interface ProductInfoProps {
  info: ProductInfo
  className?: string
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572597/disutdemqnclsipkzu0x_qbmagl.webp',
    alt: 'Mesa Gamão - Vista principal',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572596/bp5kn6ikfeejuvlofdys_lpflkh.webp',
    alt: 'Mesa Gamão - Detalhe lateral',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572596/crhxa6yfxhtmcu6cfytt_zdoiy8.webp',
    alt: 'Mesa Gamão - Detalhe tabuleiro',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572595/bjhojpt6alr5bokwzzd5_t2qrvi.webp',
    alt: 'Mesa Gamão - Vista completa',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572599/eh515dlwfzg5k1rp50pv_tjojdf.webp',
    alt: 'Mesa Gamão - Acabamento',
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572600/epzlh8i4jjskyube9tvz_k1hdsv.webp',
    alt: 'Mesa Gamão - Detalhe madeira',
  },
  {
    id: 7,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572601/kwibmukh6gos3x3ssimg_mpnd8t.webp',
    alt: 'Mesa Gamão - Vista lateral',
  },
  {
    id: 8,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572619/ow0ay7knecdupqmrqcs1_pjnqgt.webp',
    alt: 'Mesa Gamão - Detalhe mármore',
  },
  {
    id: 9,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572621/uamjbieorf31y25uqvsl_mdnd3d.webp',
    alt: 'Mesa Gamão - Acabamento final',
  },
  {
    id: 10,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572622/wahehybotz0xyozy67wv_nc4vzy.webp',
    alt: 'Mesa Gamão - Acabamento final',
  },
  {
    id: 11,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572624/x15iyb60peicwnrgihwv_xdwaae.webp',
    alt: 'Mesa Gamão - Acabamento final',
  },
  {
    id: 12,
    src: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1758572625/xubotxrkyxyjabsvr9oy_u9kyp4.webp',
    alt: 'Mesa Gamão - Acabamento final',
  },
]

const PRODUCT_INFO: ProductInfo = {
  name: 'Mesa gamão',
  status: 'sob demanda',
  materials: ['100% Ibá', 'Mármore'],
  dimensions: [
    { value: '200', unit: 'c' },
    { value: '80', unit: 'h' },
    { value: '50', unit: 'p' },
  ],
  description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Obcaecati fugiat magnam placeat adipisci. In quia tenetur et, 
    molestias expedita repellat! A doloribus et repellat commodi cum. 
    Quas eveniet placeat ipsum. Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Quos soluta eos facere quam eum deleniti aperiam 
    inventore eius voluptatum quae dolores, neque magnam commodi. 
    Tenetur commodi perspiciatis expedita porro deserunt.`,
  nextProduct: '/store/mesa-sucupira',
}

export default function MesaGamao() {
  return (
    <div className="flex h-screen bg-[url('/custom/mesagamao5.webp')] bg-cover bg-center">
      <MesaGamaoDesktop />
      <MesaGamaoMobile />
    </div>
  )
}

function Gallery({ images, className = '' }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const nextImage = (): void => {
    setCurrentIndex(prev => (prev + 1) % images.length)
  }

  const prevImage = (): void => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number): void => {
    setCurrentIndex(index + 1)
    setIsModalOpen(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openModal(index)
    }
  }

  return (
    <>
      <div className={`flex gap-4 justify-end ${className}`}>
        {images.slice(1, 4).map((image, index) => (
          <button
            type="button"
            key={image.id}
            className="cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg"
            onClick={() => openModal(index)}
            onKeyDown={event => handleKeyDown(event, index)}
            tabIndex={0}
            aria-label={`Abrir imagem ${image.alt} em tela cheia`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={140}
              height={190}
              quality={95}
              className="w-[137px] lg:h-[189px] object-cover object-center rounded-lg"
            />
          </button>
        ))}
      </div>

      {/* Modal da Galeria */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 bg-opacity-90">
          <div className="relative w-full h-full p-4 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Fechar galeria"
            >
              <X className="size-6" strokeWidth={1} />
            </button>

            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="size-6" strokeWidth={1} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="size-6" strokeWidth={1} />
            </button>

            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1280}
              height={920}
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function MobileGallery({ images }: MobileGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const nextImage = (): void => {
    setCurrentIndex(prev => (prev + 1) % images.length)
  }

  const prevImage = (): void => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number): void => {
    setCurrentIndex(index + 1)
    setIsModalOpen(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openModal(index)
    }
  }

  // Pega apenas 4 imagens para o grid mobile (excluindo a primeira que é a principal)
  const mobileImages = images.slice(1, 5)

  return (
    <>
      <div className="grid grid-cols-2 gap-1.5 h-10/12">
        {mobileImages.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className="cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
            onClick={() => openModal(index)}
            onKeyDown={event => handleKeyDown(event, index)}
            tabIndex={0}
            aria-label={`Abrir imagem ${image.alt} em tela cheia`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={85}
              height={67}
              className="w-fit h-full object-cover object-center rounded"
            />
          </button>
        ))}
      </div>

      {/* Modal da Galeria Mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 bg-opacity-95">
          <div className="relative w-full h-full p-4 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Fechar galeria"
            >
              <X className="size-6" strokeWidth={1} />
            </button>

            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="size-6" strokeWidth={1} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="size-6" strokeWidth={1} />
            </button>

            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ProductInfo({ info, className = '' }: ProductInfoProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className="font-light text-sm">Dimensões</h3>
      {info.dimensions.map((dim, index) => (
        <div key={index} className="flex items-start">
          <p className="font-light text-6xl">{dim.value}</p>
          <span className="uppercase text-sm font-light">{dim.unit}</span>
        </div>
      ))}
    </div>
  )
}

function MesaGamaoDesktop() {
  return (
    <div className="2xl:max-w-[60vw] lg:max-w-[65vw] h-[95vh] my-auto mx-auto lg:flex-col bg-leon-concrete rounded-2xl pr-3 hidden lg:flex relative">
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        <Image
          src="/logoNomePreto.png"
          alt="Logo"
          width={200}
          height={100}
          className="w-fit h-fit pl-2 opacity-25"
        />
        <Link href="/store" aria-label="Return to the Store page">
          <X className="text-white size-10" strokeWidth={1} />
        </Link>
      </div>

      {/* Body */}
      <div className="flex gap-3 h-full">
        {/* Left Side */}
        <div className="flex flex-col flex-grow w-3/4">
          <Image
            src={GALLERY_IMAGES[0].src}
            alt={GALLERY_IMAGES[0].alt}
            width={640}
            height={544}
            unoptimized
            className="w-fit h-2/3 object-cover object-center rounded-tl-2xl"
          />

          <div className="flex flex-col justify-between pb-8">
            <div className="flex items-start my-4 font-light justify-between w-auto">
              <h1 className="text-white xl:text-6xl lg:text-5xl uppercase pl-1">
                {PRODUCT_INFO.name}
              </h1>
              <span className="text-white lowercase">
                {PRODUCT_INFO.status}
              </span>
            </div>

            <div className="flex gap-5 w-full justify-between">
              <div className="flex flex-col xl:text-xl lg:text-lg items-start xl:gap-2 lg:gap-0 pl-2 text-white font-light">
                {PRODUCT_INFO.materials.map((material, index) => (
                  <p key={index}>{material}</p>
                ))}
              </div>

              {/* Galeria melhorada */}
              <Gallery images={GALLERY_IMAGES} />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-1/4 h-3/4 justify-between">
          <p className="text-base text-white">{PRODUCT_INFO.description}</p>

          <ProductInfo info={PRODUCT_INFO} className="w-1/2 text-white" />

          <Link
            href={PRODUCT_INFO.nextProduct}
            className="flex text-white text-2xl ml-auto items-center font-light pb-1 gap-1 absolute right-2 bottom-1"
          >
            Próximo <ArrowUpRight className="size-11" strokeWidth={1} />
          </Link>
        </div>
      </div>
    </div>
  )
}

function MesaGamaoMobile() {
  return (
    <div className="w-11/12 h-[92vh] mt-auto mb-3 mx-auto flex flex-col bg-leon-black/60 rounded-3xl px-5 py-1 lg:hidden relative">
      <div className="flex items-center justify-between py-2">
        <Image
          src="/logoNomeBranco.png"
          alt="Logo"
          width={155}
          height={22}
          className="w-fit h-fit pl-0"
        />
        <Link href="/store" aria-label="Return to the Store page">
          <X className="text-white size-9" strokeWidth={1} />
        </Link>
      </div>

      <div className="w-full flex flex-col space-y-3">
        <Image
          src={GALLERY_IMAGES[0].src}
          alt={GALLERY_IMAGES[0].alt}
          width={313}
          height={312}
          unoptimized
          className="w-fit h-fit object-cover object-center"
        />

        <p className="text-base text-white text-justify font-light leading-tight h-full">
          {PRODUCT_INFO.description}
        </p>

        <div className="flex gap-1">
          <ProductInfo
            info={PRODUCT_INFO}
            className="space-y-2 w-1/2 text-white"
          />

          {/* Galeria Mobile */}
          <MobileGallery images={GALLERY_IMAGES} />
        </div>

        <Link
          href={PRODUCT_INFO.nextProduct}
          className="flex text-white text-2xl ml-auto items-center font-light pb-1 absolute bottom-1 right-1"
        >
          Próximo <ArrowUpRight className="size-9" strokeWidth={1} />
        </Link>
      </div>
    </div>
  )
}
