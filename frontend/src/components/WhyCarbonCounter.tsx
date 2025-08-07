import React from 'react';
import { whyCarbonCounterFeatures } from '../data/features';

export function WhyCarbonCounterSection() {
  // Filter out the 'community' feature as requested
  const filteredFeatures = whyCarbonCounterFeatures.filter(feature => feature.id !== 'community');

  return (
    <div className="bg-white text-black py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section - Modernized typography and layout */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Why Carbon Counter?</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            In an era where environmental consciousness is crucial, Carbon Counter bridges the gap between awareness and action, making sustainability accessible to everyone.
          </p>
        </div>

        {/* Features Grid - Redesigned for three items with adjusted spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:border-black transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-white transition-colors duration-300 group-hover:bg-black">
                  <img src={feature.icon} alt="Icon" className="w-8 h-8 filter invert transition-colors duration-300 group-hover:filter-none" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 group-hover:text-black transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}