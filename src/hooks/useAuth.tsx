
import { useEffect, useState } from 'react';
import { User, AuthError } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    // If Supabase is not configured, don't try to authenticate
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

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
      if (!isSupabaseConfigured()) {
        return { error: { message: 'Supabase is not configured' } as AuthError, data: { user: null, session: null } };
      }
      
      setLoading(true);
      const result = await supabase.auth.signInWithPassword({ email, password });
      if (result.error) setError(result.error);
      setLoading(false);
      return result;
    },
    signUp: async (email: string, password: string) => {
      if (!isSupabaseConfigured()) {
        return { error: { message: 'Supabase is not configured' } as AuthError, data: { user: null, session: null } };
      }
      
      setLoading(true);
      const result = await supabase.auth.signUp({ email, password });
      if (result.error) setError(result.error);
      setLoading(false);
      return result;
    },
    signOut: async () => {
      if (!isSupabaseConfigured()) {
        return { error: null };
      }
      
      setLoading(true);
      const result = await supabase.auth.signOut();
      if (result.error) setError(result.error);
      setLoading(false);
      return result;
    }
  };
}
