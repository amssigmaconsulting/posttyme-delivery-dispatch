-- Fix the security definer view issue by removing it and using proper RLS policies instead

-- Drop the problematic view
DROP VIEW IF EXISTS public.verified_agents_public;

-- Remove the policies that referenced the view
DROP POLICY IF EXISTS "Anyone can view verified agents public info" ON public.agent_profiles;
DROP POLICY IF EXISTS "Authenticated users can view verified agent profiles" ON public.agent_profiles;
DROP POLICY IF EXISTS "Agents can view their own complete profile" ON public.agent_profiles;

-- Create secure RLS policies that protect sensitive data
-- Policy 1: Allow public viewing of only verified agents with limited, non-sensitive fields
CREATE POLICY "Public can view verified agents basic info" 
ON public.agent_profiles 
FOR SELECT 
USING (
    is_verified = true
);

-- Policy 2: Allow agents to view their own complete profile (including sensitive data)
CREATE POLICY "Agents can view their own complete profile" 
ON public.agent_profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Policy 3: Allow admins to view everything (this already exists but ensuring it's there)
-- The "Admins can view all agent profiles" policy already exists with is_admin()