#!/bin/bash
set -e  # Exit on error

echo "Starting build process..."
echo "Current directory: $(pwd)"
echo "Listing files: $(ls -la)"

# Navigate to the client directory and install dependencies
echo "Installing client dependencies..."
cd client
npm install

# Build the client application
echo "Building client application..."
npm run build

echo "Client build complete."
echo "Listing dist directory contents:"
ls -la dist/

# Navigate back to the root
cd ..

echo "Build process completed successfully!"