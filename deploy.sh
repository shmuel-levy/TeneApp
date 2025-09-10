#!/bin/bash

# Tene Marketplace Deployment Script
# This script helps deploy the Tene marketplace website

echo "🌱 Tene Marketplace Deployment Script"
echo "====================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to install dependencies"
        exit 1
    fi
fi

# Build the project
echo "🔨 Building the project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed"
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "🚀 Deployment Options:"
echo "1. Netlify: Upload the 'build' folder to Netlify"
echo "2. Vercel: Connect your GitHub repository to Vercel"
echo "3. GitHub Pages: Run 'npm run deploy' (if configured)"
echo "4. AWS S3: Upload the 'build' folder to your S3 bucket"
echo ""
echo "📁 Build files are ready in the 'build' directory"
echo "🌐 Your Tene marketplace is ready for deployment!"
