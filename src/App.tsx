import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignupPage';

function App() {
  return (
    <Router>
      <div className="text-[oklch(0.145_0_0)] text-sm not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-[21px] list-outside list-disc outline-[oklab(0.708_0_0_/_0.5)] text-start indent-[0px] normal-case visible border-separate font-inter">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
