#!/bin/bash

# This script handles the build process for Vercel

echo "Starting Vercel build process..."

# Build the client
echo "🔨 Building client..."
cd client
npm install
npm run build
cd ..

echo "✅ Build completed successfully!"