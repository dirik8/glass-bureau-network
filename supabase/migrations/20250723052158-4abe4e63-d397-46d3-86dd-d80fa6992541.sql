-- Add access code management to site_settings
INSERT INTO site_settings (key, value, description) VALUES 
('admin_access_code', '2058', 'Access code required for admin and setup pages'),
('setup_access_code', '2058', 'Access code required for setup page access')
ON CONFLICT (key) DO NOTHING;

-- Create contact management table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_type TEXT NOT NULL, -- 'phone', 'email', 'address'
  label TEXT NOT NULL, -- 'Emergency Hotline', 'Support Email', etc.
  value TEXT NOT NULL, -- actual phone number, email, or address
  description TEXT,
  is_primary BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  page_location TEXT, -- 'header', 'footer', 'contact_page', 'all'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on contacts
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for contacts
CREATE POLICY "Everyone can view active contacts" 
ON contacts 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage contacts" 
ON contacts 
FOR ALL 
USING (is_current_user_admin());

-- Insert default contact data
INSERT INTO contacts (contact_type, label, value, description, is_primary, page_location, display_order) VALUES
('phone', 'Emergency Hotline', '+1-800-555-0123', 'Main emergency assistance line', true, 'all', 1),
('email', 'Support Email', 'support@lgnrecovery.com', 'General support and inquiries', true, 'all', 2),
('email', 'Admin Email', 'admin@lgnrecovery.com', 'Administrative contact', false, 'footer', 3),
('phone', 'Direct Line', '+1-555-0199', 'Direct assistance line', false, 'contact_page', 4)
ON CONFLICT DO NOTHING;

-- Create trigger for contacts updated_at
CREATE TRIGGER update_contacts_updated_at
BEFORE UPDATE ON contacts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();