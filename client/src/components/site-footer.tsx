// components/site-footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Heart,
  Code2,
  Users,
  BookOpen,
  Mail
} from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded-lg" />
              <span className="font-bold text-xl">ReactVerse</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              The social platform for React developers to share, discover, and collaborate on amazing UI components.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/components" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Code2 className="h-4 w-4" />
                  Components
                </Link>
              </li>
              <li>
                <Link 
                  href="/trending" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Users className="h-4 w-4" />
                  Trending
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  href="/community" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Users className="h-4 w-4" />
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/tutorials" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link 
                  href="/templates" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link 
                  href="/showcase" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Showcase
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/help" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by the React community</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>&copy; {currentYear} ReactVerse. All rights reserved.</span>
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                12K+ Developers
              </span>
              <span className="flex items-center gap-1">
                <Code2 className="h-3 w-3" />
                5K+ Components
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}