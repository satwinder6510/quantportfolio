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
            {/* Sliding Content */}
            <div className="relative">
              <div className="min-h-[220px] md:min-h-[240px]">
                {heroSlides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-500 ${
                      activeSlide === index ? 'opacity-100' : 'opacity-0 hidden'
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
              </div>
              
              {/* Slide Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-4 mb-8">
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
            
            {/* Location Content - Completely separate from carousel */}
            <div className="location-aware-content mb-6">
              {/* Location-specific content based on detected region */}
              {isLoading ? (
                <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md">
                  <p className="text-sm text-text-medium dark:text-dark-text-medium">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Detecting your location...
                  </p>
                </div>
              ) : error ? (
                <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md border-l-4 border-red-500">
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
            
{/* User profiles section - commented out until we have real users
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
            */}
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
              <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden bg-white dark:bg-dark-card rounded-b-xl">
                {/* Simple chart visualization */}
                <div className="w-full h-full p-4 md:p-6 flex flex-col">
                  <div className="flex justify-between items-center mb-2 md:mb-4">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Strategy Performance</div>
                    <div className="px-2 py-0.5 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">5Y</div>
                  </div>
                  
                  {/* Chart visualization - modified for better responsiveness */}
                  <div className="flex-1 relative mx-auto max-w-md">
                    <svg 
                      className="w-full h-full" 
                      height="160"
                      viewBox="0 0 400 200" 
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Strategy performance line area */}
                      <path 
                        d="M0,180 C40,160 80,100 120,80 C160,60 200,40 240,30 C280,20 320,50 360,20 L360,200 L0,200 Z" 
                        className="fill-green-500/10 dark:fill-green-500/20"
                      />
                      
                      {/* Strategy performance line */}
                      <path 
                        d="M0,180 C40,160 80,100 120,80 C160,60 200,40 240,30 C280,20 320,50 360,20" 
                        fill="none" 
                        className="stroke-green-500 dark:stroke-green-400"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      
                      {/* Benchmark line (S&P 500) */}
                      <path 
                        d="M0,180 C40,170 80,150 120,140 C160,130 200,110 240,120 C280,130 320,100 360,90" 
                        fill="none" 
                        className="stroke-gray-400 dark:stroke-gray-500"
                        strokeWidth="2" 
                        strokeDasharray="5,5"
                      />
                    </svg>
                    
                    {/* Y-axis labels simplified */}
                    <div className="absolute top-0 left-0 text-xs text-gray-500 dark:text-gray-400">+600%</div>
                    <div className="absolute bottom-0 left-0 text-xs text-gray-500 dark:text-gray-400">0%</div>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex justify-between mt-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">Strategy (+610.68%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">S&P 500 (+75.71%)</span>
                    </div>
                  </div>
                </div>
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
