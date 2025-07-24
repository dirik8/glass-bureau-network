-- Create contacts table for managing website contacts
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  category_id UUID,
  position TEXT,
  department TEXT,
  notes TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact categories table
CREATE TABLE public.contact_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create site settings table for access codes and other settings
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default access codes
INSERT INTO public.site_settings (key, value, description) VALUES
('admin_access_code', '2058', 'Access code for admin dashboard'),
('setup_access_code', '2058', 'Access code for setup page');

-- Add foreign key constraint for contacts
ALTER TABLE public.contacts
ADD CONSTRAINT fk_contacts_category
FOREIGN KEY (category_id) REFERENCES public.contact_categories(id);

-- Insert default contact categories
INSERT INTO public.contact_categories (name, description) VALUES
('Administration', 'Administrative contacts'),
('Technical Support', 'Technical support contacts'),
('Sales', 'Sales and business development contacts'),
('General', 'General purpose contacts');

-- Enable RLS on all tables
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for contacts (admin only)
CREATE POLICY "Admins can manage contacts"
ON public.contacts
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE id = auth.uid() AND is_active = true
  )
);

-- Create RLS policies for contact categories (admin only)
CREATE POLICY "Admins can manage contact categories"
ON public.contact_categories
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE id = auth.uid() AND is_active = true
  )
);

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

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at columns
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON public.contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();