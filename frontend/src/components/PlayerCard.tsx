"use client";

import Link from "next/link";

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

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const isPitcher = player.position.toLowerCase().includes('pitcher');
  const profileUrl = isPitcher ? `/pitchers/${player.id}` : `/hitters/${player.id}`;

  return (
    <Link href={profileUrl} className="block">
      <div className="bg-white rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 hover:border-blue-500 cursor-pointer">
      {/* Logo/Image Section */}
      <div className="relative bg-gray-100 h-48 flex items-center justify-center">
        {/* SDSU-style logo placeholder */}
        <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold text-lg">SD</span>
          </div>
        </div>
        
        {/* Tag overlay */}
        {player.tag && (
          <div className="absolute bottom-4 right-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium">
              {player.tag}
            </span>
          </div>
        )}
      </div>

      {/* Player Information */}
      <div className="bg-black text-white p-4">
        <div className="text-center mb-3">
          <h3 className="text-lg font-bold">{player.name}</h3>
          <p className="text-sm text-gray-300">
            {player.position} | {player.jersey}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm text-gray-400">PPG</div>
            <div className="text-lg font-semibold">{player.ppg}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">RPG</div>
            <div className="text-lg font-semibold">{player.rpg}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">APG</div>
            <div className="text-lg font-semibold">{player.apg}</div>
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
}
