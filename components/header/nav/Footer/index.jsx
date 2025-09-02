import LocaleSwitcher from '@/components/LocaleSwitcher'
import { usePathname, useRouter } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { translate } from '../../anim'
import styles from './style.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* Conteúdo original do footer */}
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="pr-1">Made by:</span>tailvinicss
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Images:</span> Paiva, Daniel.
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Privacy Policy
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Terms & Conditions
        </motion.li>
      </ul>

      {/* Botões de idioma apenas no mobile */}
      <motion.div
        custom={[0.3, 0]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex lg:hidden flex-col items-center gap-4 mt-6 bottom-0"
      >
        <LocaleSwitcher />
      </motion.div>
    </div>
  )
}
