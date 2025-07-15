#!/bin/bash

echo "🚀 Starting cPanel deployment build..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Build for production
echo "🔨 Building for production..."
npm run build

# Create deployment package
echo "📦 Creating deployment package..."
cd dist
zip -r ../cpanel-deployment.zip .
cd ..

echo "✅ Build complete!"
echo "📁 Upload 'cpanel-deployment.zip' to your cPanel File Manager"
echo "📋 Extract the zip file in your public_html directory"
echo "🔧 Ensure .htaccess file is present for proper routing"

# Display file sizes
echo ""
echo "📊 Build Statistics:"
du -sh dist/
echo "Files in build:"
find dist/ -type f | wc -l