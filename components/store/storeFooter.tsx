import { ArrowUp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function StoreFooter() {
  const t = useTranslations('footer')
  return (
    <div className="mx-3 flex flex-col lg:mx-12">
      <div className="mb-8 flex flex-col justify-between gap-5 space-y-0 lg:flex-row">
        <div className="relative lg:w-2/3">
          <Image
            src={'/logoNomePreto.png'}
            alt=""
            width={893}
            height={127}
            className="mx-auto h-fit w-fit object-cover opacity-15 lg:mx-0 lg:opacity-25"
          />

          <a
            href="#hero"
            className="absolute -bottom-18 right-5 z-10 inline-flex items-center justify-center  p-2 text-leon-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-leon-black focus:ring-offset-2 lg:right-4 lg:hidden"
            aria-label="Voltar ao topo da página"
          >
            <ArrowUp className="h-6 w-6" />
          </a>
        </div>

        {/* contact info */}
        <div className=" flex w-full flex-col justify-between space-y-4 font-light lg:mx-0 lg:w-1/3 lg:flex-row">
          <div className="flex flex-col space-y-4 text-center lg:text-start">
            <p className="text-xl lg:text-2xl">{t('address')}</p>
            <p className="text-sm lg:text-sm">
              Rua Mourato Coelho, 723 - Pinheiros
            </p>
            <p className="text-sm lg:text-sm">São Paulo, São Paulo. 12430456</p>
          </div>
          <div className="flex flex-col space-y-4 text-center lg:text-start">
            <p className="text-xl lg:text-2xl">{t('contact')}</p>
            <p className="text-sm lg:text-sm">Instagram</p>
            <p className="text-sm lg:text-sm">Twitter</p>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="hidden h-[1px] w-full bg-leon-black/25 lg:block" />
      {/* sign */}
      <div className="my-6 flex flex-col justify-between space-y-2 text-center text-base font-light lg:flex-row lg:text-start">
        <p className="uppercase">2025. alrights reserved</p>
        <a href="https://tailvinicss.dev">made by tailvinicss</a>
      </div>
    </div>
  )
}
