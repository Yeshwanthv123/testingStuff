import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

export function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign up attempt:', { username, email, password });
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
}
