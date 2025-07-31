// frontend/src/App.tsx
// --- FINAL, CORRECTED FILE ---

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Corrected relative import paths
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/HomePage'; // Importing named export

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const handleSetToken = (newToken: string | null) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/dashboard" /> : <LoginPage setToken={handleSetToken} />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/dashboard" /> : <RegisterPage />}
        />
        
        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={token ? <DashboardPage setToken={handleSetToken} /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
