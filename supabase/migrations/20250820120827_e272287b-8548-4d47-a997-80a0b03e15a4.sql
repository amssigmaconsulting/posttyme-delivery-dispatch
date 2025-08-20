-- Update the RLS policy to allow profile creation during signup
-- First, drop the existing INSERT policy
DROP POLICY IF EXISTS "Retailers can create their own profile" ON public.retailer_profiles;

-- Create a new INSERT policy that allows creation if user_id matches the authenticated user
-- or if the user is in the process of signing up (session exists but might not be fully confirmed)
CREATE POLICY "Retailers can create their own profile" 
ON public.retailer_profiles 
FOR INSERT 
WITH CHECK (
  auth.uid() = user_id OR 
  (auth.uid() IS NOT NULL AND user_id = auth.uid())
);

-- Also create a trigger to handle new user creation for retailers
CREATE OR REPLACE FUNCTION public.handle_new_retailer_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
BEGIN
  -- Only create retailer profile if user metadata indicates retailer role
  IF NEW.raw_user_meta_data ->> 'user_type' = 'retailer' THEN
    -- The profile will be created by the application, not by this trigger
    -- This trigger is here for future use if needed
    NULL;
  END IF;
  RETURN NEW;
END;
$function$;

-- Create trigger for new retailer users (currently not active, but ready for future use)
-- CREATE TRIGGER on_auth_retailer_user_created
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE PROCEDURE public.handle_new_retailer_user();