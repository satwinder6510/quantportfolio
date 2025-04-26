// This file is used by Vercel to build the project
// It runs the necessary commands to build the client application

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Helper function to execute shell commands
function exec(command) {
  console.log(`Executing: ${command}`);
  execSync(command, { stdio: 'inherit' });
}

// Main build function
function build() {
  try {
    console.log('Starting Vercel build process...');
    console.log('Current directory: ' + process.cwd());
    console.log('Directory contents: ' + fs.readdirSync('.').join(', '));
    
    // Build the client
    console.log('\n🔨 Building client...');
    exec('cd client && npm install && npm run build');
    
    // Verify client build
    console.log('\n🔍 Verifying client build...');
    if (fs.existsSync('client/dist')) {
      console.log('Client build directory exists');
      console.log('Client build directory contents: ' + 
        fs.readdirSync('client/dist').join(', '));
    } else {
      console.error('Client build directory does not exist!');
      throw new Error('Client build failed - no dist directory');
    }
    
    console.log('\n✅ Build completed successfully!');
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

// Run the build
build();