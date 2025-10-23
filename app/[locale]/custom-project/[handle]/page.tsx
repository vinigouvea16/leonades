'use client'
import Footer from '@/components/homapage-components/footer/footer'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type CustomProjectImage = {
  url: string
  altText: string | null
  width: number
  height: number
}

type CustomProjectTranslations = {
  pt: {
    title: string
    description: string
  }
  en: {
    title: string
    description: string
  }
  es: {
    title: string
    description: string
  }
}

type CustomProject = {
  id: string
  title: string
  handle: string
  description: string
  featuredImage: {
    url: string
    altText: string
  } | null
  images: CustomProjectImage[]
  year: string | null
  dimensions: string | null
  translations: CustomProjectTranslations
}

export default function CustomProject() {
  const params = useParams()
  const locale = useLocale() as 'pt' | 'en' | 'es'
  const handle = params?.handle as string

  const [projectData, setProjectData] = useState<CustomProject | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`/api/custom-projects/${handle}`)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        if (!data.project) {
          throw new Error('Projeto não encontrado')
        }

        const translatedProject: CustomProject = {
          ...data.project,
          title: data.project.translations[locale]?.title || data.project.title,
          description:
            data.project.translations[locale]?.description ||
            data.project.description,
        }

        setProjectData(translatedProject)
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Erro ao carregar o projeto'
        setError(errorMessage)
        console.error('Erro ao buscar projeto:', err)
      } finally {
        setLoading(false)
      }
    }

    if (handle) {
      fetchProjectData()
    }
  }, [handle, locale])

  if (loading) {
    return (
      <div className="bg-leon-new-sand min-h-screen flex items-center justify-center">
        <p className="text-xl font-light">Carregando...</p>
      </div>
    )
  }

  if (error || !projectData) {
    return (
      <div className="bg-leon-new-sand min-h-screen flex items-center justify-center">
        <p className="text-xl font-light">
          {error || 'Projeto não encontrado'}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-leon-new-sand" id="hero">
      <CustomProjectDesktop projectData={projectData} />
      <CustomProjectMobile projectData={projectData} />
    </div>
  )
}

