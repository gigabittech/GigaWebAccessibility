import { Accessibility } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center">
              <Accessibility className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Giga Web Accessibility
            </span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Giga Web Accessibility. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}