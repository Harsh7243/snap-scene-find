
import { useEffect, useState } from 'react';
import { User, AuthError, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session?.user?.id);
      setSession(session);
      setUser(session?.user ?? null);
      setError(null);
      setLoading(false);
    });

    // Check for existing session
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Session check error:', error);
          setError(error);
        } else {
          setSession(data.session);
          setUser(data.session?.user ?? null);
        }
      } catch (err) {
        console.error('Error checking session:', err);
      } finally {
        setLoading(false);
      }
    };
    
    checkSession();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    session,
    loading,
    error,
    signIn: async (email: string, password: string) => {
      setLoading(true);
      setError(null);
      const result = await supabase.auth.signInWithPassword({ email, password });
      if (result.error) {
        console.error('Sign in error:', result.error);
        setError(result.error);
      }
      setLoading(false);
      return result;
    },
    signUp: async (email: string, password: string) => {
      setLoading(true);
      setError(null);
      const redirectUrl = `${window.location.origin}/`;
      
      const result = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });
      
      if (result.error) {
        console.error('Sign up error:', result.error);
        setError(result.error);
      }
      setLoading(false);
      return result;
    },
    signOut: async () => {
      setLoading(true);
      setError(null);
      const result = await supabase.auth.signOut();
      if (result.error) {
        console.error('Sign out error:', result.error);
        setError(result.error);
      }
      setUser(null);
      setSession(null);
      setLoading(false);
      return result;
    }
  };
}