function CustomProjectDesktop({ projectData }: { projectData: CustomProject }) {
  const images = projectData.images
  const router = useRouter()

  return (
    <div className="hidden lg:flex flex-col">
      <div className="flex flex-col">
        <div className="flex h-screen">
          <div className="w-[60%] flex flex-col">
            <div className="flex flex-col h-full justify-between mx-5 mb-10 mt-16 items-start">
              <Image
                src="/logoNomePreto.png"
                alt="Logo"
                unoptimized
                width={200}
                height={30}
                className="object-cover opacity-30 w-fit h-[30px]"
              />
              <div className="flex flex-col gap-3">
                <h1 className="2xl:text-4xl text-3xl tracking-wide">
                  {projectData.title}
                </h1>
                <p className="font-light text-lg 2xl:text-xl">
                  {projectData.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            {images[0] && (
              <Image
                src={images[0].url}
                alt={images[0].altText || projectData.title}
                unoptimized
                width={images[0].width}
                height={images[0].height}
                className="object-cover w-full h-full"
              />
            )}
          </div>
        </div>

        <div className="flex h-[75vh]">
          {images[1] && (
            <Image
              src={images[1].url}
              alt={images[1].altText || projectData.title}
              unoptimized
              width={images[1].width}
              height={images[1].height}
              className="object-cover w-[60%] h-full"
            />
          )}
          {images[2] && (
            <Image
              src={images[2].url}
              alt={images[2].altText || projectData.title}
              unoptimized
              width={images[2].width}
              height={images[2].height}
              className="object-cover w-[40%] h-full"
            />
          )}
        </div>
      </div>

      <div className="h-[1px] mx-5 bg-gradient-to-l from-leon-black/0 via-leon-black/50 to-leon-black/0 my-8" />

      <div className="flex flex-col mb-28">
        <div className="flex h-screen">
          {images[3] && (
            <Image
              src={images[3].url}
              alt={images[3].altText || projectData.title}
              unoptimized
              width={images[3].width}
              height={images[3].height}
              className="object-cover w-[40%] h-full"
            />
          )}
          {images[4] && (
            <Image
              src={images[4].url}
              alt={images[4].altText || projectData.title}
              unoptimized
              width={images[4].width}
              height={images[4].height}
              className="object-cover object-top w-[60%] h-full"
            />
          )}
        </div>

        <div className="flex h-[75vh]">
          {images[5] && (
            <Image
              src={images[5].url}
              alt={images[5].altText || projectData.title}
              unoptimized
              width={images[5].width}
              height={images[5].height}
              className="object-cover w-[40%] h-full"
            />
          )}
          {images[6] && (
            <Image
              src={images[6].url}
              alt={images[6].altText || projectData.title}
              unoptimized
              width={images[6].width}
              height={images[6].height}
              className="object-cover object-top w-[60%] h-full"
            />
          )}
        </div>

        <button
          type="button"
          onClick={() => router.back()}
          className="mx-auto mt-5 flex items-center gap-2 font-light text-xl hover:underline"
        >
          <ArrowLeft className="size-7" strokeWidth={1.5} />
          Voltar
        </button>
      </div>
      <Footer />
    </div>
  )
}

function CustomProjectMobile({ projectData }: { projectData: CustomProject }) {
  const images = projectData.images
  const router = useRouter()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  )

  const galleryImages = images.slice(6)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
    document.body.style.overflow = 'auto'
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  const goToNext = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < galleryImages.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="lg:hidden flex flex-col">
      {/* 1st div */}
      <div className="flex flex-col">
        {images[0] && (
          <Image
            src={images[0].url}
            alt={images[0].altText || projectData.title}
            unoptimized
            width={390}
            height={930}
            className="object-cover w-full h-svh"
          />
        )}

        <div className="flex flex-col justify-center gap-3 mx-3 my-10">
          <h1 className="text-3xl tracking-wide">{projectData.title}</h1>
          <p className="font-light">{projectData.description}</p>
        </div>

        <div className="flex flex-col h-svh">
          {images[1] && (
            <Image
              src={images[1].url}
              alt={images[1].altText || projectData.title}
              unoptimized
              width={390}
              height={465}
              className="object-cover w-full h-1/2"
            />
          )}
          {images[2] && (
            <Image
              src={images[2].url}
              alt={images[2].altText || projectData.title}
              unoptimized
              width={390}
              height={465}
              className="object-cover w-full h-1/2"
            />
          )}
        </div>
      </div>

      <div className="h-[1px] mx-3 bg-gradient-to-l from-leon-black/0 via-leon-black/20 to-leon-black/0 my-5" />

      <div className="flex flex-col h-[120vh] mb-14">
        {images[3] && (
          <Image
            src={images[3].url}
            alt={images[3].altText || projectData.title}
            unoptimized
            width={390}
            height={310}
            className="object-cover w-full h-1/3"
          />
        )}
        {images[4] && (
          <Image
            src={images[4].url}
            alt={images[4].altText || projectData.title}
            unoptimized
            width={390}
            height={310}
            className="object-cover w-full h-1/3"
          />
        )}
        {images[5] && (
          <Image
            src={images[5].url}
            alt={images[5].altText || projectData.title}
            unoptimized
            width={390}
            height={310}
            className="object-cover w-full h-1/3"
          />
        )}

        {galleryImages.length > 0 && (
          <div className="flex h-[30vh] gap-3 w-full mt-3 overflow-x-auto px-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openModal(index)}
                className="min-w-[121px] h-full focus:outline-none focus:ring-2 focus:ring-leon-black/50 rounded"
              >
                <Image
                  src={image.url}
                  alt={image.altText || `${projectData.title} - ${index + 7}`}
                  unoptimized
                  width={121}
                  height={171}
                  className="object-cover min-w-[121px] h-full cursor-pointer hover:opacity-90 transition-opacity"
                />
              </button>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => router.back()}
          className="mx-auto mt-5 flex items-center gap-2 font-light  hover:underline"
        >
          <ArrowLeft className="size-5" strokeWidth={1.5} />
          Voltar
        </button>
      </div>

      {/* modal */}
      {selectedImageIndex !== null && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 text-leon-concrete hover:text-white/70 transition-colors z-10"
          >
            <X className="size-8" strokeWidth={1.5} />
          </button>

          {selectedImageIndex > 0 && (
            <button
              type="button"
              onClick={e => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 text-leon-concrete hover:text-white/70 transition-colors z-10"
            >
              <ChevronLeft className="size-10" strokeWidth={1.5} />
            </button>
          )}

          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImageIndex].url}
              alt={
                galleryImages[selectedImageIndex].altText ||
                `${projectData.title} - ${selectedImageIndex + 7}`
              }
              unoptimized
              width={galleryImages[selectedImageIndex].width}
              height={galleryImages[selectedImageIndex].height}
              className="object-contain max-h-full max-w-full"
            />
          </div>

          {selectedImageIndex < galleryImages.length - 1 && (
            <button
              type="button"
              onClick={e => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 text-leon-concrete hover:text-white/70 transition-colors z-10"
            >
              <ChevronRight className="size-10" strokeWidth={1.5} />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-light">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
