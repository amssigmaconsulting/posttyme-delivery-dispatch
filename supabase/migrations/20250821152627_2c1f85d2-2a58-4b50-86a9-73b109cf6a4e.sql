-- Fix the SECURITY DEFINER view issue by removing it and using proper RLS policies instead

-- Drop the problematic security definer view
DROP VIEW IF EXISTS public.verified_agents_public;

-- Update the RLS policy to be more restrictive
-- Remove the overly permissive policy and create a more secure one
DROP POLICY IF EXISTS "Public can view verified agents limited info" ON public.agent_profiles;

-- Create a policy that only allows authenticated users to view verified agents
-- This removes public access while still protecting sensitive data
CREATE POLICY "Authenticated users can view verified agents" 
ON public.agent_profiles 
FOR SELECT 
USING (
  auth.uid() IS NOT NULL 
  AND is_verified = true
);

-- Keep the policy for agents to view their own complete profile
-- This policy already exists from the previous migration

-- Now only authenticated users can see verified agent profiles
-- and agents can see their own complete profiles
-- Admins can see all profiles (existing policy)
-- This eliminates the security risk while maintaining functionality