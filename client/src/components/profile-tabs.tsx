"use client";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  Code2, 
  MessageSquare, 
  Heart, 
  Folder, 
  Users
} from "lucide-react";
import { UserComponents } from './user-components';
import { UserPosts } from './user-posts';
import { UserLikes } from './user-likes';
import { UserCollections } from './user-collections';

interface ProfileTabsProps {
  username: string;
}

export function ProfileTabs({ username }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState("components");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="flex justify-center flex-wrap gap-4 w-full">
        <TabsTrigger value="components" className="flex items-center gap-2">
          <Code2 className="h-4 w-4" />
          <span className="hidden sm:inline">Components</span>
        </TabsTrigger>
        <TabsTrigger value="posts" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          <span className="hidden sm:inline">Posts</span>
        </TabsTrigger>
        <TabsTrigger value="likes" className="flex items-center gap-2">
          <Heart className="h-4 w-4" />
          <span className="hidden sm:inline">Likes</span>
        </TabsTrigger>
        <TabsTrigger value="collections" className="flex items-center gap-2">
          <Folder className="h-4 w-4" />
          <span className="hidden sm:inline">Collections</span>
        </TabsTrigger>
        <TabsTrigger value="following" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span className="hidden sm:inline">Following</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="components" className="mt-6">
        <UserComponents username={username} />
      </TabsContent>

      <TabsContent value="posts" className="mt-6">
        <UserPosts username={username} />
      </TabsContent>

      <TabsContent value="likes" className="mt-6">
        <UserLikes username={username} />
      </TabsContent>

      <TabsContent value="collections" className="mt-6">
        <UserCollections username={username} />
      </TabsContent>

      <TabsContent value="following" className="mt-6">
        <div className="text-center py-12">
          <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Following</h3>
          <p className="text-muted-foreground">
            See who {username} is following
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}