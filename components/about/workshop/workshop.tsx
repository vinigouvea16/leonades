import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Workshop() {
  const t = useTranslations('about')
  return (
    <div className="lg:mx-5 flex flex-col">
      <h1 className="lg:text-3xl font-light mr-3 lg:mr-0 mb-2">
        {t('workshoph1')}
      </h1>

      {/* Grid container desktop / column mobile */}
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-3 lg:gap-5">
        {/* Linha 1 */}
        <div className="bg-leon-concrete h-[461px] 2xl:h-[600px] lg:col-span-2">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756751453/oficina3_sdbg60.jpg'
            }
            alt={'foto oficina leon ades'}
            width={1120}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-leon-concrete h-[461px] 2xl:h-[600px] lg:col-span-1">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756751452/oficina4_wgztyx.jpg'
            }
            alt={'foto oficina leon ades'}
            width={549}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Linha 2 */}
        <div className="bg-leon-concrete h-[461px] 2xl:h-[600px] lg:col-span-2 lg:order-2">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756751456/oficina6_tatgwn.jpg'
            }
            alt={'foto oficina leon ades'}
            width={1120}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-leon-concrete h-[461px] 2xl:h-[600px] lg:col-span-1 lg:order-1">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756751453/oficina5_vi5tbd.jpg'
            }
            alt={'foto oficina leon ades'}
            width={549}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Linha 3 */}
        <div className="bg-leon-concrete h-[461px] 2xl:h-[600px]">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756751457/oficina7_n0e7kj.jpg'
            }
            alt={'foto oficina leon ades'}
            width={550}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-leon-concrete h-[461px] 2xl:h-[600px]">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756751458/oficina8_iywhod.jpg'
            }
            alt={'foto oficina leon ades'}
            width={550}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-leon-concrete h-[461px] 2xl:h-[600px]">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756751452/oficina4_wgztyx.jpg'
            }
            alt={'foto oficina leon ades'}
            width={550}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <h2 className="font-light lg:text-xl lg:w-1/4 w-2/3 flex ml-auto text-right mt-2 justify-end">
        {t('workshoph2')}
      </h2>
    </div>
  )
}
