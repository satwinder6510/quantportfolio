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
      // In a real app, you would use a proper IP geolocation service API
      
      // Get IP address - in a real app, this would be properly handled
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '0.0.0.0';
      console.log('Client IP:', ip);
      
      // Determine region based on headers or IP
      // For this demo, we'll use the Accept-Language header as a signal
      const acceptLanguage = req.headers['accept-language'] || '';
      console.log('Accept-Language:', acceptLanguage);
      
      if (acceptLanguage.includes('en-GB') || 
          acceptLanguage.includes('en-IE') || 
          acceptLanguage.includes('fr') || 
          acceptLanguage.includes('de')) {
        return res.json({ region: 'europe' });
      }
      
      if (acceptLanguage.includes('en-US')) {
        return res.json({ region: 'us' });
      }
      
      if (acceptLanguage.includes('hi') || 
          acceptLanguage.includes('ta') || 
          acceptLanguage.includes('te')) {
        return res.json({ region: 'india' });
      }
      
      // Default for now will be 'europe' to better serve UK users
      return res.json({ region: 'europe' });
    } catch (error) {
      console.error('Error in geolocation API:', error);
      return res.status(500).json({ message: 'Error detecting location', region: 'unknown' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
