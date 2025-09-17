'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { height } from '../anim'
import Body from './Body'
import Footer from './Footer'
import Image from './Image'

const rawLinks = [
  { key: 'home', href: '/', src: 'nav/home.jpg' },
  { key: 'shop', href: '/store', src: 'nav/shop.jpg' },
  { key: 'about', href: '/about', src: 'nav/about.jpg' },
  { key: 'showcase', href: '/showcase', src: 'nav/showcase.jpg' },
  { key: 'contact', href: '/contact', src: 'nav/contact.jpg' },
]

export default function Index({ closeMenu }) {
  const t = useTranslations('Navbar')
  const links = rawLinks.map(link => ({
    ...link,
    title: t(link.key),
  }))

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden "
    >
      <div className="flex gap-12 mb-20 lg:mb-0 lg:justify-between">
        <div className="flex flex-col justify-between">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            closeMenu={closeMenu}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  )
}
