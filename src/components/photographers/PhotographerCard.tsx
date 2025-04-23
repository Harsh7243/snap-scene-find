
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar, MapPin, Star, DollarSign } from "lucide-react";

interface PhotographerCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  pricePerHour: number;
  imageUrl: string;
  featured?: boolean;
}

export function PhotographerCard({
  id,
  name,
  location,
  rating,
  reviewCount,
  specialties,
  pricePerHour,
  imageUrl,
  featured = false,
}: PhotographerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 h-full",
        featured ? "border-primary/50" : "border-border",
        isHovered && "transform scale-[1.02] shadow-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        {featured && (
          <div className="absolute top-2 left-2 z-10">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
        )}
        <img 
          src={imageUrl} 
          alt={`${name}'s portfolio`}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/photographer/${id}`} className="hover:underline">
              <h3 className="text-lg font-bold">{name}</h3>
            </Link>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span>{rating}</span>
            <span className="text-muted-foreground text-xs ml-1">({reviewCount})</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-1 mb-3">
          {specialties.slice(0, 3).map((specialty) => (
            <Badge key={specialty} variant="outline" className="text-xs">
              {specialty}
            </Badge>
          ))}
          {specialties.length > 3 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="text-xs">
                    +{specialties.length - 3} more
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-sm">
                    {specialties.slice(3).join(", ")}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm">
            <DollarSign className="w-4 h-4 mr-1 text-accent" />
            <span className="font-medium">${pricePerHour}</span>
            <span className="text-muted-foreground">/hr</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-1 text-accent" />
            <span className="text-muted-foreground">Check Availability</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full flex space-x-2">
          <Link to={`/photographer/${id}`} className="flex-1">
            <Button variant="outline" className="w-full">View Profile</Button>
          </Link>
          <Link to={`/book/${id}`} className="flex-1">
            <Button className="w-full">Book Now</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

// Helper function to conditionally merge class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
