-- Update demo cases with realistic emails and names
UPDATE public.cases 
SET user_details = '{"name": "Sarah Johnson", "email": "sarah.johnson.recovery@gmail.com", "phone": "+1-555-0123", "location": "California, USA", "incident_date": "2024-01-15", "loss_amount": "$45,000"}'
WHERE case_number = 'LGN-2024-DEMO001';

UPDATE public.cases 
SET user_details = '{"name": "Michael Chen", "email": "mike.chen.crypto@outlook.com", "phone": "+1-555-0456", "location": "New York, USA", "incident_date": "2024-02-01", "loss_amount": "$78,500"}'
WHERE case_number = 'LGN-2024-DEMO002';

UPDATE public.cases 
SET user_details = '{"name": "Jennifer Martinez", "email": "jennifer.martinez.legal@yahoo.com", "phone": "+1-555-0789", "location": "Texas, USA", "incident_date": "2023-11-10", "loss_amount": "$32,000", "recovery_amount": "$28,500"}'
WHERE case_number = 'LGN-2024-DEMO003';

UPDATE public.cases 
SET user_details = '{"name": "Robert Davis", "email": "robert.davis.trading@gmail.com", "phone": "+1-555-0321", "location": "Florida, USA", "incident_date": "2024-01-28", "loss_amount": "$56,700"}'
WHERE case_number = 'LGN-2024-DEMO004';

UPDATE public.cases 
SET user_details = '{"name": "Lisa Thompson", "email": "lisa.thompson.invest@outlook.com", "phone": "+1-555-0654", "location": "Washington, USA", "incident_date": "2024-02-12", "loss_amount": "$23,400"}'
WHERE case_number = 'LGN-2024-DEMO005';