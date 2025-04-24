import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, User, Camera } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-photo-dark-purple/80 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Camera className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-gradient">SnapBook</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/discover" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Discover
            </Link>
            <Link to="/categories" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/how-it-works" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search photographers, locations..." 
                className="pl-9 w-[300px] bg-background/50 border-muted"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex" 
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          {loading ? (
            <div className="w-24 h-8 bg-muted/20 animate-pulse rounded-md"></div>
          ) : !user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/bookings" className="w-full">My Bookings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="w-full text-left" onClick={handleSignOut}>
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
