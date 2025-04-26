#!/bin/bash

# This script is used by Vercel to build the frontend and prepare it for deployment

echo "Starting build process..."

# Debug: Show current directory
pwd
ls -la

# Navigate to client directory
cd client
echo "Changed to client directory"
pwd
ls -la

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the client application
echo "Building the application..."
npm run build

# Make sure the dist directory exists
echo "Checking dist directory..."
ls -la

# Copy dist to root for Vercel
echo "Creating output directory..."
mkdir -p ../dist
cp -r dist/* ../dist/

# Debug: Show final directory structure
echo "Final output structure:"
ls -la ../dist

# Return success
echo "Build completed successfully!"
exit 0