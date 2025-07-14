-- MySQL Schema for cPanel deployment
-- Converted from Supabase PostgreSQL schema

-- Create database (run this manually in cPanel)
-- CREATE DATABASE your_database_name;
-- USE your_database_name;

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    user_id VARCHAR(36),
    role VARCHAR(50) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Site settings table
CREATE TABLE IF NOT EXISTS site_settings (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    `key` VARCHAR(255) NOT NULL UNIQUE,
    `value` TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    bio TEXT,
    expertise JSON,
    image_url TEXT,
    email VARCHAR(255),
    phone VARCHAR(50),
    linkedin_url TEXT,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Page SEO table
CREATE TABLE IF NOT EXISTS page_seo (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    page_path VARCHAR(500) NOT NULL UNIQUE,
    page_title VARCHAR(255) NOT NULL,
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords JSON,
    og_title VARCHAR(255),
    og_description TEXT,
    og_image TEXT,
    og_type VARCHAR(50) DEFAULT 'website',
    twitter_title VARCHAR(255),
    twitter_description TEXT,
    twitter_image TEXT,
    twitter_card VARCHAR(50) DEFAULT 'summary_large_image',
    canonical_url TEXT,
    robots_directives VARCHAR(100) DEFAULT 'index,follow',
    focus_keywords JSON,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Navigation items table
CREATE TABLE IF NOT EXISTS navigation_items (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    label VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    icon_name VARCHAR(100),
    menu_type VARCHAR(50) DEFAULT 'header',
    parent_id VARCHAR(36),
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    is_external BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES navigation_items(id) ON DELETE SET NULL
);

-- Content blocks table
CREATE TABLE IF NOT EXISTS content_blocks (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    block_key VARCHAR(255) NOT NULL,
    block_type VARCHAR(100) NOT NULL,
    page_path VARCHAR(500),
    title VARCHAR(255),
    subtitle VARCHAR(255),
    content TEXT,
    image_url TEXT,
    link_url TEXT,
    link_text VARCHAR(255),
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    metadata JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_block_key_page (block_key, page_path)
);

-- Form templates table
CREATE TABLE IF NOT EXISTS form_templates (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    form_type VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    fields JSON NOT NULL,
    email_template TEXT,
    success_message TEXT,
    redirect_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Form submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    form_type VARCHAR(100) NOT NULL,
    data JSON NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    email_sent BOOLEAN DEFAULT FALSE,
    email_sent_at TIMESTAMP NULL,
    email_error TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PDFs table
CREATE TABLE IF NOT EXISTS pdfs (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,
    level VARCHAR(50),
    file_path TEXT NOT NULL,
    pages INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- SEO analytics table
CREATE TABLE IF NOT EXISTS seo_analytics (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    page_path VARCHAR(500) NOT NULL,
    keyword VARCHAR(255),
    date_recorded DATE DEFAULT (CURRENT_DATE),
    impressions INT DEFAULT 0,
    clicks INT DEFAULT 0,
    ctr DECIMAL(5,4),
    position INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_site_settings_key ON site_settings(`key`);
CREATE INDEX idx_team_members_active ON team_members(is_active, display_order);
CREATE INDEX idx_page_seo_path ON page_seo(page_path);
CREATE INDEX idx_navigation_items_menu ON navigation_items(menu_type, is_active, display_order);
CREATE INDEX idx_content_blocks_page ON content_blocks(page_path, is_active, display_order);
CREATE INDEX idx_form_submissions_type ON form_submissions(form_type, submitted_at);
CREATE INDEX idx_pdfs_category ON pdfs(category);
CREATE INDEX idx_seo_analytics_page_date ON seo_analytics(page_path, date_recorded);

-- Insert default data
INSERT IGNORE INTO site_settings (`key`, `value`, description) VALUES
('site_name', 'Your Site Name', 'The name of your website'),
('site_description', 'Your site description', 'Brief description of your website'),
('contact_email', 'admin@yoursite.com', 'Primary contact email'),
('contact_phone', '+1 (555) 123-4567', 'Primary contact phone'),
('admin_email', 'admin@yoursite.com', 'Admin notification email');

INSERT IGNORE INTO page_seo (page_path, page_title, meta_title, meta_description) VALUES
('/', 'Home - Your Site', 'Home - Your Site', 'Welcome to our website'),
('/about', 'About Us - Your Site', 'About Us - Your Site', 'Learn more about our company'),
('/contact', 'Contact Us - Your Site', 'Contact Us - Your Site', 'Get in touch with us'),
('/services', 'Services - Your Site', 'Services - Your Site', 'Our professional services');

INSERT IGNORE INTO navigation_items (label, url, display_order) VALUES
('Home', '/', 1),
('About', '/about', 2),
('Services', '/services', 3),
('Contact', '/contact', 4);

-- Create admin user (password: admin123)
-- You should change this password after installation
INSERT IGNORE INTO admin_users (username, password_hash) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');