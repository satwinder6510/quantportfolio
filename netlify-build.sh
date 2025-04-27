#!/bin/bash
# Netlify build script for QuantPortfol.io

# Exit on error
set -e

echo "🔧 Starting Netlify build process for QuantPortfol.io..."

# Step 1: Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Step 2: Build the client application
echo "🏗️ Building client application..."
cd client
npm install
npm run build
cd ..

# Step 3: Copy redirects file if it doesn't exist in the output directory
echo "🔄 Setting up redirects..."
if [ ! -f client/dist/_redirects ]; then
  echo "Creating _redirects file in client/dist"
  cp client/public/_redirects client/dist/ 2>/dev/null || echo "# Netlify redirects
/api/*  /.netlify/functions/:splat  200
/*      /index.html                 200" > client/dist/_redirects
fi

# Step 4: Copy necessary files for Netlify functions
echo "⚙️ Setting up serverless functions..."
mkdir -p netlify/functions 2>/dev/null || true

echo "✅ Build completed successfully!"
echo "📂 The files for deployment are in 'client/dist'"
echo "📂 Serverless functions are in 'netlify/functions'"