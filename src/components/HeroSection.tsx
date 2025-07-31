import React from 'react';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleStartJourney = () => {
    if (onNavigate) {
      onNavigate('login');
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Carbon Counter
          </h1>
          <p className="text-4xl md:text-6xl font-light text-gray-600 mb-6 tracking-tight">
            Empowering Sustainable Living
          </p>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            An innovative web application designed to empower individuals in their journey towards sustainability. 
            By focusing on tracking, reflecting, and reducing one's carbon footprint, this application serves as 
            a vital tool in our collective effort to combat climate change.
          </p>
        </div>
        <div className="pt-8">
          <button 
            onClick={handleStartJourney}
            className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
