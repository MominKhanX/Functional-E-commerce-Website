import { Battery, Cpu, Wifi, Zap } from 'lucide-react'
import React from 'react'

const ChooseTechHub = () => {
  return (
    <section className="features">

        <h2 className="text-3xl font-bold text-center mb-8">Why Choose TechHub?</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="card p-6 text-center">
            <Cpu className="mx-auto mb-4 text-blue-500" size={48} />
            <h3 className="text-xl font-semibold mb-2">Latest Processors</h3>
            <p className="text-gray-400">Experience blazing fast performance with cutting-edge processors</p>
          </div>

          <div className="card p-6 text-center">
            <Wifi className="mx-auto mb-4 text-green-500" size={48} />
            <h3 className="text-xl font-semibold mb-2">Enhanced Connectivity</h3>
            <p className="text-gray-400">Stay connected anywhere with advanced networking technologies</p>
          </div>

          <div className="card p-6 text-center">
            <Battery className="mx-auto mb-4 text-yellow-500" size={48} />
            <h3 className="text-xl font-semibold mb-2">Long Battery Life</h3>
            <p className="text-gray-400">Enjoy extended usage with our energy-efficient devices</p>
          </div>

          <div className="card p-6 text-center">
            <Zap className="mx-auto mb-4 text-red-500" size={48} />
            <h3 className="text-xl font-semibold mb-2">Fast Charging</h3>
            <p className="text-gray-400">Minimize downtime with rapid charging capabilities</p>
          </div>

        </div>
        
      </section>
  )
}

export default ChooseTechHub
