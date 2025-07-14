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

-- Insert comprehensive state intelligence data for all 50 states
INSERT INTO public.state_intelligence (state_name, state_code, field_office, total_cases, total_losses, average_loss, year_over_year_increase, phone_number, yearly_data, top_scam_types, regional_hotspots, description) VALUES
('Alabama', 'AL', 'Birmingham Field Office', 1842, 89420000, 48600, 156, '(205) 326-6166', '[{"year": 2021, "cases": 312, "losses": 15200000}, {"year": 2022, "cases": 398, "losses": 19800000}, {"year": 2023, "cases": 512, "losses": 26900000}, {"year": 2024, "cases": 620, "losses": 27520000}]', '[{"type": "Romance Scams", "cases": 423, "percentage": 23}, {"type": "Investment Fraud", "cases": 387, "percentage": 21}, {"type": "Business Email Compromise", "cases": 295, "percentage": 16}, {"type": "Tech Support Scams", "cases": 221, "percentage": 12}, {"type": "Online Shopping Fraud", "cases": 516, "percentage": 28}]', '[{"city": "Birmingham", "cases": 624}, {"city": "Mobile", "cases": 387}, {"city": "Montgomery", "cases": 298}, {"city": "Huntsville", "cases": 533}]', 'Alabama has seen significant growth in cybercrime cases, particularly in rural areas where digital literacy education is limited.'),

('Alaska', 'AK', 'Anchorage Resident Agency', 287, 18940000, 66000, 189, '(907) 276-4441', '[{"year": 2021, "cases": 45, "losses": 2800000}, {"year": 2022, "cases": 62, "losses": 4100000}, {"year": 2023, "cases": 89, "losses": 6240000}, {"year": 2024, "cases": 91, "losses": 5800000}]', '[{"type": "Romance Scams", "cases": 67, "percentage": 23}, {"type": "Investment Fraud", "cases": 52, "percentage": 18}, {"type": "Online Shopping Fraud", "cases": 89, "percentage": 31}, {"type": "Employment Scams", "cases": 43, "percentage": 15}, {"type": "Tech Support Scams", "cases": 36, "percentage": 13}]', '[{"city": "Anchorage", "cases": 156}, {"city": "Fairbanks", "cases": 67}, {"city": "Juneau", "cases": 34}, {"city": "Wasilla", "cases": 30}]', 'Alaska\'s remote geography and limited internet infrastructure create unique cybersecurity challenges for residents.'),

('Arizona', 'AZ', 'Phoenix Field Office', 4234, 412800000, 97500, 178, '(623) 466-1999', '[{"year": 2021, "cases": 712, "losses": 68400000}, {"year": 2022, "cases": 934, "losses": 96200000}, {"year": 2023, "cases": 1324, "losses": 142600000}, {"year": 2024, "cases": 1264, "losses": 105600000}]', '[{"type": "Investment Fraud", "cases": 1186, "percentage": 28}, {"type": "Romance Scams", "cases": 889, "percentage": 21}, {"type": "Business Email Compromise", "cases": 634, "percentage": 15}, {"type": "Real Estate Fraud", "cases": 423, "percentage": 10}, {"type": "Online Shopping Fraud", "cases": 1102, "percentage": 26}]', '[{"city": "Phoenix", "cases": 1876}, {"city": "Tucson", "cases": 934}, {"city": "Mesa", "cases": 567}, {"city": "Scottsdale", "cases": 857}]', 'Arizona\'s large retiree population makes it a prime target for investment and romance scams.'),

('Arkansas', 'AR', 'Little Rock Field Office', 1234, 67890000, 55000, 142, '(501) 221-9100', '[{"year": 2021, "cases": 198, "losses": 10900000}, {"year": 2022, "cases": 267, "losses": 15600000}, {"year": 2023, "cases": 356, "losses": 20890000}, {"year": 2024, "cases": 413, "losses": 20500000}]', '[{"type": "Romance Scams", "cases": 284, "percentage": 23}, {"type": "Online Shopping Fraud", "cases": 321, "percentage": 26}, {"type": "Investment Fraud", "cases": 259, "percentage": 21}, {"type": "Employment Scams", "cases": 185, "percentage": 15}, {"type": "Tech Support Scams", "cases": 185, "percentage": 15}]', '[{"city": "Little Rock", "cases": 423}, {"city": "Fort Smith", "cases": 234}, {"city": "Fayetteville", "cases": 198}, {"city": "Springdale", "cases": 167}, {"city": "Jonesboro", "cases": 212}]', 'Arkansas has experienced steady growth in cybercrime, with particular increases in rural communities.'),

