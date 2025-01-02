'use client'


import { useCart } from '@/context/CartContext'
import { ShoppingCart } from 'lucide-react'

type Product = {
  id: number
  name: string
  price: number
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
      className="btn-primary flex items-center"
    >
      <ShoppingCart className="mr-2" size={20} /> Add to Cart
    </button>
  )
}

