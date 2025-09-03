'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './hero.module.css'

export default function Hero() {
  const t = useTranslations('HomePageHero')

  return (
    <div className="hidden lg:flex lg:h-screen lg:w-full lg:bg-[url('/homepagehero1.webp')] lg:bg-cover lg:bg-center lg:relative">
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="flex h-full">
        <div className="flex flex-col items-start my-auto ml-20 2xl:ml-40">
          <div className="z-20 flex flex-col space-y-8 items-center justify-center">
            <svg
              className={styles.pathDraw}
              xmlns="http://www.w3.org/2000/svg"
              width="115"
              height="152"
              fill="none"
              viewBox="0 0 317 429"
            >
              <path stroke="#F0EDE6" strokeWidth={9} d="m4 1 35 295h240" />
              <path
                stroke="#F0EDE6"
                strokeWidth={9}
                d="m3 428 57-209h196l58 208"
              />
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
              className="my-8"
            >
              <Image
                src={'/logoNomeAreia.png'}
                alt={'leon ades logo, his name in another font'}
                width={351}
                height={51}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
            className="text-left hidden lg:flex lg:flex-col space-y-8 z-20 max-w-[650px]"
          >
            <h2 className="text-white text-4xl lg:text-3xl font-light">
              {t('h2')}
            </h2>
            <h3 className="text-white text-2xl lg:text-xl font-light">
              {t('h3')}
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
