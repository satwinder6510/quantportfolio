import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for geolocation
  app.get('/api/geolocation', async (req, res) => {
    try {
      // Get coordinates from query params if available
      const latitude = req.query.lat ? parseFloat(req.query.lat as string) : null;
      const longitude = req.query.lng ? parseFloat(req.query.lng as string) : null;
      
      // If coordinates are provided, use them to determine region
      if (latitude !== null && longitude !== null) {
        // This is a simplified region detection for demo purposes
        // In a real app, you would use a proper geolocation service API
        let region = 'other';
        
        // Rough estimation for India
        if (latitude >= 8 && latitude <= 37 && longitude >= 68 && longitude <= 97) {
          region = 'india';
        }
        // Rough estimation for US
        else if (latitude >= 24 && latitude <= 49 && longitude >= -125 && longitude <= -66) {
          region = 'us';
        }
        // Rough estimation for Europe
        else if (latitude >= 36 && latitude <= 71 && longitude >= -10 && longitude <= 45) {
          region = 'europe';
        }
        
        return res.json({ region });
      }
      
      // If no coordinates, fall back to IP-based detection
      // In a real app, you would use a proper IP geolocation service
      // For demo purposes, we'll just return India as the default region
      return res.json({ region: 'india' });
    } catch (error) {
      console.error('Error in geolocation API:', error);
      return res.status(500).json({ message: 'Error detecting location', region: 'unknown' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
