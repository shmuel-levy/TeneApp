@echo off
echo 🌱 Tene Marketplace - Setup New Repository
echo =========================================

echo.
echo This script will help you connect this project to your own GitHub repository.
echo.

echo Step 1: Create a new repository on GitHub
echo - Go to https://github.com/new
echo - Name it: tene-marketplace (or any name you prefer)
echo - Make it Public or Private (your choice)
echo - DON'T initialize with README, .gitignore, or license
echo - Click "Create repository"
echo.

echo Step 2: Copy the repository URL from GitHub
echo - It should look like: https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
echo.

set /p REPO_URL="Enter your GitHub repository URL: "

if "%REPO_URL%"=="" (
    echo ❌ No URL provided. Exiting.
    pause
    exit /b 1
)

echo.
echo Step 3: Connecting to your repository...
git remote add origin %REPO_URL%

echo.
echo Step 4: Pushing to GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo ❌ Error: Failed to push to GitHub
    echo Please check your repository URL and try again.
    pause
    exit /b 1
)

echo.
echo ✅ Success! Your Tene marketplace is now connected to GitHub!
echo.
echo 🚀 Next steps:
echo 1. Go to your GitHub repository to see your code
echo 2. Deploy using Netlify, Vercel, or any other platform
echo 3. Follow the DEPLOYMENT.md guide for detailed instructions
echo.
echo 🌐 Your project is ready for deployment!
pause


