-- Add comprehensive site settings for dynamic content management
INSERT INTO site_settings (key, value, description) VALUES
-- Company branding
('company_name', 'LGN Recovery Division', 'Main company name'),
('division_name', 'FBI Cybercrime Division', 'Division or department name'),
('tagline', 'Law Enforcement & Cybercrime Intelligence', 'Company tagline'),
('organization_type', 'Federal Bureau of Investigation', 'Organization type'),

-- Contact information  
('emergency_phone', '+1 (438) 602-5895', 'Emergency contact phone number'),
('main_phone', '+1 (438) 602-5895', 'Main contact phone number'),
('main_email', 'support@lgnrecovery.com', 'Main contact email'),
('emergency_email', 'emergency@lgnrecovery.com', 'Emergency contact email'),
('address_line1', '935 Pennsylvania Avenue NW', 'Address line 1'),
('address_line2', 'Washington, DC 20535', 'Address line 2'),

-- Hero section content
('hero_title', 'FBI Cybercrime Division', 'Hero section main title'),
('hero_subtitle', 'LGN Recovery Division', 'Hero section subtitle'),
('hero_description', 'Specialized federal law enforcement unit dedicated to investigating cybercrimes, recovering stolen digital assets, and protecting victims of online fraud and cybercrime across the United States.', 'Hero section description'),
('hero_cta_primary', 'File Emergency Report', 'Primary call-to-action button text'),
('hero_cta_secondary', 'View Case Studies', 'Secondary call-to-action button text'),

-- Emergency banner
('emergency_banner_text', 'FRAUD VICTIM? Report immediately to LGN Recovery Division for asset recovery assistance.', 'Emergency banner message'),
('emergency_banner_active', 'true', 'Whether emergency banner is active'),

-- Statistics
('total_cases_closed', '8,547', 'Total cases closed statistic'),
('assets_recovered', '$2.8B', 'Assets recovered statistic'),
('victims_assisted', '12,340', 'Victims assisted statistic'),
('recovery_success_rate', '94%', 'Recovery success rate statistic'),

-- Footer content
('footer_description', 'Leading federal cybercrime investigation unit specializing in digital forensics, asset recovery, and victim assistance for cyber-related crimes.', 'Footer company description'),
('footer_copyright', '2024 LGN Recovery Division. All rights reserved.', 'Footer copyright text'),

-- Navigation labels
('nav_investigations', 'Investigations', 'Navigation label for investigations'),
('nav_services', 'Services', 'Navigation label for services'),
('nav_resources', 'Resources', 'Navigation label for resources'),
('nav_about', 'About', 'Navigation label for about'),

-- SEO defaults
('default_meta_title', 'LGN Recovery Division - FBI Cybercrime Investigation', 'Default meta title'),
('default_meta_description', 'Federal cybercrime investigation unit specializing in digital forensics, asset recovery, and victim assistance for cyber-related crimes.', 'Default meta description'),
('default_og_image', '/og-image.jpg', 'Default Open Graph image'),

-- Social media
('social_facebook', '', 'Facebook URL'),
('social_twitter', '', 'Twitter URL'),
('social_linkedin', '', 'LinkedIn URL'),
('social_instagram', '', 'Instagram URL'),

-- Service descriptions
('service_crypto_investigation_desc', 'Specialized unit for investigating cryptocurrency-related crimes and tracing digital assets.', 'Crypto investigation service description'),
('service_asset_recovery_desc', 'Expert asset recovery services for victims of financial crimes and fraud.', 'Asset recovery service description'),
('service_victim_assistance_desc', 'Comprehensive support services for cybercrime victims and their families.', 'Victim assistance service description'),

-- Case information
('active_case_title', 'Operation Digital Shield', 'Active case title'),
('active_case_description', 'Multi-jurisdictional investigation targeting international cryptocurrency fraud networks', 'Active case description'),
('active_case_assets_traced', '$450M+', 'Assets traced in active case'),
('active_case_recovery_status', 'In Progress', 'Active case recovery status');