// This is a shim file for Vercel deployment
// It redirects all API requests to our Express application

import { createServer } from 'http';
import { app } from '../server/index';

// Create a standard Node.js HTTP server
const server = createServer(app);

// Export the Express API for Vercel
export default function handler(req, res) {
  // Pass the request to Express
  return app(req, res);
}