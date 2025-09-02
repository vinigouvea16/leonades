import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { opacity } from '../../anim'
import styles from './style.module.scss'

export default function Index({ src, isActive }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? 'open' : 'closed'}
      className={styles.imageContainer}
    >
      <Image src={`/${src}`} fill={true} alt="image" quality={50} />
    </motion.div>
  )
}
