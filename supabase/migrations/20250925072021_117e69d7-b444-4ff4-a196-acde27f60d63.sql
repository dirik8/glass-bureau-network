-- Fix security issues by updating RLS policies

-- 1. Fix cases table - Remove public read access, only admins can access
DROP POLICY IF EXISTS "Only admins can view cases" ON public.cases;
CREATE POLICY "Only admins can view cases"
ON public.cases 
FOR SELECT 
USING (is_current_user_admin());

-- 2. Fix form_submissions table - Remove public policies, only admin access
DROP POLICY IF EXISTS "Admins can view and manage submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Anyone can submit forms" ON public.form_submissions;

-- Keep admin management policy
CREATE POLICY "Admins can manage form submissions"
ON public.form_submissions
FOR ALL
USING (is_current_user_admin())
WITH CHECK (is_current_user_admin());

-- Allow public to submit forms (INSERT only, not view)
CREATE POLICY "Public can submit forms"
ON public.form_submissions
FOR INSERT
WITH CHECK (true);

-- 3. Fix admin_users table - Remove public access to admin records
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;
CREATE POLICY "Admins can view admin users"
ON public.admin_users
FOR SELECT
USING (is_current_user_admin());

-- Ensure admin users can only manage their own records for updates
DROP POLICY IF EXISTS "Admins can update their own record" ON public.admin_users;
CREATE POLICY "Admins can update their own record"
ON public.admin_users
FOR UPDATE
USING (auth.uid() = user_id AND is_current_user_admin());