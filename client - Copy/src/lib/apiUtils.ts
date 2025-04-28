/**
 * Helper function to get the proper API URL based on whether the app is running
 * in development or production (Netlify) environment
 */
export function getApiUrl(endpoint: string): string {
  // Check if we're in a Netlify environment
  const isNetlify = window.location.hostname.includes('netlify.app') || 
                    import.meta.env.PROD === true;
  
  // Format the endpoint to ensure it doesn't start with multiple slashes
  const formattedEndpoint = endpoint.startsWith('/') 
    ? endpoint.substring(1) 
    : endpoint;
  
  if (isNetlify) {
    // In Netlify, API endpoints are served from /.netlify/functions/
    // Remove the '/api/' prefix if it exists
    const netlifyEndpoint = formattedEndpoint.startsWith('api/') 
      ? formattedEndpoint.substring(4) 
      : formattedEndpoint;
    
    return `/.netlify/functions/${netlifyEndpoint}`;
  } else {
    // In development, use the normal API path
    return `/api/${formattedEndpoint}`;
  }
}

/**
 * Transform API response for compatibility with different environments
 */
export function transformApiResponse<T>(response: any): T {
  // Handle differences between Express API responses and Netlify Functions
  if (response && typeof response === 'object') {
    // Netlify Functions responses might be wrapped differently
    // This is a simple example - adjust based on your actual response format
    return response as T;
  }
  
  return response as T;
}