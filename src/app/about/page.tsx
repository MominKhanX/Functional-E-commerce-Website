import Image from 'next/image'
import { Cpu, Shield, Zap, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">

      <h1 className="text-4xl font-bold mb-8 text-center">About TechHub</h1>
      
      <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        
        <div className="md:flex items-center mb-8">
          
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image src="/images/AboutUs.jpg" alt="Our Story" width={600} height={300} className="rounded-lg" />
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            
            <p className="mb-4">
              Founded in 2025, TechHub emerged from a vision to revolutionize the tech retail space. Our founders, 
              a group of tech enthusiasts and industry veterans, recognized the need for a platform that not only 
              offers cutting-edge technology but also provides an immersive and educational shopping experience.
            </p>

            <p className="mb-4">
              What started as a small online store has now grown into a leading destination for tech aficionados, 
              professionals, and curious minds alike. We pride ourselves on curating the most innovative and 
              high-quality tech products from around the globe, many of which are exclusive to TechHub.
            </p>

          </div>

        </div>

        <div className="mb-8">

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          
          <p>
            At TechHub, our mission is to democratize access to advanced technology. We believe that everyone 
            should have the opportunity to experience and benefit from the latest technological advancements. 
            Through our platform, we aim to:
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Offer a curated selection of innovative tech products</li>
            <li>Provide detailed, easy-to-understand information about complex technologies</li>
            <li>Foster a community of tech enthusiasts and experts</li>
            <li>Support the development of emerging technologies</li>
            <li>Promote responsible and ethical use of technology</li>
          </ul>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="text-center">
            
            <Cpu className="mx-auto mb-4 text-blue-500" size={48} />
            
            <h3 className="font-semibold mb-2">Cutting-Edge Products</h3>
            
            <p className="text-sm">We offer the latest and most innovative tech products.</p>
          
          </div>

          <div className="text-center">
            <Shield className="mx-auto mb-4 text-green-500" size={48} />
            <h3 className="font-semibold mb-2">Quality Assurance</h3>
            <p className="text-sm">All our products undergo rigorous quality checks.</p>
          </div>

          <div className="text-center">
            <Zap className="mx-auto mb-4 text-yellow-500" size={48} />
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-sm">We ensure quick and secure delivery of your orders.</p>
          </div>

          <div className="text-center">
            <Users className="mx-auto mb-4 text-purple-500" size={48} />
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-sm">Our team of tech experts is always ready to assist you.</p>
          </div>

        </div>

      </div>
      
    </div>
  )
}

