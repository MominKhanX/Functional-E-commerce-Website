import { Cpu, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      
      <div className="container mx-auto px-6 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0">
            
            <div className="flex items-center">
              <Cpu className="text-blue-500 mr-2" size={24} />
              <span className="text-2xl font-bold text-blue-500">TechHub</span>
            </div>

            <p className="mt-2">Your one-stop destination for cutting-edge technology</p>
          
          </div>

          <div className="flex flex-wrap justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-blue-500 mx-3 my-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 mx-3 my-2">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 mx-3 my-2">Contact Us</a>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <p>&copy; 2025 TechHub. All rights reserved.</p>
          
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-500 mx-2">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 mx-2">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 mx-2">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 mx-2">
              <Linkedin size={20} />
            </a>
          </div>

        </div>

      </div>

    </footer>
  )
}

