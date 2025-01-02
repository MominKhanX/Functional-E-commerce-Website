import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Star, Cpu, Battery, Wifi, Zap } from 'lucide-react'
import AddToCartButton from '@/app/components/AddToCartButton'

const products = [
  { id: 1, name: 'Quantum Processor X1', price: 599.99, description: 'Experience unprecedented computing power with our next-gen Quantum Processor X1. Featuring quantum computing capabilities, this CPU pushes the boundaries of what\'s possible in personal and professional computing. Ideal for complex simulations, AI development, and future-proof computing needs.', image: '/images/Quantum-Processor.avif', rating: 4.9, specs: { cores: 128, clockSpeed: '5.5 GHz', quantumBits: 64 } },
  { id: 2, name: 'NeuralLink VR Headset', price: 399.99, description: 'Immerse yourself in virtual worlds like never before with the NeuralLink VR Headset. Using cutting-edge neural interface technology, this headset provides an unparalleled VR experience. Perfect for gaming, professional training, and virtual collaborations.', image: '/images/VR-Headset.webp', rating: 4.7, specs: { resolution: '8K per eye', refreshRate: '144 Hz', fieldOfView: 210 } },
  { id: 3, name: 'HoloLens Pro', price: 799.99, description: 'Transform your workspace with the HoloLens Pro AR glasses. These advanced augmented reality glasses overlay digital information onto the real world, revolutionizing fields like engineering, medicine, and education. Experience the future of mixed reality.', image: '/images/HoloLens-Pro.jpeg', rating: 4.8, specs: { resolution: '4K per eye', batteryLife: '8 hours', weight: '300g' } },
  { id: 4, name: 'Fusion Power Bank', price: 129.99, description: 'Say goodbye to constant recharging with the Fusion Power Bank. This compact device harnesses the power of fusion technology to provide virtually limitless energy for all your devices. Perfect for long trips or emergency situations.', image: '/images/Power-Bank.webp', rating: 4.6, specs: { capacity: 'Unlimited', chargingSpeed: '100W', size: 'Pocket-sized' } },
  { id: 5, name: 'EchoSphere Headphones', price: 199.99, description: 'Experience immersive sound with EchoSphere Headphones. Featuring active noise cancellation, Hi-Res audio, and 30-hour battery life, they deliver exceptional clarity and comfort for music, gaming, and professional use.', image: '/images/EchoSphere-Headphones.avif', rating: 4.8, specs: { soundQuality: 'Hi-Res Audio', noiseCancellation: 'Active', batteryLife: '30 hours', connectivity: 'Bluetooth 5.2', weight: '250 grams' } },
  { id: 6, name: 'BionicArm 2.0', price: 1999.99, description: 'Experience life without limitations with the BionicArm 2.0. This advanced prosthetic arm features neural feedback, providing a sense of touch and unprecedented control. Ideal for amputees seeking to regain full functionality and independence.', image: '/images/BionicArm.png', rating: 4.8, specs: { sensors: 'Over 1000', batteryLife: '24 hours', weight: '1.5 kg' } },
  { id: 7, name: 'TechHub Gaming PC', price: 2499.99, description: 'Experience the ultimate in gaming performance with the TechHub Gaming PC. Featuring cutting-edge hardware and seamless multitasking capabilities, it’s designed to deliver breathtaking visuals and unmatched speed for immersive gaming sessions.', image: '/images/Gaming-PC.webp', rating: 4.9, specs: { processor: "Intel Core i9-12900K", graphicsCard: "NVIDIA GeForce RTX 3080 Ti", ram: "32GB DDR5", storage: "1TB NVMe SSD", coolingSystem: "Advanced liquid cooling" } },
  { id: 8, name: '8K Quantum Dot Monitor', price: 1299.99, description: 'Experience stunning clarity with the 8K Quantum Dot Monitor. Boasting vibrant colors, unmatched detail, and smooth performance, it’s perfect for professionals and enthusiasts seeking top-tier visuals for work, gaming, and entertainment.', image: '/images/Quantum-Monitor.jpg', rating: 4.8, specs: { resolution: "8K UHD", displayType: "Quantum Dot", refreshRate: "120Hz", colorAccuracy: "99% DCI-P3", ports: "HDMI 2.1, DisplayPort 1.4, USB-C", screenSize: "32 inches" } },
  { id: 9, name: 'Ryzen ThreadRipper Pro', price: 1899.99, description: 'Experience unmatched power with the Ryzen ThreadRipper Pro. Designed for professionals, it delivers groundbreaking performance, exceptional multitasking, and unparalleled speed, making it the ultimate processor for demanding workloads and creative excellence.', image: '/images/Ryzen.avif', rating: 4.7, specs: { cores: "64", threads: "128", baseClock: "2.7GHz", boostClock: "4.5GHz", cache: "256MB", tdp: "280W", socket: "sWRX8", memorySupport: "8-channel DDR4, ECC", pcie: "128 PCIe Gen 4 lanes" } },
  { id: 10, name: 'Quantum SSD 10TB', price: 599.99, description: 'Experience blazing-fast storage with the Quantum SSD 10TB. Designed for professionals and enthusiasts, it combines massive capacity with lightning-speed performance, ensuring seamless multitasking and rapid data access for all your needs.', image: '/images/Quantum-SSD.jpg', rating: 4.7, specs: { capacity: "10TB", readSpeed: "7000MB/s", writeSpeed: "6800MB/s", interface: "PCIe 4.0 NVMe", durability: "1,500 TBW", formFactor: "M.2 2280", warranty: "5 years" } },
  { id: 11, name: 'AI-Enhanced Keyboard', price: 199.99, description: 'Revolutionize typing with the AI-Enhanced Keyboard. Featuring predictive typing, customizable macros, ergonomic design, and vibrant RGB lighting, it offers seamless efficiency, exceptional comfort, and enhanced performance for work, gaming, and creativity.', image: '/images/Keyboard.webp', rating: 4.9, specs: { aiFeatures: "Predictive typing, macros", connectivity: "Wireless, USB-C", batteryLife: "60 hours", keySwitch: "Mechanical, RGB backlit", compatibility: "Windows, macOS, Linux", weight: "1.2 kg" } },
  { id: 12, name: 'Holographic Mouse', price: 129.99, description: 'Experience futuristic control with the Holographic Mouse. Boasting advanced gesture tracking, seamless connectivity, and customizable interactions, it redefines precision, productivity, and comfort for gaming, creative work, and daily tasks.', image: '/images/Mouse.avif', rating: 4.8, specs: { technology: "Holographic gesture tracking", connectivity: "Wireless, USB-C", batteryLife: "48 hours", weight: "0.2 kg", compatibility: "Windows, macOS, Linux", features: "Customizable gestures, multi-surface compatibility" } },
]

