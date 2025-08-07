import React from 'react';
import { Leaf } from 'lucide-react';

export function AboutSection() {
  return (
    <div id="about" className="bg-white text-black py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Text Content Block */}
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">About Carbon Counter</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Carbon Counter is an innovative web application that helps you track, reflect on, and reduce your carbon footprint. Our vision is a world where everyone can take actionable steps towards sustainability.
              </p>
              <p>
                The app delivers a fully interactive and fluid experience. Designed with pure black and white aesthetics and subtle green accents, it's clean, minimal, and focused on environmental responsibility.
              </p>
              <p>
                Join a growing community making a collective impact. With Carbon Counter, sustainability becomes simple, motivating, and achievable for everyone.
              </p>
            </div>
          </div>
          
          {/* Visual Card Block with an integrated SVG icon */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-sm bg-gray-100 rounded-2xl p-6 text-center shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105">
              <div className="mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center">
                  <Leaf className="w-24 h-24 text-black animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mt-4">Our Commitment</h3>
              <p className="text-sm text-gray-600">Working towards a sustainable future</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}