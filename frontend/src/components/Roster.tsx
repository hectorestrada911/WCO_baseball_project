"use client";

import { PlayerCard } from "@/components/PlayerCard";

interface Player {
  id: string;
  name: string;
  position: string;
  jersey: string;
  ppg: number;
  rpg: number;
  apg: number;
  image: string;
  tag?: string;
}

export function Roster() {
  // Mock player data
  const players: Player[] = [
    {
      id: "1",
      name: "John Doe",
      position: "Pitcher",
      jersey: "#12",
      ppg: 1.1,
      rpg: 1.1,
      apg: 1.1,
      image: "/api/placeholder/300/200",
      tag: "SimmonQuan"
    },
    {
      id: "2",
      name: "Mike Johnson",
      position: "Catcher",
      jersey: "#8",
      ppg: 2.3,
      rpg: 1.8,
      apg: 0.9,
      image: "/api/placeholder/300/200",
      tag: "Starter"
    },
    {
      id: "3",
      name: "Sarah Chen",
      position: "First Base",
      jersey: "#15",
      ppg: 1.8,
      rpg: 2.1,
      apg: 1.2,
      image: "/api/placeholder/300/200",
      tag: "Captain"
    },
    {
      id: "4",
      name: "Alex Rodriguez",
      position: "Shortstop",
      jersey: "#22",
      ppg: 2.1,
      rpg: 1.5,
      apg: 1.8,
      image: "/api/placeholder/300/200",
      tag: "All-Star"
    },
    {
      id: "5",
      name: "Emma Wilson",
      position: "Outfield",
      jersey: "#7",
      ppg: 1.5,
      rpg: 1.9,
      apg: 1.4,
      image: "/api/placeholder/300/200",
      tag: "Rookie"
    },
    {
      id: "6",
      name: "David Kim",
      position: "Third Base",
      jersey: "#33",
      ppg: 2.0,
      rpg: 1.7,
      apg: 1.1,
      image: "/api/placeholder/300/200",
      tag: "Veteran"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Roster</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">top · Primary</span>
          </div>
        </div>
        <div className="h-1 bg-orange-500 mt-2"></div>
        <div className="h-1 bg-blue-500 mt-1"></div>
      </div>

      {/* Player Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}
