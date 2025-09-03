'use client'
import { AtSignIcon } from '@/components/ui/at-sign'
import { InstagramIcon } from '@/components/ui/instagram'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function SubHero() {
  const t = useTranslations('about')
  return (
    <div
      id="about"
      className="relative h-screen flex flex-col justify-between lg:mx-5 "
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.5,
        }}
        viewport={{ once: false, amount: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-leon-black/50"
      />
      <Image
        src={
          'https://res.cloudinary.com/dci7rpsws/image/upload/v1756751450/aboutsubhero_ttcec5.jpg'
        }
        alt={''}
        width={1920}
        height={700}
        unoptimized
        className="object-cover w-full lg:max-h-[700px] h-full mb-5 lg:my-0"
      />
      <div className="mx-3 lg:mx-0 flex lg:gap-5 gap-5 mb-10">
        <h1 className="lg:font-medium 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-xl w-3/4 2xl:w-4/5 font-light text-leon-black">
          {t('hero')}
        </h1>
        <div className="relative flex flex-col justify-between">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.8,
            }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute top-0 left-0 w-[1px] h-full bg-leon-black/50"
          />

          <p className="lg:text-2xl 2xl:text-3xl font-light lg:ml-10 ml-5 truncate">
            [ {t('aboutme')} ]
          </p>
          <div className="flex lg:ml-10 ml-5 gap-2">
            <a
              href="https://instagram.com/leon.ades"
              className="bg-leon-black p-1 rounded-full"
            >
              <InstagramIcon className="text-leon-new-sand" />
            </a>
            <a
              href="https://x.com"
              target="#blank"
              className="bg-leon-black p-1 rounded-full"
            >
              <AtSignIcon className="text-leon-new-sand" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
