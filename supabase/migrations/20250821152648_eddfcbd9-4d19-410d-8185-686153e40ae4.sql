-- Fix newsletter subscriptions security vulnerability
-- Remove public read access to protect subscriber emails

-- Drop the problematic public select policy
DROP POLICY IF EXISTS "Public can view active subscriptions for admin purposes" ON public.newsletter_subscriptions;

-- Create admin-only policy for viewing newsletter subscriptions
CREATE POLICY "Admins can view all newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR SELECT 
USING (is_admin());

-- Keep the existing insert policy so people can still subscribe
-- (This policy already exists and is secure: "Anyone can subscribe to newsletter")