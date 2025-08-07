import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export function Navigation() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-black font-sans shadow-sm transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl tracking-tight hover:opacity-80 transition-opacity">
            <Leaf className="w-8 h-8" />
            <span>Carbon Counter</span>
          </Link>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-base text-gray-700 hover:text-black transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-base text-gray-700 hover:text-black transition-colors"
            >
              About
            </button>
            <Link 
              to="/login"
              className="text-base text-gray-700 hover:text-black transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}