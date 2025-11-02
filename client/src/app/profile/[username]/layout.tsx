import type { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username} - ReactVerse`,
    description: `View ${username}'s profile on ReactVerse - Components, posts, and more.`,
  };
}

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return children;
}
