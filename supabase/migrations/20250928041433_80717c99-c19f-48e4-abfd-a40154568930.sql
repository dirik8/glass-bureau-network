-- Critical Security Fix: Replace broken admin function with proper authentication
-- Replace the function body instead of dropping it to avoid dependency issues
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if current authenticated user exists in admin_users table
  RETURN EXISTS (
    SELECT 1 
    FROM public.admin_users 
    WHERE user_id = auth.uid()
    AND user_id IS NOT NULL
  );
END;
$$;

-- Fix form_submissions security - remove public access policies
DROP POLICY IF EXISTS "Anyone can create form submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Public can submit forms" ON public.form_submissions;

-- Fix other functions security paths
CREATE OR REPLACE FUNCTION public.update_modified_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.link_admin_user(auth_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Update the admin_users record with the actual Supabase Auth user ID
  UPDATE admin_users 
  SET user_id = auth_user_id
  WHERE user_id IS NULL AND username = 'admin';
  
  -- Return true if we updated a record
  RETURN FOUND;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_exists()
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (SELECT 1 FROM public.admin_users LIMIT 1);
END;
$$;