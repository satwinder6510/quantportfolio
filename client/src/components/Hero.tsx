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
  }, [heroSlides.length]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-14 overflow-hidden relative" id="hero">
      <div className="container mx-auto px-4">
        {/* Title Section - Compact Header */}
        <div className="w-full text-center mb-3">
          <h1 className="text-2xl md:text-4xl font-bold text-dark-green dark:text-light-green mb-2">
            Automated Crypto Trading <span className="text-accent-orange">in 5 Minutes Daily</span>
          </h1>
          <p className="text-base md:text-lg text-text-medium dark:text-dark-text-medium max-w-2xl mx-auto">
            Our intelligent algorithm analyzes the market and delivers clear trading signals right to your dashboard.
          </p>
        </div>
        
        {/* Main Content - Chart & 4-Steps Side by Side */}
        <div className="w-full grid md:grid-cols-5 gap-4 mt-4">
          {/* Chart Section - Takes 3/5 of the space */}
          <div className="md:col-span-3 order-1 relative">
            <div className="relative z-10 bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden h-full">
              {/* Chart Header */}
              <div className="bg-gradient-to-r from-dark-green to-light-green dark:from-dark-accent dark:to-light-green p-0.5">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white font-medium text-sm">
                      Strategy Equity Curves
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="px-2 py-0.5 text-[9px] bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 rounded">Jan 2021 - Apr 2025</div>
                  </div>
                </div>
              </div>
              
              {/* Chart Content */}
              <div className="w-full flex flex-col md:flex-row overflow-hidden bg-white dark:bg-dark-card rounded-b-xl">
                {/* Compound Returns Chart */}
                <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">
                  <div className="p-2 bg-gray-50 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-dark-green dark:text-light-green">Compounded Returns</span>
                      <span className="text-[10px] bg-green-100/50 dark:bg-green-900/20 text-dark-green dark:text-light-green rounded px-1">+610.68% Total</span>
                    </div>
                  </div>
                  <div className="h-[200px] p-2">
                    <svg 
                      className="w-full h-full" 
                      viewBox="0 0 800 400" 
                      preserveAspectRatio="none"
                    >
                      {/* X and Y axes */}
                      <line x1="60" y1="360" x2="780" y2="360" stroke="#888" strokeWidth="1" />
                      <line x1="60" y1="40" x2="60" y2="360" stroke="#888" strokeWidth="1" />
                      
                      {/* Gridlines */}
                      <line x1="60" y1="200" x2="780" y2="200" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                      <line x1="420" y1="40" x2="420" y2="360" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                      
                      {/* Compound returns curve - steeper growth */}
                      <path 
                        d="M60,360 L60,330 C100,310 140,270 180,230 C220,200 260,170 300,140 C340,130 380,110 420,90 C460,75 500,65 540,55 C580,50 620,45 660,40 C700,40 740,45 780,40 L780,360 Z" 
                        className="fill-green-500/10 dark:fill-green-500/20"
                      />
                      <path 
                        d="M60,330 C100,310 140,270 180,230 C220,200 260,170 300,140 C340,130 380,110 420,90 C460,75 500,65 540,55 C580,50 620,45 660,40 C700,40 740,45 780,40" 
                        fill="none" 
                        className="stroke-green-500 dark:stroke-green-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      
                      {/* Key entry points */}
                      <circle cx="300" cy="140" r="3" className="fill-yellow-500" />
                      <circle cx="540" cy="55" r="3" className="fill-yellow-500" />
                    </svg>
                  </div>
                  <div className="p-2 grid grid-cols-3 gap-1 text-center text-[10px]">
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">117.13%</div>
                      <div className="text-gray-500 dark:text-gray-400">Annual Return</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">-18.88%</div>
                      <div className="text-gray-500 dark:text-gray-400">Max Drawdown</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">2.08</div>
                      <div className="text-gray-500 dark:text-gray-400">Sharpe Ratio</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">78%</div>
                      <div className="text-gray-500 dark:text-gray-400">Positive Months</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">3.12</div>
                      <div className="text-gray-500 dark:text-gray-400">Profit Factor</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">3.8x</div>
                      <div className="text-gray-500 dark:text-gray-400">vs BTC</div>
                    </div>
                  </div>
                </div>
                
                {/* Non-Compound Returns Chart */}
                <div className="w-full md:w-1/2">
                  <div className="p-2 bg-gray-50 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-dark-green dark:text-light-green">Non-Compounded Returns</span>
                      <span className="text-[10px] bg-green-100/50 dark:bg-green-900/20 text-dark-green dark:text-light-green rounded px-1">+206.65% Total</span>
                    </div>
                  </div>
                  <div className="h-[200px] p-2">
                    <svg 
                      className="w-full h-full" 
                      viewBox="0 0 800 400" 
                      preserveAspectRatio="none"
                    >
                      {/* X and Y axes */}
                      <line x1="60" y1="360" x2="780" y2="360" stroke="#888" strokeWidth="1" />
                      <line x1="60" y1="40" x2="60" y2="360" stroke="#888" strokeWidth="1" />
                      
                      {/* Gridlines */}
                      <line x1="60" y1="200" x2="780" y2="200" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                      <line x1="420" y1="40" x2="420" y2="360" stroke="#888" strokeWidth="0.5" strokeDasharray="4,4" />
                      
                      {/* Non-compound returns curve - more linear growth */}
                      <path 
                        d="M60,360 L60,320 C100,310 140,290 180,270 C220,250 260,230 300,210 C340,190 380,170 420,150 C460,130 500,110 540,90 C580,75 620,60 660,45 C700,40 740,40 780,40 L780,360 Z" 
                        className="fill-blue-500/10 dark:fill-blue-500/20"
                      />
                      <path 
                        d="M60,320 C100,310 140,290 180,270 C220,250 260,230 300,210 C340,190 380,170 420,150 C460,130 500,110 540,90 C580,75 620,60 660,45 C700,40 740,40 780,40" 
                        fill="none" 
                        className="stroke-blue-500 dark:stroke-blue-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      
                      {/* Key entry points */}
                      <circle cx="300" cy="210" r="3" className="fill-yellow-500" />
                      <circle cx="540" cy="90" r="3" className="fill-yellow-500" />
                    </svg>
                  </div>
                  <div className="p-2 grid grid-cols-3 gap-1 text-center text-[10px]">
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">39.64%</div>
                      <div className="text-gray-500 dark:text-gray-400">Annual Return</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">-8.09%</div>
                      <div className="text-gray-500 dark:text-gray-400">Max Drawdown</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">2.29</div>
                      <div className="text-gray-500 dark:text-gray-400">Sharpe Ratio</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">78%</div>
                      <div className="text-gray-500 dark:text-gray-400">Positive Months</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">2.73</div>
                      <div className="text-gray-500 dark:text-gray-400">Profit Factor</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded py-1 px-1">
                      <div className="font-medium text-dark-green dark:text-light-green">2.7x</div>
                      <div className="text-gray-500 dark:text-gray-400">vs S&P 500</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Disclaimer */}
              <div className="w-full text-center p-2 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[10px] text-amber-600 dark:text-amber-400">
                  Past performance is not indicative of future results.
                </span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-20 -translate-y-1/2 w-64 h-64 bg-accent-orange opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-light-green opacity-10 rounded-full blur-3xl"></div>
          </div>
          
          {/* 4-Step Process - Takes 2/5 of the space */}
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
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[30px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50 dark:fill-dark-accent opacity-30"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
