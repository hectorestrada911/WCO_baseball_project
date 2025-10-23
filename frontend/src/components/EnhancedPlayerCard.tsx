"use client";

import Link from "next/link";
import { PlayerStats } from "@/types/baseball";
import { TrendingUp, Target, Zap, RotateCcw } from "lucide-react";

interface EnhancedPlayerCardProps {
  player: PlayerStats;
  isPitcher?: boolean;
}

export function EnhancedPlayerCard({ player, isPitcher = false }: EnhancedPlayerCardProps) {
  const profileUrl = isPitcher ? `/pitchers/${player.playerId}` : `/hitters/${player.playerId}`;

  const getPositionColor = (position: string) => {
    switch (position.toLowerCase()) {
      case 'pitcher':
        return 'bg-blue-100 text-blue-800';
      case 'hitter':
        return 'bg-green-100 text-green-800';
      case 'catcher':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatStat = (value: number | undefined, suffix: string = '') => {
    if (value === undefined) return 'N/A';
    return `${Math.round(value * 10) / 10}${suffix}`;
  };

  return (
    <Link href={profileUrl} className="block">
      <div className="bg-white rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 hover:border-blue-500 cursor-pointer">
        {/* Header with position badge */}
        <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Player Avatar */}
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">
                  {player.playerName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{player.playerName}</h3>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPositionColor(player.position)}`}>
                  {player.position}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-4">
          {isPitcher ? (
            // Pitcher Stats
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Zap className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm text-gray-600">Velocity</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatStat(player.avgVelocity, ' mph')}
                </div>
                <div className="text-xs text-gray-500">Avg</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Target className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-gray-600">Max Speed</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatStat(player.maxVelocity, ' mph')}
                </div>
                <div className="text-xs text-gray-500">Peak</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <RotateCcw className="h-4 w-4 text-purple-500 mr-1" />
                  <span className="text-sm text-gray-600">Spin Rate</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatStat(player.spinRate, ' rpm')}
                </div>
                <div className="text-xs text-gray-500">Avg</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="h-4 w-4 text-orange-500 mr-1" />
                  <span className="text-sm text-gray-600">ERA</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatStat(player.era)}
                </div>
                <div className="text-xs text-gray-500">Earned Runs</div>
              </div>
            </div>
          ) : (
            // Hitter Stats
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Target className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-gray-600">Batting Avg</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatStat(player.battingAverage)}
                </div>
                <div className="text-xs text-gray-500">Average</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Zap className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm text-gray-600">Hits</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {player.hits || 0}
                </div>
                <div className="text-xs text-gray-500">Total</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="h-4 w-4 text-orange-500 mr-1" />
                  <span className="text-sm text-gray-600">Home Runs</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {player.homeRuns || 0}
                </div>
                <div className="text-xs text-gray-500">HRs</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <RotateCcw className="h-4 w-4 text-purple-500 mr-1" />
                  <span className="text-sm text-gray-600">RBI</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {player.rbi || 0}
                </div>
                <div className="text-xs text-gray-500">Runs Batted In</div>
              </div>
            </div>
          )}
        </div>

        {/* Performance Indicator */}
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Performance</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
