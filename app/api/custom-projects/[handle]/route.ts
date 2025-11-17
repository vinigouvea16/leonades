import { shopifyFetch } from '@/lib/shopify'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await context.params

    // console.log('=== DEBUG CUSTOM PROJECT ===')
    // console.log('Handle:', handle)

    if (!handle) {
      return NextResponse.json(
        { error: 'Handle do projeto é obrigatório' },
        { status: 400 }
      )
    }

    const query = `{
      product(handle: "${handle}") {
        id
        title
        handle
        description
        featuredImage {
          url
          altText
        }
        images(first: 20) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        titlePt: metafield(namespace: "translations", key: "title_pt") {
          value
        }
        titleEn: metafield(namespace: "translations", key: "title_en") {
          value
        }
        titleEs: metafield(namespace: "translations", key: "title_es") {
          value
        }
        descriptionPt: metafield(namespace: "translations", key: "description_pt") {
          value
        }
        descriptionEn: metafield(namespace: "translations", key: "description_en") {
          value
        }
        descriptionEs: metafield(namespace: "translations", key: "description_es") {
          value
        }
        dimensions: metafield(namespace: "custom", key: "dimensions") {
          value
        }
        yearMetafield: metafield(namespace: "custom", key: "year") {
          value
        }
        collections(first: 5) {
          edges {
            node {
              handle
            }
          }
        }
      }
    }`

    // console.log('Query para projeto customizado sendo enviada...')

    const response = await shopifyFetch<{
      product: {
        id: string
        title: string
        handle: string
        description: string
        featuredImage: { url: string; altText: string } | null
        images: {
          edges: {
            node: {
              url: string
              altText: string | null
              width: number
              height: number
            }
          }[]
        }
        titlePt: { value: string } | null
        titleEn: { value: string } | null
        titleEs: { value: string } | null
        descriptionPt: { value: string } | null
        descriptionEn: { value: string } | null
        descriptionEs: { value: string } | null
        dimensions: { value: string } | null
        yearMetafield: { value: string } | null
        collections: {
          edges: {
            node: {
              handle: string
            }
          }[]
        }
      }
    }>(query)

    // console.log('Resposta recebida:', !!response?.data?.product)

    if (!response?.data?.product) {
      return NextResponse.json(
        { error: 'Projeto não encontrado' },
        { status: 404 }
      )
    }

    const rawProduct = response.data.product

    const collectionHandles = rawProduct.collections.edges.map(
      edge => edge.node.handle
    )
    if (!collectionHandles.includes('projetos-sob-medida')) {
      return NextResponse.json(
        { error: 'Este produto não é um projeto customizado' },
        { status: 404 }
      )
    }

    const project = {
      id: rawProduct.id,
      title: rawProduct.title,
      handle: rawProduct.handle,
      description: rawProduct.description,
      featuredImage: rawProduct.featuredImage,
      images: rawProduct.images.edges.map(edge => ({
        url: edge.node.url,
        altText: edge.node.altText,
        width: edge.node.width,
        height: edge.node.height,
      })),
      year: rawProduct.yearMetafield?.value || null,
      dimensions: rawProduct.dimensions?.value || null,
      translations: {
        pt: {
          title: rawProduct.titlePt?.value || rawProduct.title,
          description:
            rawProduct.descriptionPt?.value || rawProduct.description,
        },
        en: {
          title: rawProduct.titleEn?.value || rawProduct.title,
          description:
            rawProduct.descriptionEn?.value || rawProduct.description,
        },
        es: {
          title: rawProduct.titleEs?.value || rawProduct.title,
          description:
            rawProduct.descriptionEs?.value || rawProduct.description,
        },
      },
    }

    // console.log('Projeto processado com sucesso!')
    return NextResponse.json({ project })
  } catch (error) {
    console.error('Erro ao buscar projeto customizado:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
