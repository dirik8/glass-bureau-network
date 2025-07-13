-- Fix RLS policies for admin_users to allow initial admin creation
-- Drop existing policies
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can update their own record" ON public.admin_users;

-- Create new policies that allow initial admin creation
CREATE POLICY "Allow initial admin creation when no admins exist" 
ON public.admin_users 
FOR INSERT 
WITH CHECK (
  -- Allow insert if no admin users exist yet OR if user is already an admin
  NOT EXISTS (SELECT 1 FROM public.admin_users) OR 
  EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

-- Allow admins to view all admin users
CREATE POLICY "Admins can view admin users" 
ON public.admin_users 
FOR SELECT 
USING (
  EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

-- Allow admins to update their own record
CREATE POLICY "Admins can update their own record" 
ON public.admin_users 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Allow admins to delete admin users (for management)
CREATE POLICY "Admins can delete admin users" 
ON public.admin_users 
FOR DELETE 
USING (
  EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);