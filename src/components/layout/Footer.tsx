
import { Link } from "react-router-dom";
import { Camera, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-photo-dark-purple border-t border-white/10 py-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Camera className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-gradient">SnapBook</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting talented photographers with clients looking for the perfect shot.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/how-it-works" className="text-foreground/70 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-foreground/70 hover:text-primary transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link to="/cancellation-policy" className="text-foreground/70 hover:text-primary transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-foreground/70 hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">For Photographers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/join-as-photographer" className="text-foreground/70 hover:text-primary transition-colors">
                  Join as a Photographer
                </Link>
              </li>
              <li>
                <Link to="/photographer-resources" className="text-foreground/70 hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/photographer-community" className="text-foreground/70 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/photographer-faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help-center" className="text-foreground/70 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} SnapBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
