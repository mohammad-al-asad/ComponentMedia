// components/post-card.tsx
"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  MessageCircle,
  Share,
  Download,
  Bookmark,
  MoreHorizontal,
  Eye,
  Code,
  Calendar,
  BarChart3,
  Play,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComponentPreview } from "./component-preview";
import Link from "next/link";

interface PostAuthor {
  name: string;
  avatar?: string;
  username: string;
}

interface PostStats {
  likes: number;
  comments: number;
  downloads: number;
  shares: number;
  views?: number;
}

interface Post {
  id: string;
  title: string;
  content: string;
  author: PostAuthor;
  type: "component" | "discussion" | "tutorial" | "update";
  stats: PostStats;
  createdAt: Date;
  tags: string[];
  component?: {
    framework: "react" | "react-native";
    previewImage?: string;
    codeSnippet?: string;
    props?: Array<{
      name: string;
      type: string;
      defaultValue?: string;
      required: boolean;
      description: string;
    }>;
    dependencies?: string[];
    installation?: string;
  };
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.stats.likes);
  const [activeTab, setActiveTab] = useState("preview");

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) {
      return "Just now";
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case "component":
        return <Code className="h-4 w-4" />;
      case "discussion":
        return <MessageCircle className="h-4 w-4" />;
      case "tutorial":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Eye className="h-4 w-4" />;
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case "component":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "discussion":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "tutorial":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  // Mock code snippet for demonstration
  const defaultCodeSnippet = `import React from 'react';

const AwesomeButton = ({ 
  children, 
  variant = 'primary',
  onClick 
}) => {
  return (
    <button 
      className={\`btn \${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AwesomeButton;`;

  const codeSnippet = post.component?.codeSnippet || defaultCodeSnippet;

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Link href={`/profile/${post.author.username}`}>
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {post.author.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            </Link>
            <div className="flex-1 space-y-1">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold">{post.author.name}</p>
                <Badge
                  variant="secondary"
                  className={`text-xs capitalize ${getPostTypeColor(
                    post.type
                  )}`}
                >
                  <span className="flex items-center gap-1">
                    {getPostTypeIcon(post.type)}
                    {post.type}
                  </span>
                </Badge>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>@{post.author.username}</span>
                <span>•</span>
                <span>{formatTimeAgo(post.createdAt)}</span>
              </div>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Save post</DropdownMenuItem>
              <DropdownMenuItem>Copy link</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg leading-tight">{post.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {post.content}
          </p>

          {/* Component Tabs (only for component posts) */}
          {post.type === "component" && post.component && (
            <div className="border rounded-lg overflow-hidden">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 rounded-none border-b">
                  <TabsTrigger
                    value="preview"
                    className="flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Code
                  </TabsTrigger>
                  <TabsTrigger
                    value="stats"
                    className="flex items-center gap-2"
                  >
                    <BarChart3 className="h-4 w-4" />
                    Stats
                  </TabsTrigger>
                </TabsList>
                {/* Preview Tab */}
                <TabsContent value="preview" className="p-0 m-0">
                  <div className="p-4 bg-muted/20">
                    {post.type === "component" && post.component && (
                      <ComponentPreview
                        code={post.component.codeSnippet || ""}
                        framework={post.component.framework}
                      />
                    )}
                  </div>
                </TabsContent>
                {/* Code Tab */}
                <TabsContent value="code" className="p-0 m-0">
                  <div className="p-4 bg-gray-900 text-gray-100 font-mono text-sm overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{codeSnippet}</pre>
                  </div>
                  <div className="p-3 bg-muted/20 border-t flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="outline" className="capitalize">
                        {post.component.framework}
                      </Badge>
                      <span>
                        {post.component.dependencies?.length || 0} dependencies
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Code className="h-4 w-4 mr-2" />
                        Copy Code
                      </Button>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                {/* Stats Tab */}
                <TabsContent value="stats" className="p-0 m-0">
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {post.stats.downloads}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Downloads
                        </div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {likeCount}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Likes
                        </div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {post.stats.comments}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Comments
                        </div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">
                          {post.stats.shares}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Shares
                        </div>
                      </div>
                    </div>

                    {/* Additional Stats */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">
                        Component Details
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Framework:
                          </span>
                          <span className="font-medium capitalize">
                            {post.component.framework}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Version:
                          </span>
                          <span className="font-medium">1.0.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            License:
                          </span>
                          <span className="font-medium">MIT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Last Updated:
                          </span>
                          <span className="font-medium">
                            {formatTimeAgo(post.createdAt)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-3">
        {/* Stats */}
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span>{likeCount} likes</span>
            <span>{post.stats.comments} comments</span>
            {post.type === "component" && (
              <span>{post.stats.downloads} downloads</span>
            )}
            <span>{post.stats.shares} shares</span>
          </div>
          {post.stats.views && <span>{post.stats.views} views</span>}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between w-full border-t pt-3">
          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 justify-center ${isLiked ? "text-red-500" : ""}`}
            onClick={handleLike}
          >
            <Heart
              className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`}
            />
            Like
          </Button>

          <Button variant="ghost" size="sm" className="flex-1 justify-center">
            <MessageCircle className="h-4 w-4 mr-2" />
            Comment
          </Button>

          {post.type === "component" ? (
            <Button variant="ghost" size="sm" className="flex-1 justify-center">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          ) : (
            <Button variant="ghost" size="sm" className="flex-1 justify-center">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 justify-center ${
              isBookmarked ? "text-blue-500" : ""
            }`}
            onClick={handleBookmark}
          >
            <Bookmark
              className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-current" : ""}`}
            />
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
