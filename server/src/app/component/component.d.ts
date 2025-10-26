import { Types } from "mongoose";

export enum Framework {
  REACT = "react",
  REACT_NATIVE = "react-native",
}

export enum ComponentComplexity {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
}

export interface ComponentFile {
  filename: string;
  code: string;
  language: "typescript" | "javascript";
}


export interface ComponentDependencies {
  name: string;
  version: string;
}

export interface ComponentModel {
  // Basic Information
  _id?: Types.ObjectId;
  title: string;
  description: string;
  shortDescription: string;

  // Technical Specifications
  framework: Framework;
  category: Types.ObjectId;
  complexity: ComponentComplexity;
  tags: string[];

  // Code & Files
  files: ComponentFile[];
  mainFile: string;
  installation: string;
  // Dependencies
  dependencies: ComponentDependencies[];
  peerDependencies: ComponentDependencies[];
  devDependencies: ComponentDependencies[];

  // Demo & Documentation
  documentation: string;

  // Quality Metrics
  bundleSize: number;
  hasTypescript: boolean;

  // Author Reference
  author: Types.ObjectId;

  // Metadata
  isPublished: boolean;
  isFeatured: boolean;
  license: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;

  // SEO & Discovery
  slug: string;
  keywords: string[];
}

// Component creation DTO
export interface CreateComponentDTO {
  title: string;
  description: string;
  shortDescription: string;
  framework: Framework;
  category: ComponentCategory;
  complexity: ComponentComplexity;
  tags: string[];
  files: ComponentFile[];
  mainFile: string;
  installation: string;
  usage: string;
  dependencies: ComponentDependencies[];
  peerDependencies: ComponentDependencies[];
  devDependencies: ComponentDependencies[];
  documentation: string;
  bundleSize: number;
  license: string;
}

// Component filters for search
export interface ComponentFilters {
  framework?: Framework;
  category?: ComponentCategory;
  tags?: string[];
  searchQuery?: string;
  author?: Types.ObjectId;
}

// API Responses
export interface ComponentListResponse {
  components: ComponentListing[];
  total: number;
  page: number;
  limit: number;
}
