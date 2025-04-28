// Using CommonJS modules for Vercel Serverless Functions
module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS method for preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Handle the API request
  if (req.method === 'GET') {
    // Sample API response
    return res.status(200).json({
      success: true,
      message: 'API is working!',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    });
  }
  
  // Handle POST requests for specific functions
  if (req.method === 'POST') {
    try {
      const body = req.body;
      
      // Handle different endpoints
      if (req.url.includes('/api/user')) {
        // User related functionality
        return res.status(200).json({
          success: true,
          data: { id: 123, username: "demo_user" }
        });
      }
      
      // Default response for unhandled POST endpoints
      return res.status(200).json({
        success: true,
        message: 'POST request received',
        path: req.url
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message
      });
    }
  }
  
  // Default response for other methods
  return res.status(405).json({
    success: false,
    message: 'Method not allowed'
  });
};