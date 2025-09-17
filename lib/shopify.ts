function getEnvVar(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Variável de ambiente ${key} não está definida`)
  }
  return value
}

const SHOPIFY_DOMAIN = getEnvVar('SHOPIFY_STORE_DOMAIN')
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = getEnvVar('STOREFRONT_ACCESS_TOKEN')

export async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<{ data: T }> {
  const url = `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
  })

  const json = await res.json()

  if (!res.ok) {
    console.error('Erro HTTP:', res.status, res.statusText)
    console.error('Resposta:', json)
    throw new Error(`Erro Shopify: ${res.statusText}`)
  }

  if (json.errors) {
    console.error('Erros GraphQL:', json.errors)
    throw new Error(`Erro na query do Shopify: ${JSON.stringify(json.errors)}`)
  }

  return { data: json.data }
}
