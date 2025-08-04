// frontend/src/components/CarbonForm.tsx
// --- MODIFIED FILE ---
// Refactored to use shadcn/ui components for a cleaner look.

import React, { useState } from 'react';

// Import shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
      const today = new Date().toISOString().split('T')[0];
      const response = await fetch('http://127.0.0.1:8000/carbon/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          entry_date: today,
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
      onNewEntry();

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
        <div className="space-y-2">
          <Label htmlFor="electricity">Electricity (kWh)</Label>
          <Input
            id="electricity"
            type="number"
            step="0.1"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            placeholder="e.g., 12.5"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="driving">Driving (km)</Label>
          <Input
            id="driving"
            type="number"
            step="0.1"
            value={driving}
            onChange={(e) => setDriving(e.target.value)}
            placeholder="e.g., 50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="food">Main Meal Today</Label>
          <Select value={food} onValueChange={setFood}>
            <SelectTrigger id="food">
              <SelectValue placeholder="Select a meal type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No main meal / Snacks</SelectItem>
              <SelectItem value="veg">Vegetarian Meal</SelectItem>
              <SelectItem value="meat">Meat-based Meal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">
          Add Entry
        </Button>
      </form>
    </div>
  );
};

export default CarbonForm;
