
import { Link } from "react-router-dom";
import { Search, Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-stream-dark border-b border-stream-lighter">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <span className="text-stream font-bold text-xl">StreamHub</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            <Link to="/browse" className="px-3 py-2 rounded-md hover:bg-stream-light transition">Browse</Link>
            <Link to="/categories" className="px-3 py-2 rounded-md hover:bg-stream-light transition">Categories</Link>
          </div>
        </div>
        
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Input 
              placeholder="Search" 
              className="w-full bg-stream-lighter border-none pl-10 pr-4 h-9 text-sm focus-visible:ring-stream" 
            />
            <Search className="absolute left-3 top-2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="purple" className="hidden md:flex bg-stream hover:bg-stream-hover">
            Log In
          </Button>
          
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-stream-light border-b border-stream-lighter py-2 px-4">
          <div className="flex flex-col space-y-2">
            <Link to="/browse" className="px-3 py-2 rounded-md hover:bg-stream-lighter">Browse</Link>
            <Link to="/categories" className="px-3 py-2 rounded-md hover:bg-stream-lighter">Categories</Link>
            <div className="relative w-full py-2">
              <Input 
                placeholder="Search" 
                className="w-full bg-stream-lighter border-none pl-10 pr-4 h-9 text-sm" 
              />
              <Search className="absolute left-3 top-[18px] h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
