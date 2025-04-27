import React, { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from '@/hooks/use-location';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <nav className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-dark-green dark:text-light-green flex-shrink-0">
            Quant<span className="text-light-green dark:text-accent-orange">Portfol.io</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between w-full ml-16">
            {/* Main Nav Links */}
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
                >
                  {t('nav.features')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
                >
                  {t('nav.howItWorks')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('performance')} 
                  className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
                >
                  {t('nav.performance')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="font-medium text-text-medium dark:text-dark-text-medium hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 link-underline link-underline-light dark:link-underline-dark"
                >
                  FAQ
                </button>
              </li>
            </ul>
            
            {/* Action Items */}
            <div className="flex items-center">
              {/* Theme Toggle Button */}
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-200 dark:bg-dark-accent hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === 'light' ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-indigo-300" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            className="md:hidden ml-auto text-dark-green dark:text-light-green"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-cream dark:bg-dark-bg absolute top-16 left-0 w-full shadow-md transition-all duration-300 z-40`}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-3 mb-6">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="w-full text-left py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
                >
                  {t('nav.features')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="w-full text-left py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
                >
                  {t('nav.howItWorks')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('performance')} 
                  className="w-full text-left py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
                >
                  {t('nav.performance')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="w-full text-left py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="w-full text-left py-2 px-4 text-text-medium dark:text-dark-text-medium hover:bg-gray-100 dark:hover:bg-dark-accent rounded-md transition-colors duration-150"
                >
                  FAQ
                </button>
              </li>
            </ul>
            
            <div className="flex justify-center mt-4 border-t border-gray-200 dark:border-gray-700 pt-4 pb-2">
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-200 dark:bg-dark-accent hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === 'light' ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-indigo-300" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
