// import { Separator } from '@/components/ui/separator'
import Footer from '@/components/homapage-components/footer/footer'
import AnimatedLogo from '@/components/ui/animated-svg'
import ExpandableSection from '@/components/ui/expendable-section'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function ShowcasePage() {
  return (
    <div className="bg-leon-new-sand" id="hero">
      <ShowCaseDesktop />
      <ShowCaseMobile />
    </div>
  )
}

function ShowCaseDesktop() {
  return (
    <div className="lg:flex-col hidden lg:flex space-y-12 overflow-x-hidden">
      {/* hero */}
      <div className="flex flex-col h-screen ">
        <div className="bg-[url('/showcase/showcaseheroimg.webp')] h-[75%] bg-center bg-cover">
          <div className="absolute right-0 bottom-0 flex flex-row-reverse align-baseline w-full gap-2">
            <div className="flex p-5 gap-5 h-[550px] bg-leon-new-sand 2xl:w-2/3 w-[55%]">
              <Image
                src={
                  'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752928/casapiabaheroimg2_1_x5w7tq.png'
                }
                alt={''}
                width={447}
                height={491}
                unoptimized
                className="flex-grow w-1/2 object-cover object-center"
              />
              <Image
                src={
                  'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752929/casapiabaheroimg3_1_guixbd.png'
                }
                alt={''}
                width={447}
                height={491}
                unoptimized
                className="flex-grow w-1/2 object-cover object-center"
              />
            </div>
            <div className="flex flex-col pb-4 2xl:w-1/3 w-[45%] mt-auto">
              <h1 className="mx-auto text-[min(7vw,7rem)] font-light leading-tight h-fit bg-gradient-to-b from-[#764B28] from-0% via-[#764b28] via-30% to-[#F0EDE6]/10 to-80% uppercase bg-clip-text text-transparent ">
                Casa piaba
              </h1>
              <p className="font-light text-leon-black text-justify text-sm ml-5">
                One of contemporary architecture’s most pressing challenges is
                the maturement of a sensibility capable of deciphering the
                landscape on a local level, offering construction continuity
                with local traditions as well as the creativity necessary for
                accommodating new lifestyles. In that sense, Piaba House can be
                read as a result of a process of cultural archeology in the
                Chapada da Diamantina and a proposal of contemporary
                habitability in this landscape. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-leon-concrete/50" />
      {/* intro */}
      <div className="">
        <div className="flex justify-center h-10/12">
          <div className="flex w-3/4">
            <Image
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752942/Rectangle_77_zq7rlg.png'
              }
              alt={''}
              width={914}
              height={790}
              unoptimized
              className="h-full w-2/3 object-cover object-center"
            />
            <Image
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752944/Rectangle_78_zy86wa.png'
              }
              alt={''}
              width={494}
              height={790}
              unoptimized
              className="h-full w-1/3 object-cover object-center"
            />
          </div>
          <div className="w-1/4 flex flex-col mx-auto justify-evenly items-center ">
            <AnimatedLogo strokeColor="#000" />
            <div className="flex flex-col text-leon-black font-light">
              <p className="text-3xl font-light flex flex-col items-center">
                Area:
                <span className="text-6xl">180m²</span>
              </p>
            </div>
            <div className="flex flex-col text-leon-black font-light">
              <p className="text-3xl font-light flex flex-col items-center">
                Year:
                <span className="text-6xl">2023</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 photos + text */}
      <div className="flex flex-col gap-4">
        <div className="flex h-[82vh]">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752933/Rectangle_64_eiesbx.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-full w-1/3 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752937/Rectangle_66_gzyjyg.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-full w-1/3 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752935/Rectangle_65_gf31np.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-full w-1/3 object-cover object-center"
          />
        </div>
        <div className="flex mx-5 font-light gap-5">
          <div className="w-1/3">
            <p className="text-justify">
              The house resulted from a constructive investigation by Lajedo
              Arquitetura, an office from São Paulo, in partnership with the
              furniture designer{' '}
              <span className="underline underline-offset-4">Leon Ades</span>.
              The research on the materiality of wood and traditional joinery
              techniques was the common interest that inspired this cooperation.
              The admiration for artisanal modes of fabrication led the
              architects Alexandre Makhoul and Luiz Bomeny, as well as Leon
              Ades, to make the carpentry with their own hands, from the
              pre-fabrication of the structure until its assembly in the site,
              which is of difficult access. When studied with greater attention,
              the construction can be understood as a careful reading of the
              elements that characterize the built environment of the region.{' '}
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-justify">
              Igatú, or “good water” in the language of indigenous populations
              Cariri and Maracá, went through an intense urbanization process in
              the second half of the XIXth century due to the discovery of
              diamonds in the region. The promise of enrichment in the
              countryside of Bahia brought an ambivalent legacy. On one side the
              consequences of extractivism and the mining industry, such as the
              silting of rivers and the destruction of native forests. Igatú’s
              wealth cycle, just like any other extractivist economy, exhausted
              itself. Most of its population left the city and today it is a
              small village with a population of less than one thousand. On the
              other side, an autochthonous culture flourished and the
              constitution of a regional notion of beauty, that despite its
              abandonment, remains rooted and alive through its few inhabitants.
            </p>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <h2 className="font-light text-[min(7vw,2.5rem)] text-center w-2/3">
              Stone Architecture: environmental sensitivity
            </h2>
          </div>
        </div>
      </div>

      {/* stone architecture */}
      <div className="flex ">
        <div className="flex flex-col w-4/5">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752940/Rectangle_67_hvceub.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="max-h-[1000px] 2xl:max-h-[750px] w-full object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752947/Rectangle_79_jcrscy.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="max-h-[1000px] 2xl:max-h-[750px] w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col w-1/5 space-y-10 font-light xl:text-lg mx-7">
          <p>
            Among the cultural landmarks of this region of the Chapada
            Diamantina are the solutions found for the built environment and, in
            particular, for the design of homes. The site has a wide
            availability of stones, which were quickly integrated into the
            buildings. Large stones were incorporated into walls, playing the
            role of coverings and enclosures. Smaller rocks were fitted together
            to make walls and, later on, mortar was used to ensure greater
            stability in these structures. From this popular practice,
            individual building traditions developed, with different local
            craftsmen creating their own fitting techniques. Today, the
            region&apos;s buildings are silently marked by the lines of fittings
            between materials and the resulting textures, originating from the
            craftsmanship and care of the native population.
          </p>
          <p>
            The house design seeks continuity with local construction
            traditions, such as traditional typologies found in Bahia’s colonial
            architecture and the landscape of the Chapada da Diamantina. Having
            as a central reference the Casa de Caminha from Portuguese architect
            Sérgio Fernandez, the design encrusts itself in a slope, creating an
            open space of acquaintanceship that blurs the frontiers between
            interior and exterior. When decomposed in its elements, Piaba house
            deconstructs colonial architecture, rearranging its elements in a
            new organization – adequate to the place and contemporary uses. The
            heavy perimetral walls of colonial Brazilian buildings, with their
            thin rectangular apertures disposed in regular intervals, appear
            here as the façade of the house – also referencing the typical
            frontality of colonial architecture that characterize the streets of
            the Pelourinho and Ouro Preto.{' '}
          </p>
          <p>
            The wooden structures were fabricated in São Paulo while all other
            elements were fabricated and assembled in loco by the architects
            themselves and the team in Igatú. Experience in which they submitted
            themselves to guarantee an understanding of the local reality; and
            logistical and construction difficulties as well as the potential of
            the local workforce; to also feel the weight of their design in
            their own hands.
          </p>
        </div>
      </div>

      <Separator className="bg-leon-concrete/50" />
      {/* blueprint */}
      <div className="flex">
        <div className="flex w-full">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752949/Rectangle_80_etxwnu.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-full w-1/2 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752931/image_2_rbrfdj.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-full w-1/2 object-cover object-center"
          />
        </div>
      </div>
      <Separator className="bg-leon-concrete/50" />

      {/* foto da casa */}
      <Image
        src={
          'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752952/Rectangle_81_ph40fq.png'
        }
        alt={''}
        width={1920}
        height={1080}
        unoptimized
        className="h-screen object-cover object-center"
      />
      {/* read more */}
      <div className="flex h-[60vh]">
        <div className="flex flex-col items-center w-1/4 justify-evenly ">
          <h3 className="font-light text-4xl text-center mx-2">
            Want to know more about this amazing project?
          </h3>
          <span className="text-xs text-leon-concrete/75">
            click on the chair
          </span>
          <Link
            href={
              'https://www.archdaily.com.br/br/1012513/casa-piaba-lajedo-arquitetura'
            }
          >
            <AnimatedLogo width={161} height={212} strokeColor="#333" />
          </Link>
        </div>
        <div className="flex w-3/4">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752957/Rectangle_83_chzi2l.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-full w-1/2 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752954/Rectangle_82_ikeotu.png'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-full w-1/2 object-cover object-center"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

