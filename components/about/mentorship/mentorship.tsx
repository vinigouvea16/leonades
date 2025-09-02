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
          <h1 className="text-5xl lg:w-1/2"> {t('mentorshiph1')}</h1>
          <svg
            // className={styles.pathDraw}
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="101"
            fill="none"
            viewBox="0 0 317 429"
          >
            <path stroke="#999999" strokeWidth={9} d="m4 1 35 295h240" />
            <path
              stroke="#999999"
              strokeWidth={9}
              d="m3 428 57-209h196l58 208"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:space-y-4 space-y-3">
          <p className="text-sm text-leon-concrete">{t('mentorshipP')}</p>
          <p className="text-base text-leon-black">{t('mentorshipP2')}</p>
          <p className="text-base text-leon-black text-justify">
            {t('mentorshipP3')}
          </p>
          <p className="text-sm text-leon-black">{t('mentorshipP4')}</p>
        </div>
      </div>
      <div className="lg:w-1/3">
        <Image
          alt=""
          width={550}
          height={473}
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751450/oficina1_h1putd.jpg'
          }
          className="w-full h-fit object-cover max-h-[473px] "
        />
      </div>
      <div className="lg:w-1/3">
        <Image
          alt=""
          width={550}
          height={473}
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751451/oficina2_geotby.jpg'
          }
          className="w-full h-fit object-cover max-h-[473px] "
        />
      </div>
    </div>
  )
}
