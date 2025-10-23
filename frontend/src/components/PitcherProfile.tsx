"use client";

import { useState, useEffect } from "react";
import { User, Calendar, Target, TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface PitcherData {
  id: string;
  name: string;
  position: string;
  team: string;
  height: string;
  weight: string;
  throws: string;
  lastSession: string;
  totalPitches: number;
  avgVelocity: number;
  topVelocity: number;
}

interface VelocityData {
  session: string;
  velocity: number;
}

interface PitchTypeData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

export function PitcherProfile({ playerId }: { playerId: string }) {
  const [player, setPlayer] = useState<PitcherData | null>(null);
  const [velocityData, setVelocityData] = useState<VelocityData[]>([]);
  const [pitchTypeData, setPitchTypeData] = useState<PitchTypeData[]>([]);

  useEffect(() => {
    // Mock API call - replace with real API
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setPlayer({
        id: playerId,
        name: "Mike Johnson",
        position: "Starting Pitcher",
        team: "Spring Training Roster",
        height: "6'2\"",
        weight: "195 lbs",
        throws: "Right",
        lastSession: "2 days ago",
        totalPitches: 247,
        avgVelocity: 94.2,
        topVelocity: 97.1
      });

      setVelocityData([
        { session: "Session 1", velocity: 92.1 },
        { session: "Session 2", velocity: 93.4 },
        { session: "Session 3", velocity: 94.2 },
        { session: "Session 4", velocity: 93.8 },
        { session: "Session 5", velocity: 94.7 },
        { session: "Session 6", velocity: 95.1 },
        { session: "Session 7", velocity: 94.9 },
        { session: "Session 8", velocity: 95.3 }
      ]);

      setPitchTypeData([
        { name: "Fastball", value: 45, color: "#3B82F6" },
        { name: "Slider", value: 25, color: "#10B981" },
        { name: "Changeup", value: 20, color: "#F59E0B" },
        { name: "Curveball", value: 10, color: "#EF4444" }
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
            <div className="text-2xl font-bold text-blue-600">{player.avgVelocity} mph</div>
            <div className="text-sm text-gray-500">Average Velocity</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Height/Weight</p>
              <p className="font-semibold text-gray-900">{player.height} / {player.weight}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Throws</p>
              <p className="font-semibold text-gray-900">{player.throws}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Top Velocity</p>
              <p className="font-semibold text-gray-900">{player.topVelocity} mph</p>
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
              <div className="text-2xl font-bold text-gray-900">{player.totalPitches}</div>
              <div className="text-sm text-gray-600">Total Pitches</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{player.avgVelocity} mph</div>
              <div className="text-sm text-gray-600">Avg Velocity</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{player.topVelocity} mph</div>
              <div className="text-sm text-gray-600">Top Velocity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Velocity Trend Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Velocity Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={velocityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="session" />
                <YAxis domain={[90, 96]} />
                <Tooltip 
                  formatter={(value: number) => [`${value} mph`, 'Velocity']}
                  labelFormatter={(label) => `Session: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="velocity" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pitch Type Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pitch Type Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pitchTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pitchTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`${value}%`, 'Usage']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
