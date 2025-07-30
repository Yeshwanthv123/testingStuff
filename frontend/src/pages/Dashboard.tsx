// frontend/src/pages/Dashboard.tsx
// --- MODIFIED FILE ---
// Layout fixed, default score set to 0.

import React, { useState, useEffect } from 'react';
import CarbonForm from '../components/CarbonForm';

interface DashboardPageProps {
  setToken: (token: string | null) => void;
}

interface CarbonEntry {
  id: number;
  entry_date: string;
  electricity_kwh: number;
  food_type: string;
  driving_km: number;
  total_co2: number;
  carbon_score: number;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ setToken }) => {
  const [entries, setEntries] = useState<CarbonEntry[]>([]);
  const [error, setError] = useState('');
  const [dailyScore, setDailyScore] = useState(0); // Default score is now 0
  const [dailyEmissions, setDailyEmissions] = useState(0);

  const token = localStorage.getItem('token');

  const fetchEntries = async () => {
    if (!token) return;
    try {
      const response = await fetch('http://127.0.0.1:8000/carbon/', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch entries.');
      }
      const data: CarbonEntry[] = await response.json();
      setEntries(data);
      calculateDailyTotals(data);
    } catch (err: any) {
      setError(err.message);
    }
  };
  
  const calculateDailyTotals = (allEntries: CarbonEntry[]) => {
      const today = new Date().toISOString().split('T')[0];
      const todayEntries = allEntries.filter(entry => entry.entry_date === today);
      
      const totalEmissions = todayEntries.reduce((sum, entry) => sum + entry.total_co2, 0);
      setDailyEmissions(Number(totalEmissions.toFixed(2)));

      if (todayEntries.length > 0) {
        const totalScore = todayEntries.reduce((sum, entry) => sum + entry.carbon_score, 0);
        setDailyScore(Math.round(totalScore / todayEntries.length));
      } else {
        setDailyScore(0); // Default score is 0 if no entries for today
      }
  };

  useEffect(() => {
    fetchEntries();
  }, [token]);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-black">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold">Carbon Counter</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="rounded bg-black px-4 py-2 text-sm font-bold text-white hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="mb-8 rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-bold">Today's Eco Score</h2>
              <p className="text-6xl font-black text-black">{dailyScore}<span className="text-3xl font-bold text-gray-400">/100</span></p>
              <p className="mt-2 text-gray-600">Total Emissions: {dailyEmissions} kg CO₂e</p>
            </div>
            <CarbonForm token={token} onNewEntry={fetchEntries} />
          </div>

          <div className="md:col-span-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-2xl font-bold">Your History</h2>
              {error && <p className="text-red-500">{error}</p>}
              <div className="space-y-4">
                {entries.length > 0 ? (
                  entries.map(entry => (
                    <div key={entry.id} className="rounded-md border border-gray-200 p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold">{new Date(entry.entry_date + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                           <div className="text-sm text-gray-600">
                            <span>Elec: {entry.electricity_kwh} kWh</span> | 
                            <span> Food: {entry.food_type}</span> | 
                            <span> Drive: {entry.driving_km} km</span>
                          </div>
                        </div>
                        <div className="text-right">
                           <p className="font-bold text-lg">{entry.carbon_score}/100</p>
                           <p className="text-sm text-gray-600">{entry.total_co2} kg CO₂e</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No entries yet. Add one to get started!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;