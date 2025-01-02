'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Check } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="card transition-transform duration-300 hover:scale-105">
      
      <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        
        <p className="text-gray-400 mb-4">{product.description}</p>
        
        <div className="flex justify-between items-center">
          
          <span className="text-lg font-bold text-blue-500">${product.price.toFixed(2)}</span>
          
          <div className="flex flex-col items-end">
            
            <button
              onClick={handleAddToCart}
              className={`btn-primary flex items-center justify-center w-full mb-2 ${
                isAdded ? 'bg-green-500 hover:bg-green-600' : ''
              }`}
              disabled={isAdded}
            >
              {isAdded ? (
                <>
                  <Check className="mr-2" size={16} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2" size={16} /> Add to Cart
                </>
              )}
            </button>

            <Link href={`/products/${product.id}`} className="btn-secondary w-full text-center">
              View Details
            </Link>

          </div>

        </div>

      </div>
      
    </div>
  )
}

