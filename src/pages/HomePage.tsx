import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { WhyCarbonCounterSection } from '../components/WhyCarbonCounter';
import { FoundationSection } from '../components/FoundationSection';
import { AboutSection } from '../components/AboutSection';
import { ValuesSection } from '../components/ValuesImpactSection';
import { ImpactSection } from '../components/ImpactSection';
import { JoinSection } from '../components/JoinSection';

export function HomePage() {
  return (
    <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
      <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
          <div className="relative box-border basis-0 grow shrink-0 min-h-px min-w-px outline-[oklab(0.708_0_0_/_0.5)] w-full">
            <div className="bg-white box-border outline-[oklab(0.708_0_0_/_0.5)]">
              <Navigation />
              <HeroSection />
              <WhyCarbonCounterSection />
              <FoundationSection />
              <AboutSection />
              <ValuesSection />
              <ImpactSection />
              <JoinSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
