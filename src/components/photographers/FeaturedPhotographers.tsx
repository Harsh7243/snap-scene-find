
import { PhotographerCard } from "./PhotographerCard";

const FEATURED_PHOTOGRAPHERS = [
  {
    id: "1",
    name: "Emma Johnson",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 124,
    specialties: ["Wedding", "Portrait", "Event"],
    pricePerHour: 150,
    imageUrl: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviewCount: 97,
    specialties: ["Commercial", "Fashion", "Product"],
    pricePerHour: 200,
    imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Sophia Williams",
    location: "Chicago, IL",
    rating: 4.7,
    reviewCount: 86,
    specialties: ["Baby", "Family", "Pre-Wedding"],
    pricePerHour: 120,
    imageUrl: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?q=80&w=1074&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "David Rodriguez",
    location: "Miami, FL",
    rating: 4.9,
    reviewCount: 152,
    specialties: ["Landscape", "Travel", "Aerial"],
    pricePerHour: 180,
    imageUrl: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1129&auto=format&fit=crop"
  }
];

export function FeaturedPhotographers() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gradient">Featured Photographers</h2>
            <p className="text-muted-foreground mt-2">
              Discover our handpicked selection of talented photographers
            </p>
          </div>
          <a href="/discover" className="text-primary hover:text-primary/80 text-sm font-medium">
            View all →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PHOTOGRAPHERS.map((photographer) => (
            <PhotographerCard
              key={photographer.id}
              {...photographer}
              featured={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
