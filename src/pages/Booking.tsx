
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  CreditCard,
  CheckCircle,
  Camera,
} from "lucide-react";
import { format } from "date-fns";

// Mock photographer data
const PHOTOGRAPHER = {
  id: "1",
  name: "Emma Johnson",
  location: "New York, NY",
  rating: 4.9,
  reviewCount: 124,
  profileImage: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=1170&auto=format&fit=crop",
  packages: [
    {
      id: "p1",
      name: "Basic Session",
      duration: "1 hour",
      price: 150,
    },
    {
      id: "p2",
      name: "Standard Session",
      duration: "2 hours",
      price: 275,
    },
    {
      id: "p3",
      name: "Premium Session",
      duration: "4 hours",
      price: 500,
    }
  ]
};

const BookingSteps = {
  SELECT_PACKAGE: 0,
  SELECT_DATE: 1,
  DETAILS: 2,
  PAYMENT: 3,
  CONFIRMATION: 4
};

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const [currentStep, setCurrentStep] = useState(BookingSteps.SELECT_PACKAGE);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    location: "",
    notes: ""
  });
  
  // In a real app, we would fetch photographer data based on ID
  const photographer = PHOTOGRAPHER;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string) => (value: string) => {
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  const renderStepContent = () => {
    switch(currentStep) {
      case BookingSteps.SELECT_PACKAGE:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Select a Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {photographer.packages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`cursor-pointer transition-all ${selectedPackage === pkg.id ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-border'}`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <CardHeader className="pb-4">
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>{pkg.duration} session</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">${pkg.price}</p>
                  </CardContent>
                  <CardFooter>
                    {selectedPackage === pkg.id && (
                      <div className="w-full flex items-center justify-center text-primary">
                        <CheckCircle className="mr-2 h-5 w-5" /> Selected
                      </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <Button 
                onClick={handleNextStep}
                disabled={!selectedPackage}
              >
                Continue to Date Selection
              </Button>
            </div>
          </div>
        );
        
      case BookingSteps.SELECT_DATE:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Select Date & Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Pick a Date</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Available Time Slots</h3>
                
                {selectedDate ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                      <Button 
                        key={time} 
                        variant={selectedTime === time ? "default" : "outline"} 
                        className="justify-center"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="h-32 flex items-center justify-center text-muted-foreground">
                    Please select a date first
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button 
                onClick={handleNextStep}
                disabled={!selectedDate || !selectedTime}
              >
                Continue to Details
              </Button>
            </div>
          </div>
        );
        
      case BookingSteps.DETAILS:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Booking Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Enter your full name" 
                    value={bookingDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email"
                    placeholder="Enter your email" 
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    value={bookingDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium mb-1">Event Type</label>
                  <Select
                    value={bookingDetails.eventType}
                    onValueChange={handleSelectChange("eventType")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="portrait">Portrait</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-1">Shoot Location</label>
                  <Input 
                    id="location" 
                    name="location" 
                    placeholder="Enter the location" 
                    value={bookingDetails.location}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium mb-1">Additional Notes</label>
                  <Textarea 
                    id="notes" 
                    name="notes" 
                    placeholder="Any special requests or information?" 
                    value={bookingDetails.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button 
                onClick={handleNextStep}
                disabled={!bookingDetails.name || !bookingDetails.email || !bookingDetails.phone}
              >
                Continue to Payment
              </Button>
            </div>
          </div>
        );
        
      case BookingSteps.PAYMENT:
        const selectedPkg = photographer.packages.find(pkg => pkg.id === selectedPackage);
        
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Payment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Payment Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium mb-1">Name on Card</label>
                      <Input id="cardName" placeholder="Enter name as it appears on card" />
                    </div>
                    
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                      <Input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry Date</label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium mb-1">CVC</label>
                        <Input id="cvc" placeholder="CVC" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Billing Address</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                      <Input id="address" placeholder="Enter your address" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                        <Input id="city" placeholder="Enter city" />
                      </div>
                      
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP / Postal Code</label>
                        <Input id="zip" placeholder="Enter ZIP" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-card p-6 rounded-lg sticky top-4">
                  <h3 className="text-lg font-medium mb-4">Booking Summary</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img 
                        src={photographer.profileImage} 
                        alt={photographer.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{photographer.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>{photographer.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 border-t border-border pt-4">
                    <div className="flex items-center">
                      <Camera className="text-primary mr-2 h-4 w-4" />
                      <span className="font-medium">{selectedPkg?.name}</span>
                      <span className="text-muted-foreground ml-2">({selectedPkg?.duration})</span>
                    </div>
                    
                    <div className="flex items-center">
                      <CalendarIcon className="text-primary mr-2 h-4 w-4" />
                      <span>{selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="text-primary mr-2 h-4 w-4" />
                      <span>{selectedTime}</span>
                    </div>
                    
                    {bookingDetails.location && (
                      <div className="flex items-start">
                        <MapPin className="text-primary mr-2 h-4 w-4 mt-0.5" />
                        <span>{bookingDetails.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-border mt-4 pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Package Fee</span>
                      <span>${selectedPkg?.price}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Service Fee</span>
                      <span>${Math.round(Number(selectedPkg?.price) * 0.05)}</span>
                    </div>
                    <div className="flex justify-between font-bold mt-4 pt-2 border-t border-border">
                      <span>Total</span>
                      <span>${Math.round(Number(selectedPkg?.price) * 1.05)}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    By clicking 'Complete Booking', you agree to our Terms of Service and Cancellation Policy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button onClick={handleNextStep}>
                <CreditCard className="mr-2 h-4 w-4" /> Complete Booking
              </Button>
            </div>
          </div>
        );
        
      case BookingSteps.CONFIRMATION:
        return (
          <div className="py-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-6">
                Your booking with {photographer.name} has been confirmed. You'll receive an email with all the details shortly.
              </p>
              
              <div className="bg-card p-6 rounded-lg mb-8">
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Booking Reference:</span>
                    <span className="font-medium">BK-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Photographer:</span>
                    <span className="font-medium">{photographer.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Package:</span>
                    <span className="font-medium">
                      {photographer.packages.find(pkg => pkg.id === selectedPackage)?.name}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button className="w-full">View Booking Details</Button>
                <Button variant="outline" className="w-full" onClick={() => window.location.href = "/"}>
                  Return to Home
                </Button>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-10">
          {/* Progress Steps */}
          {currentStep < BookingSteps.CONFIRMATION && (
            <div className="mb-10">
              <div className="flex items-center justify-between max-w-3xl mx-auto">
                {["Package", "Date & Time", "Details", "Payment"].map((step, index) => (
                  <div 
                    key={step} 
                    className="flex flex-col items-center relative w-full"
                  >
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                        index <= currentStep 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="mt-2 text-sm text-center">{step}</span>
                    
                    {/* Connector line */}
                    {index < 3 && (
                      <div 
                        className={`absolute top-4 left-1/2 right-0 h-0.5 w-full ${
                          index < currentStep ? 'bg-primary' : 'bg-muted'
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Step Content */}
          <div className="max-w-5xl mx-auto">
            {renderStepContent()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
