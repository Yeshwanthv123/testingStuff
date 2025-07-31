import React from 'react';
import { Leaf } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Navigation({ onNavigate, currentPage = 'home' }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (page: string, sectionId?: string) => {
    if (onNavigate) {
      if (page === 'home' && sectionId) {
        onNavigate('home');
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        onNavigate(page);
      }
    } else if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-black">Carbon Counter</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home', 'hero')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('home', 'about')}
              className="text-gray-600 text-sm hover:text-black transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('login')}
              className={`text-sm transition-colors ${
                currentPage === 'login' 
                  ? 'text-black font-medium' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
