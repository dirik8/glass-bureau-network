-- Create site settings table for access codes if it doesn't exist
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default access codes if they don't exist
INSERT INTO public.site_settings (key, value, description) VALUES
('admin_access_code', '2058', 'Access code for admin dashboard'),
('setup_access_code', '2058', 'Access code for setup page')
ON CONFLICT (key) DO NOTHING;

-- Enable RLS on site_settings if not already enabled
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'site_settings' AND schemaname = 'public'
  ) THEN
    ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
    
    -- Create RLS policies for site settings (admin only)
    CREATE POLICY "Admins can manage site settings"
    ON public.site_settings
    FOR ALL
    USING (
      EXISTS (
        SELECT 1 FROM public.admin_users 
        WHERE id = auth.uid() AND is_active = true
      )
    );
  END IF;
END $$;

-- Create updated_at trigger for site_settings if it doesn't exist
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_site_settings_updated_at'
  ) THEN
    CREATE TRIGGER update_site_settings_updated_at
      BEFORE UPDATE ON public.site_settings
      FOR EACH ROW
      EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;