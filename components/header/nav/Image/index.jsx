import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { opacity } from '../../anim'

export default function Index({ src, isActive }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? 'open' : 'closed'}
      className="hidden md:block md:w-[500px] md:h-[450px] relative"
    >
      <Image
        src={`/${src}`}
        fill={true}
        alt="image"
        quality={50}
        className="object-cover"
      />
    </motion.div>
  )
}
