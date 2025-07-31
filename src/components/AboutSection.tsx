import React from 'react';
import { Leaf, Globe } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="w-14 h-14 md:w-20 md:h-20 mb-6">
              <Leaf className="w-full h-full text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              About Carbon Counter
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Carbon Counter is an innovative web application that helps you track, reflect on, 
                and reduce your carbon footprint. Our vision is a world where everyone can take 
                actionable steps towards sustainability.
              </p>
              <p>
                The app delivers a fully interactive and fluid experience. Designed with pure black 
                and white aesthetics and subtle green accents, it's clean, minimal, and focused on 
                environmental responsibility.
              </p>
              <p>
                Join a growing community making a collective impact. With Carbon Counter, sustainability 
                becomes simple, motivating, and achievable for everyone.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Carbon Neutral Vision
                </h3>
                <p className="text-gray-600 text-sm px-4">
                  Working towards a sustainable future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
