@echo off
echo 🚀 Starting cPanel deployment build...

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Clean previous build
echo 🧹 Cleaning previous build...
if exist "dist" rmdir /s /q dist

REM Build for production
echo 🔨 Building for production...
npm run build

REM Create deployment package
echo 📦 Creating deployment package...
cd dist
powershell Compress-Archive -Path * -DestinationPath ../cpanel-deployment.zip -Force
cd ..

echo ✅ Build complete!
echo 📁 Upload 'cpanel-deployment.zip' to your cPanel File Manager
echo 📋 Extract the zip file in your public_html directory
echo 🔧 Ensure .htaccess file is present for proper routing

pause