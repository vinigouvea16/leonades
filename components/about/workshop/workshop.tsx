import Image from 'next/image'
import React from 'react'

export default function Workshop() {
  return (
    <div className="lg:mx-5 flex flex-col ">
      <div className="h-[1px] bg-leon-black/50 origin-left lg:mb-8 mb-6" />

      {/* Grid container desktop / column mobile */}
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-3 lg:gap-0 lg:space-y-5 space-y-3">
        {/* Linha 1 */}
        <div className="bg-leon-concrete h-[461px] xl:h-[691px] lg:col-span-2">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760118666/oficina1_it7s5i.png'
            }
            alt={'foto oficina leon ades'}
            unoptimized
            width={1120}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-leon-concrete h-[461px] xl:h-[691px] lg:col-span-1">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760117334/oficina2_r2ds6l.webp'
            }
            alt={'foto oficina leon ades'}
            unoptimized
            width={549}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Linha 2 */}
        <div className="bg-leon-concrete h-[461px] xl:h-[691px] lg:col-span-3 lg:order-2">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760117337/oficina6_mdrgoi.webp'
            }
            alt={'foto oficina leon ades'}
            unoptimized
            width={1920}
            height={691}
            className="object-cover object-center w-full h-full"
          />
        </div>
        {/* <div className="bg-leon-concrete h-[461px] xl:h-[691px] lg:col-span-1 lg:order-1">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760117337/oficina6_mdrgoi.webp'
            }
            alt={'foto oficina leon ades'}
            unoptimized
            width={549}
            height={691}
            className="object-cover w-full h-full"
          />
        </div> */}

        {/* Linha 3 */}
        <div className="bg-leon-concrete h-[461px] xl:h-[691px]">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760117336/oficina5_bxzoqb.webp'
            }
            alt={'foto oficina leon ades'}
            unoptimized
            width={550}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-leon-concrete h-[461px] xl:h-[691px]">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760117335/oficina3_ysel5z.webp'
            }
            alt={'foto oficina leon ades'}
            unoptimized
            width={550}
            height={691}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-leon-concrete h-[461px] xl:h-[691px]">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760117708/DSC07211_13_b1e4pp.png'
            }
            alt={'foto oficina leon ades'}
            width={550}
            height={691}
            unoptimized
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
