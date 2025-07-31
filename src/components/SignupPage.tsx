import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface SignupPageProps {
  onNavigate: (page: string) => void;
}

export function SignupPage({ onNavigate }: SignupPageProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', { username, email, password });
    // Handle signup logic here
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
          <p className="text-gray-600">Create your account</p>
        </div>

        {/* Signup Form */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="signup-username" className="block text-sm font-medium text-black mb-2">
                Username
              </label>
              <input
                id="signup-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Create a password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Link to Login */}
          <div className="mt-6 text-center">
            <span className="text-gray-600 text-sm">Already have an account? </span>
            <button
              onClick={() => onNavigate('login')}
              className="text-black font-medium text-sm hover:underline"
            >
              Login
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
