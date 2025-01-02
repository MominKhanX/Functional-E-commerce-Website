import { Shield, Clock, DollarSign } from 'lucide-react'
import React from 'react'

const Shop = () => {
    return (
        <section className="why-shop py-12">

            <h2 className="text-3xl font-bold text-center mb-8">Why Shop at TechHub?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="card p-6 text-center">
                    <Shield className="mx-auto mb-4 text-blue-500" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
                    <p className="text-gray-400">Your data is protected with state-of-the-art encryption and security measures.</p>
                </div>

                <div className="card p-6 text-center">
                    <Clock className="mx-auto mb-4 text-green-500" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-gray-400">Get your tech delivered to your doorstep in record time with our efficient logistics.</p>
                </div>

                <div className="card p-6 text-center">
                    <DollarSign className="mx-auto mb-4 text-yellow-500" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
                    <p className="text-gray-400">We offer competitive prices and match any lower price you find elsewhere.</p>
                </div>
                
            </div>

        </section>
    )
}

export default Shop
