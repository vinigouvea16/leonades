'use client'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import React from 'react'
export default function StoreHero() {
  const t = useTranslations('StorePage')
  return (
    <div className="relative h-screen flex bg-[url('/store/storeheroimg2.webp')] bg-cover bg-center">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        className="
        text-[min(17vw,8rem)] lg:text-[min(10vw,7rem)]  2xl:text-[min(10vw,9rem)]
          font-medium
          bg-gradient-to-t from-[#f8f8f8] from-25% to-[#999] to-75%
          uppercase bg-clip-text text-transparent h-fit absolute
          
          /* desktop */
          lg:right-0 2xl:right-[3%] lg:top-[15%]  2xl:top-[8%]
          
          /* mobile */
          bottom-[7%]
          left-1/2 -translate-x-1/2 /* Centraliza horizontalmente no mobile */
          
          lg:left-auto lg:translate-x-0
          
         
          
      "
      >
        {t('hero')}
      </motion.h1>
    </div>
  )
}
