'use client'
import { useCustomProjects } from '@/lib/hooks/useCustomProjects'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function CustomProjectsSection() {
  const t = useTranslations('home')
  const { projects, loading, error } = useCustomProjects()
  const [isExpanded, setIsExpanded] = useState(false)

  const randomizedProjects = useMemo(() => {
    return [...projects].sort(() => Math.random() - 0.5)
  }, [projects])

  const visibleProjects = isExpanded
    ? randomizedProjects
    : randomizedProjects.slice(0, 3)
  const hasMore = randomizedProjects.length > 3

  if (loading) {
    return (
      <div className="flex flex-col lg:my-20">
        <div className="lg:mx-5 mx-3 flex flex-col lg:flex-row gap-7 lg:gap-0 font-light">
          <h3 className="text-3xl lg:w-1/3 text-center lg:text-left">
            [ {t('custom-made-h1')} ]
          </h3>
          <div className="items-center flex flex-col gap-3 lg:gap-0 lg:items-start lg:w-2/3">
            <p className="text-justify lg:text-xl">{t('custom-made-p')}</p>
            <span className="font-medium underline underline-offset-4 text-lg">
              leonades@design.com
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
        </div>
      </div>
    )
  }

  if (error || projects.length === 0) {
    return null
  }
  return (
    <div className="flex flex-col lg:my-20" id="custom-made">
      <div className="lg:mx-5 mx-3 flex flex-col lg:flex-row gap-7 lg:gap-0 font-light">
        <h3 className="text-3xl lg:w-1/3 text-center lg:text-left">
          [ {t('custom-made-h1')} ]
        </h3>
        <div className="items-center flex flex-col gap-3 lg:gap-0 lg:items-start lg:w-2/3">
          <p className="text-justify lg:text-xl">{t('custom-made-p')}</p>
          <span className="font-medium underline underline-offset-4 text-lg">
            leonades@design.com
          </span>
        </div>
      </div>

      <div className="mt-8 mx-0 lg:mx-5">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-0">
          {visibleProjects.map((project, index) => {
            const isLastOdd =
              visibleProjects.length % 2 !== 0 &&
              index === visibleProjects.length - 1

            return (
              <Link
                key={project.id}
                href={`/custom-project/${project.handle}`}
                className={`
                  group relative overflow-hidden
                  hover:brightness-110 transition-opacity
                  ${isLastOdd ? 'col-span-2 lg:col-span-1' : ''}
                `}
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={
                      project.featuredImage?.url ||
                      project.images[0]?.url ||
                      '/placeholder-image.jpg'
                    }
                    alt={project.featuredImage?.altText || project.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-leon-black/50 via-leon-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-medium text-lg">
                        {project.title}
                      </h4>
                      {project.year && (
                        <p className="text-white/80 text-sm mt-1">
                          {project.year}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-light"
            >
              {isExpanded ? (
                <>
                  Ver menos
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Ver todos os projetos ({projects.length})
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
