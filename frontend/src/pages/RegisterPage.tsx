// frontend/src/pages/RegisterPage.tsx
// --- MODIFIED FILE ---
// Added a username field to the registration form.

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState(''); // New state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Add username to the request body
        body: JSON.stringify({ username, email, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Registration failed.');
      }
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => { navigate('/login'); }, 2000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white border-2 border-black rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-black mb-2">Sign Up</h1>
              <p className="text-gray-600">Join Carbon Counter today</p>
            </div>
            
            {error && <p className="mb-4 rounded bg-red-100 p-3 text-center text-red-700">{error}</p>}
            {success && <p className="mb-4 rounded bg-green-100 p-3 text-center text-green-600">{success}</p>}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-black mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
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
                Sign Up
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-black font-medium hover:underline">
                  Login
                </Link>
              </p>
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
};

export default RegisterPage;