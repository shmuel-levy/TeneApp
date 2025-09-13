# PowerShell script to start the React project locally
# This script sets the required Node.js options for compatibility

Write-Host "Starting React Development Server..." -ForegroundColor Green
Write-Host "Setting NODE_OPTIONS for OpenSSL compatibility..." -ForegroundColor Yellow

$env:NODE_OPTIONS = "--openssl-legacy-provider"

Write-Host "Starting the development server..." -ForegroundColor Cyan
Write-Host "The project will be available at: http://localhost:3000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the React development server
.\node_modules\.bin\react-scripts.ps1 start
