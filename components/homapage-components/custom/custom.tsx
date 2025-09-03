import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Custom() {
  const t = useTranslations('home')
  return (
    <div className="flex flex-col lg:mb-40 mb-20 lg:mt-12 lg:flex-row lg:gap-5 gap-3 lg:mx-5">
      <Link href={'/store#custom'} className="w-full">
        <Image
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756749842/mesasucupira_ho8eip.png'
          }
          width={1141}
          height={686}
          alt={''}
          unoptimized
          className="w-full lg:h-[700px] h-[581px] object-cover "
        />
      </Link>
      <div className="flex flex-col font-light gap-3 mx-3 lg:mx-0 lg:w-1/5 items-center lg:items-start mt-auto">
        <h3 className="text-3xl ">[ {t('custom-made-h1')} ]</h3>
        <div className="items-center flex flex-col gap-3 lg:gap-1 lg:items-start">
          <p className="lg:text-justify text-center">{t('custom-made-p')}</p>
          <span className="font-medium underline underline-offset-4">
            leonades@design.com
          </span>
        </div>
      </div>
    </div>
  )
}
