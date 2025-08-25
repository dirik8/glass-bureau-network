-- Fix critical security vulnerability: Remove public access to sensitive case data
-- The 'cases' table contains sensitive customer information and should not be publicly readable

-- Drop the overly permissive policy that allows everyone to view cases
DROP POLICY IF EXISTS "Everyone can view cases" ON public.cases;

-- Keep the admin policy for managing cases (this is secure)
-- CREATE POLICY "Admins can manage cases" ON public.cases FOR ALL USING (is_current_user_admin());

-- Add a more restrictive policy for case viewing - only admins can view cases
CREATE POLICY "Only admins can view cases" ON public.cases 
FOR SELECT 
USING (is_current_user_admin());

-- Ensure only admins can create cases (for admin-initiated cases)
CREATE POLICY "Only admins can create cases" ON public.cases 
FOR INSERT 
WITH CHECK (is_current_user_admin());

-- If we need to allow anonymous case submissions (common for contact forms),
-- we can add a specific policy for that, but viewing should remain restricted
-- For now, keeping it admin-only for maximum security