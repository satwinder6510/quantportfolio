import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-accent transition-colors duration-300" id="performance">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-dark-green dark:text-light-green">
          Our Performance <span className="text-light-green dark:text-accent-orange">in Numbers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat Card 1 */}
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-dark-green to-light-green"></div>
            <div className="p-6 text-center">
              <h3 className="text-4xl font-bold text-dark-green dark:text-light-green mb-2">
                {t('stats.tradeSuccessRate')}
              </h3>
              <p className="text-text-medium dark:text-dark-text-medium font-medium">Trade Success Rate</p>
            </div>
          </div>
          
          {/* Stat Card 2 */}
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-dark-green to-light-green"></div>
            <div className="p-6 text-center">
              <h3 className="text-4xl font-bold text-dark-green dark:text-light-green mb-2">
                {t('stats.averageReturn')}
              </h3>
              <p className="text-text-medium dark:text-dark-text-medium font-medium">Average Annual Return</p>
            </div>
          </div>
          
          {/* Stat Card 3 */}
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-dark-green to-light-green"></div>
            <div className="p-6 text-center">
              <h3 className="text-4xl font-bold text-dark-green dark:text-light-green mb-2">
                {t('stats.activeUsers')}
              </h3>
              <p className="text-text-medium dark:text-dark-text-medium font-medium">Active Users</p>
            </div>
          </div>
          
          {/* Stat Card 4 */}
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-dark-green to-light-green"></div>
            <div className="p-6 text-center">
              <h3 className="text-4xl font-bold text-dark-green dark:text-light-green mb-2">
                {t('stats.tradesExecuted')}
              </h3>
              <p className="text-text-medium dark:text-dark-text-medium font-medium">Trades Executed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
