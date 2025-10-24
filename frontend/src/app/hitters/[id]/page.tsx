import { EnhancedHitterProfile } from "@/components/EnhancedHitterProfile";
import { mockPlayers } from "@/data/mockTrackManData";

interface HitterPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for static export
export async function generateStaticParams() {
  // Get all hitter player IDs from mock data
  const hitterIds = mockPlayers
    .filter(player => player.position === "Hitter")
    .map(player => ({ id: player.playerId }));
  
  return hitterIds;
}

export default async function HitterPage({ params }: HitterPageProps) {
  const { id } = await params;
  return <EnhancedHitterProfile playerId={id} />;
}
