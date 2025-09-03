'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LocaleSwitcher from '../LocaleSwitcher'
import { background, opacity } from './anim'
import Nav from './nav'

const DESKTOP_BREAKPOINT = 1024

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)
    }

    checkIsDesktop()
    setHasMounted(true)
    window.addEventListener('resize', checkIsDesktop)

    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (isActive) {
        return
      }

      if (window.scrollY < lastScrollY) {
        setIsVisible(true)
      } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false)
      }
      setLastScrollY(window.scrollY)
    }

    if (hasMounted) {
      if (isDesktop && window.scrollY === 0) {
        setIsVisible(false)
      } else if (!isDesktop && window.scrollY === 0) {
        setIsVisible(true)
      }
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (hasMounted) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [lastScrollY, isActive, isDesktop, hasMounted])

  const animateY = isVisible ? 0 : '-100%'
  const animateOpacity = isDesktop && !isVisible && window.scrollY === 0 ? 0 : 1

  return (
    <motion.div
      className="fixed w-full bg-leon-new-sand p-2.5 lg:p-5 box-border z-30"
      initial={{
        opacity: hasMounted ? (isDesktop && window.scrollY === 0 ? 0 : 1) : 0,
        y: isDesktop && window.scrollY === 0 ? '-100%' : 0,
      }}
      animate={{ opacity: hasMounted ? 1 : 0, y: animateY }}
      transition={{
        opacity: { duration: 5 },
        y: { duration: 0.5, ease: 'easeInOut' },
      }}
    >
      <div className="flex justify-center items-center uppercase text-xs lg:text-sm font-normal relative min-h-[08px] py-2 lg:py-0">
        <Link
          href="/"
          className="absolute left-0 no-underline text-black"
          aria-label="Navigate to home here"
        >
          <svg
            className="w-8 h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="51"
            fill="none"
            viewBox="0 0 317 429"
          >
            <path stroke="#000" strokeWidth={9} d="m4 1 35 295h240" />
            <path stroke="#000" strokeWidth={9} d="m3 428 57-209h196l58 208" />
          </svg>
        </Link>

        <button
          type="button"
          onClick={() => {
            setIsActive(!isActive)
          }}
          className="flex items-center justify-center gap-2 cursor-pointer bg-transparent border-none p-0"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isActive}
        >
          <div
            className={`w-[22.5px] relative pointer-events-none
              before:content-[''] before:h-px before:w-full before:bg-black before:relative before:block before:transition-all before:duration-1000 before:ease-[cubic-bezier(0.76,0,0.24,1)] before:top-1
              after:content-[''] after:h-px after:w-full after:bg-black after:relative after:block after:transition-all after:duration-1000 after:ease-[cubic-bezier(0.76,0,0.24,1)] after:-top-1
              ${
                isActive
                  ? 'before:rotate-[-45deg] before:top-0.5 after:rotate-45 after:-top-0.5'
                  : ''
              }`}
          />
          <div className="relative flex items-center">
            <motion.p
              variants={opacity}
              animate={!isActive ? 'open' : 'closed'}
              className="m-0"
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? 'open' : 'closed'}
              className="m-0 absolute opacity-0"
            >
              Close
            </motion.p>
          </div>
        </button>

        <motion.div
          variants={opacity}
          animate={!isActive ? 'open' : 'closed'}
          className="flex gap-7.5 absolute right-0 items-center"
        >
          <div className="hidden lg:flex justify-end items-center">
            <LocaleSwitcher />
          </div>

          <Link
            href="/store"
            // className="absolute left-0 no-underline text-black"
            aria-label="Navigate to the Store Page"
          >
            <p className="hidden lg:block cursor-pointer m-0">Shop</p>
          </Link>

          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z"
                stroke="#4D3D30"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="m-0">Cart(0)</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? 'open' : 'closed'}
        className="bg-black opacity-50 h-full w-full absolute left-0 top-full"
      />

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </motion.div>
  )
}
