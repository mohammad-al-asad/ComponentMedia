// components/user-posts.tsx
import { PostCard } from './post-card';

// Mock data - reuse from PostFeed with user filtering
const userPosts = [
  {
    id: "1",
    title: "Just created an amazing animated button component! 🎉",
    content: "Check out this smooth hover animation with gradient effects. Perfect for modern web apps.",
    author: {
      name: "Sarah Developer",
      avatar: "",
      username: "sarahdev"
    },
    type: "component" as const,
    stats: {
      likes: 142,
      comments: 28,
      downloads: 1156,
      shares: 34,
      views: 2540
    },
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    tags: ["react", "animation", "ui", "button", "typescript"],
    component: {
      framework: "react" as const,
      codeSnippet: `// Component code here...`,
      props: [],
      dependencies: ["react"],
      installation: "npm install @sarahdev/animated-button"
    }
  }
  // Add more user-specific posts...
];

interface UserPostsProps {
  username: string;
}

export function UserPosts({ username }: UserPostsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Posts by {username}</h2>
      
      <div className="space-y-6">
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {userPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground">
            {username} hasn`&apos;`t created any posts yet.
          </div>
        </div>
      )}
    </div>
  );
}