'use client'
import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="h-screen flex flex-col lg:mx-5 mx-3">
      <div className="flex flex-col space-y-4 font-light flex-grow">
        <div className="w-full flex justify-evenly h-4/5 lg:hidden">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.5,
            }}
            className="w-[1px] bg-leon-black/25"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '80%' }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.6,
            }}
            className="w-[1px] bg-leon-black/25"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.7,
            }}
            className="w-[1px] bg-leon-black/25"
          />
        </div>
        <Image
          alt=""
          width={1800}
          height={200}
          src={'/logoNomePreto.png'}
          className="w-full h-fit object-cover lg:opacity-15 mt-auto"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: 1.1,
          }}
          className="h-[1px] bg-leon-black/25 origin-left"
        />
        <div className="flex w-full justify-between">
          <p>(São Paulo, Brasil)</p>
          <a href="#about" className="flex items-center ">
            Scroll Down
            <ArrowDownRight className="lg:size-10" />
          </a>
        </div>
      </div>
    </div>
  )
}
