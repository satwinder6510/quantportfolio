// This is a completely independent API handler for Vercel deployment
// It does not rely on any server-side code

export default function handler(req, res) {
  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS request (for CORS preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Extract the API path from the URL
  const path = req.url.replace(/^\/api/, '').replace(/\/$/, '') || '/';
  
  // Basic health check for API
  if (path === '/health') {
    res.status(200).json({
      status: 'ok',
      environment: process.env.NODE_ENV || 'unknown',
      message: 'CryptoTrend Alpha API is running',
      version: '1.0.0'
    });
    return;
  }
  
  // Mock endpoints for demonstration
  if (path === '/stats') {
    res.status(200).json({
      tradeSuccessRate: '78%',
      averageReturn: '+3.3%',
      activeUsers: '2,500+',
      tradesExecuted: '125,000+'
    });
    return;
  }
  
  // Default response
  res.status(200).json({
    message: 'CryptoTrend Alpha API is ready',
    path: path,
    method: req.method,
    timestamp: new Date().toISOString()
  });
}