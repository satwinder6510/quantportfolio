import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  // Hero rotating messages based on our 4-step process
  const heroSlides = [
    {
      title: 'Create Your Account',
      description: 'Sign up in minutes with your email address. Secure your account with two-factor authentication to protect your data.'
    },
    {
      title: 'Connect Your Exchange (Optional)',
      description: 'Securely link your preferred crypto exchanges through read-only API connections if you want to easily monitor your portfolios. CryptoTrend Alpha never has permission to trade on your behalf or withdraw funds.'
    },
    {
      title: 'Review Daily Trading Signals',
      description: 'Each day, receive clear buy/sell signal recommendations on your dashboard. These signals are generated using historical analysis of price trends, market structure, momentum, and volatility.'
    },
    {
      title: 'Execute Your Trades',
      description: 'Choose whether and when to act on the provided signals via your own exchange account. There is no time pressure — signals remain valid throughout the trading day.'
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
    <section className="py-10 md:py-14 overflow-hidden relative" id="hero">
      <div className="container mx-auto px-4">
        {/* We're changing the layout to give the chart more visual space */}
        <div className="flex flex-col items-center">
          {/* Title Section - Compact Header */}
          <div className="w-full text-center mb-3">
            <h1 className="text-2xl md:text-4xl font-bold text-dark-green dark:text-light-green mb-2">
              Automated Crypto Trading <span className="text-accent-orange">in 5 Minutes Daily</span>
            </h1>
            <p className="text-base md:text-lg text-text-medium dark:text-dark-text-medium max-w-2xl mx-auto">
              Our intelligent algorithm analyzes the market and delivers clear trading signals right to your dashboard.
            </p>
          </div>
          
          {/* Main Content - Enlarged Chart & 4-Steps Side by Side */}
          <div className="w-full grid md:grid-cols-5 gap-4 mt-4">
            {/* Enlarged Chart - Takes 3/5 of the space */}
            <div className="md:col-span-3 order-1 relative">
              <div className="relative z-10 bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden h-full">
                <div className="bg-gradient-to-r from-dark-green to-light-green dark:from-dark-accent dark:to-light-green p-0.5">
                  <div className="flex items-center justify-between px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-white font-medium text-sm">Strategy Equity Curve</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="px-2 py-0.5 text-xs bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 rounded">Jan 2021 - Apr 2025</div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-[350px] flex items-center justify-center overflow-hidden bg-white dark:bg-dark-card rounded-b-xl">
                  {/* Enhanced Equity Curve Chart */}
                  <div className="w-full h-full p-3 flex flex-col">
                    {/* Chart visualization - Made much larger */}
                    <div className="flex-1 relative mx-auto w-full">
                      <svg 
                        className="w-full h-full" 
                        viewBox="0 0 800 400" 
                        preserveAspectRatio="none"
                      >
                        {/* X-axis */}
                        <line x1="60" y1="360" x2="780" y2="360" stroke="#888" strokeWidth="1" />
                        
                        {/* Y-axis */}
                        <line x1="60" y1="40" x2="60" y2="360" stroke="#888" strokeWidth="1" />
                        
                        {/* X-axis labels */}
                        <text x="60" y="380" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">Jan 2021</text>
                        <text x="240" y="380" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">Jan 2022</text>
                        <text x="420" y="380" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">Jan 2023</text>
                        <text x="600" y="380" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">Jan 2024</text>
                        <text x="760" y="380" fontSize="10" textAnchor="end" fill="currentColor" className="text-gray-500 dark:text-gray-400">Apr 2025</text>
                        
                        {/* Y-axis labels */}
                        <text x="50" y="360" textAnchor="end" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">0%</text>
                        <text x="50" y="280" textAnchor="end" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">+150%</text>
                        <text x="50" y="200" textAnchor="end" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">+300%</text>
                        <text x="50" y="120" textAnchor="end" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">+450%</text>
                        <text x="50" y="40" textAnchor="end" fontSize="10" fill="currentColor" className="text-gray-500 dark:text-gray-400">+600%</text>
                        
                        {/* Gridlines */}
                        <line x1="60" y1="280" x2="780" y2="280" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                        <line x1="60" y1="200" x2="780" y2="200" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                        <line x1="60" y1="120" x2="780" y2="120" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                        <line x1="60" y1="40" x2="780" y2="40" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                        
                        <line x1="240" y1="40" x2="240" y2="360" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                        <line x1="420" y1="40" x2="420" y2="360" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                        <line x1="600" y1="40" x2="600" y2="360" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                        
                        {/* Strategy equity curve area */}
                        <path 
                          d="M60,360 L60,330 C100,310 140,270 180,230 C220,200 260,170 300,140 C340,130 380,110 420,90 C460,75 500,65 540,55 C580,50 620,45 660,40 C700,40 740,45 780,40 L780,360 Z" 
                          className="fill-green-500/10 dark:fill-green-500/20"
                        />
                        
                        {/* Strategy equity curve line */}
                        <path 
                          d="M60,330 C100,310 140,270 180,230 C220,200 260,170 300,140 C340,130 380,110 420,90 C460,75 500,65 540,55 C580,50 620,45 660,40 C700,40 740,45 780,40" 
                          fill="none" 
                          className="stroke-green-500 dark:stroke-green-400"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        
                        {/* Drawdown markers */}
                        <circle cx="300" cy="140" r="4" className="fill-yellow-500" />
                        <circle cx="540" cy="55" r="4" className="fill-yellow-500" />
                      </svg>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex justify-between mt-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Strategy Equity (+610.68%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Key Entry Points</span>
                      </div>
                    </div>
                    
                    {/* Disclaimer about historical data */}
                    <div className="text-center mt-2">
                      <span className="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded">
                        Based on historical backtest data. Past performance is not indicative of future results.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-20 -translate-y-1/2 w-64 h-64 bg-accent-orange opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-light-green opacity-10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Steps - Takes 2/5 of the space */}
            <div className="md:col-span-2 order-2 md:order-2 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-dark-green dark:text-light-green mb-3">
                4-Step Process
              </h2>
              
              {/* Step Cards */}
              <div className="space-y-2">
                {heroSlides.map((slide, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-dark-card p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-accent-orange flex items-center justify-center rounded-full text-white text-sm font-bold mr-2 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-dark-green dark:text-light-green">
                          {slide.title}
                        </h3>
                        <p className="text-xs text-text-medium dark:text-dark-text-medium mt-0.5">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
                <Button
                  onClick={() => scrollToSection('get-started')}
                  className="py-2 px-4 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center font-medium"
                >
                  Start 14-Day Trial
                </Button>
                <Button
                  onClick={() => scrollToSection('how-it-works')}
                  variant="outline"
                  className="py-2 px-4 border-2 border-dark-green dark:border-light-green text-dark-green dark:text-light-green rounded-lg hover:bg-dark-green hover:text-white dark:hover:bg-light-green dark:hover:text-dark-bg transition-colors duration-200 text-center font-medium"
                >
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator - reduced height */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[30px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50 dark:fill-dark-accent opacity-30"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
