-- Fix site_settings table column names to match code expectations
ALTER TABLE public.site_settings 
RENAME COLUMN setting_key TO key;

ALTER TABLE public.site_settings 
RENAME COLUMN setting_value TO value;

-- Update unique constraint if it exists
DROP INDEX IF EXISTS idx_site_settings_key;
CREATE UNIQUE INDEX idx_site_settings_key ON public.site_settings(key);