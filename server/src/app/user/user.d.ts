import type { Types } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "provider" | "user" | "admin";
  profilePicture?: string;
  phone?: string;
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRegisterInput = {
  name: string;
  email: string;
  password: string;
  role: "user" | "provider";
};

export type UserLoginInput = {
  email: string;
  password: string;
};

// New

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BANNED = "banned",
}

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  portfolio?: string;
  website?: string;
}

export interface UserStats {
  componentsPosted: number;
  postsCreated: number;
  totalDownloads: number;
  totalLikes: number;
  totalComments: number;
  reputation: number;
}

export interface User {
  // Basic Information
  _id?: Types.ObjectId;
  username: string;
  email: string;
  password: string;

  // Profile Information
  firstName?: string;
  lastName?: string;
  avatar?: string;
  bio?: string;
  location?: string;

  // Professional Information
  skills: string[];
  technologies: string[];

  // Social & Links
  socialLinks: SocialLinks;

  // User Role & Status
  role: "developer" | "admin" | "provider";
  status: "active" | "inactive" | "banned";
  isPro: boolean;

  // Statistics
  stats: UserStats;

  // Following System
  following: Types.ObjectId[];
  followers: Types.ObjectId[];

  // Bookmarks
  bookmarkedComponents: Types.ObjectId[];
  bookmarkedPosts: Types.ObjectId[];

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;

  // Email Verification
  emailVerified: boolean;
  emailVerificationToken?: string;
  emailVerificationExpires?: Date;

  // Password Reset
  passwordResetToken?: string;
  passwordResetExpires?: Date;
}

// User creation DTO (registration)
export interface CreateUserDTO {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

// User update DTO (profile editing)
export interface UpdateUserDTO {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  skills?: string[];
  technologies?: string[];
  socialLinks?: SocialLinks;
  preferences?: Partial<UserPreferences>;
}

// User login DTO
export interface LoginUserDTO {
  email: string;
  password: string;
}

// User change password DTO
export interface ChangePasswordDTO {
  currentPassword: string;
  newPassword: string;
}

// User stats update payload
export interface UserStatsUpdate {
  componentsPosted?: number;
  postsCreated?: number;
  totalDownloads?: number;
  totalLikes?: number;
  totalComments?: number;
  reputation?: number;
}

// Follow/unfollow DTO
export interface FollowUserDTO {
  targetUserId: Types.ObjectId;
  currentUserId: Types.ObjectId;
}

// User search filters
export interface UserFilters {
  searchQuery?: string;
  skills?: string[];
  technologies?: string[];
  role?: UserRole;
  isPro?: boolean;
  emailVerified?: boolean;
}

// API Responses
export interface UserListResponse {
  users: PublicUserProfile[];
  total: number;
  page: number;
  limit: number;
}

// Bookmark DTO
export interface BookmarkDTO {
  userId: Types.ObjectId;
  componentId?: Types.ObjectId;
  postId?: Types.ObjectId;
}
