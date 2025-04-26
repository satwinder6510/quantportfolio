// This is a serverless function for Vercel deployment

export default function handler(req, res) {
  // Basic health check for API
  if (req.url === '/api/health') {
    res.status(200).json({
      status: 'ok',
      environment: process.env.NODE_ENV,
      message: 'CryptoTrend Alpha API is running'
    });
    return;
  }

  // For demonstration purposes
  res.status(200).json({
    message: 'API endpoint is working',
    requestUrl: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });
}