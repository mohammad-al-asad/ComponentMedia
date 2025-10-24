// app/page.tsx
"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, TrendingUp, Clock } from "lucide-react";
import { PostFeed } from "@/components/post-feed";
import { CreatePost } from "@/components/create-post";
import { TrendingSidebar } from "@/components/trending-sidebar";

export default function HomePage() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content - 3 columns on large screens */}
        <div className="lg:col-span-3 space-y-6">
          {/* Create Post Card */}
          <div className="bg-card rounded-lg border p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <span className="text-sm font-medium">U</span>
              </div>
              <Button
                variant="outline"
                className="flex-1 justify-start text-muted-foreground hover:text-foreground"
                onClick={() => setShowCreatePost(true)}
              >
                Share a component or start a discussion...
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Post
              </Button>
            </div>
          </div>

          {/* Feed Tabs */}
          <Tabs defaultValue="trending" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trending" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recent
              </TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
            
            <TabsContent value="trending" className="mt-6">
              <PostFeed type="trending" />
            </TabsContent>
            
            <TabsContent value="recent" className="mt-6">
              <PostFeed type="recent" />
            </TabsContent>
            
            <TabsContent value="following" className="mt-6">
              <PostFeed type="following" />
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar - 1 column on large screens */}
        <div className="lg:col-span-1 space-y-6">
          <TrendingSidebar />
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePost onClose={() => setShowCreatePost(false)} />
      )}
    </div>
  );
}