import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white border-2 border-black rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-black mb-2">Sign In</h1>
              <p className="text-gray-600">Welcome back to Carbon Counter</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Link to="/signup" className="text-black font-medium hover:underline">
                  Sign up
                </Link>
              </p>
              <p className="text-sm">
                <a href="#" className="text-black hover:underline">
                  Forgot password?
                </a>
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
}
