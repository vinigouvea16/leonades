import { ArrowUpRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MesaGamao() {
  return (
    <div className="flex h-screen bg-[url('/custom/mesagamao.jpg')] bg-cover bg-center">
      <MesaGamaoDesktop />
      <MesaGamaoMobile />
    </div>
  )
}

function MesaGamaoDesktop() {
  return (
    <>
      {/* desktop version */}
      <div className="2xl:max-w-[60vw] lg:max-w-[65vw] h-[95vh] my-auto mx-auto lg:flex-col bg-leon-black/60 rounded-2xl pr-3 hidden lg:flex relative backdrop-blur-sm">
        {/* header */}
        <div className="flex items-center justify-between py-2">
          <Image
            src={'/logoNomeBranco.png'}
            alt={''}
            width={200}
            height={100}
            className="w-fit h-fit pl-2"
          />
          <Link href={'/store'}>
            <X className="text-white size-10" strokeWidth={1} />
          </Link>
        </div>

        {/* body */}
        <div className="flex gap-3 h-full">
          {/* left-side */}
          <div className="flex flex-col flex-grow w-3/4">
            <Image
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752229/mesagamao_cysjzw.png'
              }
              alt={''}
              width={640}
              height={544}
              unoptimized
              className="w-fit h-2/3 object-cover object-center rounded-tl-2xl"
            />
            <div className="flex flex-col justify-between pb-8 ">
              <div className="flex items-start my-4 font-light justify-between w-auto">
                <h1 className="text-white xl:text-6xl lg:text-5xl uppercase pl-1">
                  mesa gamao
                </h1>
                <span className="text-white lowercase">sob demanda</span>
              </div>
              {/* </div> */}
              <div className="flex gap-5 w-full justify-between">
                <div className="flex flex-col xl:text-xl lg:text-lg items-start xl:gap-2 lg:gap-0 pl-2 text-white font-light">
                  <p>100% Ibá</p>
                  <p>Mármore</p>
                </div>

                <div className="flex gap-4 justify-end">
                  <Image
                    src={'/custom/mesagamao3.jpg'}
                    alt={''}
                    width={140}
                    height={150}
                    className="w-[137px] lg:h-[189px] object-cover object-center "
                  />
                  <Image
                    src={'/custom/mesagamao4.jpg'}
                    alt={''}
                    width={140}
                    height={150}
                    className="w-[137px] lg:h-[189px] object-cover object-center "
                  />
                  <Image
                    src={'/custom/mesagamao.jpg'}
                    alt={''}
                    width={140}
                    height={150}
                    className="w-[137px] lg:h-[189px] object-cover object-center "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right-side */}
          <div className="flex flex-col w-1/4 h-3/4 justify-between">
            {/* description */}
            <p className="text-base text-white ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati fugiat magnam placeat adipisci. In quia tenetur et,
              molestias expedita repellat! A doloribus et repellat commodi cum.
              Quas eveniet placeat ipsum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos soluta eos facere quam eum deleniti aperiam
              inventore eius voluptatum quae dolores, neque magnam commodi.
              Tenetur commodi perspiciatis expedita porro deserunt.
            </p>
            {/* sizes */}
            <div className="flex flex-col w-1/2 text-white">
              <h3 className="font-light text-sm">Dimensões</h3>
              <div className="flex items-start ">
                <p className="font-light text-6xl">200</p>
                <span className="uppercase text-sm font-light">c</span>
              </div>
              <div className="flex items-start ">
                <p className="font-light text-6xl">80</p>
                <span className="uppercase text-sm font-light">h</span>
              </div>
              <div className="flex items-start ">
                <p className="font-light text-6xl">50</p>
                <span className="uppercase text-sm font-light">p</span>
              </div>
            </div>
            <Link
              href={'/store/mesa-sucupira'}
              className="flex text-white text-2xl ml-auto items-center font-light pb-1 gap-1 absolute right-2 bottom-1"
            >
              Próximo <ArrowUpRight className="size-11" strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function MesaGamaoMobile() {
  return (
    <>
      <div className="w-11/12 h-[92vh] mt-auto mb-3 mx-auto flex flex-col bg-leon-black/60 rounded-3xl px-5 py-1 lg:hidden relative">
        <div className="flex items-center justify-between py-2">
          <Image
            src={'/logoNomeBranco.png'}
            alt={''}
            width={155}
            height={22}
            className="w-fit h-fit pl-0"
          />
          <Link href={'/store'}>
            <X className="text-white size-9" strokeWidth={1} />
          </Link>
        </div>
        <div className="w-full flex flex-col space-y-3">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752229/mesagamao_cysjzw.png'
            }
            alt={''}
            width={313}
            height={312}
            unoptimized
            className="w-fit h-fit object-cover object-center "
          />
          <p className="text-base text-white backdrop-blur-sm text-justify font-light leading-tight h-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            fugiat magnam placeat adipisci. In quia tenetur et, molestias
            expedita repellat! A doloribus et repellat commodi cum. Quas eveniet
            placeat ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos soluta eos facere quam eum deleniti aperiam inventore
            eius voluptatum quae dolores, neque magnam commodi. Tenetur commodi
            perspiciatis expedita porro deserunt.
          </p>
          <div className="flex gap-1">
            <div className="flex flex-col space-y-2 w-1/2 text-white">
              <h3 className="font-light text-base">Dimensões</h3>
              <div className="flex items-start ">
                <p className="font-light text-6xl">200</p>
                <span className="uppercase text-lg font-light">c</span>
              </div>
              <div className="flex items-start ">
                <p className="font-light text-6xl">80</p>
                <span className="uppercase text-lg font-light">h</span>
              </div>
              <div className="flex items-start ">
                <p className="font-light text-6xl">50</p>
                <span className="uppercase text-lg font-light">p</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5 h-10/12">
              <Image
                src={'/custom/mesagamao3.jpg'}
                alt={''}
                width={85}
                height={67}
                className="w-fit h-full object-cover object-center "
              />
              <Image
                src={'/custom/mesagamao.jpg'}
                alt={''}
                width={85}
                height={67}
                className="w-fit h-full object-cover object-center "
              />
              <Image
                src={'/custom/mesagamao4.jpg'}
                alt={''}
                width={85}
                height={67}
                className="w-fit h-full object-cover object-center "
              />
              <Image
                src={'/custom/mesagamao4.jpg'}
                alt={''}
                width={85}
                height={67}
                className="w-fit h-full object-cover object-center "
              />
            </div>
          </div>

          <Link
            href={'/store/mesa-sucupira'}
            className="flex text-white text-2xl ml-auto items-center font-light pb-1 absolute bottom-1 right-1"
          >
            Próximo <ArrowUpRight className="size-9" strokeWidth={1} />
          </Link>
        </div>
      </div>
    </>
  )
}
