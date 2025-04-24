
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

type AuthContextValue = ReturnType<typeof useAuth>;

// Create a context with a default value
export const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();
  
  // Display error toast if Supabase connection fails
  React.useEffect(() => {
    if (auth.error) {
      toast.error(`Authentication error: ${auth.error.message}`);
    }
  }, [auth.error]);
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
