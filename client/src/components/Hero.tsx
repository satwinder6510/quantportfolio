import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation, RegionContent } from '@/contexts/LocationContext';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { region, isLoading, error, locationEnabled, enableLocation } = useLocation();
  const [activeSlide, setActiveSlide] = useState(0);

  // Hero rotating messages
  const heroSlides = [
    {
      title: 'Automated Crypto Trading in 5 Minutes Daily',
      description: 'Our proprietary algorithm delivers 53.5% return over 5 years while saving you hours of screen time and emotional stress.'
    },
    {
      title: 'Zero Learning Curve Required',
      description: 'Start trading immediately with our intuitive platform. No technical analysis skills needed—our algorithm handles the complex work while you make simple decisions.'
    },
    {
      title: 'Get Results, Not Complexity',
      description: 'Skip the years of learning technical analysis. Our algorithm has condensed expert trading knowledge into simple buy, sell, and hold signals you can follow in minutes.'
    }
  ];
  
  // Auto rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden relative" id="hero">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="min-h-[220px] md:min-h-[240px] relative">
              {heroSlides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                    activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                    {index === 0 ? (
                      <>
                        <span>Automated Crypto Trading in </span>
                        <span className="text-dark-green dark:text-light-green">5 Minutes</span>
                        <span> Daily</span>
                      </>
                    ) : index === 1 ? (
                      <>
                        <span className="text-dark-green dark:text-light-green">Zero</span>
                        <span> Learning Curve Required</span>
                      </>
                    ) : (
                      <>
                        <span>Get </span>
                        <span className="text-dark-green dark:text-light-green">Results</span>
                        <span>, Not Complexity</span>
                      </>
                    )}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-text-medium dark:text-dark-text-medium mb-8">
                    {slide.description}
                  </p>
                </div>
              ))}
              
              {/* Slide Navigation Dots */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === index 
                        ? 'bg-dark-green dark:bg-light-green scale-110' 
                        : 'bg-gray-300 dark:bg-gray-600 opacity-50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="location-aware-content mt-8">
              {/* Location-specific content based on detected region */}
              {isLoading ? (
                <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md mb-8">
                  <p className="text-sm text-text-medium dark:text-dark-text-medium">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Detecting your location...
                  </p>
                </div>
              ) : error ? (
                <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md mb-8 border-l-4 border-red-500">
                  <p className="text-sm text-text-medium dark:text-dark-text-medium">
                    <span className="font-bold text-red-500">Location detection failed:</span> {error}
                  </p>
                  {!locationEnabled && (
                    <Button 
                      onClick={enableLocation}
                      className="mt-2 text-xs bg-light-green hover:bg-dark-green text-white py-1 px-3 rounded"
                    >
                      Enable Location Services
                    </Button>
                  )}
                </div>
              ) : (
                RegionContent[region]
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <Button
                onClick={() => scrollToSection('get-started')}
                className="py-3 px-8 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center font-medium"
              >
                Start 14-Day Trial
              </Button>
              <Button
                onClick={() => scrollToSection('how-it-works')}
                variant="outline"
                className="py-3 px-8 border-2 border-dark-green dark:border-light-green text-dark-green dark:text-light-green rounded-lg hover:bg-dark-green hover:text-white dark:hover:bg-light-green dark:hover:text-dark-bg transition-colors duration-200 text-center font-medium"
              >
                See How It Works
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/86.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/63.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-sm text-text-medium dark:text-dark-text-medium">
                <span className="font-bold">10,000+</span> traders already using CryptoTrend
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-dark-green to-light-green dark:from-dark-accent dark:to-light-green p-1">
                <div className="flex items-center space-x-2 p-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-white text-xs">CryptoTrend Alpha Dashboard</div>
                </div>
              </div>
              <div className="bg-gray-300 dark:bg-gray-700 w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
                <svg 
                  className="w-full h-full text-gray-400 dark:text-gray-600" 
                  fill="currentColor" 
                  viewBox="0 0 400 300" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="50" y="50" width="300" height="40" rx="8" opacity="0.5" />
                  <rect x="50" y="110" width="300" height="120" rx="8" opacity="0.5" />
                  <rect x="50" y="250" width="140" height="30" rx="8" opacity="0.5" />
                  <rect x="210" y="250" width="140" height="30" rx="8" opacity="0.5" />
                  <circle cx="70" cy="70" r="10" opacity="0.7" />
                  <path d="M80 130 L120 180 L160 150 L200 190 L240 130 L280 170 L320 120" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    fill="none" 
                    opacity="0.8" 
                  />
                </svg>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-20 -translate-y-1/2 w-64 h-64 bg-accent-orange opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-light-green opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50 dark:fill-dark-accent opacity-30"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
