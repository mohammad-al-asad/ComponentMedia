// components/simple-component-preview.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Code, Eye } from "lucide-react";

interface SimpleComponentPreviewProps {
  code: string;
  framework: "react" | "react-native";
}

// Pre-built component examples that match our mock data
const PREVIEW_COMPONENTS: { [key: string]: React.ComponentType } = {
  // Animated Button
  AnimatedButton: () => (
    <div className="space-y-4 p-6 rounded-lg bg-background">
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Primary Button
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Secondary
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Danger
        </button>
      </div>
      <div className="text-center text-sm text-muted-foreground">
        Hover and click to see animations
      </div>
    </div>
  ),

  // Data Table
  DataTable: () => (
    <div className="p-4 bg-background border rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 font-medium">Name</th>
              <th className="text-left p-3 font-medium">Email</th>
              <th className="text-left p-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {["John Doe", "Jane Smith", "Mike Johnson"].map((name, i) => (
              <tr key={i} className="border-b hover:bg-gray-500">
                <td className="p-3">{name}</td>
                <td className="p-3">
                  {name.toLowerCase().replace(" ", ".")}@example.com
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      i === 0
                        ? "bg-green-100 text-green-800"
                        : i === 1
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {i === 0 ? "Active" : i === 1 ? "Pending" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),

  // Bottom Sheet
  BottomSheet: () => (
    <div className="relative h-48 border rounded-lg overflow-hidden">
      <div className="absolute bottom-0 bg-background left-0 right-0 border-t rounded-t-2xl shadow-lg">
        <div className="w-12 h-1 bg-gray-300 rounded mx-auto mt-3"></div>
        <div className="p-4">
          <h3 className="font-semibold mb-2">Bottom Sheet</h3>
          <p className="text-sm text-muted-foreground">
            Drag up for more options
          </p>
          <div className="flex space-x-2 mt-3">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm">
              Option 1
            </button>
            <button className="flex-1 bg-gray-500 text-white py-2 rounded-lg text-sm">
              Option 2
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Fallback component
const FallbackPreview = () => (
  <div className="text-center p-8 space-y-3">
    <Code className="h-12 w-12 mx-auto text-muted-foreground" />
    <div>
      <p className="font-medium">Component Preview</p>
      <p className="text-sm text-muted-foreground">
        This component would render here in a live environment
      </p>
    </div>
  </div>
);

export function ComponentPreview({
  code,
  framework,
}: SimpleComponentPreviewProps) {
  const [view, setView] = useState<"preview" | "code">("preview");

  // Extract component name and determine which preview to show
  const getComponentName = (code: string): string => {
    if (code.includes("AnimatedButton")) return "AnimatedButton";
    if (code.includes("DataTable")) return "DataTable";
    if (code.includes("BottomSheet")) return "BottomSheet";
    return "Unknown";
  };

  const componentName = getComponentName(code);
  const PreviewComponent = PREVIEW_COMPONENTS[componentName] || FallbackPreview;

  return (
    <div className="space-y-3">
      {/* Content */}
      <div className="border rounded-lg bg-background min-h-[200px] flex items-center justify-center">
        <div className="w-full p-4">
          <PreviewComponent />
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>
          {framework === "react-native" ? "Mobile component" : "Web component"}
        </span>
        <Button variant="outline" size="sm">
          <Play className="h-4 w-4 mr-2" />
          Open in Sandbox
        </Button>
      </div>
    </div>
  );
}
