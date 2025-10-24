// components/trending-sidebar.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Download, Star } from "lucide-react";

const trendingComponents = [
  {
    id: "1",
    name: "Animated Navbar",
    author: "sarahdev",
    downloads: 1242,
    framework: "react"
  },
  {
    id: "2",
    name: "Data Table Pro",
    author: "alexui",
    downloads: 892,
    framework: "react"
  },
  {
    id: "3",
    name: "Mobile Bottom Sheet",
    author: "mobilemaster",
    downloads: 756,
    framework: "react-native"
  }
];

export function TrendingSidebar() {
  return (
    <div className="space-y-6">
      {/* Trending Components */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-sm font-medium">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending Components
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trendingComponents.map((component) => (
            <div key={component.id} className="flex items-center justify-between space-x-2">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {component.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  by {component.author} • {component.framework}
                </p>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Download className="h-3 w-3 mr-1" />
                {component.downloads}
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            View All Trending
          </Button>
        </CardContent>
      </Card>

      {/* Top Developers */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-sm font-medium">
            <Star className="h-4 w-4 mr-2" />
            Top Developers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {["sarahdev", "alexui", "mobilemaster"].map((username) => (
              <div key={username} className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-medium">
                    {username[0].toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">@{username}</p>
                  <p className="text-xs text-muted-foreground">12 components</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}