
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  CheckCircle,
  Search,
  MessageSquare,
  Calendar,
  CreditCard,
  Star,
  User,
  Camera,
  Image,
  DollarSign,
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-photo-dark-purple">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
                How SnapBook Works
              </h1>
              <p className="text-xl text-muted-foreground">
                We make finding, comparing, and booking the perfect photographer simple and secure
              </p>
            </div>
          </div>
        </section>
        
        {/* Steps for Clients */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">For Clients</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Book your perfect photographer in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div className="glass-card p-6 pl-8 h-full">
                  <Search className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
                  <p className="text-muted-foreground">
                    Find photographers based on location, event type, style, and budget. Browse portfolios and compare options.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div className="glass-card p-6 pl-8 h-full">
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Book & Confirm</h3>
                  <p className="text-muted-foreground">
                    Choose a package, check photographer's availability, and book your session with just a few clicks.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div className="glass-card p-6 pl-8 h-full">
                  <CreditCard className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Pay Securely</h3>
                  <p className="text-muted-foreground">
                    Make secure payments through our platform. Funds are only released to photographers after your session.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <a href="/discover">Find Your Photographer</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Steps for Photographers */}
        <section className="py-20 bg-photo-dark-charcoal">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">For Photographers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Showcase your work and grow your photography business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-6">
                <User className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
                <p className="text-muted-foreground">
                  Sign up and create your professional photographer profile.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <Image className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Upload Portfolio</h3>
                <p className="text-muted-foreground">
                  Showcase your best work by uploading your photography portfolio.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <DollarSign className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Set Pricing</h3>
                <p className="text-muted-foreground">
                  Create packages and set your pricing for different services.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <Calendar className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Manage Bookings</h3>
                <p className="text-muted-foreground">
                  Receive and manage bookings through your photographer dashboard.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <a href="/join-as-photographer">Join as a Photographer</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features and Benefits */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose SnapBook</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to creating the best experience for both photographers and clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Verified Photographers</h3>
                  <p className="text-muted-foreground">
                    All photographers on our platform are verified professionals with quality portfolios.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Secure Payments</h3>
                  <p className="text-muted-foreground">
                    Our secure payment system protects both clients and photographers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Transparent Pricing</h3>
                  <p className="text-muted-foreground">
                    Clear package details and pricing with no hidden fees or surprises.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Reviews & Ratings</h3>
                  <p className="text-muted-foreground">
                    Honest reviews from previous clients help you make informed decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Easy Booking Management</h3>
                  <p className="text-muted-foreground">
                    Manage your bookings, reschedule if needed, and stay organized.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Customer Support</h3>
                  <p className="text-muted-foreground">
                    Our support team is always ready to help with any questions or issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-photo-dark-purple">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about using SnapBook
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-border">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I book a photographer on SnapBook?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Simply search for photographers using filters like location, event type, and budget. Browse through profiles, compare packages, and when you're ready, select your preferred date and package to book. After confirming your booking details, you'll make a secure payment to reserve your session.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-border">
                  <AccordionTrigger className="text-lg font-medium">
                    What happens if I need to cancel or reschedule?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Each photographer may have their own cancellation policy, which is displayed on their profile. Generally, cancellations made 48 hours or more before the scheduled session may be eligible for a refund minus a small processing fee. For rescheduling, you can request a new date directly through your booking dashboard.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-border">
                  <AccordionTrigger className="text-lg font-medium">
                    How do photographers get paid?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    When a client books a session, the payment is securely held by SnapBook. After the session is completed, the funds are released to the photographer within 2-3 business days. This system ensures protection for both parties and maintains our quality standards.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-border">
                  <AccordionTrigger className="text-lg font-medium">
                    How does SnapBook vet photographers?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We have a thorough verification process for all photographers. This includes reviewing their professional portfolio, checking references, verifying their business credentials, and ensuring they meet our quality standards. We also monitor client feedback and ratings to maintain service quality.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-border">
                  <AccordionTrigger className="text-lg font-medium">
                    What fees does SnapBook charge?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    For clients, there's a small service fee (5% of the booking amount) added during checkout. For photographers, we take a 15% commission on each booking to cover platform maintenance, marketing, and payment processing. There are no subscription or listing fees for photographers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gradient mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of happy clients and photographers on our platform
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="/discover">Find a Photographer</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/join-as-photographer">Join as a Photographer</a>
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

export default HowItWorks;
