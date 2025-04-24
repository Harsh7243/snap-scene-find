
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import AuthLayout from "@/components/auth/AuthLayout";

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const accountType = formData.get("accountType") as string;
    
    try {
      // First, sign up the user
      const { data: authData, error: signUpError } = await signUp(email, password);
      if (signUpError) throw signUpError;
      
      if (!authData.user) {
        throw new Error("Failed to create user account");
      }
      
      // Then create the profile with the user_id from the auth data
      const { error: profileError } = await supabase.from("profiles").insert({
        user_id: authData.user.id,
        first_name: firstName,
        last_name: lastName,
        account_type: accountType,
      });
      
      if (profileError) throw profileError;
      
      toast.success("Account created! Please check your email to confirm your account.");
      navigate("/auth/login");
    } catch (error: any) {
      toast.error(error.message || "Error creating account");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <AuthLayout 
      title="Create an Account" 
      subtitle="Join SnapBook to book photographers or showcase your work"
    >
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Select name="accountType" required disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue placeholder="I am a..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="client">Client looking for photographers</SelectItem>
                  <SelectItem value="photographer">Photographer offering services</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default SignupPage;
