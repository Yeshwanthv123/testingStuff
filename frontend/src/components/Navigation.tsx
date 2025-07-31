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
    <nav className="sticky bg-white box-border outline-[oklab(0.708_0_0_/_0.5)] w-full z-50 border-b border-solid border-[oklch(0.928_0.006_264.531)] top-0">
      <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 py-[10.5px] md:px-[21px] md:py-3.5">
        <div className="items-center box-border flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-black hover:text-gray-700">
            <Leaf className="w-6 h-6" />
            <span className="text-lg font-bold">Carbon Counter</span>
          </Link>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-black text-[12.25px] font-medium bg-transparent leading-[17.5px] outline-[oklab(0.708_0_0_/_0.5)] text-center hover:text-gray-600 md:text-[15.75px] md:leading-[24.5px]"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[oklch(0.446_0.03_256.802)] text-[12.25px] bg-transparent leading-[17.5px] outline-[oklab(0.708_0_0_/_0.5)] text-center hover:text-black md:text-[15.75px] md:leading-[24.5px]"
            >
              About
            </button>
            <Link 
              to="/login"
              className="text-[oklch(0.446_0.03_256.802)] text-[12.25px] bg-transparent leading-[17.5px] outline-[oklab(0.708_0_0_/_0.5)] text-center hover:text-black md:text-[15.75px] md:leading-[24.5px]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
