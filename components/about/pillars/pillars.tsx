'use client'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

export default function Pillars() {
  const t = useTranslations('about')
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="flex gap-12 flex-col font-light mb-12 relative overflow-x-hidden"
    >
      <div className="flex lg:mx-5 mx-3">
        {/* left-side */}
        <div className="lg:w-1/3 2xl:w-1/4 w-1/4 flex mr-5 relative">
          <div className="flex justify-between w-full items-center lg:pr-10 pr-4 mb-auto 2xl:text-xl lg:text-lg flex-col lg:flex-row">
            [ {t('pillars')} ]
            <ArrowDownRight
              className="size-10 text-leon-black/75"
              strokeWidth={1}
            />
          </div>
          <motion.div
            variants={{
              hidden: { height: 0 },
              visible: {
                height: '100%',
                transition: {
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: 0.2,
                },
              },
            }}
            className="absolute right-0 top-0 w-[1px] bg-leon-black/50 h-full"
          />
        </div>
        {/* right-side */}
        <div className="lg:w-2/3 2xl:w-3/4 w-3/4 space-y-12 2xl:text-xl lg:text-lg">
          <div className="gap-5 flex lg:flex-row flex-col">
            <p className="lg:w-1/2 2xl:text-justify">{t('pillarsp1')}</p>
            <p className="lg:w-1/2 2xl:text-justify">{t('pillarsp2')}</p>
          </div>

          <motion.div
            variants={{
              hidden: { width: 0 },
              visible: {
                width: '100%',
                transition: {
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: 0.5,
                },
              },
            }}
            className="h-[1px] bg-leon-black/50 w-full origin-left"
          />
          <div className="gap-5 flex-col flex">
            <div className="gap-5 flex lg:flex-row flex-col ">
              <p className="lg:w-1/2 2xl:text-justify">{t('pillarsp3')}</p>
              <p className="lg:w-1/2 2xl:text-justify">{t('pillarsp4')}</p>
            </div>
            <Link className="flex justify-end items-center" href={'/store'}>
              <span className="text-lg">Loja</span>
              <ArrowUpRight className="size-10" strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { width: 0 },
          visible: {
            width: '100%',
            transition: {
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.8,
            },
          },
        }}
        className="h-[1px] bg-leon-black/50 w-full origin-left lg:mx-5 "
      />
    </motion.div>
  )
}
