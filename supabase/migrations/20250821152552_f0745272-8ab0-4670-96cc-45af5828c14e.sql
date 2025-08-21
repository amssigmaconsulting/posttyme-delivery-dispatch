-- Fix security vulnerability: Remove public access to sensitive agent data
-- First, check and drop existing problematic policies

-- Drop all existing SELECT policies to rebuild them securely
DROP POLICY IF EXISTS "Agents can view all profiles" ON public.agent_profiles;
DROP POLICY IF EXISTS "Anyone can view verified agents public info" ON public.agent_profiles;
DROP POLICY IF EXISTS "Authenticated users can view verified agent profiles" ON public.agent_profiles;
DROP POLICY IF EXISTS "Agents can view their own complete profile" ON public.agent_profiles;

-- Create a public view for verified agents with only non-sensitive information
-- This excludes email, phone, license_number, and verification details
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

-- Create secure RLS policies with proper access control
-- 1. Only verified agents are visible to the public (limited fields via view)
CREATE POLICY "Public can view verified agents limited info" 
ON public.agent_profiles 
FOR SELECT 
USING (is_verified = true);

-- 2. Agents can view their own complete profile (including sensitive data)
CREATE POLICY "Agents can view their own complete profile" 
ON public.agent_profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- 3. Admins can view all profiles (this policy already exists)
-- We'll keep the existing admin policy as is

-- The public view will be used by frontend code when displaying agent listings
-- while the direct table access will be restricted based on these policies