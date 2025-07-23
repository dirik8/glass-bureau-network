-- Enable RLS on form_submissions table (this was missing RLS)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for form_submissions
CREATE POLICY "Admins can view all form submissions" 
ON form_submissions 
FOR SELECT 
USING (is_current_user_admin());

CREATE POLICY "Admins can manage all form submissions" 
ON form_submissions 
FOR ALL 
USING (is_current_user_admin());

-- Allow anonymous users to submit forms
CREATE POLICY "Anyone can submit forms" 
ON form_submissions 
FOR INSERT 
WITH CHECK (true);