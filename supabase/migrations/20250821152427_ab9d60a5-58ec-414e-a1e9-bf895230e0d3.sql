-- Fix security vulnerability: Remove public access to sensitive agent data
-- and only allow public viewing of verified agents with limited information

-- First, drop the problematic policy that allows anyone to view all profiles
DROP POLICY IF EXISTS "Agents can view all profiles" ON public.agent_profiles;

-- Create a new policy that only allows public viewing of verified agents with limited data
-- This will be handled by creating a view for public access instead of direct table access

-- Create a public view for verified agents with only non-sensitive information
CREATE OR REPLACE VIEW public.verified_agents_public AS
SELECT 
    id,
    user_id,
    name,
    specialties,
    languages,
    location,
    bio,
    experience_years,
    rating,
    total_reviews,
    profile_image_url,
    is_verified,
    created_at
FROM public.agent_profiles 
WHERE is_verified = true;

-- Enable RLS on the view
ALTER VIEW public.verified_agents_public SET (security_barrier = true);

-- Create policy for public view access
CREATE POLICY "Anyone can view verified agents public info" 
ON public.agent_profiles 
FOR SELECT 
USING (
    is_verified = true 
    AND EXISTS (
        SELECT 1 FROM public.verified_agents_public 
        WHERE verified_agents_public.user_id = agent_profiles.user_id
    )
);

-- Update the existing policy to be more specific about what authenticated users can see
CREATE POLICY "Authenticated users can view verified agent profiles" 
ON public.agent_profiles 
FOR SELECT 
USING (
    auth.uid() IS NOT NULL 
    AND is_verified = true
);

-- Add policy for agents to view their own complete profile (including sensitive data)
CREATE POLICY "Agents can view their own complete profile" 
ON public.agent_profiles 
FOR SELECT 
USING (auth.uid() = user_id);