import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Highlights() {
  const t = useTranslations('home')
  return (
    <div className="lg:h-[120vh] flex flex-col lg:mx-5 gap-2">
      <h1 className="text-4xl font-light">{t('highlights-h1')}</h1>

      {/* Layout diferente para mobile e desktop */}
      <div className="h-[90%] ">
        {/* MOBILE LAYOUT */}
        <div className="flex flex-col h-full gap-8 lg:hidden">
          {/* Primeira seção - ocupa 60% da altura */}
          <div className="flex gap-2">
            <div className="flex-1">
              <Image
                src="https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756749840/destaque1_j9qikr.png"
                alt="foto mesa ibá"
                width={191}
                height={227}
                className="w-full h-full object-cover max-h-[300px]"
              />
            </div>
            <div className="flex-1 flex flex-col justify-end mr-2">
              <div className="flex w-full justify-between font-medium text-lg">
                <p>Mesa Ibá</p>
                <p>2023</p>
              </div>
              <p className="font-light text-lg mt-1">R$1600,00</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className=" flex flex-col">
              <div className="">
                <Image
                  src="https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756749841/destaque2_jnvtkf.png"
                  alt="foto mesa de centro contraponto"
                  className="object-cover w-full h-full max-h-[300px]"
                  width={390}
                  height={200}
                />
              </div>
              <div className="mx-2 py-1">
                <div className="flex justify-between font-medium text-base">
                  <p>Mesa Contraponto</p>
                  <span>2025</span>
                </div>
                <p className="font-light text-base">R$1600,00</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="">
                <Image
                  src="https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756749840/destaque3_kdkdne.png"
                  alt="foto cadeira doma"
                  className="object-cover w-full h-full max-h-[300px]"
                  width={390}
                  height={200}
                />
              </div>
              <div className="mx-2 py-1">
                <div className="flex justify-between font-medium text-base">
                  <p>Cadeira Doma</p>
                  <span>2022</span>
                </div>
                <p className="font-light text-base">R$1600,00</p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT - Mantém o grid original */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-4 gap-5 h-full">
          {/* Primeira linha */}
          <div className="col-span-2 row-span-2">
            <Image
              src="https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756749840/destaque1_j9qikr.png"
              alt="foto mesa ibá"
              width={1119}
              height={553}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="flex flex-col justify-end row-span-2"
            id="product-info"
          >
            <div className="flex w-full justify-between font-medium text-xl">
              <p>Mesa Ibá</p>
              <p>2023</p>
            </div>
            <p className="font-light text-xl mt-1">R$1600,00</p>
          </div>

          {/* Segunda linha */}
          <div className="col-span-1 row-span-2 flex flex-col justify-end">
            {/* Placeholder */}
          </div>
          <div className="flex flex-col col-span-1 row-span-2">
            <Image
              src="https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756749841/destaque2_jnvtkf.png"
              alt="foto mesa de centro contra ponto"
              className="object-cover w-full h-full"
              width={552}
              height={553}
            />
            <div className="flex flex-col mx-3">
              <div className="flex justify-between font-medium text-xl">
                <p>Mesa Contraponto</p>
                <span>2025</span>
              </div>
              <p className="font-light text-xl">R$1600,00</p>
            </div>
          </div>
          <div className="flex flex-col col-span-1 row-span-2">
            <Image
              src="https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756749840/destaque3_kdkdne.png"
              alt="foto cadeira doma"
              className="object-cover w-full h-full"
              width={552}
              height={553}
            />
            <div className="flex flex-col mx-3">
              <div className="flex justify-between font-medium text-xl">
                <p>Cadeira Doma</p>
                <span>2022</span>
              </div>
              <p className="font-light text-xl">R$1600,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
