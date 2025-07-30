// placeholder for Navigation.tsx
import React from 'react';
import { navigationItems } from '../data/navigation';

export function Navigation() {
  const handleNavigation = (itemId: string) => {
    switch (itemId) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about':
        const aboutSection = document.querySelector('[data-section="about"]');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'signin':
        // For now, just scroll to the join section
        const joinSection = document.querySelector('[data-section="join"]');
        if (joinSection) {
          joinSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <nav className="sticky bg-white box-border outline-[oklab(0.708_0_0_/_0.5)] w-full z-50 border-b border-solid border-[oklch(0.928_0.006_264.531)] top-0">
      <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 py-[10.5px] md:px-[21px] md:py-3.5">
        <div className="items-center box-border flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
          <div className="flex items-center">
            <h1 className="text-black text-lg font-bold mr-2">Carbon Counter</h1>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path 
                d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 15.5C2 15.5 2 16.75 3 16.75S4 15.5 4 15.5C4 13.39 6.33 10.91 9.68 9.5L17 8Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex items-center">
            {navigationItems.map((item) => (
              <button 
                key={item.id} 
                className={`${item.className} cursor-pointer hover:text-black transition-colors`}
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
