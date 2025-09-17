import LocaleSwitcher from '@/components/LocaleSwitcher'
import { motion } from 'framer-motion'
import { translate } from '../../anim'

export default function Footer() {
  return (
    <div className="flex items-end flex-wrap text-xs uppercase mt-10 lg:justify-between">
      <ul className="w-1/2 mt-2.5 overflow-hidden list-none p-0 lg:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="pr-1 text-[#9f9689]">Made by:</span>tailvinicss
        </motion.li>
      </ul>
      <ul className="w-1/2 mt-2.5 overflow-hidden list-none p-0 lg:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="pr-1 text-[#9f9689]">Images:</span> Paiva, Daniel.
        </motion.li>
      </ul>
      <ul className="w-1/2 mt-2.5 overflow-hidden list-none p-0 lg:w-auto">
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
