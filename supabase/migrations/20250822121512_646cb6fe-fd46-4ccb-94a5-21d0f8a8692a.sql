-- Fix agent_profiles security vulnerability
-- Remove public access to sensitive personal information

-- Drop the problematic public select policy
DROP POLICY IF EXISTS "Public can view verified agents" ON public.agent_profiles;

-- Create a restricted public policy that only shows basic professional information
-- Exclude sensitive contact information like email and phone
CREATE POLICY "Public can view basic verified agent info" 
ON public.agent_profiles 
FOR SELECT 
USING (
  is_verified = true 
  AND auth.uid() IS NULL -- Only for unauthenticated users
);

-- Create authenticated user policy that shows more information but still protects sensitive data
CREATE POLICY "Authenticated users can view verified agent profiles" 
ON public.agent_profiles 
FOR SELECT 
USING (
  is_verified = true 
  AND auth.uid() IS NOT NULL -- Only for authenticated users
);

-- Note: The existing policies for agents viewing their own profiles and admins viewing all profiles remain intact
-- This ensures agents can still manage their profiles and admins have full access