import React from 'react';
import { foundationSteps } from '../data/foundation';

export function FoundationSection() {
  const newFoundationSteps = [
    {
      id: 'track',
      title: 'Track your footprint.',
      description: 'Our advanced system provides real-time estimates of your carbon output across transportation, energy, and consumption. We turn complex data into simple, actionable insights to help you understand your environmental impact.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-5.svg"
    },
    {
      id: 'reflect',
      title: 'Refine your habits.',
      description: 'Review your personal trends and set ambitious, yet achievable, reduction goals. Our intuitive analytics and motivating visualizations empower you to make smarter, more sustainable choices every day.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-6.svg"
    },
    {
      id: 'act',
      title: 'Ignite a movement.',
      description: 'Access a wealth of resources and join a global community dedicated to environmental change. Your individual actions, combined with our collective efforts, can drive a powerful movement toward a healthier planet.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-7.svg",
      specialContent: 'Will you be a catalyst for change?'
    }
  ];

  return (
    <div className="bg-black text-white font-sans py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-12 md:mb-16">
          Our Foundation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {newFoundationSteps.map((step) => (
            <div 
              key={step.id} 
              className="group bg-white py-12 px-8 rounded-2xl flex flex-col items-start space-y-6 shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-black transform hover:-translate-y-1 h-full"
            >
              <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center p-3">
                <img src={step.icon} alt="Icon" className="w-10 h-10 object-contain" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-black">{step.title}</h3>
              
              {step.specialContent ? (
                <div className="space-y-4">
                  <p className="text-xl font-medium text-gray-700">{step.specialContent}</p>
                  <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ) : (
                <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}