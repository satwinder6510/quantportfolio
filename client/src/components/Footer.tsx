import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-dark-accent pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-dark-green dark:text-light-green">QuantPortfol.io</h3>
            <p className="text-text-medium dark:text-dark-text-medium mb-4">
              AI-powered crypto trading made simple for everyone, from beginners to professional traders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-accent-orange dark:hover:text-accent-orange transition-colors duration-200">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-accent-orange dark:hover:text-accent-orange transition-colors duration-200">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-accent-orange dark:hover:text-accent-orange transition-colors duration-200">
                <i className="fab fa-telegram text-xl"></i>
              </a>
              <a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-accent-orange dark:hover:text-accent-orange transition-colors duration-200">
                <i className="fab fa-discord text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-dark-green dark:text-light-green">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-dark-green dark:text-light-green">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">API</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-dark-green dark:text-light-green">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-amber-600 dark:text-gray-400 text-xs mb-4 p-3 bg-amber-50 dark:bg-gray-800/60 rounded-md border-0 dark:border dark:border-gray-700">
            <strong className="dark:text-gray-300">Important Disclaimer:</strong> QuantPortfol.io is not a registered investment advisor, broker-dealer, or financial consultant. The information provided is for informational purposes only and does not constitute financial advice, investment recommendations, or an offer to buy or sell any securities. Trading in cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Past performance is not indicative of future results.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-medium dark:text-dark-text-medium text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} QuantPortfol.io. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={toggleTheme}
                className="text-sm text-text-medium dark:text-dark-text-medium flex items-center"
              >
                {theme === 'light' ? (
                  <>
                    <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2 text-primary" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;