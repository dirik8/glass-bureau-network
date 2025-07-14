-- Expand site_settings functionality and create new content management tables

-- Create team_members table
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  expertise TEXT[],
  image_url TEXT,
  email TEXT,
  phone TEXT,
  linkedin_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create page_seo table for individual page SEO management
CREATE TABLE public.page_seo (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL UNIQUE,
  page_title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  og_type TEXT DEFAULT 'website',
  twitter_title TEXT,
  twitter_description TEXT,
  twitter_image TEXT,
  twitter_card TEXT DEFAULT 'summary_large_image',
  canonical_url TEXT,
  robots_directives TEXT DEFAULT 'index,follow',
  schema_markup JSONB,
  focus_keywords TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create navigation_items table for dynamic navigation
CREATE TABLE public.navigation_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  parent_id UUID REFERENCES public.navigation_items(id) ON DELETE CASCADE,
  display_order INTEGER DEFAULT 0,
  is_external BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  menu_type TEXT DEFAULT 'header', -- header, footer, sidebar
  icon_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create content_blocks table for dynamic content management
CREATE TABLE public.content_blocks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  block_key TEXT NOT NULL UNIQUE,
  block_type TEXT NOT NULL, -- hero, service, feature, cta, text, image
  title TEXT,
  subtitle TEXT,
  content TEXT,
  image_url TEXT,
  link_url TEXT,
  link_text TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  page_path TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create form_templates table for customizable forms
CREATE TABLE public.form_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  form_type TEXT NOT NULL,
  fields JSONB NOT NULL,
  email_template TEXT,
  success_message TEXT,
  redirect_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create seo_analytics table for tracking SEO performance
CREATE TABLE public.seo_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  keyword TEXT,
  position INTEGER,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  ctr DECIMAL(5,4),
  date_recorded DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add indexes for better performance
CREATE INDEX idx_page_seo_path ON public.page_seo(page_path);
CREATE INDEX idx_navigation_parent ON public.navigation_items(parent_id);
CREATE INDEX idx_navigation_order ON public.navigation_items(display_order);
CREATE INDEX idx_content_blocks_key ON public.content_blocks(block_key);
CREATE INDEX idx_content_blocks_page ON public.content_blocks(page_path);
CREATE INDEX idx_team_members_order ON public.team_members(display_order);
CREATE INDEX idx_seo_analytics_page_date ON public.seo_analytics(page_path, date_recorded);

-- Enable RLS on all new tables
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_seo ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_analytics ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for admin access
CREATE POLICY "Admins can manage team members" 
ON public.team_members 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Everyone can view active team members" 
ON public.team_members 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage page SEO" 
ON public.page_seo 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Everyone can view page SEO" 
ON public.page_seo 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage navigation" 
ON public.navigation_items 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Everyone can view active navigation" 
ON public.navigation_items 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage content blocks" 
ON public.content_blocks 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Everyone can view active content blocks" 
ON public.content_blocks 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage form templates" 
ON public.form_templates 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Everyone can view active form templates" 
ON public.form_templates 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage SEO analytics" 
ON public.seo_analytics 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid()));

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_team_members_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_page_seo_updated_at
  BEFORE UPDATE ON public.page_seo
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_navigation_items_updated_at
  BEFORE UPDATE ON public.navigation_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_blocks_updated_at
  BEFORE UPDATE ON public.content_blocks
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_form_templates_updated_at
  BEFORE UPDATE ON public.form_templates
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some default page SEO data
INSERT INTO public.page_seo (page_path, page_title, meta_title, meta_description, focus_keywords) VALUES
('/', 'Home - Cryptocurrency Investigation Bureau', 'Expert Cryptocurrency Investigation & Digital Asset Recovery Services', 'Leading cryptocurrency investigation firm specializing in blockchain forensics, digital asset recovery, and crypto fraud prevention. Professional investigators with proven track record.', ARRAY['cryptocurrency investigation', 'blockchain forensics', 'digital asset recovery']),
('/about', 'About Us - Expert Crypto Investigators', 'About Our Cryptocurrency Investigation Team | Digital Asset Experts', 'Learn about our experienced team of cryptocurrency investigators and blockchain forensics experts. Discover our mission, values, and commitment to digital asset recovery.', ARRAY['crypto investigation team', 'blockchain experts', 'digital forensics']),
('/services', 'Our Services - Cryptocurrency Investigation & Recovery', 'Comprehensive Cryptocurrency Investigation Services | Blockchain Analysis', 'Complete range of cryptocurrency investigation services including blockchain analysis, asset tracing, fraud investigation, and digital evidence collection.', ARRAY['crypto investigation services', 'blockchain analysis', 'asset tracing']),
('/case-studies', 'Case Studies - Successful Crypto Investigations', 'Real Cryptocurrency Investigation Case Studies | Success Stories', 'Explore our successful cryptocurrency investigation case studies and learn how we recovered millions in digital assets for our clients.', ARRAY['crypto case studies', 'investigation success stories', 'asset recovery cases']),
('/contact', 'Contact Us - Get Expert Crypto Investigation Help', 'Contact Cryptocurrency Investigation Experts | Free Consultation', 'Contact our cryptocurrency investigation experts for a free consultation. Available 24/7 for urgent digital asset recovery and blockchain forensics.', ARRAY['contact crypto investigators', 'free consultation', 'urgent investigation']);

-- Insert default navigation items
INSERT INTO public.navigation_items (label, url, display_order, menu_type) VALUES
('Home', '/', 1, 'header'),
('About', '/about', 2, 'header'),
('Services', '/services', 3, 'header'),
('Case Studies', '/case-studies', 4, 'header'),
('Contact', '/contact', 5, 'header'),
('Privacy Policy', '/privacy-policy', 1, 'footer'),
('Terms & Conditions', '/terms-conditions', 2, 'footer');