function ShowCaseMobile() {
  return (
    <div className="flex flex-col lg:hidden space-y-8">
      {/* hero */}
      <div className="flex flex-col h-screen ">
        <div className="bg-[url('/showcase/showcaseheroimg.webp')] h-[70%] relative bg-center bg-cover">
          <div className="flex p-2 gap-2 max-w-11/12 h-[260px] bg-leon-new-sand absolute right-0 -bottom-3 ">
            <Image
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752928/casapiabaheroimg2_1_x5w7tq.png'
              }
              alt={''}
              width={447}
              height={491}
              unoptimized
              className="flex-grow w-1/2 object-cover object-center"
            />
            <Image
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752929/casapiabaheroimg3_1_guixbd.png'
              }
              alt={''}
              width={447}
              height={491}
              unoptimized
              className="flex-grow w-1/2 object-cover object-center pr-2"
            />
          </div>
        </div>
        <div className="flex flex-col pb-4 max-w-[720px] ">
          <h1 className="mx-auto text-[min(17vw,5rem)]  font-light leading-tight h-fit bg-gradient-to-b from-[#764B28] from-0% via-[#764b28] via-30% to-[#F0EDE6]/10 to-80% uppercase bg-clip-text text-transparent ">
            Casa piaba
          </h1>
          <p className="font-light text-leon-black text-justify text-sm mx-3">
            One of contemporary architecture’s most pressing challenges is the
            maturement of a sensibility capable of deciphering the landscape on
            a local level, offering construction continuity with local
            traditions as well as the creativity necessary for accommodating new
            lifestyles. In that sense, Piaba House can be read as a result of a
            process of cultural archeology in the Chapada da Diamantina and a
            proposal of contemporary habitability in this landscape. 
          </p>
        </div>
      </div>
      {/* intro */}
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752942/Rectangle_77_zq7rlg.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-1/3 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752944/Rectangle_78_zy86wa.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-2/3 object-cover object-center"
          />
        </div>
        <div className="flex flex-col mx-auto justify-evenly h-[62vh] items-center ">
          <AnimatedLogo strokeColor="#000" />
          <div className="flex flex-col text-leon-black font-light">
            <p className="text-3xl font-light flex flex-col items-center">
              Area:
              <span className="text-6xl">180m²</span>
            </p>
          </div>
          <div className="flex flex-col text-leon-black font-light">
            <p className="text-3xl font-light flex flex-col items-center">
              Year:
              <span className="text-6xl">2023</span>
            </p>
          </div>
        </div>
      </div>
      {/* 3 photos + text */}
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752933/Rectangle_64_eiesbx.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-1/3 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752937/Rectangle_66_gzyjyg.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-1/3 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752935/Rectangle_65_gf31np.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-1/3 object-cover object-center"
          />
        </div>
        <div className="flex flex-col font-light text-leon-black space-y-4 w-fit">
          <ExpandableSection>
            <p className="text-justify">
              The house resulted from a constructive investigation by Lajedo
              Arquitetura, an office from São Paulo, in partnership with the
              furniture designer{' '}
              <span className="underline underline-offset-4">Leon Ades</span>.
              The research on the materiality of wood and traditional joinery
              techniques was the common interest that inspired this cooperation.
              The admiration for artisanal modes of fabrication led the
              architects Alexandre Makhoul and Luiz Bomeny, as well as Leon
              Ades, to make the carpentry with their own hands, from the
              pre-fabrication of the structure until its assembly in the site,
              which is of difficult access. When studied with greater attention,
              the construction can be understood as a careful reading of the
              elements that characterize the built environment of the region.{' '}
            </p>
            <p className="text-justify">
              Igatú, or “good water” in the language of indigenous populations
              Cariri and Maracá, went through an intense urbanization process in
              the second half of the XIXth century due to the discovery of
              diamonds in the region. The promise of enrichment in the
              countryside of Bahia brought an ambivalent legacy. On one side the
              consequences of extractivism and the mining industry, such as the
              silting of rivers and the destruction of native forests. Igatú’s
              wealth cycle, just like any other extractivist economy, exhausted
              itself. Most of its population left the city and today it is a
              small village with a population of less than one thousand. On the
              other side, an autochthonous culture flourished and the
              constitution of a regional notion of beauty, that despite its
              abandonment, remains rooted and alive through its few inhabitants.
            </p>
          </ExpandableSection>
        </div>
      </div>
      {/* stone architecture */}
      <div className="flex flex-col ">
        <h2 className="font-light text-3xl text-center my-4">
          Stone Architecture: environmental sensitivity
        </h2>
        <div className="h-screen flex flex-col">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752940/Rectangle_67_hvceub.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-1/2 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752947/Rectangle_79_jcrscy.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-1/2 object-cover object-center"
          />
        </div>
        <div className="flex flex-col space-y-3 border-1 border-b-leon-black/20 pb-8 ">
          <ExpandableSection maxParagraphs={1}>
            <p className="font-light text-justify text-leon-black mt-3">
              Among the cultural landmarks of this region of the Chapada
              Diamantina are the solutions found for the built environment and,
              in particular, for the design of homes. The site has a wide
              availability of stones, which were quickly integrated into the
              buildings. Large stones were incorporated into walls, playing the
              role of coverings and enclosures. Smaller rocks were fitted
              together to make walls and, later on, mortar was used to ensure
              greater stability in these structures. From this popular practice,
              individual building traditions developed, with different local
              craftsmen creating their own fitting techniques. Today, the
              region`s buildings are silently marked by the lines of fittings
              between materials and the resulting textures, originating from the
              craftsmanship and care of the native population.
            </p>
            <p className="font-light text-justify text-leon-black">
              The house design seeks continuity with local construction
              traditions, such as traditional typologies found in Bahia’s
              colonial architecture and the landscape of the Chapada da
              Diamantina. Having as a central reference the Casa de Caminha from
              Portuguese architect Sérgio Fernandez, the design encrusts itself
              in a slope, creating an open space of acquaintanceship that blurs
              the frontiers between interior and exterior. When decomposed in
              its elements, Piaba house deconstructs colonial architecture,
              rearranging its elements in a new organization – adequate to the
              place and contemporary uses. The heavy perimetral walls of
              colonial Brazilian buildings, with their thin rectangular
              apertures disposed in regular intervals, appear here as the façade
              of the house – also referencing the typical frontality of colonial
              architecture that characterize the streets of the Pelourinho and
              Ouro Preto.{' '}
            </p>
          </ExpandableSection>
        </div>
      </div>

      {/* blueprint */}
      <div className="flex flex-col pb-8 border-b-1 border-b-leon-black/20 ">
        <div className="h-screen flex flex-col">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752949/Rectangle_80_etxwnu.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-1/2 object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752931/image_2_rbrfdj.png'
            }
            alt={''}
            width={447}
            height={491}
            unoptimized
            className="w-full h-1/2 object-cover object-center"
          />
        </div>
      </div>
      {/* more photos */}
      <div className="flex flex-col h-[120vh]">
        <Image
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752952/Rectangle_81_ph40fq.png'
          }
          alt={''}
          width={447}
          height={491}
          unoptimized
          className="w-full h-1/3 object-cover object-center"
        />
        <Image
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752957/Rectangle_83_chzi2l.png'
          }
          alt={''}
          width={447}
          height={491}
          unoptimized
          className="w-full h-1/3 object-cover object-center"
        />
        <Image
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752954/Rectangle_82_ikeotu.png'
          }
          alt={''}
          width={447}
          height={491}
          unoptimized
          className="w-full h-1/3 object-cover object-center"
        />
      </div>
      <div className="flex flex-col h-[50vh] mx-3 justify-evenly items-center">
        <h3 className="font-light text-4xl text-center">
          Want to know more about this amazing project?
        </h3>
        <span className="text-xs text-leon-concrete/75">
          click on the chair
        </span>
        <Link
          href={
            'https://www.archdaily.com.br/br/1012513/casa-piaba-lajedo-arquitetura'
          }
        >
          <AnimatedLogo width={105} height={140} strokeColor="#333" />
        </Link>
      </div>
      <Footer />
    </div>
  )
}
