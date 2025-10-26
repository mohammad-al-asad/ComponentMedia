import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import type { User } from './user.js';

const SocialLinksSchema = new Schema({
  github: { type: String },
  twitter: { type: String },
  linkedin: { type: String },
  portfolio: { type: String },
  website: { type: String }
});

const UserStatsSchema = new Schema({
  componentsPosted: { type: Number, default: 0 },
  postsCreated: { type: Number, default: 0 },
  totalDownloads: { type: Number, default: 0 },
  totalLikes: { type: Number, default: 0 },
  totalComments: { type: Number, default: 0 },
  reputation: { type: Number, default: 0 }
});

const userSchema = new Schema<User>({
  // Basic Information
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  
  // Profile Information
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  avatar: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    maxlength: 500
  },
  location: {
    type: String,
    trim: true
  },
  
  // Professional Information
  skills: [{
    type: String,
    trim: true
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  
  // Social & Links
  socialLinks: {
    type: SocialLinksSchema,
    default: () => ({})
  },
  
  // User Role & Status
  role: {
    type: String,
    enum: ['developer', 'admin', 'provider'],
    default: 'developer'
  },
  status: {
    type: String,
    enum: ['active', 'inactive','banned'],
    default: 'active'
  },
  isPro: {
    type: Boolean,
    default: false
  },
  
  // Statistics
  stats: {
    type: UserStatsSchema,
    default: () => ({})
  },
  
  // Following System
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  // Bookmarks
  bookmarkedComponents: [{
    type: Schema.Types.ObjectId,
    ref: 'Component'
  }],
  bookmarkedPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  
  // Last Login
  lastLoginAt: {
    type: Date
  },
  
  // Email Verification
  emailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: {
    type: String
  },
  emailVerificationExpires: {
    type: Date
  },
  
  // Password Reset
  passwordResetToken: {
    type: String
  },
  passwordResetExpires: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for better search performance
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ 'stats.reputation': -1 });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function(enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Virtual for full name
userSchema.virtual('fullName').get(function() {
  return `${this.firstName || ''} ${this.lastName || ''}`.trim();
});

// Method to get public profile
userSchema.methods.getPublicProfile = function() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.emailVerificationToken;
  delete userObject.emailVerificationExpires;
  delete userObject.passwordResetToken;
  delete userObject.passwordResetExpires;
  return userObject;
};

export default mongoose.model<User>('User', userSchema);