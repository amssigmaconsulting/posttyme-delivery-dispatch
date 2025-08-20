-- Create retailer profiles table
CREATE TABLE public.retailer_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  store_name TEXT NOT NULL,
  store_type TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  address TEXT NOT NULL,
  monthly_volume TEXT NOT NULL,
  product_categories TEXT,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  verified_at TIMESTAMP WITH TIME ZONE,
  verified_by UUID,
  verification_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.retailer_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for retailer access
CREATE POLICY "Retailers can create their own profile" 
ON public.retailer_profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Retailers can view their own profile" 
ON public.retailer_profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Retailers can update their own profile" 
ON public.retailer_profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all retailer profiles" 
ON public.retailer_profiles 
FOR SELECT 
USING (is_admin());

CREATE POLICY "Admins can update all retailer profiles" 
ON public.retailer_profiles 
FOR UPDATE 
USING (is_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_retailer_profiles_updated_at
BEFORE UPDATE ON public.retailer_profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create verification function for retailers
CREATE OR REPLACE FUNCTION public.verify_retailer_profile(target_user_id uuid, verification_notes_param text DEFAULT NULL::text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
BEGIN
    -- Check if current user is admin
    IF NOT public.is_admin() THEN
        RAISE EXCEPTION 'Only admins can verify retailers';
    END IF;
    
    -- Update retailer verification
    UPDATE public.retailer_profiles
    SET 
        is_verified = true,
        verified_at = now(),
        verified_by = auth.uid(),
        verification_notes = verification_notes_param,
        updated_at = now()
    WHERE user_id = target_user_id;
END;
$function$