import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="bg-black text-white font-sans py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo and Title */}
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-16 h-16 text-white mr-4" />
            <h1 className="text-5xl md:text-6xl tracking-tighter">Carbon Counter</h1>
          </div>

          {/* Tagline */}
          <p className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-gray-300">
            Empowering Sustainable Living
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            An innovative web application designed to empower individuals in their journey towards sustainability. By focusing on tracking, reflecting, and reducing one's carbon footprint, this application serves as a vital tool in our collective effort to combat climate change.
          </p>

          {/* Call to Action Button with hover effect */}
          <Link 
            to="/login"
            className="inline-block bg-white text-black text-lg px-12 py-5 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-200 transform hover:scale-105"
          >
            Start Your Journey
          </Link>

        </div>
      </div>
    </section>
  );
}