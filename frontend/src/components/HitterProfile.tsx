"use client";

import { useState, useEffect } from "react";
import { User, Calendar, Target, TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from "recharts";

interface HitterData {
  id: string;
  name: string;
  position: string;
  team: string;
  height: string;
  weight: string;
  bats: string;
  lastSession: string;
  totalAtBats: number;
  avgExitVelocity: number;
  maxExitVelocity: number;
}

interface ExitVelocityData {
  session: string;
  exitVelocity: number;
}

interface SprayChartData {
  x: number;
  y: number;
  exitVelocity: number;
}

export function HitterProfile({ playerId }: { playerId: string }) {
  const [player, setPlayer] = useState<HitterData | null>(null);
  const [exitVelocityData, setExitVelocityData] = useState<ExitVelocityData[]>([]);
  const [sprayData, setSprayData] = useState<SprayChartData[]>([]);

  useEffect(() => {
    // Mock API call - replace with real API
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setPlayer({
        id: playerId,
        name: "Sarah Chen",
        position: "Third Base",
        team: "Spring Training Roster",
        height: "5'8\"",
        weight: "165 lbs",
        bats: "Left",
        lastSession: "1 day ago",
        totalAtBats: 89,
        avgExitVelocity: 87.3,
        maxExitVelocity: 102.1
      });

      setExitVelocityData([
        { session: "Session 1", exitVelocity: 85.2 },
        { session: "Session 2", exitVelocity: 87.1 },
        { session: "Session 3", exitVelocity: 86.8 },
        { session: "Session 4", exitVelocity: 88.3 },
        { session: "Session 5", exitVelocity: 87.9 },
        { session: "Session 6", exitVelocity: 89.1 },
        { session: "Session 7", exitVelocity: 88.7 },
        { session: "Session 8", exitVelocity: 89.4 }
      ]);

      setSprayData([
        { x: 15, y: 8, exitVelocity: 95.2 },
        { x: -12, y: 5, exitVelocity: 88.1 },
        { x: 8, y: 12, exitVelocity: 92.3 },
        { x: -5, y: 3, exitVelocity: 85.7 },
        { x: 20, y: 6, exitVelocity: 98.1 },
        { x: -8, y: 9, exitVelocity: 90.4 },
        { x: 12, y: 4, exitVelocity: 87.8 },
        { x: -15, y: 7, exitVelocity: 93.2 }
      ]);
    };

    fetchData();
  }, [playerId]);

  if (!player) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        href="/roster"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Roster
      </Link>

      {/* Player Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{player.name}</h1>
            <p className="text-gray-600 text-lg">{player.position} • {player.team}</p>
          </div>
          <div className="text-right mt-4 lg:mt-0">
            <div className="text-2xl font-bold text-green-600">{player.avgExitVelocity} mph</div>
            <div className="text-sm text-gray-500">Avg Exit Velocity</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <User className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Height/Weight</p>
              <p className="font-semibold text-gray-900">{player.height} / {player.weight}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Bats</p>
              <p className="font-semibold text-gray-900">{player.bats}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Max Exit Velo</p>
              <p className="font-semibold text-gray-900">{player.maxExitVelocity} mph</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Last Session</p>
              <p className="font-semibold text-gray-900">{player.lastSession}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{player.totalAtBats}</div>
              <div className="text-sm text-gray-600">Total At-Bats</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{player.avgExitVelocity} mph</div>
              <div className="text-sm text-gray-600">Avg Exit Velocity</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{player.maxExitVelocity} mph</div>
              <div className="text-sm text-gray-600">Max Exit Velocity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Exit Velocity Trend Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Exit Velocity Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={exitVelocityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="session" />
                <YAxis domain={[84, 90]} />
                <Tooltip 
                  formatter={(value: number) => [`${value} mph`, 'Exit Velocity']}
                  labelFormatter={(label) => `Session: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="exitVelocity" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Spray Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Spray Chart</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={sprayData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="Horizontal Position"
                  domain={[-20, 20]}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="Vertical Position"
                  domain={[0, 15]}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value: number, name: string) => [
                    name === 'exitVelocity' ? `${value} mph` : value,
                    name === 'exitVelocity' ? 'Exit Velocity' : name
                  ]}
                />
                <Scatter 
                  dataKey="exitVelocity" 
                  fill="#10B981"
                  r={6}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
