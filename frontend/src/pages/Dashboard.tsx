// frontend/src/pages/DashboardPage.tsx
// --- MODIFIED FILE ---
// Updated to handle the new entry submission and data fetching sequentially.

import React, { useState, useEffect } from 'react';
import CarbonForm from '../components/CarbonForm';
import WeeklyChart from '../components/WeeklyChart';
import GoalTracker from '../components/GoalTracker';
import StreakTracker from '../components/StreakTracker';
import { LoggedInNav } from '../components/LoggedInNav';

interface CarbonEntry { id: number; entry_date: string; electricity_kwh: number; transport_mode: string; distance_km: number; food_choice: string; total_co2: number; carbon_score: number; }
interface ChartData { name: string; co2: number; }
interface Goal { target_co2: number; }
interface Streak { current_streak: number; }

const DashboardPage: React.FC<{ setToken: (token: string | null) => void; }> = ({ setToken }) => {
  const [entries, setEntries] = useState<CarbonEntry[]>([]);
  const [error, setError] = useState('');
  const [dailyScore, setDailyScore] = useState(100);
  const [dailyEmissions, setDailyEmissions] = useState(0);
  const [weeklyChartData, setWeeklyChartData] = useState<ChartData[]>([]);
  const [weeklyGoal, setWeeklyGoal] = useState<number | null>(null);
  const [weeklyEmissions, setWeeklyEmissions] = useState(0);
  const [streak, setStreak] = useState(0);

  const token = localStorage.getItem('token');
  const DAILY_TARGET_CO2 = 20.0;

  const getStartOfWeek = () => { const today = new Date(); const day = today.getDay(); const diff = today.getDate() - day + (day === 0 ? -6 : 1); return new Date(today.setDate(diff)); };
  
  const processData = (allEntries: CarbonEntry[], goalData: Goal | null, streakData: Streak) => { 
    const todayStr = new Date().toISOString().split('T')[0]; const startOfWeek = getStartOfWeek(); startOfWeek.setHours(0, 0, 0, 0); const todayEntries = allEntries.filter(entry => entry.entry_date === todayStr); const weekEntries = allEntries.filter(entry => new Date(entry.entry_date) >= startOfWeek); const totalDailyEmissions = todayEntries.reduce((sum, entry) => sum + entry.total_co2, 0); setDailyEmissions(Number(totalDailyEmissions.toFixed(2))); if (todayEntries.length > 0) { const scorePercentage = (totalDailyEmissions / DAILY_TARGET_CO2) * 100; setDailyScore(Math.max(0, 100 - Math.round(scorePercentage))); } else { setDailyScore(100); } const totalWeeklyEmissions = weekEntries.reduce((sum, entry) => sum + entry.total_co2, 0); setWeeklyEmissions(totalWeeklyEmissions); setWeeklyGoal(goalData?.target_co2 || null); const last7Days: { [key: string]: number } = {}; for (let i = 6; i >= 0; i--) { const date = new Date(); date.setDate(date.getDate() - i); last7Days[date.toISOString().split('T')[0]] = 0; } allEntries.forEach(entry => { if (last7Days.hasOwnProperty(entry.entry_date)) { last7Days[entry.entry_date] += entry.total_co2; } }); const formattedChartData = Object.keys(last7Days).map(date => ({ name: new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' }), co2: parseFloat(last7Days[date].toFixed(2)) })); setWeeklyChartData(formattedChartData);
    setStreak(streakData.current_streak);
  };
  
  const fetchData = async () => { 
    if (!token) return; 
    try { 
      const [entriesResponse, goalResponse, streakResponse] = await Promise.all([ 
        fetch('http://127.0.0.1:8000/carbon/', { headers: { 'Authorization': `Bearer ${token}` } }), 
        fetch('http://127.0.0.1:8000/goals/', { headers: { 'Authorization': `Bearer ${token}` } }),
        fetch('http://127.0.0.1:8000/streak/', { headers: { 'Authorization': `Bearer ${token}` } })
      ]); 
      if (!entriesResponse.ok) throw new Error('Failed to fetch entries.'); 
      
      const entriesData: CarbonEntry[] = await entriesResponse.json(); 
      const goalData: Goal | null = goalResponse.ok ? await goalResponse.json() : null; 
      const streakData: Streak = streakResponse.ok ? await streakResponse.json() : { current_streak: 0 };

      setEntries(entriesData); 
      processData(entriesData, goalData, streakData); 
    } catch (err: any) { 
      setError(err.message); 
    } 
  };
  
  useEffect(() => { fetchData(); }, [token]);
  const handleLogout = () => setToken(null);

  const handleNewEntry = async () => {
    // This function is now passed to the form. It waits for the form to submit,
    // and THEN it re-fetches all the data. This fixes the race condition.
    await fetchData();
  };

  const formatDetailText = (entry: CarbonEntry) => {
    let details = [`Elec: ${entry.electricity_kwh} kWh`];
    if (entry.distance_km > 0 && entry.transport_mode !== 'none') {
        details.push(`Transport: ${entry.distance_km} km via ${entry.transport_mode.replace(/_/g, ' ')}`);
    }
    if (entry.food_choice !== 'none') {
        details.push(`Food: ${entry.food_choice.replace(/_/g, ' ')}`);
    }
    return details.join(' | ');
  }

  return (
    <div className="min-h-screen w-full bg-white font-sans text-black">
      <LoggedInNav handleLogout={handleLogout} />
      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1 space-y-8">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-bold">Today's Eco Score</h2>
              <p className="text-6xl font-black">{dailyScore}<span className="text-3xl font-bold text-gray-400">/100</span></p>
              <p className="mt-2 text-gray-600">Total Emissions: {dailyEmissions} kg CO₂e</p>
              <p className="mt-1 text-xs text-gray-400">Score starts at 100 and decreases as emissions approach the daily target of {DAILY_TARGET_CO2} kg CO₂e.</p>
            </div>
            <StreakTracker streak={streak} />
            <GoalTracker token={token} weeklyGoal={weeklyGoal} weeklyEmissions={weeklyEmissions} onGoalSet={fetchData} />
            <CarbonForm token={token} onNewEntry={handleNewEntry} />
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
                            {formatDetailText(entry)}
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