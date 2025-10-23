import { shopifyFetch } from '@/lib/shopify'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const query = `{
      collection(handle: "projetos-sob-medida") {
        products(first: 20, sortKey: CREATED, reverse: true) {
          edges {
            node {
              id
              title
              handle
              description
              featuredImage {
                url
                altText
              }
              images(first: 10) {
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
            }
          }
        }
      }
    }`

    const response = await shopifyFetch<{
      collection: {
        products: {
          edges: {
            node: {
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
            }
          }[]
        }
      }
    }>(query)

    if (!response?.data?.collection?.products) {
      return NextResponse.json({ projects: [] })
    }

    const projects = response.data.collection.products.edges.map(edge => {
      const product = edge.node
      const allImages = product.images.edges.map(imgEdge => ({
        url: imgEdge.node.url,
        altText: imgEdge.node.altText,
        width: imgEdge.node.width,
        height: imgEdge.node.height,
      }))

      return {
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        featuredImage: product.featuredImage,
        images: allImages,
        year: product.yearMetafield?.value || null,
        dimensions: product.dimensions?.value || null,
        translations: {
          pt: {
            title: product.titlePt?.value || product.title,
            description:
              product.descriptionPt?.value ||
              product.description ||
              'Projeto sem descrição',
          },
          en: {
            title: product.titleEn?.value || product.title,
            description:
              product.descriptionEn?.value ||
              product.description ||
              'Project without description',
          },
          es: {
            title: product.titleEs?.value || product.title,
            description:
              product.descriptionEs?.value ||
              product.description ||
              'Proyecto sin descripción',
          },
        },
      }
    })

    return NextResponse.json({ projects })
  } catch (error) {
    console.error('Erro ao buscar projetos customizados:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar projetos customizados' },
      { status: 500 }
    )
  }
}
