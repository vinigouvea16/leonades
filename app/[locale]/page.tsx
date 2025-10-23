import CustomProjectsSection from '@/components/CustomProjectTest'
import FAQ from '@/components/homapage-components/faq/faq'
import Footer from '@/components/homapage-components/footer/footer'
import Hero from '@/components/homapage-components/hero/hero'
import Loader from '@/components/homapage-components/loader/loader'
import StoreSection from '@/components/homapage-components/store/store'
import SubHero from '@/components/homapage-components/subhero/sub-hero'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <div className="bg-leon-new-sand flex flex-col gap-12 lg:gap-0" id="hero">
      <Loader />
      <Hero />
      <SubHero />
      <StoreSection />
      <FAQ />
      <CustomProjectsSection />
      <Footer />
    </div>
  )
}
