
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Categories data
const CATEGORIES = [
  {
    id: "wedding",
    title: "Wedding Photography",
    description: "Capture the magic of your special day with our wedding photographers.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1170&auto=format&fit=crop",
    count: 245
  },
  {
    id: "portrait",
    title: "Portrait Photography",
    description: "Professional portrait sessions for individuals, couples, and families.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1064&auto=format&fit=crop",
    count: 189
  },
  {
    id: "event",
    title: "Event Photography",
    description: "Document your gatherings, parties, and corporate events.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop",
    count: 156
  },
  {
    id: "family",
    title: "Family Photography",
    description: "Preserve precious moments with your loved ones through family portraits.",
    image: "https://images.unsplash.com/photo-1622610282131-37b95e4166fa?q=80&w=872&auto=format&fit=crop",
    count: 132
  },
  {
    id: "commercial",
    title: "Commercial Photography",
    description: "Professional imagery for businesses, products, and services.",
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=865&auto=format&fit=crop",
    count: 98
  },
  {
    id: "baby",
    title: "Baby & Newborn",
    description: "Gentle and adorable photography for your newest family members.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1160&auto=format&fit=crop",
    count: 87
  },
  {
    id: "prewedding",
    title: "Pre-Wedding",
    description: "Romantic and stylish pre-wedding photoshoots.",
    image: "https://images.unsplash.com/photo-1438962136829-452260720431?q=80&w=1160&auto=format&fit=crop",
    count: 76
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Showcase properties with professional real estate photography.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop",
    count: 65
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-12 bg-photo-dark-purple">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Photography Categories
              </h1>
              <p className="text-muted-foreground">
                Explore different types of photography and find the perfect photographer for your needs
              </p>
            </div>
          </div>
        </section>
        
        {/* Categories Grid */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((category) => (
                <Link 
                  to={`/discover?category=${category.id}`}
                  key={category.id}
                  className="group relative overflow-hidden rounded-lg h-64"
                >
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-photo-overlay via-transparent to-transparent group-hover:from-photo-dark-purple/90 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-white/80 text-sm hidden group-hover:block transition-opacity duration-300">
                          {category.description}
                        </p>
                      </div>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {category.count} photographers
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Additional Categories */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-6">More Specialized Categories</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {["Fashion", "Wildlife", "Street", "Aerial", "Food", "Sports", "Black & White", "Landscape", "Architecture", "Travel"].map((cat) => (
                  <Button key={cat} variant="outline" asChild>
                    <Link to={`/discover?category=${cat.toLowerCase()}`}>
                      {cat}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
