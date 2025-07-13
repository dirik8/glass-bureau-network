-- Add email delivery tracking to form submissions
ALTER TABLE public.form_submissions 
ADD COLUMN email_sent boolean DEFAULT false,
ADD COLUMN email_sent_at timestamp without time zone,
ADD COLUMN email_error text;