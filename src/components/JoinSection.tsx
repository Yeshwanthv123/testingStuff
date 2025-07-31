import React, { useState } from 'react';
import { BarChart3, Shield, Users } from 'lucide-react';

const benefits = [
  {
    icon: BarChart3,
    title: 'Free to Start',
    description: 'Begin tracking your carbon footprint at no cost with our comprehensive free tier.'
  },
  {
    icon: Shield,
    title: 'Instant Setup',
    description: 'Get started immediately with our intuitive onboarding and start tracking today.'
  },
  {
    icon: Users,
    title: 'Join Community',
    description: 'Connect with thousands of users worldwide who are committed to sustainable living.'
  }
];

const footerLinks = [
  { label: 'Contact', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Documentation', href: '#' }
];

interface JoinSectionProps {
  onNavigate?: (page: string) => void;
}

export function JoinSection({ onNavigate }: JoinSectionProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission
  };

  const handleGetStarted = () => {
    if (onNavigate) {
      onNavigate('login');
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 md:pt-32">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          Join Carbon Counter
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-16">
          Start your journey towards sustainability. Track your carbon footprint, set reduction goals, 
          and join a community committed to environmental change.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Every measurement matters. Every reduction counts. Every individual action contributes 
            to our collective climate solution.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white p-8 rounded-xl border-2 border-gray-200 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium text-black mb-2">
              Ready to try?
            </h3>
            <p className="text-gray-600">
              Sign up to reduce your footprint.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleGetStarted}
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Get Started
            </button>
          </form>
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Join thousands making a difference, one step at a time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center space-x-12 mb-8">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-gray-300 font-medium hover:text-white transition-colors"
                  onClick={() => {
                    if (link.label === 'About' && onNavigate) {
                      onNavigate('home');
                      setTimeout(() => {
                        const element = document.getElementById('about');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-300 text-lg font-medium">
                "Every step towards sustainability is a step towards a better tomorrow."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
