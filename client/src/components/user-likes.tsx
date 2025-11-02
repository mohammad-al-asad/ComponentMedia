import { Card, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Download, MessageCircle, Eye, Code2 } from "lucide-react";

// Mock data for liked posts and components
const likedItems = [
  {
    id: "1",
    type: "component" as const,
    title: "Advanced Data Grid",
    description: "High-performance data grid with virtualization and sorting",
    author: {
      name: "Data Wizard",
      username: "datawizard"
    },
    framework: "react" as const,
    downloads: 2890,
    likes: 456,
    tags: ["react", "data-grid", "performance"],
    likedAt: new Date("2024-01-15"),
    stats: {
      likes: 456,
      comments: 78,
      downloads: 2890,
      shares: 45
    }
  },
  {
    id: "2",
    type: "post" as const,
    title: "React 18 Performance Tips",
    description: "Essential performance optimization techniques for React 18 applications",
    author: {
      name: "Perf Expert",
      username: "perfexpert"
    },
    tags: ["react", "performance", "optimization"],
    likedAt: new Date("2024-01-12"),
    stats: {
      likes: 234,
      comments: 56,
      downloads: 0,
      shares: 23
    }
  },
  {
    id: "3",
    type: "component" as const,
    title: "Custom Date Picker",
    description: "Beautiful and accessible date picker with range selection",
    author: {
      name: "UI Master",
      username: "uimaster"
    },
    framework: "react" as const,
    downloads: 1678,
    likes: 312,
    tags: ["react", "date-picker", "accessibility"],
    likedAt: new Date("2024-01-10"),
    stats: {
      likes: 312,
      comments: 42,
      downloads: 1678,
      shares: 31
    }
  },
  {
    id: "4",
    type: "post" as const,
    title: "State Management in 2024",
    description: "Comparing different state management solutions for React applications",
    author: {
      name: "State Guru",
      username: "stateguru"
    },
    tags: ["react", "state-management", "redux", "zustand"],
    likedAt: new Date("2024-01-08"),
    stats: {
      likes: 189,
      comments: 67,
      downloads: 0,
      shares: 18
    }
  }
];

interface UserLikesProps {
  username: string;
}

export function UserLikes({ username }: UserLikesProps) {
  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}w ago`;
  };

  const getTypeIcon = (type: string) => {
    return type === 'component' ? <Code2 className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />;
  };

  const getTypeColor = (type: string) => {
    return type === 'component' 
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Liked by {username}</h2>

      <div className="space-y-4">
        {likedItems.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  {/* Header */}
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className={getTypeColor(item.type)}>
                      <span className="flex items-center gap-1">
                        {getTypeIcon(item.type)}
                        {item.type}
                      </span>
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Liked {formatTimeAgo(item.likedAt)}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                      <span>by</span>
                      <span className="font-medium text-foreground">@{item.author.username}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{item.stats.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{item.stats.comments}</span>
                      </div>
                      {item.type === 'component' && (
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{item.stats.downloads}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{item.stats.shares} shares</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2 fill-current text-red-500" />
                    Unlike
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {likedItems.length === 0 && (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No likes yet</h3>
          <p className="text-muted-foreground">
            {username} hasn`&apos;`t liked any content yet.
          </p>
        </div>
      )}
    </div>
  );
}