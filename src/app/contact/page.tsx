'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              
              <label htmlFor="name" className="block mb-1">Name</label>
              
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                required
              />

            </div>

            <div>

              <label htmlFor="email" className="block mb-1">Email</label>
              
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                required
              />

            </div>

            <div>

              <label htmlFor="message" className="block mb-1">Message</label>
              
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded h-32"
                required
              ></textarea>

            </div>

            <button type="submit" className="btn-primary w-full">Send Message</button>
          
          </form>
        
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          
          <div className="space-y-4">
            
            <div className="flex items-center">
              <Mail className="mr-4 text-blue-500" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@techhub.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="mr-4 text-green-500" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="mr-4 text-red-500" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
            </div>

          </div>

          <div className="mt-8">

            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>

          </div>

        </div>

      </div>
      
    </div>
  )
}

