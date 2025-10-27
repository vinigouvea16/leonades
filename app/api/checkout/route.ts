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

    console.log('📦 Nenhum item fornecido para o checkout')

    if (!lineItems || lineItems.length === 0) {
      return NextResponse.json(
        { error: 'Nenhum item fornecido para o checkout' },
        { status: 400 }
      )
    }

    const shopifyLineItems = lineItems.map(item => ({
      merchandiseId: item.variantId,
      quantity: item.quantity,
    }))

    console.log('🛒 shopifyLineItems:', shopifyLineItems)

    const mutation = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
            }
            lines(first: 250) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      product {
                        title
                        handle
                      }
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `

    const variables = {
      input: {
        lines: shopifyLineItems,
      },
    }
    console.log('📝 variables enviadas:', JSON.stringify(variables, null, 2))

    const response = await shopifyFetch<{
      cartCreate: {
        cart: {
          id: string
          checkoutUrl: string
          cost: {
            totalAmount: { amount: string; currencyCode: string }
            subtotalAmount: { amount: string; currencyCode: string }
          }
          lines: {
            edges: {
              node: {
                id: string
                quantity: number
                merchandise: {
                  id: string
                  title: string
                  product: { title: string; handle: string }
                  price: { amount: string; currencyCode: string }
                }
              }
            }[]
          }
        }
        userErrors: { field: string[]; message: string }[]
      }
    }>(mutation, variables)

    if (response?.data?.cartCreate?.userErrors?.length > 0) {
      const errors = response.data.cartCreate.userErrors
      console.error('Shopify cart errors:', errors)
      return NextResponse.json(
        { error: `Erro no checkout: ${errors.map(e => e.message).join(', ')}` },
        { status: 400 }
      )
    }

    const cart = response?.data?.cartCreate?.cart

    if (!cart) {
      return NextResponse.json(
        { error: 'Falha ao criar carrinho' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      checkout: {
        id: cart.id,
        webUrl: cart.checkoutUrl,
        total: cart.cost.totalAmount,
        subtotal: cart.cost.subtotalAmount,
        lineItems: cart.lines.edges.map(edge => edge.node),
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
