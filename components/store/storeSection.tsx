'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import StoreCarousel from './storeCarousel'
import StoreGrid from './storeGrid'
import type { Product } from './types'

const products: Product[] = [
  {
    name: 'Cadeira Vaivém',
    price: 'R$13958,00',
    year: '2019',
    img: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751836/cadeiravaivem_cvjc8a.png',
    bgColor: 'bg-leon-concrete',
    priceColor: 'bg-leon-black',
    yearColor: 'bg-[#EFB639]',
    description:
      'Desde criança balançamos. Seja no colo da mãe, no berço ou no balanço do parquinho. A poltrona vaivém nos convida a balançar de maneira que possa fazer parte das pausas do nosso dia-a-dia. Leve no peso e também ao olhar, o desenho de sua estrutura traz continuidade e curvaturas pensadas no conforto de quem nela for sentar e balançar.',
  },
  {
    name: 'Chaise Neguev',
    price: 'R$14963,00',
    year: '2021',
    img: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751838/chaiseneguev_fpneez.png',
    bgColor: 'bg-leon-concrete',
    priceColor: 'bg-leon-black',
    yearColor: 'bg-[#EFB639]',
    description:
      'A chaise neguev explora o uso das curvas através da técnica de laminação de madeira, possibilitando chegar em grandes curvas com pouca espessura de madeira, resultando em um desenho leve e orgânico no assento, em contraponto com sua base robusta.',
  },
  {
    name: 'Cadeira Doma',
    price: 'R$3640,00',
    year: '2020',
    img: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751835/cadeiradoma_v99df5.png',
    bgColor: 'bg-leon-concrete',
    priceColor: 'bg-leon-black',
    yearColor: 'bg-[#EFB639]',
    description:
      'Visando o conforto em uma cadeira feita apenas em madeira, a Doma explora o uso de curvas e trabalha em cima de suas repetições e proporções. Tentando assim, criar um aspecto macio em cima de um material tão rígido e trazendo esta sensação à quem sentar. (Opção com assento de madeira ou estofado)',
  },
  {
    name: 'Mesa Ibá',
    price: 'R$13450,00',
    year: '2022',
    img: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751847/mesaiba_y6diqe.png',
    bgColor: 'bg-leon-concrete',
    priceColor: 'bg-leon-black',
    yearColor: 'bg-[#EFB639]',
    description:
      'A Mesa Ibá, com seu tampo redondo, é uma mesa de jantar que pode ser feita em diferentes diâmetros. O chanfro do tampo e bordas bem arredondas aliviam seu peso e a tornam visualmente leve sem perder a estabilidade e firmeza que uma mesa de jantar necessita ter. ',
  },
  {
    name: 'Banco Buri',
    price: 'R$7200,00',
    year: '2021',
    img: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751835/bancoburi2_pqjmgr.png',
    bgColor: 'bg-leon-concrete',
    priceColor: 'bg-leon-black',
    yearColor: 'bg-[#EFB639]',
    description:
      'Criado a partir de uma grande peça única de madeira, este banco explora o uso da fibra de Buriti - palmeira amazônica muito popular no norte do Brasil.',
  },
  {
    name: 'Mesa Contraponto',
    price: 'R$7200,00',
    year: '2021',
    img: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751844/mesacontraponto_awdrvn.png',
    bgColor: 'bg-leon-concrete',
    priceColor: 'bg-leon-black',
    yearColor: 'bg-[#EFB639]',
    description:
      'A concepção do projeto explora a fuga da tipologia formal do tampo da mesa - propondo uma forma orgânica sem perder a funcionalidade. Um grande pilar deslocado do centro atravessa o tampo e é possível ser observado por cima. O encaixe robusto e o balanço da estrutura trazem ao mesmo tempo firmeza e leveza à peça, despertando a curiosidade do observador.',
  },
  {
    name: 'Luminaria Zin',
    price: 'R$7989,00',
    year: '2021',
    img: 'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751843/luminariazin_pp2enc.png',
    bgColor: 'bg-leon-concrete',
    priceColor: 'bg-leon-black',
    yearColor: 'bg-[#EFB639]',
    description:
      'A luminária Zin é feita toda em madeira maciça utilizando a técnica de laminação para poder chegar às curvas desejadas no desenho. Com caráter bastante escultórico, é uma experiência que surgiu de forma espontânea feita pelo designer.',
  },
]

export default function StoreSection() {
  const [activeProduct, setActiveProduct] = useState(products[0])

  const variants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -0 },
  }

  return (
    <div className="flex flex-col lg:flex-row lg:mx-5 gap-5 ">
      {/* Left-side */}
      <div className="flex-1 lg:ml-8 lg:mr-5 bg-leon-concrete/0 w-full h-fit flex flex-col lg:justify-between overflow-y-hidden lg:h-screen ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.name}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex flex-col "
            // className="flex flex-col min-h-[72vh] lg:min-h-none"
          >
            <h1
              className="2xl:text-8xl text-7xl font-light lg:bg-gradient-to-r lg:from-[#999]/50 lg:to-[#333]/100
            bg-gradient-to-t from-[#F0EDE6] from-0 to-[#333]/100 to-100%
            uppercase bg-clip-text text-transparent h-fit lg:mx-0 mx-3 break-words"
            >
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
                  <p className="uppercase font-light">{activeProduct.price}</p>
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
                height={753}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Central line */}
      <div className="w-[1px] bg-gradient-to-b from-leon-concrete/15 via-leon-concrete to-leon-concrete/15 lg:block hidden" />

      {/* Right-side */}
      <div className="lg:flex-1 lg:block hidden">
        <Link href={'/product'}>
          <StoreGrid
            products={products}
            activeProduct={activeProduct}
            setActiveProduct={setActiveProduct}
          />
        </Link>
      </div>

      {/* Mobile carousel */}
      <div className="block lg:hidden">
        <Link href={'/product'}>
          <StoreCarousel
            products={products}
            onChange={index => setActiveProduct(products[index])}
          />
        </Link>
      </div>
    </div>
  )
}
