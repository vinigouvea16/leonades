import { shopifyFetch } from '@/lib/shopify'
import { type NextRequest, NextResponse } from 'next/server'

type CheckoutLineItem = {
  variantId: string
  quantity: number
}

export async function POST(request: NextRequest) {
  try {
    const { lineItems }: { lineItems: CheckoutLineItem[] } =
      await request.json()

    if (!lineItems || lineItems.length === 0) {
      return NextResponse.json(
        { error: 'Nenhum item fornecido para o checkout' },
        { status: 400 }
      )
    }

    const shopifyLineItems = lineItems.map(item => ({
      variantId: item.variantId,
      quantity: item.quantity,
    }))

    const mutation = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            subtotalPriceV2 {
              amount
              currencyCode
            }
            totalTaxV2 {
              amount
              currencyCode
            }
            totalPriceV2 {
              amount
              currencyCode
            }
            lineItems(first: 250) {
              edges {
                node {
                  id
                  title
                  quantity
                  variant {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    product {
                      handle
                      title
                    }
                  }
                }
              }
            }
          }
          checkoutUserErrors {
            field
            message
          }
        }
      }
    `

    const variables = {
      input: {
        lineItems: shopifyLineItems,
        allowPartialAddresses: true,
      },
    }

    const response = await shopifyFetch<{
      checkoutCreate: {
        checkout: {
          id: string
          webUrl: string
          subtotalPriceV2: { amount: string; currencyCode: string }
          totalTaxV2: { amount: string; currencyCode: string }
          totalPriceV2: { amount: string; currencyCode: string }
          lineItems: {
            edges: {
              node: {
                id: string
                title: string
                quantity: number
                variant: {
                  id: string
                  title: string
                  priceV2: { amount: string; currencyCode: string }
                  product: { handle: string; title: string }
                }
              }
            }[]
          }
        }
        checkoutUserErrors: { field: string; message: string }[]
      }
    }>(mutation, { variables })

    if (response?.data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
      const errors = response.data.checkoutCreate.checkoutUserErrors
      console.error('Shopify checkout errors:', errors)
      return NextResponse.json(
        { error: `Erro no checkout: ${errors.map(e => e.message).join(', ')}` },
        { status: 400 }
      )
    }

    const checkout = response?.data?.checkoutCreate?.checkout

    if (!checkout) {
      return NextResponse.json(
        { error: 'Falha ao criar checkout' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      checkout: {
        id: checkout.id,
        webUrl: checkout.webUrl,
        subtotal: checkout.subtotalPriceV2,
        tax: checkout.totalTaxV2,
        total: checkout.totalPriceV2,
        lineItems: checkout.lineItems.edges.map(edge => edge.node),
      },
    })
  } catch (error) {
    console.error('Erro ao criar checkout:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
