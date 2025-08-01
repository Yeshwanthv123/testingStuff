// frontend/src/components/WeeklyChart.tsx
// --- NEW FILE ---
// This component will render the weekly emissions chart.

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  co2: number;
}

interface WeeklyChartProps {
  data: ChartData[];
}

const WeeklyChart: React.FC<WeeklyChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #cccccc' 
            }}
          />
          <Bar dataKey="co2" fill="#000000" name="CO₂ (kg)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;