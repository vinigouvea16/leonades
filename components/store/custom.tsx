import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CustomFurniture() {
  return (
    <div className="flex flex-col gap-5 mb-10 ">
      <div className="flex flex-col lg:flex-row items-start lg:mr-5 lg:ml-12 mx-3 justify-between space-y-3">
        <h1
          className="2xl:text-9xl lg:w-1/2 lg:text-8xl text-6xl h-fit font-light lg:bg-gradient-to-r lg:from-[#999] lg:from-0% lg:to-[#333]/100 lg:to-100%
            bg-gradient-to-t from-[#F0EDE6] from-0 to-[#333]/100 to-100% uppercase bg-clip-text text-transparent "
        >
          Custom Furniture
        </h1>

        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full bg-leon-concrete" />
            <p className="uppercase font-light truncate">mesa 4m sucupira</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full bg-leon-black" />
            <p className="uppercase font-light">Sucupira</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full bg-[#EFB639]" />
            <p className="uppercase font-light">2025</p>
          </div>
        </div>

        <p className="font-light text-leon-black lg:max-w-[400px] text-justify lg:text-left">
          Maecenas porta ut justo ut bibendum. Fusce commodo nulla eu vestibulum
          tristique. Curabitur lacus nibh, dictum vel turpis rhoncus,
          scelerisque viverra magna. Suspendisse elementum elit in elit aliquet,
          sit amet venenatis magna aliquam.
        </p>
      </div>
      {/* desktop */}
      <div className="gap-12 mx-12 lg:flex hidden h-[80vh]" id="custom">
        {/* custom furniture 1 */}
        <Link href={'/store/mesa-sucupira'} className="w-3/4">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751841/customfurniture_yp3kib.png'
            }
            alt={''}
            width={1142}
            height={824}
            unoptimized
            className="h-full object-cover object-center w-full"
          />
        </Link>
        <div className="flex flex-col justify-between mx-auto">
          {/* custom furniture 2 */}
          <Link
            href={'/store/mesa-gamao'}
            id="card1"
            className="flex flex-col gap-2"
          >
            <Image
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/v1756752229/mesagamao_cysjzw.png'
              }
              alt={''}
              width={427}
              height={285}
              className="max-h-[285px] w-full object-cover"
            />
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-leon-concrete" />
                <p className="uppercase font-light">mesa gamao</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-leon-black" />
                <p className="font-light">Madeira y</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-[#EFB639]" />
                <p className="uppercase font-light">2024</p>
              </div>
            </div>
          </Link>
          {/* custom furniture 3 */}
          <Link
            href={'/store/buffet-noga'}
            id="card2"
            className="flex flex-col gap-2"
          >
            <Image
              src={'/store/customfurniture.png'}
              alt={''}
              width={427}
              height={285}
              className="max-h-[285px] w-full object-cover"
            />
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-leon-concrete" />
                <p className="uppercase font-light">buffet noga</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-leon-black" />
                <p className="font-light">Madeira y</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-[#EFB639]" />
                <p className="uppercase font-light">2023</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden">
        <div id="custom1">
          <Link href={'/store/mesa-sucupira'} className="w-full">
            <Image
              src={'/store/customfurniture.png'}
              alt={''}
              width={1142}
              height={824}
              unoptimized
              className="h-[55vh] w-fit object-cover object-center "
            />
          </Link>
        </div>
        <div className="my-4 h-[1px] bg-leon-concrete/50 mx-3 " />

        <div id="custom2" className="flex flex-col gap-2">
          <Link href={'/store/mesa-gamao'} className="w-full">
            <Image
              src={'/custom/mesagamao.jpg'}
              alt={''}
              width={427}
              height={285}
              className="h-[55vh] w-fit object-cover object-center "
            />
          </Link>
          {/* custom prod2 info */}
          <div className="flex flex-col gap-1.5 mx-3">
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 rounded-full bg-leon-concrete" />
              <p className="uppercase font-light">mesa gamao</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 rounded-full bg-leon-black" />
              <p className="font-light">Madeira y</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 rounded-full bg-[#EFB639]" />
              <p className="uppercase font-light">2024</p>
            </div>
            <p className="font-light text-leon-black w-fit pt-3">
              Maecenas porta ut justo ut bibendum. Fusce commodo nulla eu
              vestibulum tristique. Curabitur lacus nibh, dictum vel turpis
              rhoncus, scelerisque viverra magna. Suspendisse elementum elit in
              elit aliquet, sit amet venenatis magna aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
