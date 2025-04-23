
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedPhotographers } from "@/components/photographers/FeaturedPhotographers";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeaturedPhotographers />
        
        {/* How It Works Section */}
        <section className="py-16 bg-photo-dark-charcoal">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient">How It Works</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Book your perfect photographer in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-photo-dark-purple/50 border border-white/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
                <p className="text-muted-foreground">
                  Find photographers based on location, style, event type and budget.
                </p>
              </div>
              
              <div className="bg-photo-dark-purple/50 border border-white/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect & Book</h3>
                <p className="text-muted-foreground">
                  Review portfolios, check availability and book your session.
                </p>
              </div>
              
              <div className="bg-photo-dark-purple/50 border border-white/5 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pay Securely</h3>
                <p className="text-muted-foreground">
                  Make secure payments and enjoy your photography session.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button size="lg">
                Find Your Photographer
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient">What Our Users Say</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Hear from clients and photographers who love our platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/90 mb-4">
                  "I found the perfect wedding photographer in just one day. The filters made it so easy to narrow down exactly what style I was looking for!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Wedding Client</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/90 mb-4">
                  "As a photographer, this platform has completely transformed my business. I'm fully booked months in advance now!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
                      alt="Photographer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Mark Wilson</h4>
                    <p className="text-sm text-muted-foreground">Professional Photographer</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/90 mb-4">
                  "The secure payment system gave me peace of mind, and the photographer we found was absolutely amazing for our family portraits!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Jessica Chen</h4>
                    <p className="text-sm text-muted-foreground">Family Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-photo-dark-purple to-photo-dark-charcoal">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gradient mb-6">Ready to Find Your Perfect Photographer?</h2>
              <p className="text-lg text-foreground/90 mb-8">
                Join thousands of happy clients who found their ideal photographer through our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">
                  Browse Photographers
                </Button>
                <Button size="lg" variant="outline">
                  Join as a Photographer
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

function Search(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
}
