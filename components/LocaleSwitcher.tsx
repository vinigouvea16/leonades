'use client'

import { usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      const segments = pathname.split('/').filter(Boolean)

      if (segments[0] === locale) segments.shift()

      const newPathname = `/${[newLocale, ...segments].join('/')}`

      router.replace(newPathname)
      router.refresh()
    }
  }
  return (
    <div className="flex gap-2 items-center">
      <button
        type="button"
        onClick={() => switchLocale('pt-BR')}
        className={`px-2 py-1 border rounded cursor-pointer ${
          locale === 'pt-BR'
            ? 'bg-leon-black text-leon-new-sand'
            : 'bg-leon-new-sand text-leon-black'
        }`}
      >
        PT-BR
      </button>
      <button
        type="button"
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 border rounded cursor-pointer ${
          locale === 'en'
            ? 'bg-leon-black text-leon-new-sand'
            : 'bg-leon-new-sand text-leon-black'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLocale('es')}
        className={`px-2 py-1 border rounded cursor-pointer ${
          locale === 'es'
            ? 'bg-leon-black text-leon-new-sand'
            : 'bg-leon-new-sand text-leon-black'
        }`}
      >
        ES
      </button>
    </div>
  )
}
