@echo off
echo 🌱 Tene Marketplace Deployment Script
echo =====================================

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root directory.
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    if errorlevel 1 (
        echo ❌ Error: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Build the project
echo 🔨 Building the project...
npm run build
if errorlevel 1 (
    echo ❌ Error: Build failed
    pause
    exit /b 1
)

echo ✅ Build completed successfully!
echo.
echo 🚀 Deployment Options:
echo 1. Netlify: Upload the 'build' folder to Netlify
echo 2. Vercel: Connect your GitHub repository to Vercel
echo 3. GitHub Pages: Run 'npm run deploy' (if configured)
echo 4. AWS S3: Upload the 'build' folder to your S3 bucket
echo.
echo 📁 Build files are ready in the 'build' directory
echo 🌐 Your Tene marketplace is ready for deployment!
pause
