
import { useEffect, useState } from 'react';
import { User, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client'; // Updated import path

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    // Check for active session on component mount
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          setError(error);
        } else if (data?.session?.user) {
          setUser(data.session.user);
        }
      } catch (err) {
        console.error('Error checking session:', err);
      } finally {
        setLoading(false);
      }
    };
    
    checkSession();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        setError(null);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    error,
    signIn: async (email: string, password: string) => {
      setLoading(true);
      const result = await supabase.auth.signInWithPassword({ email, password });
      if (result.error) setError(result.error);
      setLoading(false);
      return result;
    },
    signUp: async (email: string, password: string) => {
      setLoading(true);
      const result = await supabase.auth.signUp({ email, password });
      if (result.error) setError(result.error);
      setLoading(false);
      return result;
    },
    signOut: async () => {
      setLoading(true);
      const result = await supabase.auth.signOut();
      if (result.error) setError(result.error);
      setLoading(false);
      return result;
    }
  };
}
