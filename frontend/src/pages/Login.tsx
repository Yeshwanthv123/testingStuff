// frontend/src/pages/Login.tsx
// --- MODIFIED FILE ---
// Corrected the fetch URL.

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginPageProps {
  setToken: (token: string | null) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const formData = new URLSearchParams();
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
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    }
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-white font-sans">
      <div className="w-full max-w-md rounded-lg border border-gray-200 p-8 shadow-sm">
        <h2 className="mb-6 text-center text-3xl font-bold text-black">Welcome Back!</h2>
        {error && <p className="mb-4 rounded bg-red-100 p-3 text-center text-red-700">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-800" htmlFor="email">
              Email
            </label>
            <input
              className="focus:ring-black w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-800 shadow-sm focus:outline-none focus:ring-2"
              id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-800" htmlFor="password">
              Password
            </label>
            <input
              className="focus:ring-black w-full appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-800 shadow-sm focus:outline-none focus:ring-2"
              id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-black px-4 py-2 font-bold text-white hover:bg-gray-800 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
            <Link to="/register" className="inline-block align-baseline text-sm font-bold text-black hover:underline">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;