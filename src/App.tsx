import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WhyCarbonCounterSection } from './components/WhyCarbonCounter';
import { FoundationSection } from './components/FoundationSection';
import { AboutSection } from './components/AboutSection';
import { ValuesSection } from './components/ValuesSection';
import { ImpactSection } from './components/ImpactSection';
import { JoinSection } from './components/JoinSection';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={handleNavigation} />;
      case 'signup':
        return <SignupPage onNavigate={handleNavigation} />;
      case 'home':
      default:
        return (
          <>
            <HeroSection onNavigate={handleNavigation} />
            <WhyCarbonCounterSection />
            <FoundationSection />
            <AboutSection />
            <ValuesSection />
            <ImpactSection />
            <JoinSection onNavigate={handleNavigation} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation onNavigate={handleNavigation} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
