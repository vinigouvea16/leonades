'use client'

import { useEffect, useState } from 'react'
import styles from './loader.module.css'

export default function Loader() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isAnimating) {
      const removeTimer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(removeTimer)
    }
  }, [isAnimating])

  if (!isVisible) return null

  return (
    <div
      className={`lg:hidden fixed top-0 left-0 w-full h-screen z-[999] ${
        isAnimating
          ? 'scale-100 opacity-100 pointer-events-auto'
          : 'scale-105 opacity-0 pointer-events-none'
      } transition-all duration-700 ease-out`}
    >
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/loaderwebp.webp')" }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative h-[650px] w-[322px] flex items-center justify-center">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 322 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="318"
                height="646"
                stroke="#F0EDE6"
                strokeWidth="2"
                fill="none"
                className={styles.drawRect}
              />
            </svg>

            <div className="relative z-10 flex items-center justify-center">
              <svg
                className={styles.pathDraw}
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="152"
                fill="none"
                viewBox="0 0 317 429"
              >
                <path stroke="#F0EDE6" strokeWidth={8} d="m4 1 35 295h240" />
                <path
                  stroke="#F0EDE6"
                  strokeWidth={8}
                  d="m3 428 57-209h196l58 208"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
