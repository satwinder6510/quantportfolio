import React, { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t, currentLanguageLabel } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-cream dark:bg-dark-bg shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-dark-green dark:text-light-green z-10">
            Crypto<span className="text-light-green dark:text-accent-orange">Trend</span><sub className="text-sm">α</sub>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 pl-10">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
              >
                {t('nav.features')}
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
              >
                {t('nav.howItWorks')}
              </button>
              <button 
                onClick={() => scrollToSection('performance')} 
                className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
              >
                {t('nav.performance')}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
              >
                {t('nav.pricing')}
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-200 dark:bg-dark-accent hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === 'light' ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-indigo-300" />}
              </Button>
              
              {/* Language Selector */}
              <div className="relative group">
                <Button
                  variant="outline"
                  className="flex items-center space-x-1 py-2 px-3 rounded border border-text-medium dark:border-dark-text-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green hover:border-dark-green dark:hover:border-light-green transition-colors duration-200"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="text-sm">{currentLanguageLabel}</span>
                  <i className="fas fa-chevron-down text-xs ml-2"></i>
                </Button>
                
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-dark-accent rounded-md shadow-lg overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'font-medium text-dark-green dark:text-light-green' : 'text-text-medium dark:text-dark-text-medium'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('hi')}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === 'hi' ? 'font-medium text-dark-green dark:text-light-green' : 'text-text-medium dark:text-dark-text-medium'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150`}
                  >
                    हिन्दी (Hindi)
                  </button>
                  <button
                    onClick={() => changeLanguage('pa')}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === 'pa' ? 'font-medium text-dark-green dark:text-light-green' : 'text-text-medium dark:text-dark-text-medium'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150`}
                  >
                    ਪੰਜਾਬੀ (Punjabi)
                  </button>
                </div>
              </div>
              
              <Button
                onClick={() => scrollToSection('get-started')}
                className="py-2 px-5 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium"
              >
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            className="md:hidden text-dark-green dark:text-light-green"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-cream dark:bg-dark-bg absolute top-16 left-0 w-full shadow-md transition-all duration-300 z-40`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('features')} 
              className="py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
            >
              {t('nav.features')}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
            >
              {t('nav.howItWorks')}
            </button>
            <button 
              onClick={() => scrollToSection('performance')} 
              className="py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
            >
              {t('nav.performance')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
            >
              {t('nav.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('get-started')} 
              className="py-2 px-4 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md text-center font-medium transition-colors duration-150"
            >
              {t('nav.getStarted')}
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-text-medium dark:text-dark-text-medium px-4">Select Language:</p>
              <button
                onClick={() => changeLanguage('en')}
                className={`text-left py-2 px-4 ${language === 'en' ? 'font-medium text-dark-green dark:text-light-green bg-gray-100 dark:bg-dark-accent' : 'text-text-medium dark:text-dark-text-medium'} hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('hi')}
                className={`text-left py-2 px-4 ${language === 'hi' ? 'font-medium text-dark-green dark:text-light-green bg-gray-100 dark:bg-dark-accent' : 'text-text-medium dark:text-dark-text-medium'} hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150`}
              >
                हिन्दी (Hindi)
              </button>
              <button
                onClick={() => changeLanguage('pa')}
                className={`text-left py-2 px-4 ${language === 'pa' ? 'font-medium text-dark-green dark:text-light-green bg-gray-100 dark:bg-dark-accent' : 'text-text-medium dark:text-dark-text-medium'} hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150`}
              >
                ਪੰਜਾਬੀ (Punjabi)
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
