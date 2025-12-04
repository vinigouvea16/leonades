import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Showroom() {
  const t = useTranslations('Showroom')
  return (
    <div className="flex flex-col font-light lg:mb-24 mb-10 gap-4">
      <div className="flex flex-col lg:p-5 p-0 gap-8">
        <div className="flex flex-col items-center">
          <span className="uppercase text-leon-black tracking-wide lg:text-base text-sm">
            são paulo - brasil
          </span>
          <h1 className="uppercase lg:text-6xl text-4xl tracking-widest">
            showroom
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:h-[80vh]">
          <Image
            className="object-cover object-center lg:w-1/3"
            src="/showroom1.webp"
            alt=""
            width={590}
            height={900}
            quality={90}
          />
          <Image
            className="object-cover object-center lg:w-2/3"
            src="/showroom2.webp"
            alt=""
            width={1190}
            height={900}
            quality={90}
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center mx-3">
        <div className="flex flex-col lg:w-4/5 w-full lg:space-y-4 space-y-2 lg:text-lg text-base text-leon-black">
          <p className="lg:text-center text-justify"> {t('p1')} </p>
          <p className="lg:text-center text-justify"> {t('p2')} </p>
          <p className="lg:text-center text-justify"> {t('p3')} </p>
          <p className="lg:text-center text-justify">
            {t('p4')}
            <br /> {t('p5')}
          </p>
        </div>
        <div className="flex items-center justify-center align-middle lg:w-[550px] w-[300px] py-2 bg-leon-black ">
          <a
            href="https://api.whatsapp.com/send?phone=5511971986991&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20Showroom!"
            className="text-leon-sand uppercase lg:text-3xl text-2xl tracking-wider items-center flex justify-center"
          >
            {t('button')}
          </a>
        </div>
      </div>
    </div>
  )
}
