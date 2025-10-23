import { YouTubeEmbed } from '@/components/YouTubeEmbed'
// import { Separator } from '@/components/ui/separator'
import Footer from '@/components/homapage-components/footer/footer'
import AnimatedLogo from '@/components/ui/animated-svg'
import ExpandableSection from '@/components/ui/expendable-section'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('Showcase')
  return (
    <div className="lg:flex-col hidden lg:flex space-y-12 overflow-x-hidden">
      {/* hero */}
      <div className="flex flex-col h-screen ">
        <div className="bg-[url('/showcase/heroimg.webp')] lg:h-[65vh] xl:h-[70vh] 2xl:h-[75vh] bg-center bg-cover">
          <div className="absolute right-0 bottom-0 flex flex-row-reverse align-baseline w-full gap-2">
            <div className="flex p-5 gap-5 h-[550px] bg-leon-new-sand w-full ">
              <Image
                src={
                  'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752928/casapiabaheroimg2_1_x5w7tq.png'
                }
                alt={''}
                width={447}
                height={491}
                quality={95}
                className="flex-grow w-1/2 object-cover object-center"
              />
              <Image
                src={
                  'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752929/casapiabaheroimg3_1_guixbd.png'
                }
                alt={''}
                width={447}
                height={491}
                quality={95}
                className="flex-grow w-1/2 object-cover object-center"
              />
            </div>
            <div className="flex flex-col pb-4 w-[45%] mt-auto">
              <h1 className="text-[min(7vw,7rem)] font-light leading-tight h-fit bg-gradient-to-b from-[#764B28] from-0% via-[#764b28] via-30% to-[#F0EDE6]/10 to-80% uppercase bg-clip-text text-transparent text-nowrap ">
                Casa piaba
              </h1>
              <p className="font-light text-leon-black text-justify text-sm ml-3">
                {t('hero.description')}
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
                {t('info.area')}
                <span className="text-6xl">180m²</span>
              </p>
            </div>
            <div className="flex flex-col text-leon-black font-light">
              <p className="text-3xl font-light flex flex-col items-center">
                {t('info.year')}
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
              {t('section1.text1')}{' '}
              <span className="underline underline-offset-4">
                {t('section1.span')}
              </span>
              {t('section1.text2')}
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-justify">{t('section1.text3')}</p>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <h2 className="font-light text-[min(7vw,2.5rem)] text-center w-2/3">
              {t('section1.title')}
            </h2>
          </div>
        </div>
      </div>

      {/* stone architecture */}
      <div className="flex lg:max-h-[1500px]">
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
        <div className="flex flex-col w-1/5 space-y-2 font-light xl:text-lg mx-5 overflow-y-scroll">
          <p>{t('section2.text1')}</p>
          <ExpandableSection>
            <p>{t('section2.text2')}</p>
            <p>{t('section2.text3')}</p>
          </ExpandableSection>
        </div>
      </div>

      {/* process */}
      <div className="flex flex-col ">
        <Separator className="bg-leon-concrete/50" />
        {/*  blueprint */}
        <div className="flex w-full h-[70vh] my-5">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632507/ofkoziqbui44kuzytccz_ukyudb.webp'
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

        {/* other photos */}
        <div className="h-[150vh] flex">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632504/fsfshj1l6pgrbe3dvmjd_z5y1ws.webp'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-full w-1/2 object-cover object-center"
          />
          <div className="flex flex-col w-1/2 h-full">
            <Image
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632508/qrbdkn0a1l2srxjszkcf_me6egt.webp'
              }
              alt={''}
              width={577}
              height={714}
              unoptimized
              className="h-1/2 w-full object-cover object-center"
            />
            <Image
              src={
                'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632506/lxm8mfamengyyizwa2me_fzlh7y.webp'
              }
              alt={''}
              width={577}
              height={714}
              unoptimized
              className="p-5 h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <Image
          src={
            'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632504/kco67zfigwav9mf1qhyf_dxsqyv.webp'
          }
          alt={''}
          width={1920}
          height={1080}
          unoptimized
          className="h-screen w-full object-cover object-bottom"
        />
      </div>

      {/* foto da casa */}
      {/* <Image
        src={
          'https://res.cloudinary.com/dci7rpsws/image/upload/f_auto,q_auto/v1756752952/Rectangle_81_ph40fq.png'
        }
        alt={''}
        width={1920}
        height={1080}
        unoptimized
        className="h-screen object-cover object-center"
      /> */}

      {/* video */}
      <div className="flex p-5">
        <YouTubeEmbed
          title="Processo de criação"
          className="max-w-[1630px] mx-auto my-8 max-h-[920px]"
        />
      </div>
      {/* read more */}
      <div className="flex h-[60vh]">
        <div className="flex flex-col items-center w-1/4 justify-evenly ">
          <h3 className="font-light text-4xl text-center mx-2">
            {t('readMore.title')}
          </h3>
          <span className="text-xs text-leon-concrete/75">
            {t('readMore.cta')}
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

      {/* martelo */}
      <Image
        src={
          'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632504/dwnsr1g6up3m4f9qmo5n_bbkhfx.webp'
        }
        alt={''}
        width={1920}
        height={744}
        unoptimized
        className="h-full max-h-[744px] object-cover object-top"
      />
      <Footer />
    </div>
  )
}

