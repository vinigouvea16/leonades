import { shopifyFetch } from '@/lib/shopify'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const query = `{
      collections(first: 20) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }`

    const response = await shopifyFetch<{
      collections: {
        edges: {
          node: {
            id: string
            title: string
            handle: string
          }
        }[]
      }
    }>(query)

    return NextResponse.json({
      collections: response.data.collections.edges.map(e => e.node),
    })
  } catch (error) {
    console.error('Erro:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar collections' },
      { status: 500 }
    )
  }
}
