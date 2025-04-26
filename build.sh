#!/bin/bash

# This script handles the build process for Vercel

echo "Starting Vercel build process..."

# Build the client
echo "🔨 Building client..."
npm run build

echo "✅ Build completed successfully!"