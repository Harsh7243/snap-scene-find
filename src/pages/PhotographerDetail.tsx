
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  MapPin,
  Star,
  MessageSquare,
  Image,
  Calendar as CalendarIcon,
  DollarSign,
} from "lucide-react";

// Mock photographer data
const PHOTOGRAPHER = {
  id: "1",
  name: "Emma Johnson",
  location: "New York, NY",
  rating: 4.9,
  reviewCount: 124,
  specialties: ["Wedding", "Portrait", "Event", "Family", "Commercial"],
  pricePerHour: 150,
  bio: "Professional photographer with over 10 years of experience specializing in weddings and portrait photography. My style combines candid moments with artistic composition to create timeless memories.",
  coverImage: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1287&auto=format&fit=crop",
  profileImage: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=1170&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?q=80&w=1169&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1170&auto=format&fit=crop"
  ],
  packages: [
    {
      id: "p1",
      name: "Basic Session",
      description: "Perfect for portraits and small events",
      duration: "1 hour",
      price: 150,
      includes: [
        "1 hour photoshoot",
        "15 edited digital images",
        "Online gallery",
        "Download access"
      ]
    },
    {
      id: "p2",
      name: "Standard Session",
      description: "Ideal for engagement and family photos",
      duration: "2 hours",
      price: 275,
      includes: [
        "2 hour photoshoot",
        "30 edited digital images",
        "Online gallery",
        "Download access",
        "1 11x14 print"
      ]
    },
    {
      id: "p3",
      name: "Premium Session",
      description: "Complete coverage for special events",
      duration: "4 hours",
      price: 500,
      includes: [
        "4 hour photoshoot",
        "60 edited digital images",
        "Online gallery",
        "Download access",
        "2 11x14 prints",
        "Photo album"
      ]
    }
  ],
  reviews: [
    {
      id: "r1",
      name: "Sarah Thompson",
      date: "October 12, 2023",
      rating: 5,
      review: "Emma was absolutely amazing for our wedding! She captured all the special moments we wanted and so many we didn't even realize were happening. The photos turned out beautifully!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "r2",
      name: "Robert Chen",
      date: "September 3, 2023",
      rating: 4,
      review: "Great family photoshoot experience. Emma was patient with our kids and got some amazing shots. Would definitely book again!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "r3",
      name: "Jessica Williams",
      date: "August 15, 2023",
      rating: 5,
      review: "Emma has an incredible eye for detail and made our engagement shoot so special. The photos came out better than we could have imagined!",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    }
  ]
};

const PhotographerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  // In a real app, we would fetch photographer data based on ID
  const photographer = PHOTOGRAPHER;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Cover Image */}
        <div className="relative h-64 md:h-96 w-full">
          <img 
            src={photographer.coverImage} 
            alt={`${photographer.name}'s cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-photo-dark-purple/90 to-transparent"></div>
        </div>
        
        {/* Photographer Info */}
        <section className="container px-4 mx-auto -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <img 
                src={photographer.profileImage} 
                alt={photographer.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{photographer.name}</h1>
                  <div className="flex items-center mt-2">
                    <MapPin className="text-primary mr-1 h-4 w-4" />
                    <span className="text-muted-foreground">{photographer.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="text-yellow-500 mr-1 h-5 w-5" />
                    <span className="font-medium">{photographer.rating}</span>
                    <span className="text-muted-foreground text-sm ml-1">({photographer.reviewCount} reviews)</span>
                  </div>
                  <Button>Book Now</Button>
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" /> Contact
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {photographer.specialties.map((specialty) => (
                  <span 
                    key={specialty} 
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="container px-4 mx-auto py-8">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="portfolio">
                <Image className="mr-2 h-4 w-4" /> Portfolio
              </TabsTrigger>
              <TabsTrigger value="packages">
                <DollarSign className="mr-2 h-4 w-4" /> Packages & Pricing
              </TabsTrigger>
              <TabsTrigger value="reviews">
                <MessageSquare className="mr-2 h-4 w-4" /> Reviews
              </TabsTrigger>
              <TabsTrigger value="availability">
                <CalendarIcon className="mr-2 h-4 w-4" /> Availability
              </TabsTrigger>
            </TabsList>
            
            {/* Portfolio Tab */}
            <TabsContent value="portfolio">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-muted-foreground">{photographer.bio}</p>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photographer.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                  >
                    <img 
                      src={image} 
                      alt={`Portfolio image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Packages Tab */}
            <TabsContent value="packages">
              <h2 className="text-2xl font-bold mb-6">Packages & Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {photographer.packages.map((pkg) => (
                  <Card 
                    key={pkg.id} 
                    className={`border ${selectedPackage === pkg.id ? 'border-primary' : 'border-border'}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold">{pkg.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{pkg.description}</p>
                      </div>
                      
                      <div className="flex justify-center items-center mb-6">
                        <span className="text-3xl font-bold">${pkg.price}</span>
                        <span className="text-muted-foreground ml-1">/{pkg.duration}</span>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <span className="text-primary mr-2">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full" 
                        variant={selectedPackage === pkg.id ? "default" : "outline"}
                      >
                        {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Need a custom package? Contact the photographer for personalized options.
                </p>
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" /> Request Custom Quote
                </Button>
              </div>
            </TabsContent>
            
            {/* Reviews Tab */}
            <TabsContent value="reviews">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <Button>Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                {photographer.reviews.map((review) => (
                  <div key={review.id} className="border-b border-border pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{review.name}</h4>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex items-center">
                            {Array(review.rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                            ))}
                            {Array(5 - review.rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-muted" />
                            ))}
                          </div>
                        </div>
                        
                        <p className="mt-2">{review.review}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Availability Tab */}
            <TabsContent value="availability">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Check Availability</h2>
                  <div className="bg-card p-4 rounded-lg">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>
                </div>
                
                <div>
                  {selectedDate ? (
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Available Time Slots for{" "}
                        <span className="text-primary">
                          {selectedDate.toLocaleDateString()}
                        </span>
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"].map((time) => (
                          <Button key={time} variant="outline" className="justify-start">
                            {time}
                          </Button>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <Button className="w-full">Proceed to Booking</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <CalendarIcon className="mx-auto h-12 w-12 mb-2 opacity-50" />
                        <p>Please select a date to view available time slots</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PhotographerDetail;
