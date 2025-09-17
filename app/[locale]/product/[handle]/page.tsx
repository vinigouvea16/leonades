import ProductPage from '@/components/ProductPage'

interface ProductPageProps {
  params: Promise<{
    locale: string
    handle: string
  }>
}

export default async function Product({ params }: ProductPageProps) {
  const { handle } = await params

  return <ProductPage handle={handle} />
}
