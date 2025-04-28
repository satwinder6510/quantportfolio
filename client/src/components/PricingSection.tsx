import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Info } from 'lucide-react';

const PricingSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-dark-bg" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-green dark:text-light-green font-serif">
            Performance-Based Pricing
          </h2>
          <p className="text-text-medium dark:text-dark-text-medium max-w-2xl mx-auto text-lg">
            We only succeed when you succeed
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden transition-all duration-300">
            {/* Header */}
            <div className="text-center p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-2 text-dark-green dark:text-light-green">One Simple Plan for Everyone</h3>
              <p className="text-text-medium dark:text-dark-text-medium">Same great features for traders of all levels</p>
            </div>
            
            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-sm text-text-medium dark:text-dark-text-medium mb-2">Monthly Subscription</div>
                <div className="text-4xl font-bold text-dark-green dark:text-light-green">$15</div>
                <div className="text-xs text-text-light dark:text-dark-text-light mt-1">Billed monthly</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-sm text-text-medium dark:text-dark-text-medium mb-2">Performance Fee</div>
                <div className="text-4xl font-bold text-dark-green dark:text-light-green">20%</div>
                <div className="text-xs text-text-light dark:text-dark-text-light mt-1">of new profits only</div>
              </div>
            </div>
            
            {/* Features List */}
            <div className="px-6 pb-6">
              <h4 className="font-semibold mb-4 text-dark-green dark:text-light-green">What's Included:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-light-green shrink-0 mr-2 mt-0.5" />
                  <span className="text-text-medium dark:text-dark-text-medium">All major crypto pairs</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-light-green shrink-0 mr-2 mt-0.5" />
                  <span className="text-text-medium dark:text-dark-text-medium">Daily trade signals</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-light-green shrink-0 mr-2 mt-0.5" />
                  <span className="text-text-medium dark:text-dark-text-medium">Automated execution</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-light-green shrink-0 mr-2 mt-0.5" />
                  <span className="text-text-medium dark:text-dark-text-medium">Risk management tools</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-light-green shrink-0 mr-2 mt-0.5" />
                  <span className="text-text-medium dark:text-dark-text-medium">Performance dashboard</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-light-green shrink-0 mr-2 mt-0.5" />
                  <span className="text-text-medium dark:text-dark-text-medium">Mobile notifications</span>
                </div>
              </div>
            </div>
            
            {/* Info Notice - monochromatic for dark mode */}
            <div className="mx-6 mb-6 p-4 bg-blue-50 dark:bg-dark-card dark:border dark:border-gray-700 rounded-lg flex">
              <Info className="h-5 w-5 text-blue-500 dark:text-primary shrink-0 mr-3 mt-0.5" />
              <div className="text-sm text-text-medium dark:text-dark-text-medium">
                <span className="font-semibold">High Watermark Policy:</span> Performance fees are only charged on profits that exceed your previous highest portfolio value. This ensures you never pay performance fees twice on the same gains.
              </div>
            </div>
            
            {/* CTA */}
            <div className="px-6 pb-6 text-center">
              <Button
                onClick={() => scrollToSection('get-started')}
                className="px-8 py-3 bg-accent-orange hover:bg-orange-600 dark:bg-primary dark:hover:brightness-110 text-white rounded-lg shadow-md hover:shadow-lg dark:shadow-none transform hover:-translate-y-0.5 transition-all duration-200 text-lg font-medium"
              >
                Register Interest
              </Button>
              <p className="text-sm text-text-light dark:text-dark-text-light mt-3">
                Recommended starting amount: $1000
              </p>
            </div>
          </div>
          
          {/* FAQ Section could be added here */}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
