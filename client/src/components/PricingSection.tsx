import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const PricingSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-green dark:text-light-green">
            Simple, <span className="text-light-green dark:text-accent-orange">Transparent Pricing</span>
          </h2>
          <p className="text-text-medium dark:text-dark-text-medium max-w-2xl mx-auto">
            Choose the plan that fits your trading needs, with no hidden fees or long-term commitments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-dark-green dark:text-light-green">Basic</h3>
              <div className="flex items-end">
                <span className="text-4xl font-bold text-dark-green dark:text-light-green">$29</span>
                <span className="text-text-medium dark:text-dark-text-medium">/month</span>
              </div>
              <p className="text-text-medium dark:text-dark-text-medium mt-3">
                Perfect for beginners starting with crypto trading.
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">Up to $10,000 portfolio value</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">3 pre-built AI strategies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">Email & push notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">2 connected exchanges</span>
                </li>
                <li className="flex items-start text-gray-400 dark:text-gray-500">
                  <X className="h-5 w-5 mt-1 mr-2 shrink-0" />
                  <span>Custom strategy creation</span>
                </li>
                <li className="flex items-start text-gray-400 dark:text-gray-500">
                  <X className="h-5 w-5 mt-1 mr-2 shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button
                onClick={() => scrollToSection('get-started')}
                className="mt-6 w-full py-2 px-4 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md text-center font-medium transition-colors duration-200"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Pro Plan (Featured) */}
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-xl transform scale-105 md:scale-110 relative z-10 border-2 border-accent-orange">
            <div className="absolute top-0 right-0 bg-accent-orange text-white py-1 px-4 text-sm font-medium rounded-bl-lg rounded-tr-xl">
              Most Popular
            </div>
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-dark-green dark:text-light-green">Pro</h3>
              <div className="flex items-end">
                <span className="text-4xl font-bold text-dark-green dark:text-light-green">$79</span>
                <span className="text-text-medium dark:text-dark-text-medium">/month</span>
              </div>
              <p className="text-text-medium dark:text-dark-text-medium mt-3">
                Ideal for active traders seeking more flexibility.
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">Up to $100,000 portfolio value</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">All 8 AI strategies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">Email, SMS & push notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">5 connected exchanges</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">Basic strategy customization</span>
                </li>
                <li className="flex items-start text-gray-400 dark:text-gray-500">
                  <X className="h-5 w-5 mt-1 mr-2 shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button
                onClick={() => scrollToSection('get-started')}
                className="mt-6 w-full py-2 px-4 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md text-center font-medium transition-colors duration-200"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-dark-green dark:text-light-green">Enterprise</h3>
              <div className="flex items-end">
                <span className="text-4xl font-bold text-dark-green dark:text-light-green">$199</span>
                <span className="text-text-medium dark:text-dark-text-medium">/month</span>
              </div>
              <p className="text-text-medium dark:text-dark-text-medium mt-3">
                For professional traders and institutional clients.
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">Unlimited portfolio value</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">All AI strategies + early access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">All notification channels</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">Unlimited connected exchanges</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">Advanced strategy customization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                  <span className="text-text-medium dark:text-dark-text-medium">24/7 priority support</span>
                </li>
              </ul>
              <Button
                onClick={() => scrollToSection('get-started')}
                className="mt-6 w-full py-2 px-4 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md text-center font-medium transition-colors duration-200"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
