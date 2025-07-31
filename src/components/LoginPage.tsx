import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-black">Carbon Counter</span>
          </div>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-black mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 flex justify-between items-center text-sm">
            <button
              onClick={() => onNavigate('signup')}
              className="text-gray-600 hover:text-black transition-colors"
            >
              New user?
            </button>
            <button className="text-gray-600 hover:text-black transition-colors">
              Forgot password?
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('home')}
            className="text-gray-600 hover:text-black transition-colors text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
