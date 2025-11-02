import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Star, Code2 } from "lucide-react";

// Mock data - replace with actual API call
const userComponents = [
  {
    id: "1",
    title: "Animated Button Component",
    description: "A beautiful button with smooth hover animations and multiple variants",
    framework: "react" as const,
    downloads: 1542,
    likes: 324,
    tags: ["react", "animation", "ui"],
    createdAt: new Date("2023-10-15"),
    isFeatured: true
  },
  {
    id: "2",
    title: "Advanced Data Table",
    description: "High-performance data table with virtual scrolling and sorting",
    framework: "react" as const,
    downloads: 892,
    likes: 167,
    tags: ["react", "table", "performance"],
    createdAt: new Date("2023-11-20"),
    isFeatured: false
  },
  {
    id: "3",
    title: "Mobile Bottom Sheet",
    description: "Smooth bottom sheet for React Native with gesture support",
    framework: "react-native" as const,
    downloads: 756,
    likes: 142,
    tags: ["react-native", "mobile", "ui"],
    createdAt: new Date("2023-12-05"),
    isFeatured: true
  }
];

interface UserComponentsProps {
  username: string;
}

export function UserComponents({ username }: UserComponentsProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Components by {username}</h2>
        <Button>Create Component</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userComponents.map((component) => (
          <Card key={component.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="capitalize">
                  {component.framework}
                </Badge>
                {component.isFeatured && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Featured
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg">{component.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {component.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1 mb-4">
                {component.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1">
                    <Download className="h-3 w-3" />
                    <span>{component.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>{component.likes}</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  <Code2 className="h-4 w-4 mr-1" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {userComponents.length === 0 && (
        <div className="text-center py-12">
          <Code2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No components yet</h3>
          <p className="text-muted-foreground mb-4">
            {username} hasn&apos;t shared any components yet.
          </p>
          <Button>Create Your First Component</Button>
        </div>
      )}
    </div>
  );
}