import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, Lock, Globe, Users, Plus, MoreVertical, Star, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for collections
const userCollections = [
  {
    id: "1",
    title: "UI Components Master Collection",
    description: "A curated collection of the best UI components for modern web applications. Includes buttons, cards, modals, and more.",
    visibility: "public" as const,
    itemCount: 24,
    downloads: 1542,
    likes: 324,
    tags: ["react", "ui", "components", "design-system"],
    createdAt: new Date("2023-10-15"),
    isFeatured: true,
    items: [
      { type: "component", title: "Animated Button", author: "sarahdev" },
      { type: "component", title: "Modal System", author: "uimaster" },
      { type: "component", title: "Card Layouts", author: "designpro" }
    ]
  },
  {
    id: "2",
    title: "React Native Essentials",
    description: "Essential components and patterns for React Native development. Navigation, gestures, and mobile-specific UI.",
    visibility: "public" as const,
    itemCount: 18,
    downloads: 892,
    likes: 167,
    tags: ["react-native", "mobile", "navigation", "gestures"],
    createdAt: new Date("2023-11-20"),
    isFeatured: false,
    items: [
      { type: "component", title: "Bottom Sheet", author: "mobilemaster" },
      { type: "component", title: "Swipeable Cards", author: "rnwizard" },
      { type: "component", title: "Tab Navigator", author: "navpro" }
    ]
  },
  {
    id: "3",
    title: "Performance Optimization",
    description: "Components and techniques for optimizing React application performance. Virtualization, memoization, and more.",
    visibility: "public" as const,
    itemCount: 12,
    downloads: 756,
    likes: 142,
    tags: ["react", "performance", "optimization", "virtualization"],
    createdAt: new Date("2023-12-05"),
    isFeatured: true,
    items: [
      { type: "component", title: "Virtual List", author: "perfexpert" },
      { type: "component", title: "Memoized Components", author: "reactguru" },
      { type: "post", title: "Performance Guide", author: "expert" }
    ]
  },
  {
    id: "4",
    title: "Work in Progress",
    description: "My personal collection of components I'm currently working on or experimenting with.",
    visibility: "private" as const,
    itemCount: 8,
    downloads: 0,
    likes: 0,
    tags: ["wip", "experimental", "personal"],
    createdAt: new Date("2024-01-10"),
    isFeatured: false,
    items: [
      { type: "component", title: "New Chart Library", author: "sarahdev" },
      { type: "component", title: "Custom Hooks", author: "sarahdev" }
    ]
  },
  {
    id: "5",
    title: "Form Components & Validation",
    description: "Everything you need for building forms in React - inputs, validation, submission, and more.",
    visibility: "public" as const,
    itemCount: 15,
    downloads: 1024,
    likes: 213,
    tags: ["react", "forms", "validation", "inputs"],
    createdAt: new Date("2024-01-08"),
    isFeatured: false,
    items: [
      { type: "component", title: "Form Builder", author: "formmaster" },
      { type: "component", title: "Validation System", author: "validpro" },
      { type: "post", title: "Form Best Practices", author: "expert" }
    ]
  }
];

interface UserCollectionsProps {
  username: string;
}

export function UserCollections({ username }: UserCollectionsProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case 'public':
        return <Globe className="h-4 w-4" />;
      case 'private':
        return <Lock className="h-4 w-4" />;
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  const getVisibilityText = (visibility: string) => {
    return visibility.charAt(0).toUpperCase() + visibility.slice(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Collections by {username}</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Collection
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCollections.map((collection) => (
          <Card key={collection.id} className="hover:shadow-md transition-shadow flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                  <Folder className="h-5 w-5 text-muted-foreground" />
                  <Badge 
                    variant="secondary" 
                    className="flex items-center gap-1 text-xs"
                  >
                    {getVisibilityIcon(collection.visibility)}
                    {getVisibilityText(collection.visibility)}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1">
                  {collection.isFeatured && (
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Collection</DropdownMenuItem>
                      <DropdownMenuItem>Share Collection</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <CardTitle className="text-lg leading-tight">
                {collection.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {collection.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 space-y-3">
              {/* Sample Items */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Sample Items:</h4>
                <div className="space-y-1">
                  {collection.items.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                      <span className="flex-1 truncate">{item.title}</span>
                    </div>
                  ))}
                  {collection.items.length > 3 && (
                    <div className="text-xs text-muted-foreground">
                      +{collection.items.length - 3} more items
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {collection.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-4 border-t">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Download className="h-3 w-3" />
                  <span>{collection.downloads}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3" />
                  <span>{collection.likes}</span>
                </div>
                <div>
                  {collection.itemCount} items
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                View Collection
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {userCollections.length === 0 && (
        <div className="text-center py-12">
          <Folder className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No collections yet</h3>
          <p className="text-muted-foreground mb-4">
            {username} hasn`&apos;`t created any collections yet.
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Collection
          </Button>
        </div>
      )}
    </div>
  );
}