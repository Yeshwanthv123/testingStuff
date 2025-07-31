import React from 'react';

const impacts = [
  {
    title: 'Environmental Focus',
    description: 'Our team combines expertise in environmental science, technology, and user experience to create tools that make a real difference in the fight against climate change.'
  },
  {
    title: 'Community Driven',
    description: "We're building more than just an app – we're fostering a global community of environmentally conscious individuals working together toward sustainability."
  },
  {
    title: 'Scientific Accuracy',
    description: 'All our carbon calculations are based on the latest climate science research and internationally recognized methodologies for carbon accounting.'
  }
];

export function ImpactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Impact
          </h2>
          <p className="text-gray-700 text-lg">
            Dedicated to making sustainability achievable for everyone
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          {impacts.map((impact, index) => (
            <div key={index}>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">
                  {impact.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-8 md:p-12 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Environmental Commitment
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We're committed to transparency, scientific accuracy, and making environmental action 
              accessible to everyone. Our platform is built on the latest climate science and designed 
              with sustainability at its core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
