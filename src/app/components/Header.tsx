'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Cpu, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 shadow-md">

      <nav className="container mx-auto px-4 sm:px-6 py-4">

        <div className="flex justify-between items-center">

          <Link href="/" className="text-2xl font-bold text-blue-500 flex items-center">
            <Cpu className="mr-2" /> TechHub
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:rotate-90 transition duration-300 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>


          <div className="hidden md:flex items-center">
            <Link href="/" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">Home</Link>
            <Link href="/products" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">Products</Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">Contact</Link>
            <Link href="/faq" className="text-gray-300 hover:text-blue-500 transition duration-300 mx-4">FAQ</Link>

            <Link href="/cart" className="text-gray-300 hover:text-blue-500 transition duration-300 ml-4 relative">
              <ShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}

            </Link>

          </div>

        </div>


        {isMenuOpen && (
          <div className="md:hidden mt-4">

            <Link href="/" className="block text-gray-300 hover:text-blue-500 transition duration-300 py-2">Home</Link>
            <Link href="/products" className="block text-gray-300 hover:text-blue-500 transition duration-300 py-2">Products</Link>
            <Link href="/about" className="block text-gray-300 hover:text-blue-500 transition duration-300 py-2">About</Link>
            <Link href="/contact" className="block text-gray-300 hover:text-blue-500 transition duration-300 py-2">Contact</Link>
            <Link href="/faq" className="block text-gray-300 hover:text-blue-500 transition duration-300 py-2">FAQ</Link>

            <Link href="/cart" className="block text-gray-300 hover:text-blue-500 transition duration-300 py-2 relative">

              <div className="flex items-center">

                <ShoppingCart className="mr-2" />

                <span>Cart</span>
                
                {cart.length > 0 && (
                  <span className="ml-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
                )}

              </div>

            </Link>

          </div>
        )}

      </nav>

    </header>
  )
}

