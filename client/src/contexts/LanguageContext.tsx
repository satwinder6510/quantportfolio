import React, { createContext, useState, useContext, useEffect } from 'react';

// Define available languages
type Language = 'en' | 'hi' | 'pa';

type LanguageLabels = {
  [key in Language]: string;
};

const languageLabels: LanguageLabels = {
  en: 'English',
  hi: 'हिन्दी (Hindi)',
  pa: 'ਪੰਜਾਬੀ (Punjabi)'
};

// Define translations (only for demonstration purposes)
type Translations = {
  [key in Language]: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    stats: {
      tradeSuccessRate: string;
      averageReturn: string;
      activeUsers: string;
      tradesExecuted: string;
    };
    nav: {
      features: string;
      howItWorks: string;
      performance: string;
      pricing: string;
      getStarted: string;
    };
  };
};

const translations: Translations = {
  en: {
    hero: {
      title: 'Automated Crypto Trading',
      subtitle: 'Powered by AI',
      description: 'Experience the future of cryptocurrency trading with our advanced AI algorithms that analyze market trends and execute trades with precision.'
    },
    stats: {
      tradeSuccessRate: '94.7%',
      averageReturn: '36.5%',
      activeUsers: '10K+',
      tradesExecuted: '5.2M+'
    },
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      performance: 'Performance',
      pricing: 'Pricing',
      getStarted: 'Get Started'
    }
  },
  hi: {
    hero: {
      title: 'स्वचालित क्रिप्टो ट्रेडिंग',
      subtitle: 'AI द्वारा संचालित',
      description: 'हमारे उन्नत AI एल्गोरिदम के साथ क्रिप्टोकरेंसी ट्रेडिंग के भविष्य का अनुभव करें जो मार्केट ट्रेंड का विश्लेषण करते हैं और सटीकता के साथ ट्रेड करते हैं।'
    },
    stats: {
      tradeSuccessRate: '94.7%',
      averageReturn: '36.5%',
      activeUsers: '10K+',
      tradesExecuted: '5.2M+'
    },
    nav: {
      features: 'विशेषताएँ',
      howItWorks: 'यह कैसे काम करता है',
      performance: 'प्रदर्शन',
      pricing: 'मूल्य निर्धारण',
      getStarted: 'शुरू करें'
    }
  },
  pa: {
    hero: {
      title: 'ਆਟੋਮੇਟਡ ਕ੍ਰਿਪਟੋ ਟ੍ਰੇਡਿੰਗ',
      subtitle: 'AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ',
      description: 'ਸਾਡੇ ਉੱਨਤ AI ਐਲਗੋਰਿਦਮ ਨਾਲ ਕ੍ਰਿਪਟੋਕਰੰਸੀ ਟ੍ਰੇਡਿੰਗ ਦੇ ਭਵਿੱਖ ਦਾ ਅਨੁਭਵ ਕਰੋ ਜੋ ਮਾਰਕੀਟ ਟ੍ਰੈਂਡਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਦੇ ਹਨ ਅਤੇ ਸਟੀਕਤਾ ਨਾਲ ਟ੍ਰੇਡ ਕਰਦੇ ਹਨ।'
    },
    stats: {
      tradeSuccessRate: '94.7%',
      averageReturn: '36.5%',
      activeUsers: '10K+',
      tradesExecuted: '5.2M+'
    },
    nav: {
      features: 'ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
      howItWorks: 'ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',
      performance: 'ਪ੍ਰਦਰਸ਼ਨ',
      pricing: 'ਕੀਮਤ',
      getStarted: 'ਸ਼ੁਰੂ ਕਰੋ'
    }
  }
};

// Language context interface
interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (path: string) => string;
  currentLanguageLabel: string;
}

// Create the context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create a hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Helper function to get nested object property by path
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((prev, curr) => {
    return prev && prev[curr] ? prev[curr] : '';
  }, obj);
};

// Language provider component
export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Default to English, but check URL params and localStorage
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      // Check URL parameter first
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang');
      
      if (langParam && ['en', 'hi', 'pa'].includes(langParam)) {
        return langParam as Language;
      }
      
      // Otherwise check localStorage
      const savedLang = localStorage.getItem('language');
      if (savedLang && ['en', 'hi', 'pa'].includes(savedLang)) {
        return savedLang as Language;
      }
    }
    
    return 'en';
  });

  useEffect(() => {
    // Store the language preference
    localStorage.setItem('language', language);
    
    // Update URL without reloading the page
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState({}, '', url.toString());
    
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  // Translation function
  const t = (path: string): string => {
    return getNestedValue(translations[language], path);
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        changeLanguage, 
        t,
        currentLanguageLabel: languageLabels[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
