// Simple serverless function for Vercel
module.exports = (req, res) => {
  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Simple path extraction
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname.replace(/^\/api/, '').replace(/\/$/, '') || '/';
  
  // Basic health check endpoint
  if (path === '/health') {
    res.status(200).json({
      status: 'ok',
      message: 'CryptoTrend Alpha API is running'
    });
    return;
  }
  
  // Stats endpoint
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
    message: 'CryptoTrend Alpha API',
    path: path,
    method: req.method
  });
};