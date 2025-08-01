// frontend/src/pages/DashboardPage.tsx
// --- FINAL, CORRECTED & DEBUGGED FILE ---

import React, { useState, useEffect } from 'react';
import CarbonForm from '../components/CarbonForm';
import WeeklyChart from '../components/WeeklyChart';
import GoalTracker from '../components/GoalTracker';

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

interface ChartData { name: string; co2: number; }
interface Goal { target_co2: number; }

const DashboardPage: React.FC<DashboardPageProps> = ({ setToken }) => {
  const [entries, setEntries] = useState<CarbonEntry[]>([]);
  const [error, setError] = useState('');
  const [dailyScore, setDailyScore] = useState(100); // Start at 100
  const [dailyEmissions, setDailyEmissions] = useState(0);
  const [weeklyChartData, setWeeklyChartData] = useState<ChartData[]>([]);
  const [weeklyGoal, setWeeklyGoal] = useState<number | null>(null);
  const [weeklyEmissions, setWeeklyEmissions] = useState(0);

  const token = localStorage.getItem('token');
  const DAILY_TARGET_CO2 = 20.0; // This is our baseline for a "good" day (score of 100)

  const getStartOfWeek = () => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(today.setDate(diff));
  };

  const processData = (allEntries: CarbonEntry[], goalData: Goal | null) => {
    const todayStr = new Date().toISOString().split('T')[0];
    const startOfWeek = getStartOfWeek();
    startOfWeek.setHours(0, 0, 0, 0);

    const todayEntries = allEntries.filter(entry => entry.entry_date === todayStr);
    const weekEntries = allEntries.filter(entry => new Date(entry.entry_date) >= startOfWeek);

    // --- Daily Score Calculation ---
    const totalDailyEmissions = todayEntries.reduce((sum, entry) => sum + entry.total_co2, 0);
    setDailyEmissions(Number(totalDailyEmissions.toFixed(2)));

    if (todayEntries.length > 0) {
      const scorePercentage = (totalDailyEmissions / DAILY_TARGET_CO2) * 100;
      const finalScore = Math.max(0, 100 - Math.round(scorePercentage));
      setDailyScore(finalScore);
    } else {
      setDailyScore(100); // Start with a perfect score of 100 if no entries
    }

    // --- Weekly Goal & Chart Calculation ---
    const totalWeeklyEmissions = weekEntries.reduce((sum, entry) => sum + entry.total_co2, 0);
    setWeeklyEmissions(totalWeeklyEmissions);
    setWeeklyGoal(goalData?.target_co2 || null);

    const last7Days: { [key: string]: number } = {};
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      last7Days[date.toISOString().split('T')[0]] = 0;
    }
    allEntries.forEach(entry => {
      if (last7Days.hasOwnProperty(entry.entry_date)) {
        last7Days[entry.entry_date] += entry.total_co2;
      }
    });
    const formattedChartData = Object.keys(last7Days).map(date => ({
        name: new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' }),
        co2: parseFloat(last7Days[date].toFixed(2))
    }));
    setWeeklyChartData(formattedChartData);
  };

  const fetchData = async () => {
    if (!token) return;
    try {
      const [entriesResponse, goalResponse] = await Promise.all([
        fetch('http://127.0.0.1:8000/carbon/', { headers: { 'Authorization': `Bearer ${token}` } }),
        fetch('http://127.0.0.1:8000/goals/', { headers: { 'Authorization': `Bearer ${token}` } })
      ]);

      if (!entriesResponse.ok) throw new Error('Failed to fetch entries.');
      
      const entriesData: CarbonEntry[] = await entriesResponse.json();
      const goalData: Goal | null = goalResponse.ok ? await goalResponse.json() : null;
      
      setEntries(entriesData);
      processData(entriesData, goalData);

    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const handleLogout = () => setToken(null);

  return (
    <div className="min-h-screen w-full bg-white font-sans text-black">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center"><span className="text-2xl font-bold">Carbon Counter</span></div>
            <div className="flex items-center"><button onClick={handleLogout} className="rounded bg-black px-4 py-2 text-sm font-bold text-white hover:bg-gray-800">Logout</button></div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1 space-y-8">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-bold">Today's Eco Score</h2>
              <p className="text-6xl font-black">{dailyScore}<span className="text-3xl font-bold text-gray-400">/100</span></p>
              <p className="mt-2 text-gray-600">Total Emissions: {dailyEmissions} kg CO₂e</p>
              <p className="mt-1 text-xs text-gray-400">Score starts at 100 and decreases as emissions approach the daily target of {DAILY_TARGET_CO2} kg CO₂e.</p>
            </div>
            <GoalTracker token={token} weeklyGoal={weeklyGoal} weeklyEmissions={weeklyEmissions} onGoalSet={fetchData} />
            <CarbonForm token={token} onNewEntry={fetchData} />
          </div>
          <div className="md:col-span-2 space-y-8">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-2xl font-bold">Your Week at a Glance</h2>
              <WeeklyChart data={weeklyChartData} />
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-2xl font-bold">Your History</h2>
              {error && <p className="text-red-500">{error}</p>}
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
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
                  <p className="text-gray-500">No entries yet.</p>
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