-- Create domains table for multi-domain management
CREATE TABLE public.domains (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  domain_name TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create cases table for case tracking
CREATE TABLE public.cases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  case_number TEXT NOT NULL UNIQUE,
  case_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'submitted',
  user_details JSONB NOT NULL,
  progress_stages JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create SMTP configurations table
CREATE TABLE public.smtp_configs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  host TEXT NOT NULL,
  port INTEGER NOT NULL DEFAULT 587,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  use_ssl BOOLEAN NOT NULL DEFAULT true,
  is_active BOOLEAN NOT NULL DEFAULT true,
  warmup_status TEXT DEFAULT 'not_started',
  daily_limit INTEGER DEFAULT 50,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.smtp_configs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for domains
CREATE POLICY "Admins can manage domains" ON public.domains FOR ALL USING (is_current_user_admin());
CREATE POLICY "Everyone can view active domains" ON public.domains FOR SELECT USING (is_active = true);

-- RLS Policies for cases  
CREATE POLICY "Everyone can view cases" ON public.cases FOR SELECT USING (true);
CREATE POLICY "Admins can manage cases" ON public.cases FOR ALL USING (is_current_user_admin());

-- RLS Policies for SMTP configs
CREATE POLICY "Admins can manage SMTP configs" ON public.smtp_configs FOR ALL USING (is_current_user_admin());

-- Create triggers for updated_at
CREATE TRIGGER update_domains_updated_at
  BEFORE UPDATE ON public.domains
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_cases_updated_at
  BEFORE UPDATE ON public.cases
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_smtp_configs_updated_at
  BEFORE UPDATE ON public.smtp_configs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();