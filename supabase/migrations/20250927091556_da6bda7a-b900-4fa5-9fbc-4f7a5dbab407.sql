-- Fix admin user setup - handle existing policy properly

-- First, let's ensure we have the admin_users record ready for linking
UPDATE admin_users 
SET user_id = NULL, 
    username = 'admin',
    password_hash = 'managed_by_supabase_auth',
    role = 'admin'
WHERE user_id IS NULL OR username = 'admin';

-- Add default site settings if they don't exist
INSERT INTO site_settings (key, value, description) 
VALUES 
  ('admin_access_code', '2058', 'Access code for admin dashboard'),
  ('setup_access_code', '2058', 'Access code for admin setup wizard')
ON CONFLICT (key) DO NOTHING;

-- Create a function to properly link admin user after auth creation
CREATE OR REPLACE FUNCTION public.link_admin_user(auth_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
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

-- Drop and recreate the policy to handle conflicts
DROP POLICY IF EXISTS "Allow admin creation and linking during setup" ON admin_users;
DROP POLICY IF EXISTS "Allow initial admin creation when no admins exist" ON admin_users;

CREATE POLICY "Allow initial admin creation when no admins exist" 
ON admin_users FOR ALL 
USING (
  -- Allow if no admin exists yet OR if user is already an admin
  (NOT admin_exists()) OR 
  (auth.uid() = user_id) OR
  is_current_user_admin()
)
WITH CHECK (
  -- Allow if no admin exists yet OR if user is already an admin  
  (NOT admin_exists()) OR 
  (auth.uid() = user_id) OR
  is_current_user_admin()
);