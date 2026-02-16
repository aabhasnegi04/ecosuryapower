@echo off
REM Eco Surya Power - Deployment Script for Windows
REM This script builds the project for production

echo.
echo Starting deployment build for www.ecosuryapower.com...
echo.

REM Navigate to frontend directory
cd frontend

REM Install dependencies
echo Installing dependencies...
call npm install

REM Run build
echo Building production bundle...
call npm run build

REM Check if build was successful
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Build successful!
    echo.
    echo Production files are in: frontend\dist
    echo.
    echo Next steps:
    echo 1. For Netlify: Push to Git and connect repository
    echo 2. For Vercel: Push to Git and import project
    echo 3. For traditional hosting: Upload contents of 'frontend\dist' to public_html
    echo.
    echo See DEPLOYMENT_GUIDE.md for detailed instructions
) else (
    echo.
    echo Build failed. Please check the errors above.
    exit /b 1
)

cd ..
pause
