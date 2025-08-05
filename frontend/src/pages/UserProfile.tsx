import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoggedInNav } from '../components/LoggedInNav';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('Alex Johnson');
  const [showPassword, setShowPassword] = useState(false);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [totalEmitted, setTotalEmitted] = useState('');
  const [totalSaved, setTotalSaved] = useState('');
  const [streak, setStreak] = useState('');

  
React.useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    fetch("http://localhost:8000/users/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Unauthorized or fetch error");
        }
        return res.json();
      })
      .then(data => {
        setUsername(data.username);
        setUserEmail(data.email);
        setUserPassword("********");
        setTotalEmitted(data.totalEmitted || "0 kg");
        setTotalSaved(data.totalSaved || "0 kg");
        setStreak(data.streak || "0 days");
      })
      .catch(err => {
        console.error("Failed to load user profile", err);
      });
  } else {
    console.warn("No token found in localStorage.");
  }
}, []);



  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full bg-white text-black font-inter">
      <LoggedInNav handleLogout={handleLogout} />
      <div className="flex flex-col items-center space-y-6 w-full px-8 py-12">
        {/* Avatar & Username */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl text-white shadow-md">👤</div>
          {isEditing ? (
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="text-2xl font-bold border border-gray-300 rounded px-4 py-1 text-center"
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <h2 className="text-3xl font-extrabold">{username}</h2>
          )}
          <p className="text-gray-600">Environmental Champion</p>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 mt-2 bg-black text-white rounded hover:opacity-90 text-sm"
          >
            Edit Profile
          </button>
        </div>

        {/* Impact Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mt-8">
          <div className="bg-gray-100 p-6 rounded-lg text-center shadow-sm">
            <div className="flex justify-center text-blue-600 text-2xl mb-2">⬇️</div>
            <p className="text-2xl font-bold">{totalSaved}</p>
            <p className="text-sm text-gray-500">Total CO₂ Saved</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center shadow-sm">
            <div className="flex justify-center text-blue-600 text-2xl mb-2">⬆️</div>
            <p className="text-2xl font-bold">{totalEmitted}</p>
            <p className="text-sm text-gray-500">Total Emitted</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center shadow-sm">
            <div className="flex justify-center text-red-500 text-2xl mb-2">🔥</div>
            <p className="text-2xl font-bold">{streak}</p>
            <p className="text-sm text-gray-500">Current Streak</p>
          </div>
        </div>

        {/* Account Settings */}
        <div className="w-full max-w-7xl bg-gray-100 mt-10 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
            <span>⚙️</span><span>Account Settings</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input
                type="email"
                value={userEmail}
                readOnly
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={userPassword}
                  readOnly
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-sm tracking-widest pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700"
                  onClick={() => setShowPassword(prev => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Click the eye icon to reveal your password</p>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 text-right">
            <button className="px-6 py-2 bg-black text-white rounded hover:opacity-90">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;