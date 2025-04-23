
import { Button } from "@/components/ui/button";
import { SearchFilters } from "@/components/ui/search-filters";
import { Camera, MapPin, Calendar, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?q=80&w=1470&auto=format&fit=crop" 
          alt="Photography background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-photo-overlay bg-gradient-to-b from-photo-dark-purple/90 to-photo-dark-charcoal/90"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10 pt-16 pb-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Find the Perfect Photographer for Every Moment
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-8">
            Connect with professional photographers specializing in weddings, portraits, events and more. Book with confidence and capture memories that last forever.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center">
              <Camera className="text-primary mr-2 h-5 w-5" />
              <span>10,000+ Photographers</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-primary mr-2 h-5 w-5" />
              <span>500+ Locations</span>
            </div>
            <div className="flex items-center">
              <Calendar className="text-primary mr-2 h-5 w-5" />
              <span>Instant Availability</span>
            </div>
            <div className="flex items-center">
              <Users className="text-primary mr-2 h-5 w-5" />
              <span>50,000+ Happy Clients</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SearchFilters />
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="link" className="text-foreground/80 hover:text-primary text-sm">
            Are you a photographer? <span className="text-primary underline ml-1">Join our network</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
