// frontend/src/pages/LeaderboardPage.tsx
// --- MODIFIED FILE ---
// Updated to have a more aesthetic design with icons and improved styling.

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoggedInNav } from '../components/LoggedInNav';
import { Trophy } from 'lucide-react'; // Import the trophy icon

interface LeaderboardEntry {
  rank: number;
  username: string;
  weekly_avg_score: number;
}

const LeaderboardPage: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      if (!token) return;
      try {
        const response = await fetch('http://127.0.0.1:8000/leaderboard/', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard data.');
        }
        const data = await response.json();
        setLeaderboard(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchLeaderboard();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const getTrophyColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-yellow-700";
    return "text-gray-300";
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-black">
       <LoggedInNav handleLogout={handleLogout} />
      <main className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <Card className="border-2 border-black shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-black">Weekly Leaderboard</CardTitle>
            <CardDescription className="mt-2">See who's making the biggest impact this week!</CardDescription>
          </CardHeader>
          <CardContent>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] font-bold text-black">Rank</TableHead>
                  <TableHead className="font-bold text-black">User</TableHead>
                  <TableHead className="text-right font-bold text-black">Weekly Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.map((user) => (
                  <TableRow key={user.rank} className="odd:bg-gray-50">
                    <TableCell className="font-bold text-lg">
                      <div className="flex items-center gap-2">
                        {user.rank <= 3 ? (
                          <Trophy className={getTrophyColor(user.rank)} />
                        ) : (
                          <span className="w-6 text-center">{user.rank}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{user.username}</TableCell>
                    <TableCell className="text-right font-bold text-lg">{user.weekly_avg_score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {leaderboard.length === 0 && !error && (
              <p className="p-6 text-center text-gray-500">No entries have been logged this week. Be the first!</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LeaderboardPage;