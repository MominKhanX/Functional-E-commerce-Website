import ProductCard from '../components/ProductCard'

const products = [
  { id: 1, name: 'Quantum Processor X1', price: 599.99, description: 'Next-gen CPU with quantum computing capabilities', image: '/images/Quantum-Processor.avif' },
  { id: 2, name: 'NeuralLink VR Headset', price: 399.99, description: 'Immersive VR with direct neural interface', image: '/images/VR-Headset.webp' },
  { id: 3, name: 'HoloLens Pro', price: 799.99, description: 'Advanced AR glasses for professionals', image: '/images/HoloLens-Pro.jpeg' },
  { id: 4, name: 'Fusion Power Bank', price: 129.99, description: 'Compact fusion reactor for mobile charging', image: '/images/Power-Bank.webp' },
  { id: 5, name: 'EchoSphere Headphones', price: 199.99, description: 'Immersive sound, comfort, and clarity.', image: '/images/EchoSphere-Headphones.avif' },
  { id: 6, name: 'BionicArm 2.0', price: 1999.99, description: 'Advanced prosthetic with neural feedback', image: '/images/BionicArm.png' },
  { id: 7, name: 'TechHub Gaming PC', price: 2499.99, description: 'High-performance gaming rig with latest components', image: '/images/Gaming-PC.webp' },
  { id: 8, name: '8K Quantum Dot Monitor', price: 1299.99, description: 'Ultra-high resolution monitor with quantum dot technology', image: '/images/Quantum-Monitor.jpg' },
  { id: 9, name: 'Ryzen ThreadRipper Pro', price: 1899.99, description: 'Extreme multi-core CPU for professional workstations', image: '/images/Ryzen.avif' },
  { id: 10, name: 'Quantum SSD 10TB', price: 599.99, description: 'Lightning-fast SSD with quantum storage technology', image: '/images/Quantum-SSD.jpg' },
  { id: 11, name: 'AI-Enhanced Keyboard', price: 199.99, description: 'Smart keyboard with predictive text and customizable keys', image: '/images/Keyboard.webp' },
  { id: 12, name: 'Holographic Mouse', price: 129.99, description: '3D input device for precise holographic manipulation', image: '/images/Mouse.avif' },
]

export default function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Our Cutting-Edge Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

