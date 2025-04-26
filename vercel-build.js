// This file is used by Vercel to build the project
// It runs the necessary commands to build both the client and server

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Helper function to execute shell commands
function exec(command) {
  console.log(`Executing: ${command}`);
  execSync(command, { stdio: 'inherit' });
}

// Main build function
async function build() {
  try {
    console.log('Starting Vercel build process...');
    
    // Build the client
    console.log('\n🔨 Building client...');
    exec('cd client && npm run build');
    
    // Build the server
    console.log('\n🔨 Building server...');
    exec('npm run build');
    
    console.log('\n✅ Build completed successfully!');
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

// Run the build
build();