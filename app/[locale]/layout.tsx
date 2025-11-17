import type { Metadata } from 'next'
import { Geist, Geist_Mono, Outfit } from 'next/font/google'
import '../globals.css'
import CartDrawer from '@/components/cart/CartDrawer'
import { CartProvider } from '@/contexts/CartContext'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '../../components/header/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-outfit',
  display: 'swap',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://leonades.com/${locale}`,
      siteName: 'Leon Ades',
      images: [
        {
          url: 'https://leonades.com/metadataleon.png',
          width: 928,
          height: 600,
          alt: t('imageAlt'),
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://leonades.com/metadataleon.png'],
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased font-outfit`}
      >
        <NextIntlClientProvider>
          <CartProvider>
            <Header />
            {children}
            <CartDrawer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