async function getProduct(id: string) {
  const product = products.find(p => p.id === parseInt(id))
  if (!product) {
    notFound()
  }
  return product
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      
      <div className="md:flex">
        
        <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
          {/* Ensure the image covers the entire container */}
          <Image 
            src={product.image} 
            alt={product.name} 
            layout="fill" 
            objectFit="cover" 
            className="h-full w-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
        </div>
        
        <div className="p-8 md:w-1/2">
          
          <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">{product.name}</div>
          
          <p className="mt-2 text-gray-300">{product.description}</p>
          
          <div className="mt-4">
            <span className="text-gray-500">Price:</span>
            <span className="ml-2 text-3xl font-bold text-blue-500">${product.price.toFixed(2)}</span>
          </div>

          <div className="mt-4 flex items-center">
            
            <span className="text-gray-500 mr-2">Rating:</span>
            
            <div className="flex items-center">

              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" />
              ))}

              <span className="ml-2 text-gray-300">{product.rating.toFixed(1)}</span>
            
            </div>
          
          </div>

          <div className="mt-6">

            <h3 className="text-lg font-semibold text-gray-300">Key Specifications:</h3>
            
            <ul className="mt-2 space-y-2">

              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key} className="flex items-center text-gray-400">
                  {key === 'cores' && <Cpu className="mr-2" size={16} />}
                  {key === 'batteryLife' && <Battery className="mr-2" size={16} />}
                  {key === 'resolution' && <Wifi className="mr-2" size={16} />}
                  {key === 'chargingSpeed' && <Zap className="mr-2" size={16} />}
                  <span className="capitalize">{key}:</span>
                  <span className="ml-2 font-semibold">{value}</span>
                </li>
              ))}

            </ul>

          </div>

          <div className="mt-6">
            <AddToCartButton product={product} />
          </div>

        </div>

      </div>

    </div>
  );
}