function ShowCaseMobile() {
  const t = useTranslations('Showcase')
  return (
    <div className="flex flex-col lg:hidden space-y-8">
      {/* hero */}
      <div className="flex flex-col h-screen ">
        <div className="bg-[url('/showcase/heroimg.webp')] h-[75%] relative bg-center bg-cover">
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
            {t('title')}
          </h1>
          <p className="font-light text-leon-black text-justify text-sm mx-3">
            {t('hero.description')}
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
              {t('info.area')}
              <span className="text-6xl">180m²</span>
            </p>
          </div>
          <div className="flex flex-col text-leon-black font-light">
            <p className="text-3xl font-light flex flex-col items-center">
              {t('info.year')}
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
              {t('section1.text1')}
              <span className="underline underline-offset-4">
                {t('section1.span')}
              </span>
              {t('section1.text2')}
            </p>
            <p className="text-justify">{t('section1.text3')}</p>
          </ExpandableSection>
        </div>
      </div>
      {/* stone architecture */}
      <div className="flex flex-col ">
        <h2 className="font-light text-3xl text-center my-4">
          {t('section1.title')}
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
              {t('section2.text1')}
            </p>
            <p className="font-light text-justify text-leon-black">
              {t('section2.text2')}
            </p>
          </ExpandableSection>
        </div>
      </div>

      {/* blueprint */}
      <div className="flex flex-col">
        <div className="h-screen flex flex-col">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632507/ofkoziqbui44kuzytccz_ukyudb.webp'
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

        <div className="flex flex-col">
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632504/fsfshj1l6pgrbe3dvmjd_z5y1ws.webp'
            }
            alt={''}
            width={430}
            height={808}
            unoptimized
            className="h-[85vh] w-full object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632508/qrbdkn0a1l2srxjszkcf_me6egt.webp'
            }
            alt={''}
            width={577}
            height={714}
            unoptimized
            className="h-[40vh] w-full object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632506/lxm8mfamengyyizwa2me_fzlh7y.webp'
            }
            alt={''}
            width={577}
            height={714}
            className="p-3 h-[40vh] w-full object-cover object-center"
          />
          <Image
            src={
              'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632504/kco67zfigwav9mf1qhyf_dxsqyv.webp'
            }
            alt={''}
            width={430}
            height={920}
            unoptimized
            className="h-[50vh] w-full object-cover object-bottom"
          />
        </div>

        <div className="flex px-3">
          <YouTubeEmbed
            title="Processo de criação"
            className="max-w-[1630px] mx-auto my-8 max-h-[920px]"
          />
        </div>
      </div>

      {/* more photos */}
      {/* <div className="flex flex-col h-[120vh]">
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
      </div> */}
      <div className="flex flex-col h-[40vh] mx-3 justify-evenly items-center">
        <h3 className="font-light text-4xl text-center">
          {t('readMore.title')}
        </h3>
        <span className="text-xs text-leon-concrete/75">
          {t('readMore.cta')}
        </span>
        <Link
          href={
            'https://www.archdaily.com.br/br/1012513/casa-piaba-lajedo-arquitetura'
          }
        >
          <AnimatedLogo width={105} height={140} strokeColor="#333" />
        </Link>
      </div>

      {/* martelo */}
      <Image
        src={
          'https://res.cloudinary.com/dci7rpsws/image/upload/v1760632504/dwnsr1g6up3m4f9qmo5n_bbkhfx.webp'
        }
        alt={''}
        width={430}
        height={390}
        unoptimized
        className="w-full object-contain object-center"
      />
      <Footer />
    </div>
  )
}
