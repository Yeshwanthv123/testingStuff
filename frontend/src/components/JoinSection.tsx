import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, CheckCheck, Zap } from 'lucide-react'; // Added Zap icon
import { joinBenefits } from '../data/benefits';

const getIconComponent = (id: string) => {
  switch (id) {
    case 'free':
      return <Flame className="w-10 h-10 text-black" />;
    case 'instant':
      return <CheckCheck className="w-10 h-10 text-black" />;
    case 'growth': // New case for the new item
      return <Zap className="w-10 h-10 text-black" />;
    default:
      return null;
  }
};

export function JoinSection() {
  // Create a new list of benefits, replacing 'community' with a new one
  const newJoinBenefits = [
    {
      id: 'free',
      title: 'Free to Start',
      description: 'Begin tracking your carbon footprint at no cost with our comprehensive free tier.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-1.svg"
    },
    {
      id: 'instant',
      title: 'Instant Setup',
      description: 'Get started immediately with our intuitive onboarding and start tracking today.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-10.svg"
    },
    {
      id: 'growth', // New benefit item
      title: 'Personalized Growth',
      description: 'Receive custom tips and insights to help you achieve your goals and make a bigger impact over time.',
      icon: "https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-12.svg" // Using an existing icon for consistency
    }
  ];

  return (
    <section className="bg-black text-white font-sans py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            Join Carbon Counter
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Start your journey towards a sustainable future today.
          </p>
        </div>

        {/* Call to Action Card */}
        <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl text-center mx-auto max-w-4xl mb-20 md:mb-32">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
            Every step you take, no matter how small, contributes to our collective solution. Join a community of changemakers and start tracking your positive impact.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-black font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-200 transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {newJoinBenefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="group p-6 rounded-lg transition-all duration-300 hover:bg-gray-900"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-4 shadow-lg transition-colors duration-300 group-hover:bg-gray-200">
                  {getIconComponent(benefit.id)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-base text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}