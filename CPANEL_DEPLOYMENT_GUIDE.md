# 🚀 cPanel Deployment Guide

## Overview

This guide walks you through deploying your LGN Advanced Scam Recovery platform to any cPanel hosting provider. The process is streamlined and works with shared hosting, VPS, or dedicated servers.

## 📋 Prerequisites

### Before You Start
- ✅ cPanel hosting account with File Manager access
- ✅ Domain or subdomain configured
- ✅ Node.js installed locally (for building)
- ✅ Git access to your repository
- ✅ Admin access codes (default: `2058`)

### Hosting Requirements
- **PHP**: Not required (this is a static React app)
- **Node.js**: Only needed for building locally
- **Storage**: Minimum 50MB for app files
- **Bandwidth**: Standard web hosting package
- **SSL**: Recommended (Let's Encrypt or paid certificate)

## 🛠️ Deployment Methods

### Method 1: Automated Deployment (Recommended)

#### Windows Users
```batch
# Run the automated deployment script
./scripts/deploy.bat
```

#### Linux/Mac Users
```bash
# Make script executable
chmod +x ./scripts/deploy.sh

# Run the deployment script
./scripts/deploy.sh
```

#### What the script does:
1. ✅ Installs dependencies if needed
2. ✅ Cleans previous builds
3. ✅ Builds optimized production bundle
4. ✅ Creates deployment zip file
5. ✅ Provides upload instructions

### Method 2: Manual Deployment

#### Step 1: Build the Project
```bash
# Install dependencies
npm install

# Build for production
npm run build
```

#### Step 2: Create Deployment Package
```bash
# Navigate to build directory
cd dist

# Create zip file
# Windows (PowerShell)
Compress-Archive -Path * -DestinationPath ../cpanel-deployment.zip -Force

# Linux/Mac
zip -r ../cpanel-deployment.zip .

# Return to project root
cd ..
```

#### Step 3: Upload to cPanel
1. **Login to cPanel**
2. **Open File Manager**
3. **Navigate to public_html** (or subdomain folder)
4. **Upload cpanel-deployment.zip**
5. **Extract the zip file**
6. **Delete the zip file** (optional, for security)

## 📁 cPanel File Structure

### After Extraction
```
public_html/
├── index.html              # Main entry point
├── assets/                 # CSS, JS, and image files
│   ├── index-[hash].js    # Main JavaScript bundle
│   ├── index-[hash].css   # Main CSS bundle
│   └── images/            # Static images
├── .htaccess              # React Router configuration
├── robots.txt             # SEO configuration
├── favicon.ico            # Site icon
└── other static files
```

### Important Files

#### `.htaccess` Configuration
```apache
# React Router Support
RewriteEngine On
RewriteBase /

# Handle Angular and React Routes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security Headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/ico "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

#### `robots.txt` Configuration
```
User-agent: *
Disallow: /admin/
Disallow: /setup
Disallow: *.json

# Allow important pages
Allow: /
Allow: /case-tracker
Allow: /contact-us

Sitemap: https://yourdomain.com/sitemap.xml
```

## 🔧 Domain Configuration

### Main Domain Setup
1. **Point domain to hosting server**
2. **Configure DNS records**
3. **Set document root to public_html**
4. **Enable SSL certificate**

### Subdomain Setup
1. **Create subdomain in cPanel**
   - Go to Subdomains
   - Enter subdomain name (e.g., `admin`)
   - Set document root to `public_html/admin`
2. **Upload files to subdomain folder**
3. **Configure SSL for subdomain**

### SSL Certificate Installation
```bash
# Let's Encrypt (Free)
# Use cPanel SSL/TLS section
# Or contact hosting provider

# Paid Certificate
# Upload certificate files through cPanel
# Configure in SSL/TLS section
```

## ⚙️ Post-Deployment Configuration

### 1. Initial Setup
1. **Visit your domain**
2. **Navigate to `/setup`**
3. **Enter access code: `2058`**
4. **Configure Supabase connection**
5. **Auto-deploy database schema**

### 2. Admin Account Creation
1. **Visit `/admin/login`**
2. **Enter access code: `2058`**
3. **Create first admin account**
4. **Login with email/password**

### 3. Security Configuration
1. **Change default access codes**
   - Admin Dashboard → Security → Access Codes
   - Update both admin and setup codes
   - Use strong, unique codes

2. **Configure contacts**
   - Admin Dashboard → Contacts
   - Update phone numbers and emails
   - Set primary contacts

3. **Test all functionality**
   - Form submissions
   - Case tracker
   - Email delivery
   - Admin functions

## 🧪 Testing Your Deployment

### Automated Testing Checklist

#### ✅ Basic Functionality
```bash
# Test main site
curl -I https://yourdomain.com

# Test admin access
curl -I https://yourdomain.com/admin/login

# Test setup page
curl -I https://yourdomain.com/setup

# Test case tracker
curl -I https://yourdomain.com/case-tracker
```

#### ✅ Manual Testing
1. **Homepage loads correctly**
2. **Navigation menus work**
3. **Contact forms submit**
4. **Case tracker functions**
5. **Admin login works**
6. **Setup page accessible**

### Performance Testing
1. **Page load speed** (should be < 3 seconds)
2. **Mobile responsiveness**
3. **Cross-browser compatibility**
4. **SEO optimization**

## 🔒 Security Configuration

### Essential Security Steps

#### 1. File Permissions
```bash
# Set correct permissions
find public_html -type f -exec chmod 644 {} \;
find public_html -type d -exec chmod 755 {} \;

# Make sure .htaccess is readable
chmod 644 public_html/.htaccess
```

#### 2. Security Headers
Add to `.htaccess`:
```apache
# Security Headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Hide server information
ServerTokens Prod
Header unset Server
Header unset X-Powered-By
```

#### 3. Directory Protection
Create `.htaccess` in sensitive directories:
```apache
# Block access to sensitive files
<Files "*.json">
    Order Allow,Deny
    Deny from all
</Files>

<Files "*.config.*">
    Order Allow,Deny
    Deny from all
</Files>
```

## 🚨 Troubleshooting

### Common Issues & Solutions

#### Issue: "404 Not Found" on routes
**Solution**: Check `.htaccess` file exists and contains React Router rules
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Issue: Admin/Setup pages not accessible
**Solution**: 
1. Check access codes in database
2. Clear browser cache and cookies
3. Verify file permissions (644 for files, 755 for directories)

#### Issue: CSS/JS files not loading
**Solution**:
1. Check file paths in index.html
2. Verify MIME types in cPanel
3. Clear browser cache

#### Issue: Forms not submitting
**Solution**:
1. Check Supabase configuration
2. Verify API keys in setup
3. Test database connection

#### Issue: SSL certificate errors
**Solution**:
1. Force HTTPS in .htaccess
2. Install SSL certificate properly
3. Update all internal links to HTTPS

### Performance Issues

#### Slow Loading
1. **Enable compression** in cPanel
2. **Optimize images** before upload
3. **Enable browser caching**
4. **Use CDN** if available

#### High Bandwidth Usage
1. **Compress static files**
2. **Optimize bundle size**
3. **Implement lazy loading**
4. **Monitor usage in cPanel**

## 📊 Monitoring & Maintenance

### Regular Checks
- [ ] **Weekly**: Check form submissions and case updates
- [ ] **Monthly**: Review security logs and update content
- [ ] **Quarterly**: Update dependencies and test all functions

### Backup Strategy
1. **Database backups**: Use Supabase backup features
2. **File backups**: Download files from cPanel regularly
3. **Configuration backups**: Export settings from admin panel

### Updates & Upgrades
1. **Code updates**: Deploy new versions using same process
2. **Security patches**: Monitor for framework updates
3. **Feature additions**: Test in staging before production

## 📞 Support & Resources

### Getting Help
- **Hosting Provider**: cPanel-specific issues
- **Platform Issues**: Use admin panel support
- **Technical Problems**: Check browser console and network tabs

### Useful cPanel Tools
- **File Manager**: Upload and manage files
- **Error Logs**: Debug server issues
- **Metrics**: Monitor resource usage
- **SSL/TLS**: Manage certificates
- **Backups**: Create and restore backups

### External Resources
- **cPanel Documentation**: https://docs.cpanel.net/
- **React Deployment**: https://create-react-app.dev/docs/deployment/
- **Supabase Docs**: https://supabase.com/docs

---

## ✅ Deployment Checklist

### Pre-Deployment
- [ ] Build project locally
- [ ] Test all functionality
- [ ] Prepare deployment package
- [ ] Backup existing site (if applicable)

### Deployment
- [ ] Upload files to cPanel
- [ ] Extract deployment package
- [ ] Verify file structure
- [ ] Check .htaccess exists

### Post-Deployment
- [ ] Test main website
- [ ] Configure initial setup
- [ ] Create admin account
- [ ] Update access codes
- [ ] Test all features
- [ ] Enable SSL
- [ ] Set up monitoring

### Production
- [ ] Update contact information
- [ ] Configure email settings
- [ ] Test form submissions
- [ ] Set up backups
- [ ] Monitor performance

---

**Remember**: Always test in a staging environment before deploying to production!

**Need Help?** Contact your hosting provider for cPanel-specific issues or check the platform's admin panel for configuration problems.