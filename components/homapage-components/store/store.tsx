import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function StoreSection() {
  return (
    <div className="flex flex-col ">
      <Link
        href={'/store'}
        className="flex gap-1 items-start align-middle lg:mx-5 mx-3"
      >
        <h2 className="lg:text-3xl text-2xl font-light"> All Store </h2>{' '}
        <ArrowUpRight
          className="rounded-sm lg:size-10 size-8"
          stroke="#000"
          strokeWidth={1}
        />
      </Link>
      <Link href={'/store'} className="lg:mx-5">
        <Image
          src="https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756749841/homestorelinkimg_eeq0au.png"
          width={1688}
          height={553}
          alt={''}
          unoptimized
          className="object-cover lg:brightness-90 lg:max-h-[553px] w-full hover:brightness-100"
        />
      </Link>
    </div>
  )
}
