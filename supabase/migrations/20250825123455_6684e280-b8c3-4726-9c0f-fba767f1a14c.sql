-- Set up admin access code in site_settings
INSERT INTO public.site_settings (key, value, description) 
VALUES ('admin_access_code', '2058', 'Access code required to access admin login page')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Create admin user in Supabase Auth (this will be handled through the Auth API)
-- For now, let's prepare the admin_users table structure

-- First, let's check if we need to clean up any orphaned admin_users records
DELETE FROM public.admin_users WHERE user_id IS NOT NULL AND NOT EXISTS (
  SELECT 1 FROM auth.users WHERE id = admin_users.user_id
);

-- We'll create the actual auth user through the application, but let's prepare
-- a placeholder that can be updated once the auth user is created
INSERT INTO public.admin_users (username, password_hash, role, user_id) 
VALUES ('admin', '$2b$10$placeholder', 'admin', NULL)
ON CONFLICT (username) DO UPDATE SET 
  password_hash = EXCLUDED.password_hash,
  role = EXCLUDED.role;