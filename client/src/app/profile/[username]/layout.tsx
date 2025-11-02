import type { Metadata } from 'next';

interface ProfileLayoutProps {
  children: React.ReactNode;
  params: {
    username: string;
  };
}

export async function generateMetadata({ params }: ProfileLayoutProps): Promise<Metadata> {
  const {username} = await params
  return {
    title: `${username} - ReactVerse`,
    description: `View ${username}'s profile on ReactVerse - Components, posts, and more.`,
  };
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return children;
}