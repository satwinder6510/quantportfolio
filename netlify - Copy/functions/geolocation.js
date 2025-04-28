// Netlify serverless function for geolocation API
exports.handler = async function(event, context) {
  try {
    // Get client IP from Netlify's headers
    const clientIP = event.headers['x-forwarded-for'] || event.headers['client-ip'];
    const acceptLanguage = event.headers['accept-language'] || '';
    
    console.log(`Client IP: ${clientIP}`);
    console.log(`Accept-Language: ${acceptLanguage}`);
    
    // Simplified geolocation logic
    // In a real implementation, you might want to use a geolocation service API
    // This is a simplified version that uses header information
    let region = 'other';
    
    // Detect region based on language preferences (simplified)
    if (acceptLanguage) {
      if (acceptLanguage.includes('en-GB') || 
          acceptLanguage.includes('fr') || 
          acceptLanguage.includes('de') || 
          acceptLanguage.includes('es') || 
          acceptLanguage.includes('it')) {
        region = 'europe';
      } else if (acceptLanguage.includes('en-US')) {
        region = 'us';
      } else if (acceptLanguage.includes('hi') || 
                acceptLanguage.includes('ta') || 
                acceptLanguage.includes('te') || 
                acceptLanguage.includes('pa')) {
        region = 'india';
      }
    }
    
    // URL parameters can override the detected region (for testing)
    if (event.queryStringParameters && event.queryStringParameters.region) {
      region = event.queryStringParameters.region;
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Adjust according to your CORS policy
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      },
      body: JSON.stringify({ region })
    };
  } catch (error) {
    console.error('Error in geolocation function:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to detect region' })
    };
  }
};