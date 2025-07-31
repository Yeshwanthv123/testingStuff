import React from 'react';
import { Activity, Eye, Zap } from 'lucide-react';

const steps = [
  {
    icon: Activity,
    title: 'Track your footprint.',
    description: 'Log daily activities to see real-time estimates of your carbon output and spot improvement areas. Our comprehensive system captures transportation, energy use, food choices, and consumption patterns.'
  },
  {
    icon: Eye,
    title: 'Reflect and learn.',
    description: 'Review your trends, gain actionable insights, and set achievable goals for reducing emissions. Our analytics turn complex data into clear, motivating visualizations.'
  },
  {
    icon: Zap,
    title: 'Act and inspire change.',
    description: 'Access tools and resources to lower your impact and share your progress with the community. Transform individual action into collective environmental change.',
    highlight: 'Will you contribute towards the wellness of society?'
  }
];

export function FoundationSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Our Foundation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white text-black p-8 rounded-xl">
              <div className="w-14 h-14 mb-6">
                <step.icon className="w-full h-full text-black" />
              </div>
              <h3 className="text-xl font-bold mb-6">
                {step.title}
              </h3>
              <div>
                {step.highlight && (
                  <p className="text-lg font-medium mb-4">
                    {step.highlight}
                  </p>
                )}
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
