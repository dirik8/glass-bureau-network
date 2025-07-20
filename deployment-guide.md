# cPanel Deployment Guide

## Prerequisites
- GitHub repository with your project
- cPanel hosting account with Node.js support
- VS Code with terminal access

## Step 1: Local Build Process

### 1.1 Clone and Setup
```bash
git clone <your-github-repo-url>
cd <project-name>
npm install
```

### 1.2 Environment Variables
Create `.env.production` file:
```env
VITE_SUPABASE_URL=https://xdbsnzzgrowztbtgxsag.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYnNuenpncm93enRidGd4c2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzOTI2NTQsImV4cCI6MjA2Nzk2ODY1NH0.8RN0sO79t0BlZVf67JP3MEq8WpRZ_hOZoqFGCZMwGL8
```

### 1.3 Build Project
```bash
npm run build
```

## Step 2: cPanel Upload

### 2.1 Access File Manager
- Login to cPanel
- Open File Manager
- Navigate to `public_html` (or subdomain folder)

### 2.2 Upload Files
- Delete existing files in target directory (backup first!)
- Upload entire `dist` folder contents
- Ensure `.htaccess` file is uploaded

### 2.3 File Permissions
Set proper permissions:
- Folders: 755
- Files: 644
- `.htaccess`: 644

## Step 3: Domain Configuration

### 3.1 For Main Domain
- Upload to `public_html/`
- Ensure `.htaccess` is in root

### 3.2 For Subdomain
- Create subdomain in cPanel
- Upload to subdomain folder
- Update base path if needed

## Step 4: SSL Configuration
- Enable SSL in cPanel
- Force HTTPS redirects
- Update any hardcoded HTTP URLs

## Step 5: Admin Setup & Testing

### 5.1 Initial Admin Setup
1. Visit: `https://yoursite.com/admin/setup`
2. Create first admin account
3. Save credentials securely

### 5.2 Testing Checklist
- Test all routes work correctly
- Verify API connections to Supabase
- Check console for errors
- Test form submissions
- Verify admin dashboard access
- Test case study detail pages
- Check all buttons are functional
- Verify mobile responsiveness

## Troubleshooting

### Common Issues:
1. **404 on refresh**: Check `.htaccess` upload
2. **Assets not loading**: Verify base path in vite.config.ts
3. **API errors**: Check environment variables
4. **White screen**: Check console errors

### Performance Optimization:
- Enable Gzip compression
- Set proper cache headers
- Optimize images before upload
- Use CDN if available

## Automation Scripts

### Build and Zip Script (`deploy.sh`):
```bash
#!/bin/bash
npm run build
cd dist
zip -r ../website-build.zip .
cd ..
echo "Build complete! Upload website-build.zip to cPanel"
```

### Quick Update Script:
```bash
#!/bin/bash
git pull origin main
npm install
npm run build
echo "Ready for upload to cPanel"
```

## Maintenance
- Regular backups of live site
- Monitor performance metrics
- Update dependencies monthly
- Test after each deployment