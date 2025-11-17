import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

export type CustomProjectImage = {
  url: string
  altText: string | null
  width: number
  height: number
}

export type CustomProjectTranslations = {
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

export type CustomProject = {
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

export function useCustomProjects() {
  const [projects, setProjects] = useState<CustomProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const locale = useLocale() as 'pt' | 'en' | 'es'

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/custom-projects')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        const translatedProjects =
          data.projects?.map((project: CustomProject) => ({
            ...project,
            title: project.translations[locale]?.title || project.title,
            description:
              project.translations[locale]?.description || project.description,
          })) || []

        setProjects(translatedProjects)
      } catch (err) {
        console.error('Erro ao buscar projetos customizados:', err)
        setError(err as Error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [locale])

  return { projects, loading, error }
}
