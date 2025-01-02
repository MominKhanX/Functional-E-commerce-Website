import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 rounded-lg">

            <div className="container mx-auto px-6 text-center">

                <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to TechHub</h1>

                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Discover Cutting-Edge Tech at Unbeatable Prices. Your One-Stop Shop for the Latest in Technology and Innovation.</p>
                
                <Link href="/products">
                    <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-300 hover:bg-teal-600">
                        Explore Products <ArrowRight className="ml-2 inline-flex" />
                    </button>
                </Link>
                
            </div>

        </section>
    )
}

export default Hero
