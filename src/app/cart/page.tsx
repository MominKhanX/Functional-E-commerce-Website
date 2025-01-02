'use client'

import Link from 'next/link'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Cart() {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart()

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <div className="container mx-auto px-4 py-8">
            
            <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

            {cart.length === 0 ? (
                <div className="text-center">

                    <ShoppingBag className="mx-auto mb-4" size={64} />

                    <p className="mb-4">Your cart is empty.</p>

                    <Link href="/products" className="btn-primary inline-flex items-center">
                        Continue shopping <ArrowRight className="ml-2" size={16} />
                    </Link>

                </div>
            ) : (
                <>
                    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-8">

                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b border-gray-700 py-4 last:border-b-0">
                                
                                <div className="flex items-center">

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`/images/Galery.png`} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                                    
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-400">${item.price.toFixed(2)}</p>
                                    </div>

                                </div>

                                <div className="flex items-center">
                                    <select
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        className="bg-gray-700 text-white rounded-md px-2 py-1 mr-4"
                                    >
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))}
                                    </select>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-600 transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                    <div className="flex justify-between items-center mb-8">

                        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>

                        <button
                            onClick={clearCart}
                            className="btn-secondary"
                        >
                            Clear Cart
                        </button>

                    </div>

                    <div className="text-center">

                        <Link
                            href="/checkout"
                            className="btn-primary inline-flex items-center"
                        >
                            Proceed to Checkout <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>

                </>
            )}

        </div>
    )
}

