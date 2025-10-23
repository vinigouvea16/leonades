import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
// import styles from './mentorship.module.css'
export default function Mentorship() {
  const t = useTranslations('about')
  return (
    <div className="flex flex-col lg:flex-row lg:mx-5 lg:gap-5 gap-3 lg:h-1/2 font-light">
      <div className="lg:w-1/3 lg:mx-0 mx-3 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl "> {t('mentorshiph1')}</h1>
        </div>
        <div className="flex flex-col lg:space-y-4 space-y-3">
          <p className="text-sm text-leon-concrete">{t('mentorshipP')}</p>
          <p className="text-base text-leon-black">{t('mentorshipP2')}</p>
          <p className="text-base text-leon-black text-justify">
            {t('mentorshipP3')}
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5511971986991&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-leon-black underline underline-offset-2"
          >
            {t('mentorshipSpan')}
          </a>
        </div>
      </div>
      <div className="lg:w-1/3">
        <Image
          alt=""
          width={550}
          height={473}
          unoptimized
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/v1760117334/mentoria1_tinlqr.webp'
          }
          className="w-full h-full object-cover max-h-[473px] "
        />
      </div>
      <div className="lg:w-1/3">
        <Image
          alt=""
          width={550}
          height={473}
          unoptimized
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/v1760117334/mentoria2_mid0lx.webp'
          }
          className="w-full h-fit object-cover max-h-[473px] "
        />
      </div>
    </div>
  )
}
