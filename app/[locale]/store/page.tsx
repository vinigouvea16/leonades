import CustomFurniture from '@/components/store/custom'
import StoreHero from '@/components/store/hero'
import StoreFooter from '@/components/store/storeFooter'
import StoreSection from '@/components/store/storeSection'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

export default function StorePage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <div
      className="bg-leon-new-sand flex flex-col lg:gap-12 gap-6 overflow-x-hidden"
      id="hero"
    >
      <StoreHero />
      <StoreSection />
      <CustomFurniture />
      <StoreFooter />
    </div>
  )
}
