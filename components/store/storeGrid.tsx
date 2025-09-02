'use client'

import Image from 'next/image'
import type { Product } from './types'

interface StoreGridProps {
  products: Product[]
  activeProduct: Product
  setActiveProduct: (product: Product) => void
}

export default function StoreGrid({
  products,
  activeProduct,
  setActiveProduct,
}: StoreGridProps) {
  return (
    <div className="overflow-y-auto max-h-[99vh] lg:grid lg:grid-cols-2 flex flex-col gap-5">
      {products.map((product, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveProduct(product)}
          className="relative flex flex-col border-1 pt-4 border-[#333]/40 lg:border-0 h-[400px] cursor-pointer transition-transform duration-300 rounded-bl-sm rounded-tr-sm hover:shadow-sm"
        >
          <div className="flex flex-col absolute top-5 left-5 gap-1.5">
            <div className="flex gap-2 items-center">
              <div className={`w-5 h-5 rounded-full ${product.bgColor}`} />
              <p className="uppercase font-light">{product.name}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className={`w-5 h-5 rounded-full ${product.priceColor}`} />
              <p className="uppercase font-light">{product.price}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className={`w-5 h-5 rounded-full ${product.yearColor}`} />
              <p className="uppercase font-light">{product.year}</p>
            </div>
          </div>

          <div className="flex items-center justify-center h-full w-full">
            <Image
              src={product.img}
              alt={product.name}
              className="object-contain max-h-[350px] w-full"
              width={345}
              height={250}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
