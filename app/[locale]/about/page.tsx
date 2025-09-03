import Hero from '@/components/about/hero/hero'
import Mentorship from '@/components/about/mentorship/mentorship'
import Pillars from '@/components/about/pillars/pillars'
import SubHero from '@/components/about/subhero/subhero'
import Workshop from '@/components/about/workshop/workshop'
import Footer from '@/components/homapage-components/footer/footer'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

export default function AboutPage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <div className="bg-leon-new-sand flex flex-col lg:gap-12 gap-6 " id="hero">
      <Hero />
      <SubHero />
      <Pillars />
      <Mentorship />
      <Workshop />
      <Footer />
    </div>
  )
}