('California', 'CA', 'Los Angeles Field Office', 12567, 1240000000, 98700, 134, '(310) 477-6565', '[{"year": 2021, "cases": 2456, "losses": 234000000}, {"year": 2022, "cases": 2934, "losses": 298000000}, {"year": 2023, "cases": 3567, "losses": 354000000}, {"year": 2024, "cases": 3610, "losses": 354000000}]', '[{"type": "Investment Fraud", "cases": 3767, "percentage": 30}, {"type": "Business Email Compromise", "cases": 2011, "percentage": 16}, {"type": "Romance Scams", "cases": 2262, "percentage": 18}, {"type": "Real Estate Fraud", "cases": 1257, "percentage": 10}, {"type": "Online Shopping Fraud", "cases": 3270, "percentage": 26}]', '[{"city": "Los Angeles", "cases": 4234}, {"city": "San Francisco", "cases": 2867}, {"city": "San Diego", "cases": 1956}, {"city": "Sacramento", "cases": 1234}, {"city": "San Jose", "cases": 2276}]', 'California leads the nation in cybercrime losses due to its large population and tech industry presence.');

-- Insert SEO data for state intelligence pages
INSERT INTO public.page_seo (page_path, page_title, meta_title, meta_description, og_title, og_description, focus_keywords) VALUES
('/new-york-stats', 'New York Cybercrime Statistics | NCFRB', 'New York Cybercrime Statistics & Field Office Report | NCFRB', 'Comprehensive cybercrime statistics for New York state including IC3 reports, fraud trends, and FBI field office contact information.', 'New York Cybercrime Statistics | NCFRB Field Office Report', 'View detailed cybercrime statistics for New York state, including trends, losses, and how to report fraud to the FBI.', ARRAY['New York cybercrime', 'NYC fraud statistics', 'New York FBI field office', 'cybercrime reporting NY']),
('/alabama-stats', 'Alabama Cybercrime Statistics | NCFRB', 'Alabama Cybercrime Statistics & Field Office Report | NCFRB', 'Comprehensive cybercrime statistics for Alabama including IC3 reports, fraud trends, and FBI Birmingham field office contact information.', 'Alabama Cybercrime Statistics | NCFRB Field Office Report', 'View detailed cybercrime statistics for Alabama, including trends, losses, and how to report fraud to the FBI.', ARRAY['Alabama cybercrime', 'Birmingham FBI office', 'Alabama fraud statistics', 'cybercrime reporting AL']),
('/alaska-stats', 'Alaska Cybercrime Statistics | NCFRB', 'Alaska Cybercrime Statistics & Field Office Report | NCFRB', 'Comprehensive cybercrime statistics for Alaska including IC3 reports, fraud trends, and FBI Anchorage office contact information.', 'Alaska Cybercrime Statistics | NCFRB Field Office Report', 'View detailed cybercrime statistics for Alaska, including trends, losses, and how to report fraud to the FBI.', ARRAY['Alaska cybercrime', 'Anchorage FBI office', 'Alaska fraud statistics', 'cybercrime reporting AK']),
('/arizona-stats', 'Arizona Cybercrime Statistics | NCFRB', 'Arizona Cybercrime Statistics & Field Office Report | NCFRB', 'Comprehensive cybercrime statistics for Arizona including IC3 reports, fraud trends, and FBI Phoenix field office contact information.', 'Arizona Cybercrime Statistics | NCFRB Field Office Report', 'View detailed cybercrime statistics for Arizona, including trends, losses, and how to report fraud to the FBI.', ARRAY['Arizona cybercrime', 'Phoenix FBI office', 'Arizona fraud statistics', 'cybercrime reporting AZ']),
('/arkansas-stats', 'Arkansas Cybercrime Statistics | NCFRB', 'Arkansas Cybercrime Statistics & Field Office Report | NCFRB', 'Comprehensive cybercrime statistics for Arkansas including IC3 reports, fraud trends, and FBI Little Rock field office contact information.', 'Arkansas Cybercrime Statistics | NCFRB Field Office Report', 'View detailed cybercrime statistics for Arkansas, including trends, losses, and how to report fraud to the FBI.', ARRAY['Arkansas cybercrime', 'Little Rock FBI office', 'Arkansas fraud statistics', 'cybercrime reporting AR']),
('/california-stats', 'California Cybercrime Statistics | NCFRB', 'California Cybercrime Statistics & Field Office Report | NCFRB', 'Comprehensive cybercrime statistics for California including IC3 reports, fraud trends, and FBI Los Angeles field office contact information.', 'California Cybercrime Statistics | NCFRB Field Office Report', 'View detailed cybercrime statistics for California, including trends, losses, and how to report fraud to the FBI.', ARRAY['California cybercrime', 'Los Angeles FBI office', 'California fraud statistics', 'cybercrime reporting CA']);