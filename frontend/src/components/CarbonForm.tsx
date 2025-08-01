// frontend/src/components/CarbonForm.tsx
// --- MODIFIED FILE ---
// The form now sends the current date to the backend.

import React, { useState } from 'react';

interface CarbonFormProps {
  token: string | null;
  onNewEntry: () => void;
}

const CarbonForm: React.FC<CarbonFormProps> = ({ token, onNewEntry }) => {
  const [electricity, setElectricity] = useState('');
  const [driving, setDriving] = useState('');
  const [food, setFood] = useState('none');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!token) {
      setError("You are not logged in.");
      return;
    }

    try {
      // Get today's date in YYYY-MM-DD format
      const today = new Date().toISOString().split('T')[0];

      const response = await fetch('http://127.0.0.1:8000/carbon/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          entry_date: today, // Send the client's date
          electricity_kwh: parseFloat(electricity) || 0,
          driving_km: parseFloat(driving) || 0,
          food_type: food
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit entry.');
      }
      
      setSuccess('Entry added successfully!');
      setElectricity('');
      setDriving('');
      setFood('none');
      onNewEntry(); // Refresh the list of entries on the dashboard

      setTimeout(() => setSuccess(''), 3000);

    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h2 className="mb-4 text-2xl font-bold">Log Today's Activity</h2>
      {error && <p className="mb-4 text-center text-red-500">{error}</p>}
      {success && <p className="mb-4 text-center text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Electricity (kWh)</label>
          <input
            type="number" step="0.1" value={electricity} onChange={(e) => setElectricity(e.target.value)} placeholder="e.g., 12.5"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Driving (km)</label>
          <input
            type="number" step="0.1" value={driving} onChange={(e) => setDriving(e.target.value)} placeholder="e.g., 50"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Main Meal Today</label>
          <select
            value={food} onChange={(e) => setFood(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
          >
            <option value="none">No main meal / Snacks</option>
            <option value="veg">Vegetarian Meal</option>
            <option value="meat">Meat-based Meal</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default CarbonForm;
