"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Building,
  Briefcase,
  Calendar,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Mail,
  Shield,
  Crown
} from "lucide-react";

interface User {
  _id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  company?: string;
  jobTitle?: string;
  skills: string[];
  technologies: string[];
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    portfolio?: string;
    website?: string;
  };
  role: string;
  status: string;
  isPro: boolean;
  isVerified: boolean;
  following: string[];
  followers: string[];
  createdAt: Date;
  lastLoginAt?: Date;
}

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  
  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username;
  const joinedDate = user.createdAt.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long' 
  });

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessage = () => {
    // Implement message functionality
    console.log('Message user:', user.username);
  };

  return (
    <div className="bg-card rounded-lg border shadow-sm">
      {/* Cover Photo */}
      <div className="h-48 bg-linear-to-r from-blue-500 to-purple-600 rounded-t-lg"></div>
      
      {/* Profile Info */}
      <div className="px-6 pb-6">
        {/* Avatar and Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-20 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                {fullName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold">{fullName}</h1>
                {user.isVerified && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
                {user.isPro && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    <Crown className="h-3 w-3 mr-1" />
                    Pro
                  </Badge>
                )}
              </div>
              <p className="text-xl text-muted-foreground">@{user.username}</p>
              <p className="text-lg max-w-2xl">{user.bio}</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" onClick={handleMessage}>
              <Mail className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button 
              onClick={handleFollow}
              variant={isFollowing ? "outline" : "default"}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
        </div>

        {/* User Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {user.location && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{user.location}</span>
            </div>
          )}
          
          {user.company && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Building className="h-4 w-4" />
              <span>{user.company}</span>
            </div>
          )}
          
          {user.jobTitle && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>{user.jobTitle}</span>
            </div>
          )}
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Joined {joinedDate}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          {user.socialLinks.github && (
            <a 
              href={user.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {user.socialLinks.twitter && (
            <a 
              href={user.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {user.socialLinks.linkedin && (
            <a 
              href={user.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {user.socialLinks.portfolio && (
            <a 
              href={user.socialLinks.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* Skills & Technologies */}
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {user.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}