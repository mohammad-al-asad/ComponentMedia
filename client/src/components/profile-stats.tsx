import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  MessageSquare, 
  Download, 
  Heart, 
  Star 
} from "lucide-react";

interface UserStats {
  componentsPosted: number;
  postsCreated: number;
  totalDownloads: number;
  totalLikes: number;
  totalComments: number;
  reputation: number;
}

interface ProfileStatsProps {
  stats: UserStats;
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  const statCards = [
    {
      label: "Components",
      value: stats.componentsPosted,
      icon: Code2,
      color: "text-blue-600"
    },
    {
      label: "Posts",
      value: stats.postsCreated,
      icon: MessageSquare,
      color: "text-green-600"
    },
    {
      label: "Downloads",
      value: stats.totalDownloads.toLocaleString(),
      icon: Download,
      color: "text-purple-600"
    },
    {
      label: "Likes",
      value: stats.totalLikes.toLocaleString(),
      icon: Heart,
      color: "text-red-600"
    },
    {
      label: "Comments",
      value: stats.totalComments,
      icon: MessageSquare,
      color: "text-yellow-600"
    },
    {
      label: "Reputation",
      value: stats.reputation,
      icon: Star,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-6">
      {statCards.map((stat) => (
        <Card key={stat.label} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}