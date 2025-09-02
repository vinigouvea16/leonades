'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { height } from '../anim'
import Body from './Body'
import Footer from './Footer'
import Image from './Image'
import styles from './style.module.scss'

const rawLinks = [
  { key: 'home', href: '/', src: 'nav/home.jpg' },
  { key: 'shop', href: '/store', src: 'nav/shop.jpg' },
  { key: 'about', href: '/about', src: 'nav/about.jpg' },
  { key: 'showcase', href: '/showcase', src: 'nav/showcase.jpg' },
  { key: 'contact', href: '/contact', src: 'nav/contact.jpg' },
]

export default function Index() {
  const t = useTranslations('Navbar') // namespace do seu JSON de tradução

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
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
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
