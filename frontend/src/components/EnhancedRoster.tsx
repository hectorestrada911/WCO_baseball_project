"use client";

import { EnhancedPlayerCard } from "./EnhancedPlayerCard";
import { mockPlayers } from "@/data/mockTrackManData";

export function EnhancedRoster() {
  const players = mockPlayers;

  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-6">
      {/* Header Section */}
      <div className="bg-gray-800 text-white p-4 lg:p-6 rounded-lg shadow-md mb-6 relative overflow-hidden">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">Team Roster</h2>
        <p className="text-gray-300 text-sm lg:text-base">
          TrackMan data from 10/17/25 Intrasquad game at Tony Gwynn Stadium
        </p>
        <div className="h-1 bg-orange-500 mt-2"></div>
        <div className="h-1 bg-blue-500 mt-1"></div>
      </div>

      {/* Game Summary */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Game Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">230</div>
            <div className="text-sm text-gray-600">Total Pitches</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">6</div>
            <div className="text-sm text-gray-600">Players Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">89.2</div>
            <div className="text-sm text-gray-600">Avg Velocity (mph)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">92.9</div>
            <div className="text-sm text-gray-600">Max Velocity (mph)</div>
          </div>
        </div>
      </div>

      {/* Player Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {players.map((player) => (
          <EnhancedPlayerCard 
            key={player.playerId} 
            player={player}
            isPitcher={player.position === "Pitcher"}
          />
        ))}
      </div>

      {/* Data Insights */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Pitching Performance</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Lettow, Rohan: 89.2 mph avg, 92.9 mph max</li>
              <li>• Shaw, Connor: 80.1 mph avg, 84.4 mph max</li>
              <li>• Combined spin rate: 2,100 rpm average</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Hitting Performance</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Trosky, Jabin: 1.000 batting average</li>
              <li>• Jackson, Jake: 3 strikeouts</li>
              <li>• Team batting: .167 average</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
