import React from 'react';
import { BarChart3, TrendingUp, Target, Users } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Accurate Tracking',
    description: 'Real-time carbon footprint calculation based on scientific data and algorithms.'
  },
  {
    icon: TrendingUp,
    title: 'Insightful Analytics',
    description: 'Comprehensive reports and visualizations to understand your environmental impact.'
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set personalized reduction targets and track your progress over time.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with like-minded individuals and share your sustainability journey.'
  }
];

export function WhyCarbonCounterSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Carbon Counter?
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            In an era where environmental consciousness is crucial, Carbon Counter bridges the gap 
            between awareness and action, making sustainability accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
