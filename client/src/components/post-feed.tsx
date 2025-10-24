import { PostCard } from "./post-card";

interface PostFeedProps {
  type: "trending" | "recent" | "following";
}

// Enhanced mock data with component details for tabs
const mockPosts = [
  {
    id: "1",
    title: "Just created an amazing animated button component! 🎉",
    content: "Check out this smooth hover animation with gradient effects. Perfect for modern web apps. Features include ripple effects, multiple variants, and full accessibility support.",
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
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    tags: ["react", "animation", "ui", "button", "typescript"],
    component: {
      framework: "react" as const,
      codeSnippet: `import React from 'react';
import './AnimatedButton.css';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={\`animated-btn \${variant} \${size} \${disabled ? 'disabled' : ''}\`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <span className="btn-content">{children}</span>
      <span className="btn-gradient"></span>
    </button>
  );
};

export default AnimatedButton;`,
      props: [
        {
          name: "variant",
          type: "'primary' | 'secondary' | 'danger'",
          defaultValue: "'primary'",
          required: false,
          description: "Button style variant"
        },
        {
          name: "size",
          type: "'sm' | 'md' | 'lg'",
          defaultValue: "'md'",
          required: false,
          description: "Button size"
        },
        {
          name: "onClick",
          type: "() => void",
          defaultValue: "undefined",
          required: false,
          description: "Click handler function"
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: "false",
          required: false,
          description: "Disable the button"
        }
      ],
      dependencies: ["react", "react-dom"],
      installation: "npm install @sarahdev/animated-button"
    }
  },
  {
    id: "2",
    title: "Need help with React Native navigation 🤔",
    content: "Having issues with nested navigators in React Native. When I try to navigate from a nested stack, the header disappears. Anyone faced similar problems or know a good solution?",
    author: {
      name: "Mike Coder",
      avatar: "",
      username: "mikecoder"
    },
    type: "discussion" as const,
    stats: {
      likes: 15,
      comments: 23,
      downloads: 0,
      shares: 1,
      views: 187
    },
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    tags: ["react-native", "help", "navigation", "stack-navigator"]
  },
  {
    id: "3",
    title: "Just published: Advanced Data Table with Virtual Scroll 📊",
    content: "After months of development, I'm excited to share my high-performance data table component. Features virtual scrolling, sorting, filtering, and customizable cells. Handles 10k+ rows smoothly!",
    author: {
      name: "Alex UI",
      avatar: "",
      username: "alexui"
    },
    type: "component" as const,
    stats: {
      likes: 89,
      comments: 15,
      downloads: 743,
      shares: 12,
      views: 1560
    },
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    tags: ["react", "data-table", "performance", "virtual-scroll", "typescript"],
    component: {
      framework: "react" as const,
      codeSnippet: `import React, { useMemo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

interface Column<T> {
  key: string;
  header: string;
  width?: number;
  render: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  height: number;
  rowHeight?: number;
}

function DataTable<T>({ 
  data, 
  columns, 
  height, 
  rowHeight = 48 
}: DataTableProps<T>) {
  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => document.getElementById('table-container'),
    estimateSize: () => rowHeight,
    overscan: 10,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div 
      id="table-container"
      style={{ height, overflow: 'auto' }}
    >
      <div style={{ height: virtualizer.getTotalSize() }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} style={{ width: col.width }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {virtualItems.map(virtualRow => {
              const item = data[virtualRow.index];
              return (
                <tr
                  key={virtualRow.index}
                  style={{
                    height: virtualRow.size,
                    transform: \`translateY(\${virtualRow.start}px)\`,
                  }}
                >
                  {columns.map(col => (
                    <td key={col.key}>
                      {col.render(item)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;`,
      props: [
        {
          name: "data",
          type: "T[]",
          defaultValue: "undefined",
          required: true,
          description: "Array of data items"
        },
        {
          name: "columns",
          type: "Column<T>[]",
          defaultValue: "undefined",
          required: true,
          description: "Column configuration"
        },
        {
          name: "height",
          type: "number",
          defaultValue: "undefined",
          required: true,
          description: "Table container height"
        },
        {
          name: "rowHeight",
          type: "number",
          defaultValue: "48",
          required: false,
          description: "Height of each row"
        }
      ],
      dependencies: ["react", "@tanstack/react-virtual"],
      installation: "npm install @alexui/advanced-table"
    }
  },
  {
    id: "4",
    title: "New React 18 Concurrent Features Tutorial 🚀",
    content: "Just published a comprehensive tutorial on React 18's concurrent features including useTransition, useDeferredValue, and Suspense. Includes practical examples and performance comparisons.",
    author: {
      name: "React Guru",
      avatar: "",
      username: "reactguru"
    },
    type: "tutorial" as const,
    stats: {
      likes: 67,
      comments: 12,
      downloads: 0,
      shares: 8,
      views: 892
    },
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    tags: ["react", "tutorial", "react-18", "concurrent", "performance"]
  },
  {
    id: "5",
    title: "Custom Bottom Sheet for React Native 📱",
    content: "A smooth, performant bottom sheet component for React Native with gesture handling, multiple snap points, and backdrop support. Perfect for modals, menus, and action sheets.",
    author: {
      name: "Mobile Master",
      avatar: "",
      username: "mobilemaster"
    },
    type: "component" as const,
    stats: {
      likes: 203,
      comments: 42,
      downloads: 892,
      shares: 25,
      views: 2100
    },
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    tags: ["react-native", "mobile", "bottom-sheet", "gestures", "ui"],
    component: {
      framework: "react-native" as const,
      codeSnippet: `import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const BOTTOM_SHEET_HEIGHT = 400;

const BottomSheet = ({ children, isVisible, onClose }) => {
  const translateY = useRef(new Animated.Value(BOTTOM_SHEET_HEIGHT)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        translateY.setValue(Math.max(0, gestureState.dy));
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100 || gestureState.vy > 0.5) {
          onClose();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  React.useEffect(() => {
    if (isVisible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <View style={styles.backdrop} />
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.handle} />
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: BOTTOM_SHEET_HEIGHT,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default BottomSheet;`,
      props: [
        {
          name: "isVisible",
          type: "boolean",
          defaultValue: "undefined",
          required: true,
          description: "Controls bottom sheet visibility"
        },
        {
          name: "onClose",
          type: "() => void",
          defaultValue: "undefined",
          required: true,
          description: "Callback when bottom sheet is closed"
        },
        {
          name: "children",
          type: "React.ReactNode",
          defaultValue: "undefined",
          required: true,
          description: "Bottom sheet content"
        }
      ],
      dependencies: ["react", "react-native"],
      installation: "npm install @mobilemaster/bottom-sheet"
    }
  }
];

// Filter posts based on type (in a real app, this would be an API call)
const getFilteredPosts = (type: PostFeedProps["type"]) => {
  switch (type) {
    case "trending":
      return mockPosts.filter(post => 
        post.stats.downloads > 500 || post.stats.likes > 100
      );
    case "recent":
      return mockPosts.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "following":
      // Mock: return posts from specific authors you might follow
      return mockPosts.filter(post => 
        ["sarahdev", "alexui"].includes(post.author.username)
      );
    default:
      return mockPosts;
  }
};

export function PostFeed({ type }: PostFeedProps) {
  const posts = getFilteredPosts(type);

  return (
    <div className="space-y-6">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <div className="text-center py-12">
          <div className="text-muted-foreground">
            No posts found. {type === "following" && "Try following some developers to see their posts here!"}
          </div>
        </div>
      )}
    </div>
  );
}