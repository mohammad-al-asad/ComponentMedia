import { Types } from "mongoose";

export enum PostType {
  COMPONENT_SHARE = "component_share",
  MEDIA = "media",
  CODE = "code",
  UPDATE = "update",
  DISCUSSION = "discussion",
}

export interface Comment {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  text: string;
  likes: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PostStats {
  likes: Types.ObjectId[];
  comments: Comment[];
  shares: number;
  downloads: number;
  views: number;
}

export interface PostModel {
  // Basic Information
  _id?: Types.ObjectId;
  title: string;
  content: string;
  type: PostType;

  // Component Reference (if it's a component share post)
  component?: Types.ObjectId;

  // Author Reference
  author: Types.ObjectId;

  // Media & Attachments
  images?: string[];
  video?: string;
  codeSnippets?: {
    language: string;
    code: string;
    filename?: string;
  }[];

  // Tags & Categories
  tags: string[];
  category: Types.ObjectId;

  // Engagement Stats
  stats: PostStats;

  // Metadata
  isPublished: boolean;
  isFeatured: boolean;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;

  // SEO
  slug: string;
}

// Post creation DTO
export interface CreatePostDTO {
  title: string;
  content: string;
  type: PostType;
  component?: Types.ObjectId;
  tags: string[];
  category: string;
  images?: string[];
  video?: string;
  codeSnippets?: {
    language: string;
    code: string;
    filename?: string;
  }[];
}

// Post filters for search
export interface PostFilters {
  type?: PostType;
  tags?: string[];
  category?: string;
  author?: Types.ObjectId;
  hasComponent?: boolean;
  searchQuery?: string;
}

// API Responses
export interface PostListResponse {
  posts: PostListing[];
  total: number;
  page: number;
  limit: number;
}
