'use client'
import Image from 'next/image'
import { useState } from 'react'

type YouTubeEmbedProps = {
  videoId?: string
  title?: string
  className?: string
}

export function YouTubeEmbed({
  videoId = 'm7c9LgeFT6I',
  title = 'Vídeo do projeto',
  className = '',
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative w-full aspect-video ${className}`}>
      {!isLoaded ? (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="relative w-full h-full group cursor-pointer"
          aria-label="Play video"
        >
          {/* Thumbnail do YouTube */}
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="lg:w-20 lg:h-20 w-16 h-16 bg-leon-concrete rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-xl">
              <svg
                className="w-8 h-8 text-leon-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </div>
  )
}

// Uso simples (usa o vídeo padrão):
// <YouTubeEmbed />

// Ou com vídeo customizado:
// <YouTubeEmbed videoId="OUTRO_VIDEO_ID" title="Título customizado" />
