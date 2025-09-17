'use client'
import { useFeaturedProducts } from '@/lib/hooks/useFeaturedProducts'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Highlights() {
  const t = useTranslations('home')
  const { products, loading, error } = useFeaturedProducts()

  const formatPrice = (amount: string, currencyCode: string) => {
    const price = Number.parseFloat(amount)
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currencyCode,
    }).format(price)
  }

  if (loading) {
    return (
      <div className="lg:h-[120vh] flex flex-col lg:mx-5 gap-2">
        <h1 className="text-4xl font-light">{t('highlights-h1')}</h1>
        <div className="h-[90%] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="lg:h-[120vh] flex flex-col lg:mx-5 gap-2">
        <h1 className="text-4xl font-light">{t('highlights-h1')}</h1>
        <div className="h-[90%] flex items-center justify-center">
          <p className="text-red-600">
            Erro ao carregar produtos: {error.message}
          </p>
        </div>
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className="lg:h-[120vh] flex flex-col lg:mx-5 gap-2">
        <h1 className="text-4xl font-light">{t('highlights-h1')}</h1>
        <div className="h-[90%] flex items-center justify-center">
          <p>Nenhum produto em destaque encontrado.</p>
        </div>
      </div>
    )
  }

  const featuredProducts = products.slice(0, 3)
  console.log(featuredProducts, 'featuredProducts')

  return (
    <div className="lg:h-[120vh] flex flex-col lg:mx-5 gap-2">
      <h1 className="text-4xl font-light">{t('highlights-h1')}</h1>

      <div className="h-[90%]">
        {/* MOBILE */}
        <div className="flex flex-col h-full gap-8 lg:hidden">
          {/* primeiro produto */}
          {featuredProducts[0] && (
            <Link
              href={`/product/${featuredProducts[0].handle}?from=home`}
              className="flex gap-2 no-underline text-black brightness-90 hover:brightness-100"
            >
              <div className="flex-1">
                <Image
                  src={
                    featuredProducts[0].displayImage?.url ||
                    '/placeholder-image.jpg'
                  }
                  alt={
                    featuredProducts[0].displayImage?.altText ||
                    featuredProducts[0].title
                  }
                  width={191}
                  height={227}
                  className="w-full h-full object-cover max-h-[300px]"
                />
              </div>
              <div className="flex-1 flex flex-col justify-end mr-2">
                <div className="flex w-full justify-between font-medium text-lg">
                  <p>{featuredProducts[0].title}</p>
                  <p>{featuredProducts[0].metafield?.value || '2024'}</p>
                </div>
                <p className="font-light text-lg mt-1">
                  {formatPrice(
                    featuredProducts[0].priceRange.minVariantPrice.amount,
                    featuredProducts[0].priceRange.minVariantPrice.currencyCode
                  )}
                </p>
              </div>
            </Link>
          )}

          <div className="flex flex-col gap-3">
            {/* segundo produto */}
            {featuredProducts[1] && (
              <Link
                href={`/product/${featuredProducts[1].handle}?from=home`}
                className="flex flex-col no-underline text-black brightness-90 hover:brightness-100"
              >
                <div>
                  <Image
                    src={
                      featuredProducts[1].displayImage?.url ||
                      '/placeholder-image.jpg'
                    }
                    alt={
                      featuredProducts[1].displayImage?.altText ||
                      featuredProducts[1].title
                    }
                    className="object-cover w-full h-full max-h-[300px]"
                    width={390}
                    height={200}
                  />
                </div>
                <div className="mx-2 py-1">
                  <div className="flex justify-between font-medium text-base">
                    <p>{featuredProducts[1].title}</p>
                    <span>
                      {featuredProducts[1].metafield?.value || '2024'}
                    </span>
                  </div>
                  <p className="font-light text-base">
                    {formatPrice(
                      featuredProducts[1].priceRange.minVariantPrice.amount,
                      featuredProducts[1].priceRange.minVariantPrice
                        .currencyCode
                    )}
                  </p>
                </div>
              </Link>
            )}

            {/* terceiro produto */}
            {featuredProducts[2] && (
              <Link
                href={`/product/${featuredProducts[2].handle}?from=home`}
                className="flex flex-col no-underline text-black brightness-90 hover:brightness-100"
              >
                <div>
                  <Image
                    src={
                      featuredProducts[2].displayImage?.url ||
                      '/placeholder-image.jpg'
                    }
                    alt={
                      featuredProducts[2].displayImage?.altText ||
                      featuredProducts[2].title
                    }
                    className="object-cover w-full h-full max-h-[300px]"
                    width={390}
                    height={200}
                  />
                </div>
                <div className="mx-2 py-1">
                  <div className="flex justify-between font-medium text-base">
                    <p>{featuredProducts[2].title}</p>
                    <span>
                      {featuredProducts[2].metafield?.value || '2024'}
                    </span>
                  </div>
                  <p className="font-light text-base">
                    {formatPrice(
                      featuredProducts[2].priceRange.minVariantPrice.amount,
                      featuredProducts[2].priceRange.minVariantPrice
                        .currencyCode
                    )}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-4 gap-5 h-full">
          {/* primeira linha */}
          {featuredProducts[0] && (
            <>
              <Link
                href={`/product/${featuredProducts[0].handle}?from=home`}
                className="col-span-2 row-span-2 no-underline brightness-90 hover:brightness-100"
              >
                <Image
                  src={
                    featuredProducts[0].displayImage?.url ||
                    '/placeholder-image.jpg'
                  }
                  alt={
                    featuredProducts[0].displayImage?.altText ||
                    featuredProducts[0].title
                  }
                  width={1119}
                  height={553}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div
                className="flex flex-col justify-end row-span-2"
                id="product-info"
              >
                <Link
                  href={`/product/${featuredProducts[0].handle}?from=home`}
                  className="no-underline text-black brightness-90 hover:brightness-100"
                >
                  <div className="flex w-full justify-between font-medium text-xl">
                    <p>{featuredProducts[0].title}</p>
                    <p>{featuredProducts[0].metafield?.value || '2024'}</p>
                  </div>
                  <p className="font-light text-xl mt-1">
                    {formatPrice(
                      featuredProducts[0].priceRange.minVariantPrice.amount,
                      featuredProducts[0].priceRange.minVariantPrice
                        .currencyCode
                    )}
                  </p>
                </Link>
              </div>
            </>
          )}

          {/* segunda linha */}
          <div className="col-span-1 row-span-2 flex flex-col justify-end">
            {/* placeholder */}
          </div>

          {/* segundo produto */}
          {featuredProducts[1] && (
            <Link
              href={`/product/${featuredProducts[1].handle}?from=home`}
              className="flex flex-col col-span-1 row-span-2 no-underline text-black brightness-90 hover:brightness-100"
            >
              <Image
                src={
                  featuredProducts[1].displayImage?.url ||
                  '/placeholder-image.jpg'
                }
                alt={
                  featuredProducts[1].displayImage?.altText ||
                  featuredProducts[1].title
                }
                className="object-cover w-full h-full"
                width={552}
                height={553}
              />
              <div className="flex flex-col mx-3 lg:mx-0">
                <div className="flex justify-between font-medium text-xl">
                  <p>{featuredProducts[1].title}</p>
                  <span>{featuredProducts[1].metafield?.value || '2024'}</span>
                </div>
                <p className="font-light text-xl">
                  {formatPrice(
                    featuredProducts[1].priceRange.minVariantPrice.amount,
                    featuredProducts[1].priceRange.minVariantPrice.currencyCode
                  )}
                </p>
              </div>
            </Link>
          )}

          {/* terceiro produto */}
          {featuredProducts[2] && (
            <Link
              href={`/product/${featuredProducts[2].handle}?from=home`}
              className="flex flex-col col-span-1 row-span-2 no-underline text-black brightness-90 hover:brightness-100"
            >
              <Image
                src={
                  featuredProducts[2].displayImage?.url ||
                  '/placeholder-image.jpg'
                }
                alt={
                  featuredProducts[2].displayImage?.altText ||
                  featuredProducts[2].title
                }
                className="object-cover w-full h-full"
                width={552}
                height={553}
              />
              <div className="flex flex-col mx-3 lg:mx-0">
                <div className="flex justify-between font-medium text-xl">
                  <p>{featuredProducts[2].title}</p>
                  <span>{featuredProducts[2].metafield?.value || '2024'}</span>
                </div>
                <p className="font-light text-xl">
                  {formatPrice(
                    featuredProducts[2].priceRange.minVariantPrice.amount,
                    featuredProducts[2].priceRange.minVariantPrice.currencyCode
                  )}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
