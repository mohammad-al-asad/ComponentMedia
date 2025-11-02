import { ProfileHeader } from '@/components/profile-header';
import { ProfileStats } from '@/components/profile-stats';
import { ProfileTabs } from '@/components/profile-tabs';
import { notFound } from 'next/navigation';

// Mock user data - replace with actual API call
async function getUserData(username: string) {
  // Simulate API call
  const users = {
    sarahdev: {
      _id: "1",
      username: "sarahdev",
      firstName: "Sarah",
      lastName: "Developer",
      email: "sarah@example.com",
      avatar: "",
      bio: "Senior Frontend Developer | React Enthusiast | Open Source Contributor | Building amazing UI components",
      location: "San Francisco, CA",
      company: "Tech Corp",
      jobTitle: "Senior React Developer",
      skills: ["React", "TypeScript", "Next.js", "Node.js", "UI/UX"],
      technologies: ["React", "React Native", "Tailwind CSS", "GraphQL"],
      socialLinks: {
        github: "https://github.com/sarahdev",
        twitter: "https://twitter.com/sarahdev",
        linkedin: "https://linkedin.com/in/sarahdev",
        portfolio: "https://sarahdev.com"
      },
      stats: {
        componentsPosted: 24,
        postsCreated: 42,
        totalDownloads: 15420,
        totalLikes: 3245,
        totalComments: 867,
        reputation: 1842
      },
      role: "developer",
      status: "active",
      isPro: true,
      isVerified: true,
      following: ["2", "3"],
      followers: ["4", "5", "6", "7"],
      createdAt: new Date("2022-01-15"),
      lastLoginAt: new Date()
    },
    mikecoder: {
      _id: "2",
      username: "mikecoder",
      firstName: "Mike",
      lastName: "Coder",
      email: "mike@example.com",
      avatar: "",
      bio: "Full-stack developer passionate about React Native and mobile development",
      location: "New York, NY",
      company: "Mobile First Inc",
      jobTitle: "React Native Developer",
      skills: ["React Native", "JavaScript", "Firebase", "Mobile Development"],
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      socialLinks: {
        github: "https://github.com/mikecoder",
        twitter: "https://twitter.com/mikecoder",
        linkedin: "https://linkedin.com/in/mikecoder"
      },
      stats: {
        componentsPosted: 12,
        postsCreated: 28,
        totalDownloads: 8420,
        totalLikes: 1567,
        totalComments: 423,
        reputation: 923
      },
      role: "developer",
      status: "active",
      isPro: false,
      isVerified: true,
      following: ["1", "3"],
      followers: ["8", "9"],
      createdAt: new Date("2022-03-20"),
      lastLoginAt: new Date()
    }
  };

  return users[username as keyof typeof users] || null;
}

interface ProfilePageProps {
  params: {
    username: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
    const {username} = await params
  const user = await getUserData(username);

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="py-6 w-full">
        {/* Profile Header */}
        <ProfileHeader user={user} />
        
        {/* Profile Stats */}
        <ProfileStats stats={user.stats} />
        
        {/* Profile Content Tabs */}
        <ProfileTabs username={user.username} />
      </div>
    </div>
  );
}