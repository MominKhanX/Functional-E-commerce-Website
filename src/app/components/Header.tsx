'use client'

import Link from 'next/link'
import { ShoppingCart, Cpu } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const { cart } = useCart()

  return (
    <header className="bg-gray-800 shadow-md">
      
      <nav className="container mx-auto px-6 py-5">
        
        <div className="flex justify-between items-center">
          
          <Link href="/" className="text-2xl font-bold text-blue-500 flex items-center">
            <Cpu className="mr-2" /> TechHub
          </Link>
          
          <div className="flex items-center">
            <Link href="/" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">Home</Link>
            <Link href="/products" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">Products</Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">Contact</Link>
            <Link href="/faq" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">FAQ</Link>
            <Link href="/cart" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4 relative">
            <ShoppingCart />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}

            </Link>

          </div>

        </div>

      </nav>

    </header>
  )
}

