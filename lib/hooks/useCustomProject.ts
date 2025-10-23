import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import type { CustomProject } from './useCustomProjects'

export function useCustomProject(handle: string) {
  const [project, setProject] = useState<CustomProject | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const locale = useLocale() as 'pt' | 'en' | 'es'

  useEffect(() => {
    async function fetchProject() {
      if (!handle) {
        setError('Handle do projeto é obrigatório')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const res = await fetch(`/api/custom-project/${handle}`)

        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('Projeto não encontrado')
          }
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data: { project: CustomProject; error?: string } =
          await res.json()

        if (data.error) {
          throw new Error(data.error)
        }

        const translatedProject = {
          ...data.project,
          title: data.project.translations[locale]?.title || data.project.title,
          description:
            data.project.translations[locale]?.description ||
            data.project.description,
        }

        setProject(translatedProject)
      } catch (err) {
        console.error('Erro ao buscar projeto:', err)
        setError(err instanceof Error ? err.message : 'Erro ao buscar projeto')
        setProject(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [handle, locale])
  return { project, loading, error }
}
