-- Create site settings table for dynamic content management
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on site_settings
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for site_settings (admin only)
CREATE POLICY "Only admins can view site settings" 
ON public.site_settings 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE id = auth.uid()
  )
);

CREATE POLICY "Only admins can update site settings" 
ON public.site_settings 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE id = auth.uid()
  )
);

-- Update admin_users table to use auth.users reference
ALTER TABLE public.admin_users 
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update admin_users RLS policies
CREATE POLICY "Admins can view admin users" 
ON public.admin_users 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can update their own record" 
ON public.admin_users 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Enable RLS on admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Enable RLS on pdfs table
ALTER TABLE public.pdfs ENABLE ROW LEVEL SECURITY;

-- Create policies for pdfs (public read, admin write)
CREATE POLICY "Everyone can view pdfs" 
ON public.pdfs 
FOR SELECT 
USING (true);

CREATE POLICY "Only admins can manage pdfs" 
ON public.pdfs 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Enable RLS on form_submissions
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for form_submissions (admin only)
CREATE POLICY "Only admins can view form submissions" 
ON public.form_submissions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Anyone can create form submissions" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create storage bucket for PDFs
INSERT INTO storage.buckets (id, name, public) 
VALUES ('pdfs', 'pdfs', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for PDFs
CREATE POLICY "Public PDF access" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'pdfs');

CREATE POLICY "Admin PDF upload" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'pdfs' AND 
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Admin PDF update" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'pdfs' AND 
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Admin PDF delete" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'pdfs' AND 
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Insert default site settings
INSERT INTO public.site_settings (key, value, description) VALUES
('website_name', 'LGN Recovery Bureau', 'Main website name'),
('company_phone', '+1 (555) 123-4567', 'Company contact phone number'),
('company_email', 'contact@lgnrecovery.com', 'Company contact email'),
('meta_description', 'LGN Recovery Bureau - Leading cryptocurrency and digital asset recovery specialists. Expert blockchain analysis and asset recovery services.', 'Website meta description'),
('meta_keywords', 'cryptocurrency recovery, digital asset recovery, blockchain analysis, scam investigation, crypto fraud, asset recovery', 'SEO keywords'),
('hero_title', 'Leading Digital Asset Recovery Specialists', 'Homepage hero title'),
('hero_subtitle', 'Expert cryptocurrency recovery and blockchain forensics services. We help individuals and institutions recover lost or stolen digital assets.', 'Homepage hero subtitle')
ON CONFLICT (key) DO NOTHING;

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for site_settings
CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for pdfs
CREATE TRIGGER update_pdfs_updated_at
  BEFORE UPDATE ON public.pdfs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();