import React from 'react';
import { impactItems } from '../data/impact';

export function ImpactSection() {
  const motivatingImpactItems = [
    {
      ...impactItems[0],
      description: "Our team combines expertise in environmental science, technology, and user experience to create tools that empower you to fight against climate change. We don't just measure impact; we create pathways to a better world."
    },
    {
      ...impactItems[1],
      description: "We are fostering a global community of environmentally conscious individuals. Join us and turn individual action into a collective force for planetary change. Your journey is our shared success."
    },
    {
      ...impactItems[2],
      description: "Our carbon calculations are powered by the latest scientific research and internationally recognized methodologies. We provide you with the accurate data you need to make a real, measurable difference."
    }
  ];

  return (
    <div className="bg-white text-black font-sans py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Our Impact</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Dedicated to empowering you with the tools and community to make a real difference.
          </p>
        </div>

        {/* Impact Items Grid - Restyled and with motivating new text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {motivatingImpactItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-gray-100 p-8 rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-black transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold tracking-tight text-black mb-4">{item.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}