-- Fix infinite recursion in admin_users RLS policies
-- Drop ALL existing policies first
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Allow initial admin creation when no admins exist" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can delete admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can update their own record" ON public.admin_users;

-- Create security definer function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create security definer function to check if any admin exists
CREATE OR REPLACE FUNCTION public.admin_exists()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (SELECT 1 FROM public.admin_users LIMIT 1);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Recreate all policies using security definer functions
CREATE POLICY "Allow initial admin creation when no admins exist" 
ON public.admin_users 
FOR INSERT 
WITH CHECK (
  NOT public.admin_exists() OR public.is_current_user_admin()
);

CREATE POLICY "Admins can view admin users" 
ON public.admin_users 
FOR SELECT 
USING (public.is_current_user_admin());

CREATE POLICY "Admins can update their own record" 
ON public.admin_users 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can delete admin users" 
ON public.admin_users 
FOR DELETE 
USING (public.is_current_user_admin());