import React, { createContext, useState, useEffect, useContext } from 'react';
import { apiRequest } from '@/lib/queryClient';

type Region = 'unknown' | 'india' | 'us' | 'europe' | 'other';

type LocationContextType = {
  region: Region;
  isLoading: boolean;
  error: string | null;
  locationEnabled: boolean;
  enableLocation: () => void;
};

export const LocationContext = createContext<LocationContextType | undefined>(undefined);

// Custom hook to use the location context
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

// Region-specific content
export const RegionContent: Record<Region, React.ReactNode> = {
  india: (
    <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md mb-8 border-l-4 border-accent-orange fade-in">
      <p className="text-sm text-text-medium dark:text-dark-text-medium">
        <span className="font-bold text-accent-orange">🇮🇳 Welcome from India!</span> Our platform is optimized for INR trading pairs and compliant with local regulations.
      </p>
    </div>
  ),
  us: (
    <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md mb-8 border-l-4 border-light-green fade-in">
      <p className="text-sm text-text-medium dark:text-dark-text-medium">
        <span className="font-bold text-light-green">🇺🇸 Hello from the US!</span> Trade with USD pairs and benefit from our SEC-compliant platform.
      </p>
    </div>
  ),
  europe: (
    <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md mb-8 border-l-4 border-dark-green fade-in">
      <p className="text-sm text-text-medium dark:text-dark-text-medium">
        <span className="font-bold text-dark-green">🇪🇺 Greetings from Europe!</span> Our platform supports EUR trading pairs and is GDPR compliant.
      </p>
    </div>
  ),
  other: (
    <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md mb-8 border-l-4 border-light-green fade-in">
      <p className="text-sm text-text-medium dark:text-dark-text-medium">
        <span className="font-bold text-light-green">🌍 Welcome to CryptoTrend Alpha!</span> Our global platform supports multiple currencies and exchanges.
      </p>
    </div>
  ),
  unknown: null
};

export const LocationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [region, setRegion] = useState<Region>('unknown');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [locationEnabled, setLocationEnabled] = useState<boolean>(() => {
    return localStorage.getItem('locationEnabled') === 'true';
  });

  const detectRegion = async (latitude: number, longitude: number) => {
    try {
      setIsLoading(true);
      // Normally you'd make an API call here to a geolocation service
      // For demo purposes, we'll make a call to our server which will handle the IP-based geolocation
      const res = await apiRequest('GET', `/api/geolocation?lat=${latitude}&lng=${longitude}`, undefined);
      const data = await res.json();
      setRegion(data.region);
    } catch (error) {
      console.error('Error detecting region:', error);
      setError('Failed to detect your region');
      setRegion('other'); // Default to other if detection fails
    } finally {
      setIsLoading(false);
    }
  };

  const detectRegionByIP = async () => {
    try {
      setIsLoading(true);
      // Call to our server endpoint which will use IP-based geolocation
      const res = await apiRequest('GET', `/api/geolocation`, undefined);
      const data = await res.json();
      setRegion(data.region);
    } catch (error) {
      console.error('Error detecting region by IP:', error);
      setError('Failed to detect your region');
      setRegion('other'); // Default to other if detection fails
    } finally {
      setIsLoading(false);
    }
  };

  const enableLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      setLocationEnabled(true);
      localStorage.setItem('locationEnabled', 'true');
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          detectRegion(latitude, longitude);
        },
        (error) => {
          console.error('Geolocation error:', error);
          setError('Geolocation permission denied. Using IP-based location instead.');
          // Fall back to IP-based geolocation
          detectRegionByIP();
        }
      );
    } else {
      setError('Geolocation is not supported by your browser. Using IP-based location instead.');
      // Fall back to IP-based geolocation
      detectRegionByIP();
    }
  };

  // On initial render, check if location is enabled
  useEffect(() => {
    if (locationEnabled) {
      enableLocation();
    } else {
      // Use IP detection by default (more accurate) but with a fallback to browser detection
      detectRegionByIP().catch(() => {
        // Fallback to browser data if IP detection fails
        const detectBrowserRegion = (): Region => {
          try {
            // Get browser language and timezone
            const language = navigator.language.toLowerCase();
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            
            console.log("Browser detection - Language:", language, "Timezone:", timezone);
            
            // UK/European detection (highest priority for this fix)
            const europeLanguages = ['en-gb', 'en-ie', 'fr', 'de', 'es', 'it', 'nl', 'pt'];
            const hasEuropeanLanguage = europeLanguages.some(lang => language.startsWith(lang));
            const hasEuropeanTimezone = timezone.includes('Europe') || 
                                       timezone.includes('London') || 
                                       timezone.includes('Dublin') ||
                                       timezone.includes('Lisbon') ||
                                       timezone.includes('Madrid');
            
            if (hasEuropeanLanguage || hasEuropeanTimezone) {
              return 'europe';
            }
            
            // Indian detection
            const indianLanguages = ['hi', 'ta', 'te', 'pa', 'ml', 'bn'];
            const hasIndianLanguage = indianLanguages.some(lang => language.startsWith(lang));
            const hasIndianTimezone = timezone.includes('India') || 
                                     timezone.includes('Kolkata');
            
            if (hasIndianLanguage || hasIndianTimezone) {
              return 'india';
            }
            
            // US detection
            const usLanguages = ['en-us'];
            const hasUSLanguage = usLanguages.some(lang => language.startsWith(lang));
            const hasUSTimezone = timezone.includes('America') || 
                                 timezone.includes('New_York') ||
                                 timezone.includes('Los_Angeles') ||
                                 timezone.includes('Chicago');
            
            if (hasUSLanguage || hasUSTimezone) {
              return 'us';
            }
            
            // Default to Europe for UK users as a better fallback than India
            return 'europe';
          } catch (err) {
            console.error("Error in browser region detection:", err);
            return 'europe'; // Default to Europe for UK users
          }
        };
        
        // Set region based on browser detection
        setRegion(detectBrowserRegion());
      });
    }
  }, []);

  return (
    <LocationContext.Provider 
      value={{ 
        region, 
        isLoading, 
        error, 
        locationEnabled,
        enableLocation
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
