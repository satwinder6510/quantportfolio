// This is a serverless function for Vercel deployment
// It handles all API requests

import express from 'express';
import { json, urlencoded } from 'express';
import { db } from '../server/db';
import { storage } from '../server/storage';

// Create Express application for serverless function
const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Basic API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV });
});

// User routes
app.post('/api/users', async (req, res) => {
  try {
    const user = await storage.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await storage.getUser(parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});

// Export the Express API for Vercel
export default app;