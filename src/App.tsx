// placeholder for App.tsx
import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WhyCarbonCounterSection } from './components/WhyCarbonCounter';
import { FoundationSection } from './components/FoundationSection';
import { AboutSection } from './components/AboutSection';
import { ValuesSection } from './components/ValuesSection';
import { ImpactSection } from './components/ImpactSection';
import { JoinSection } from './components/JoinSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="text-[oklch(0.145_0_0)] text-sm not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-[21px] list-outside list-disc outline-[oklab(0.708_0_0_/_0.5)] text-start indent-[0px] normal-case visible border-separate font-inter">
      <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="relative box-border basis-0 grow shrink-0 h-[1000px] min-h-px min-w-px outline-[oklab(0.708_0_0_/_0.5)] w-full">
              <div className="bg-white box-border min-h-[1000px] outline-[oklab(0.708_0_0_/_0.5)]">
                <Navigation />
                <HeroSection />
                <WhyCarbonCounterSection />
                <FoundationSection />
                <AboutSection />
                <ValuesSection />
                <ImpactSection />
                <JoinSection />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
