import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function SubHero() {
  const t = useTranslations('home')
  return (
    <div className="lg:h-[90vh] font-light bg-leon-new-sand w-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row lg:mx-5 gap-5 justify-between h-[80%]">
        <div
          className="lg:flex-1 flex flex-col justify-end  lg:mx-0 mx-3"
          id="autoral"
        >
          <div className="flex flex-col my-16 lg:hidden items-center ">
            <Image
              className="object-cover pt-16"
              src="/subhero/logopreto.png"
              alt=""
              width={253}
              height={168}
              // sizes=""
            />
          </div>
          <div className="gap-1 flex flex-col items-start lg:space-y-8 space-y-2 align-middle">
            <Link
              className="flex gap-2 items-start align-middle"
              href={'/about'}
            >
              <h1 className="lg:text-3xl text-2xl">[ {t('subhero-h1')} ] </h1>{' '}
              <ArrowUpRight
                className="bg-black rounded-[2px] lg:rounded-sm lg:size-8 size-7"
                stroke="#fff"
              />{' '}
            </Link>
            <p className="lg:text-lg ">{t('subhero-p')}</p>
          </div>
        </div>
        <div id="photos" className="flex lg:flex-2">
          <div id="photoleft" className="w-full">
            <Image
              className="w-full h-3/4 object-cover"
              src="https://res.cloudinary.com/dci7rpsws/image/upload/v1756749839/autoral1_yzglx3.png"
              alt="foto cadeira vaivem"
              width={564}
              height={599}
              sizes="100vw"
            />
            <Image
              className="w-full h-1/4 object-cover"
              src="https://res.cloudinary.com/dci7rpsws/image/upload/v1756749839/autoral2_zj0hzd.png"
              alt="foto mesa ibá"
              width={564}
              height={210}
              // sizes="100vw"
            />
          </div>
          <div id="photoright" className="w-full">
            <Image
              className="object-cover h-full"
              width={555}
              height={809}
              quality={100}
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/v1756749840/autoral3_kg3h6p.png'
              }
              alt="foto banco buri"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
