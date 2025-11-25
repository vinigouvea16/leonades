import Image from 'next/image'
import React from 'react'

export default function Showroom() {
  return (
    <div className="flex flex-col font-light lg:mb-24 mb-10 gap-4">
      <div className="flex flex-col lg:p-5 p-0 gap-8">
        <div className="flex flex-col items-center">
          <span className="uppercase text-leon-black tracking-wide lg:text-base text-sm">
            são paulo - brasil
          </span>
          <h1 className="uppercase lg:text-6xl text-4xl tracking-widest">
            showroom
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:h-[80vh]">
          <Image
            className="object-cover object-center lg:w-1/3"
            src="/showroom1.webp"
            alt=""
            width={590}
            height={900}
            quality={90}
          />
          <Image
            className="object-cover object-center lg:w-2/3"
            src="/showroom2.webp"
            alt=""
            width={1190}
            height={900}
            quality={90}
          />
        </div>
      </div>
      <div className="flex flex-col lg:mx-auto gap-10 items-center mx-3">
        <div className="flex flex-col lg:w-3/4 w-full lg:space-y-4 space-y-2 lg:text-xl text-base text-leon-black">
          <p className="lg:text-center text-justify">
            Temos o orgulho de apresentar um espaço dedicado ao design atencioso
            e bem elaborado que tanto nos inspira.
          </p>
          <p className="lg:text-center text-justify">
            Agora, você terá a oportunidade única de vivenciar nossas coleções
            em primeira mão, explorar a oficina e descobrir as histórias por
            trás de cada peça, em nosso novo showroom localizado em São Paulo.
          </p>
          <p className="lg:text-center text-justify">
            As visitas são realizadas mediante reserva, para que possamos
            oferecer uma experiência exclusiva e personalizada.
          </p>
        </div>
        <div className="flex items-center justify-center align-middle lg:w-[550px] w-[300px] py-2 bg-leon-black ">
          <a
            href="https://api.whatsapp.com/send?phone=5511971986991&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20Showroom!"
            className="text-leon-sand uppercase lg:text-4xl text-2xl tracking-wide items-center flex justify-center"
          >
            agendar visita
          </a>
        </div>
      </div>
    </div>
  )
}
