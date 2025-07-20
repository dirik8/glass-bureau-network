
-- Insert demo cases for testing case progress tracking
INSERT INTO public.cases (case_number, case_type, status, user_details, progress_stages, notes, created_at, updated_at) VALUES 
(
  'LGN-2024-DEMO001',
  'Romance Scam Recovery',
  'investigating',
  '{"name": "Sarah Johnson", "email": "demo.test@example.com", "phone": "+1-555-0123", "location": "California, USA", "incident_date": "2024-01-15", "loss_amount": "$45,000"}',
  '[
    {"title": "Case Submitted", "description": "Initial report received and case number assigned", "completed": true, "completed_at": "2024-01-20T10:00:00Z"},
    {"title": "Document Review", "description": "Reviewing submitted evidence and documentation", "completed": true, "completed_at": "2024-01-22T14:30:00Z"},
    {"title": "Investigation Started", "description": "Active investigation into romance scam network", "completed": true, "completed_at": "2024-01-25T09:15:00Z"},
    {"title": "Digital Forensics", "description": "Analyzing communication records and financial transactions", "completed": false},
    {"title": "Recovery Process", "description": "Initiating asset recovery procedures", "completed": false},
    {"title": "Case Resolution", "description": "Final resolution and recovery completion", "completed": false}
  ]',
  'Case involves sophisticated romance scam operation. Suspect profiles traced across multiple dating platforms. Financial transactions under investigation.',
  '2024-01-20T10:00:00Z',
  '2024-01-25T09:15:00Z'
),
(
  'LGN-2024-DEMO002',
  'Cryptocurrency Fraud Investigation',
  'reviewing',
  '{"name": "Michael Chen", "email": "demo.test@example.com", "phone": "+1-555-0456", "location": "New York, USA", "incident_date": "2024-02-01", "loss_amount": "$78,500"}',
  '[
    {"title": "Case Submitted", "description": "Cryptocurrency fraud report filed", "completed": true, "completed_at": "2024-02-05T11:00:00Z"},
    {"title": "Initial Assessment", "description": "Reviewing blockchain transactions and wallet addresses", "completed": true, "completed_at": "2024-02-07T16:45:00Z"},
    {"title": "Documentation Review", "description": "Analyzing submitted evidence and communication logs", "completed": false},
    {"title": "Blockchain Analysis", "description": "Tracing cryptocurrency transactions", "completed": false},
    {"title": "Recovery Actions", "description": "Coordinating with exchanges for asset recovery", "completed": false},
    {"title": "Case Closure", "description": "Final report and recovery results", "completed": false}
  ]',
  'Fake investment platform case. Investigating wallet addresses and transaction patterns. Multiple victims identified.',
  '2024-02-05T11:00:00Z',
  '2024-02-07T16:45:00Z'
),
(
  'LGN-2024-DEMO003',
  'Binary Options Scam Recovery',
  'resolved',
  '{"name": "Jennifer Martinez", "email": "demo.test@example.com", "phone": "+1-555-0789", "location": "Texas, USA", "incident_date": "2023-11-10", "loss_amount": "$32,000", "recovery_amount": "$28,500"}',
  '[
    {"title": "Case Submitted", "description": "Binary options fraud report received", "completed": true, "completed_at": "2023-11-15T09:30:00Z"},
    {"title": "Evidence Collection", "description": "Gathering trading records and communication evidence", "completed": true, "completed_at": "2023-11-18T14:20:00Z"},
    {"title": "Investigation Phase", "description": "Investigating fraudulent binary options platform", "completed": true, "completed_at": "2023-11-25T10:15:00Z"},
    {"title": "Legal Action", "description": "Coordinating with legal team for recovery proceedings", "completed": true, "completed_at": "2023-12-08T13:45:00Z"},
    {"title": "Asset Recovery", "description": "Successfully recovered 89% of lost funds", "completed": true, "completed_at": "2024-01-12T15:30:00Z"},
    {"title": "Case Closed", "description": "Case successfully resolved with fund recovery", "completed": true, "completed_at": "2024-01-15T10:00:00Z"}
  ]',
  'RESOLVED: Successfully recovered $28,500 of $32,000 lost to binary options scam. Platform shut down and assets frozen.',
  '2023-11-15T09:30:00Z',
  '2024-01-15T10:00:00Z'
),
(
  'LGN-2024-DEMO004',
  'Trading Platform Fraud Investigation',
  'investigating',
  '{"name": "Robert Davis", "email": "demo.test@example.com", "phone": "+1-555-0321", "location": "Florida, USA", "incident_date": "2024-01-28", "loss_amount": "$56,700"}',
  '[
    {"title": "Case Submitted", "description": "Fraudulent trading platform report filed", "completed": true, "completed_at": "2024-02-02T08:45:00Z"},
    {"title": "Platform Analysis", "description": "Investigating fake trading platform operations", "completed": true, "completed_at": "2024-02-05T12:30:00Z"},
    {"title": "Financial Investigation", "description": "Tracing funds and identifying perpetrators", "completed": true, "completed_at": "2024-02-10T14:15:00Z"},
    {"title": "Evidence Gathering", "description": "Collecting additional evidence from multiple sources", "completed": false},
    {"title": "Recovery Operations", "description": "Initiating asset recovery procedures", "completed": false},
    {"title": "Case Resolution", "description": "Final investigation results and recovery", "completed": false}
  ]',
  'Active investigation into fake Forex/CFD trading platform. Multiple jurisdictions involved. Strong recovery prospects.',
  '2024-02-02T08:45:00Z',
  '2024-02-10T14:15:00Z'
),
(
  'LGN-2024-DEMO005',
  'Investment Fraud Recovery',
  'submitted',
  '{"name": "Lisa Thompson", "email": "demo.test@example.com", "phone": "+1-555-0654", "location": "Washington, USA", "incident_date": "2024-02-12", "loss_amount": "$23,400"}',
  '[
    {"title": "Case Submitted", "description": "Investment fraud report received and logged", "completed": true, "completed_at": "2024-02-15T13:20:00Z"},
    {"title": "Initial Review", "description": "Preliminary assessment of submitted documentation", "completed": false},
    {"title": "Investigation Assignment", "description": "Case assigned to specialized investigation team", "completed": false},
    {"title": "Evidence Analysis", "description": "Detailed analysis of investment communications", "completed": false},
    {"title": "Recovery Planning", "description": "Developing asset recovery strategy", "completed": false},
    {"title": "Case Resolution", "description": "Investigation completion and results", "completed": false}
  ]',
  'Recently submitted investment fraud case. Preliminary review indicates Ponzi scheme characteristics. Awaiting full investigation.',
  '2024-02-15T13:20:00Z',
  '2024-02-15T13:20:00Z'
);
