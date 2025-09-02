'use client'
import { type Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedSVGProps {
  strokeColor?: string
  width?: number | string
  height?: number | string
}

export default function AnimatedLogo({
  strokeColor = '#000',
  width = 105,
  height = 140,
}: AnimatedSVGProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.2 + i * 0.1

      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            duration: 0.7,
            ease: 'easeIn',
          },
          opacity: { delay, duration: 0.01 },
        },
      }
    },
  }

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 317 429"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.path
        stroke={strokeColor}
        strokeWidth={9}
        d="m4 1 35 295h240"
        variants={draw}
        custom={0}
      />
      <motion.path
        stroke={strokeColor}
        strokeWidth={9}
        d="m3 428 57-209h196l58 208"
        variants={draw}
        custom={1}
      />
    </motion.svg>
  )
}
