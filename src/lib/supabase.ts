
import { createClient } from '@supabase/supabase-js';

// These environment variables are automatically available when using the Lovable Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing. Make sure you have connected your Lovable project to Supabase.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  user_id: string;
  business_name: string | null;
  bio: string | null;
  location: string | null;
  specialties: string[];
  price_per_hour: number;
  rating: number;
  review_count: number;
  portfolio_images: string[];
  created_at: string;
  updated_at: string;
};

export type Booking = {
  id: string;
  client_id: string;
  photographer_id: string;
  event_type: string;
  event_date: string;
  duration: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  stripe_session_id: string | null;
  created_at: string;
  updated_at: string;
};

export type Review = {
  id: string;
  booking_id: string;
  client_id: string;
  photographer_id: string;
  rating: number;
  comment: string;
  created_at: string;
};
