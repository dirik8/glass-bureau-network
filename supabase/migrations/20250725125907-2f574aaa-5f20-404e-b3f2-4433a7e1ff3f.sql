-- Add default form templates with success messages
INSERT INTO form_templates (form_type, name, fields, email_template, success_message, is_active) VALUES
(
  'contact',
  'Contact Form',
  '[
    {"name": "name", "type": "text", "label": "Name", "required": true},
    {"name": "email", "type": "email", "label": "Email", "required": true},
    {"name": "phone", "type": "tel", "label": "Phone", "required": false},
    {"name": "message", "type": "textarea", "label": "Message", "required": true}
  ]'::jsonb,
  'New contact form submission from {{name}} ({{email}}): {{message}}',
  'Thank you for your message! We have received your inquiry and will get back to you within 24 hours.',
  true
),
(
  'case_submission',
  'Case Submission Form',
  '[
    {"name": "name", "type": "text", "label": "Full Name", "required": true},
    {"name": "email", "type": "email", "label": "Email Address", "required": true},
    {"name": "phone", "type": "tel", "label": "Phone Number", "required": false},
    {"name": "case_type", "type": "select", "label": "Case Type", "required": true, "options": ["Crypto Fraud", "Investment Scam", "Romance Scam", "Business Email Compromise", "Other"]},
    {"name": "incident_date", "type": "date", "label": "Incident Date", "required": false},
    {"name": "amount_lost", "type": "number", "label": "Amount Lost (USD)", "required": false},
    {"name": "description", "type": "textarea", "label": "Case Description", "required": true}
  ]'::jsonb,
  'New case submission from {{name}} ({{email}}) - Case Type: {{case_type}}, Amount: ${{amount_lost}}',
  'Your case has been submitted successfully. A case number will be assigned and you will receive a confirmation email shortly.',
  true
),
(
  'newsletter_signup',
  'Newsletter Signup',
  '[
    {"name": "email", "type": "email", "label": "Email Address", "required": true},
    {"name": "name", "type": "text", "label": "Name", "required": false}
  ]'::jsonb,
  'New newsletter signup: {{email}} ({{name}})',
  'Thank you for subscribing to our newsletter! You will receive updates on the latest cybercrime trends and prevention tips.',
  true
);

-- Add template_id column to form_submissions to link to templates
ALTER TABLE form_submissions ADD COLUMN IF NOT EXISTS template_id uuid REFERENCES form_templates(id);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_template_id ON form_submissions(template_id);