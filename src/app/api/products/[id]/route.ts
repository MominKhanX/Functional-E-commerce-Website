import { NextResponse } from 'next/server'

const products = [
  { id: 1, name: 'Product 1', price: 19.99, description: 'This is product 1', image: '/placeholder.svg?text=Product 1' },
  { id: 2, name: 'Product 2', price: 29.99, description: 'This is product 2', image: '/placeholder.svg?text=Product 2' },
  { id: 3, name: 'Product 3', price: 39.99, description: 'This is product 3', image: '/placeholder.svg?text=Product 3' },
  { id: 4, name: 'Product 4', price: 49.99, description: 'This is product 4', image: '/placeholder.svg?text=Product 4' },
  { id: 5, name: 'Product 5', price: 59.99, description: 'This is product 5', image: '/placeholder.svg?text=Product 5' },
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  const product = products.find(p => p.id === id)
  
  if (!product) {
    return new NextResponse('Product not found', { status: 404 })
  }

  return NextResponse.json(product)
}

