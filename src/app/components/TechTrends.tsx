import { Globe, Smartphone, Headphones } from 'lucide-react'
import React from 'react'

const TechTrends = () => {
  return (
    <section className="tech-trends py-12">

        <h2 className="text-3xl font-bold text-center mb-8">Latest Tech Trends</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="card p-6">
            <Globe className="mx-auto mb-4 text-blue-500" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-center">5G Revolution</h3>
            <p className="text-gray-400 text-center">Experience lightning-fast connectivity and low latency with our 5G-enabled devices.</p>
          </div>

          <div className="card p-6">
            <Smartphone className="mx-auto mb-4 text-green-500" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-center">Foldable Displays</h3>
            <p className="text-gray-400 text-center">Discover the flexibility of foldable screens in our latest smartphones and tablets.</p>
          </div>

          <div className="card p-6">
            <Headphones className="mx-auto mb-4 text-purple-500" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-center">AI-Powered Audio</h3>
            <p className="text-gray-400 text-center">Immerse yourself in crystal-clear sound with our AI-enhanced audio devices.</p>
          </div>

        </div>
        
      </section>
  )
}

export default TechTrends
