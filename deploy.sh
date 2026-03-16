#!/bin/bash

# EcoSuryaPower - Deployment Script
# This script builds the project for production

echo "🚀 Starting deployment build for www.ecosuryapower.com..."
echo ""

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build
echo "🔨 Building production bundle..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📁 Production files are in: frontend/dist"
    echo ""
    echo "Next steps:"
    echo "1. For Netlify: Push to Git and connect repository"
    echo "2. For Vercel: Push to Git and import project"
    echo "3. For traditional hosting: Upload contents of 'frontend/dist' to public_html"
    echo ""
    echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
else
    echo ""
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
