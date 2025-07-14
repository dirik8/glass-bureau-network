-- Create state intelligence data table
CREATE TABLE public.state_intelligence (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  state_name TEXT NOT NULL UNIQUE,
  state_code TEXT NOT NULL UNIQUE,
  field_office TEXT NOT NULL,
  total_cases INTEGER NOT NULL,
  total_losses BIGINT NOT NULL,
  average_loss INTEGER NOT NULL,
  year_over_year_increase INTEGER NOT NULL,
  phone_number TEXT NOT NULL,
  yearly_data JSONB NOT NULL,
  top_scam_types JSONB NOT NULL,
  regional_hotspots JSONB NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.state_intelligence ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Everyone can view state intelligence data" 
ON public.state_intelligence 
FOR SELECT 
USING (true);

CREATE POLICY "Only admins can manage state intelligence data" 
ON public.state_intelligence 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE admin_users.user_id = auth.uid()));

-- Create trigger for updated_at
CREATE TRIGGER update_state_intelligence_updated_at
BEFORE UPDATE ON public.state_intelligence
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();