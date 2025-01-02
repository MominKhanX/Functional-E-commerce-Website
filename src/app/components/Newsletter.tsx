import React from 'react'

const Newsletter = () => {
    return (
        <section className="cta bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 rounded-lg">

            <div className="container mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Tech Curve</h2>

                <p className="mb-8 text-xl">Subscribe to our newsletter for the latest tech news and exclusive offers</p>
                
                <form className="max-w-md mx-auto">

                    <div className="flex">

                        <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900" />
                        
                        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-r-lg hover:bg-blue-800 transition duration-300">
                            Subscribe
                        </button>
                        
                    </div>

                </form>

            </div>

        </section>
    )
}

export default Newsletter
