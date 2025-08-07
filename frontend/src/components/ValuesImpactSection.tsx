import React from 'react';
import { valuesData } from '../data/values';
import { Eye, Users, Zap } from 'lucide-react'; // Import relevant icons

const getIconComponent = (id: string) => {
  switch (id) {
    case 'transparency':
      return <Eye className="w-10 h-10 text-white" />;
    case 'accessibility':
      return <Users className="w-10 h-10 text-white" />;
    case 'innovation':
      return <Zap className="w-10 h-10 text-white" />;
    default:
      return null;
  }
};

export function ValuesSection() {
  const newValuesData = [
    {
      id: 'transparency',
      title: 'Transparency',
      description: 'We believe in open and honest communication about environmental impact. Our calculations are based on peer-reviewed scientific data and methodologies, so you can trust the numbers behind your progress.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-10.svg"
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      description: 'Environmental action should be available to everyone, regardless of their background. We design our platform to be intuitive, inclusive, and accessible across all devices and communities to empower a global movement.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-11.svg"
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'We are committed to continuously improving our platform with cutting-edge technology, user feedback, and the latest environmental science research. Our goal is to stay at the forefront of sustainability tools.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-3.svg"
    }
  ];
  return (
    <section className="bg-black text-white font-sans py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Our Values Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-4">Our Values</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            The principles that guide our work and shape our platform.
          </p>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {newValuesData.map((value) => (
            <div 
              key={value.id} 
              className="group relative bg-white p-8 rounded-2xl flex flex-col items-start space-y-6 shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-black transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center p-3 shadow-md">
                {getIconComponent(value.id)}
              </div>
              <h3 className="text-2xl tracking-tight text-black">{value.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}