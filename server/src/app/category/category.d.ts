// types/category.ts
import { Types } from 'mongoose';

export interface CategoryModel {
  // Basic Information
  _id?: Types.ObjectId;
  name: string;
  description: string;
  slug: string;
  
  // Metadata
  icon?: string;
  color?: string;
  
  // Statistics (can be populated on demand)
  componentCount?: number;
  postCount?: number;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

// Predefined categories for the platform
export const PREDEFINED_CATEGORIES: CreateCategoryDTO[] = [
  {
    name: 'UI Components',
    description: 'User interface elements like buttons, cards, and layouts',
    icon: '🎨',
    color: '#3B82F6',
    order: 1
  },
  {
    name: 'Forms',
    description: 'Input fields, validation, and form handling components',
    icon: '📝',
    color: '#10B981',
    order: 2
  },
  {
    name: 'Navigation',
    description: 'Menus, breadcrumbs, tabs, and routing components',
    icon: '🧭',
    color: '#F59E0B',
    order: 3
  },
  {
    name: 'Data Display',
    description: 'Tables, lists, charts, and data visualization components',
    icon: '📊',
    color: '#EF4444',
    order: 4
  },
  {
    name: 'Feedback',
    description: 'Loaders, modals, notifications, and alert components',
    icon: '💬',
    color: '#8B5CF6',
    order: 5
  },
  {
    name: 'Layout',
    description: 'Grid systems, containers, and structural components',
    icon: '📐',
    color: '#06B6D4',
    order: 6
  },
  {
    name: 'Animation',
    description: 'Motion, transitions, and interactive animation components',
    icon: '✨',
    color: '#EC4899',
    order: 7
  },
  {
    name: 'Hooks',
    description: 'Custom React hooks for various functionalities',
    icon: '🪝',
    color: '#84CC16',
    order: 8
  },
  {
    name: 'Utilities',
    description: 'Helper functions, helpers, and utility components',
    icon: '🛠️',
    color: '#6B7280',
    order: 9
  }
];