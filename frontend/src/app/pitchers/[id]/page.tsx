import { EnhancedPitcherProfile } from "@/components/EnhancedPitcherProfile";
import { mockPlayers } from "@/data/mockTrackManData";

interface PitcherPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for static export
export async function generateStaticParams() {
  // Get all pitcher player IDs from mock data
  const pitcherIds = mockPlayers
    .filter(player => player.position === "Pitcher")
    .map(player => ({ id: player.playerId }));
  
  return pitcherIds;
}

export default async function PitcherPage({ params }: PitcherPageProps) {
  const { id } = await params;
  return <EnhancedPitcherProfile playerId={id} />;
}
