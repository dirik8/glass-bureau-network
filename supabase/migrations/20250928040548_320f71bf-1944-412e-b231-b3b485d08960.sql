-- Fix SMTP configs security issue by implementing granular RLS policies
-- Drop existing overly broad policy
DROP POLICY IF EXISTS "Admins can manage SMTP configs" ON public.smtp_configs;

-- Create specific, more secure policies for SMTP configs
CREATE POLICY "Admin users can view SMTP configs" 
ON public.smtp_configs 
FOR SELECT 
TO authenticated
USING (is_current_user_admin());

CREATE POLICY "Admin users can create SMTP configs" 
ON public.smtp_configs 
FOR INSERT 
TO authenticated
WITH CHECK (is_current_user_admin());

CREATE POLICY "Admin users can update SMTP configs" 
ON public.smtp_configs 
FOR UPDATE 
TO authenticated
USING (is_current_user_admin()) 
WITH CHECK (is_current_user_admin());

CREATE POLICY "Admin users can delete SMTP configs" 
ON public.smtp_configs 
FOR DELETE 
TO authenticated
USING (is_current_user_admin());

-- Fix cases table security issue by ensuring proper RLS policies
-- Drop existing policies that might be too permissive
DROP POLICY IF EXISTS "Admins can manage cases" ON public.cases;
DROP POLICY IF EXISTS "Only admins can create cases" ON public.cases;
DROP POLICY IF EXISTS "Only admins can view cases" ON public.cases;

-- Create secure policies for cases table containing sensitive personal data
CREATE POLICY "Authenticated admin users can view cases" 
ON public.cases 
FOR SELECT 
TO authenticated
USING (is_current_user_admin());

CREATE POLICY "Authenticated admin users can create cases" 
ON public.cases 
FOR INSERT 
TO authenticated
WITH CHECK (is_current_user_admin());

CREATE POLICY "Authenticated admin users can update cases" 
ON public.cases 
FOR UPDATE 
TO authenticated
USING (is_current_user_admin()) 
WITH CHECK (is_current_user_admin());

CREATE POLICY "Authenticated admin users can delete cases" 
ON public.cases 
FOR DELETE 
TO authenticated
USING (is_current_user_admin());