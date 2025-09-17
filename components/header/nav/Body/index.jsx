import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { blur, translate } from '../../anim'

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  closeMenu,
}) {
  const router = useRouter()
  const handleLinkClick = (e, href) => {
    e.preventDefault()
    closeMenu()

    setTimeout(() => {
      router.push(href)
    }, 500)
  }
  const getChars = word => {
    const chars = []
    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      )
    })
    return chars
  }

  return (
    <div
      className="flex flex-wrap mt-10
                 lg:max-w-screen-xl lg:mt-20"
    >
      {links.map((link, index) => {
        const { title, href } = link
        return (
          <Link
            key={`l_${index}`}
            href={href}
            className="text-black no-underline uppercase"
            onClick={e => handleLinkClick(e, href)}
          >
            <motion.p
              className="m-0 flex overflow-hidden text-4xl pr-8 pt-2 font-light lg:text-[5vw] lg:pr-[2vw]"
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index })
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index })
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? 'open'
                  : 'closed'
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        )
      })}
    </div>
  )
}
