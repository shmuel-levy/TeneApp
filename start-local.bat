@echo off
echo Starting React Development Server...
echo Setting NODE_OPTIONS for OpenSSL compatibility...

set NODE_OPTIONS=--openssl-legacy-provider

echo Starting the development server...
echo The project will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

REM Start the React development server
call npm start
