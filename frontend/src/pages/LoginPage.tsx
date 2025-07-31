// frontend/src/pages/LoginPage.tsx
// --- FINAL INTEGRATED CODE ---

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation'; // Assuming this component exists from your friend's code

interface LoginPageProps {
  setToken: (token: string | null) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setToken }) => {
  // --- Our Logic Start ---
  const [email, setEmail] = useState(''); // Changed from username to email to match our backend
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const formData = new URLSearchParams();
    // The backend's form expects 'username', so we pass the email state here
    formData.append('username', email); 
    formData.append('password', password);
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed.');
      }
      const data = await response.json();
      setToken(data.access_token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    }
  };
  // --- Our Logic End ---

  return (
    // This is your friend's UI with our logic connected
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white border-2 border-black rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-black mb-2">Sign In</h1>
              <p className="text-gray-600">Welcome back to Carbon Counter</p>
            </div>
            
            {/* Displaying our error message */}
            {error && <p className="mb-4 rounded bg-red-100 p-3 text-center text-red-700">{error}</p>}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600">
                New user?{' '}
                {/* Corrected the link to point to /register */}
                <Link to="/register" className="text-black font-medium hover:underline">
                  Sign up
                </Link>
              </p>
              {/* We can add the forgot password functionality later */}
              {/* <p className="text-sm">
                <a href="#" className="text-black hover:underline">
                  Forgot password?
                </a>
              </p> */}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/" className="text-sm text-gray-600 hover:text-black">
                Return to home page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
