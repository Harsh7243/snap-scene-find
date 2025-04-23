
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SearchFilters } from "@/components/ui/search-filters";
import { PhotographerCard } from "@/components/photographers/PhotographerCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Mock data for photographers
const PHOTOGRAPHERS = [
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
  },
  {
    id: "5",
    name: "Olivia Parker",
    location: "San Francisco, CA",
    rating: 4.6,
    reviewCount: 78,
    specialties: ["Portrait", "Wedding", "Baby"],
    pricePerHour: 160,
    imageUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1112&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "James Lee",
    location: "Seattle, WA",
    rating: 4.8,
    reviewCount: 104,
    specialties: ["Nature", "Wildlife", "Documentary"],
    pricePerHour: 170,
    imageUrl: "https://images.unsplash.com/photo-1565726166189-e9814a05eb9d?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "7",
    name: "Ava Wilson",
    location: "Austin, TX",
    rating: 4.7,
    reviewCount: 93,
    specialties: ["Event", "Corporate", "Portrait"],
    pricePerHour: 140,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1064&auto=format&fit=crop"
  },
  {
    id: "8",
    name: "Ethan Thomas",
    location: "Portland, OR",
    rating: 4.5,
    reviewCount: 67,
    specialties: ["Street", "Documentary", "Black & White"],
    pricePerHour: 130,
    imageUrl: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?q=80&w=1074&auto=format&fit=crop"
  }
];

const Discover = () => {
  const [sortBy, setSortBy] = useState("rating");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotographers = PHOTOGRAPHERS.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(PHOTOGRAPHERS.length / itemsPerPage);

  // Handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-photo-dark-purple">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gradient">
                Discover Photographers
              </h1>
              <p className="text-muted-foreground mt-4">
                Find and book the perfect photographer for your special moment
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SearchFilters />
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <p className="text-muted-foreground mb-4 md:mb-0">
                Found <span className="text-foreground font-medium">{PHOTOGRAPHERS.length}</span> photographers
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPhotographers.map((photographer) => (
                <PhotographerCard
                  key={photographer.id}
                  {...photographer}
                />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                      key={index}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;
