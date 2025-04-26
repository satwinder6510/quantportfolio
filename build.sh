#!/bin/bash

# This script is used by Vercel to build the frontend and prepare it for deployment

# Navigate to client directory
cd client

# Install dependencies
npm install

# Build the client application
npm run build

# Return success
exit 0