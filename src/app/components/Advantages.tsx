import React from 'react'

const Advantages = () => {
    return (
        <section className="tech-specs bg-gray-800 p-8 rounded-lg">

            <h2 className="text-3xl font-bold text-center mb-8">TechHub Advantage</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    
                    <h3 className="text-2xl font-semibold mb-4">Cutting-Edge Technology</h3>
                    
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Latest generation processors for unparalleled performance</li>
                        <li>High-resolution displays for crystal-clear visuals</li>
                        <li>Advanced AI capabilities for smart functionality</li>
                        <li>5G connectivity for lightning-fast data speeds</li>
                    </ul>

                </div>

                <div>

                    <h3 className="text-2xl font-semibold mb-4">Customer-First Approach</h3>

                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>30-day money-back guarantee for peace of mind</li>
                        <li>24/7 technical support from expert staff</li>
                        <li>Free shipping on orders over $500</li>
                        <li>Regular software updates to keep your devices current</li>
                    </ul>

                </div>

            </div>

        </section>
    )
}

export default Advantages
