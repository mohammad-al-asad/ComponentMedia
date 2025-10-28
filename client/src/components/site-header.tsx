// components/site-header.tsx
"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Sun, 
  Moon, 
  Search, 
  Plus,
  Home,
  Component,
  TrendingUp,
  User
} from "lucide-react";

export function SiteHeader() {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-primary rounded-lg" />
            <span className="font-bold text-xl">Component Media</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link href="/components" className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60">
            <Component className="h-4 w-4" />
            <span>Components</span>
          </Link>
          <Link href="/trending" className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60">
            <TrendingUp className="h-4 w-4" />
            <span>Trending</span>
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search components..."
                className="pl-8 w-full md:w-[200px] lg:w-[300px]"
              />
            </div>
          </div>

          {/* Create Post Button */}
          <Button className="hidden sm:flex">
            <Plus className="h-4 w-4 mr-2" />
            Create Post
          </Button>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Avatar */}
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}