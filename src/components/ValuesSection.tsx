import React from 'react';
import { Shield, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Transparency',
    description: 'We believe in open, honest communication about environmental impact. Our calculations are based on peer-reviewed scientific data and methodologies.'
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Environmental action should be available to everyone. We design our platform to be intuitive, inclusive, and accessible across all devices and communities.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously improve our platform with cutting-edge technology, user feedback, and the latest environmental science research.'
  }
];

export function ValuesSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          Our Values & Impact
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Discover the principles that guide our work and our commitment to creating a sustainable 
          future through technology and community action.
        </p>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-gray-700 text-lg">
              The principles that guide our work and shape our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-6">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
