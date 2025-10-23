import LocaleSwitcher from '@/components/LocaleSwitcher'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { translate } from '../../anim'

export default function Footer() {
  const t = useTranslations('navbarfooter')
  return (
    <div className="flex items-end justify-between flex-wrap uppercase mt-10">
      <motion.div
        custom={[0.3, 0]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex space-x-3 mt-2.5 overflow-hidden items-center lg:text-lg"
      >
        <span className="text-[#9f9689] uppercase">{t('contact')}:</span>
        <a
          href="https://wa.me/5511971986991"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9f9689] transition-colors"
        >
          WhatsApp
        </a>
        <div className="w-[1px] bg-leon-black h-6" />
        <a
          href="mailto:contato@leonades.com"
          className="hover:text-[#9f9689] transition-colors"
        >
          Email
        </a>
      </motion.div>

      <motion.div
        custom={[0.3, 0]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex lg:hidden gap-4 mt-6 w-full"
      >
        <LocaleSwitcher />
      </motion.div>

      <ul className="w-1/2 mt-8 overflow-hidden list-none p-0 lg:w-auto text-[10px]">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="pr-1 text-[#9f9689]">Made by:</span>
          <a
            href="https://www.tailvinicss.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9f9689] transition-colors"
          >
            tailvinicss
          </a>
        </motion.li>
      </ul>
    </div>
  )
}
