import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white dark:bg-dark-accent transition-colors duration-300" id="performance">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-dark-green dark:text-light-green">
          Historical Signal Model Performance <span className="text-light-green dark:text-accent-orange">(Backtest Results)</span>
        </h2>
        <p className="text-center text-text-medium dark:text-dark-text-medium max-w-3xl mx-auto mb-6">
          Performance results below are based on historical backtesting conducted from January 2021 to April 2025.
        </p>
        <p className="text-center text-amber-600 dark:text-amber-400 max-w-3xl mx-auto mb-10 font-medium">
          <span className="bg-amber-100 dark:bg-amber-950/30 px-3 py-1 rounded">
            Past performance is not indicative of future results. Actual trading outcomes may differ.
          </span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat Card 1 */}
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-dark-green to-light-green"></div>
            <div className="p-6 text-center">
              <h3 className="text-4xl font-bold text-dark-green dark:text-light-green mb-2">
                {t('stats.tradeSuccessRate')}
              </h3>
              <p className="text-text-medium dark:text-dark-text-medium font-medium">Daily Time Required</p>
            </div>
          </div>
          
          {/* Stat Card 2 */}
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-dark-green to-light-green"></div>
            <div className="p-6 text-center">
              <h3 className="text-4xl font-bold text-dark-green dark:text-light-green mb-2">
                {t('stats.averageReturn')}
              </h3>
              <p className="text-text-medium dark:text-dark-text-medium font-medium">Return</p>
            </div>
          </div>
          
          {/* Stat Card 3 */}
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-dark-green to-light-green"></div>
            <div className="p-6 text-center">
              <h3 className="text-4xl font-bold text-dark-green dark:text-light-green mb-2">
                {t('stats.activeUsers')}
              </h3>
              <p className="text-text-medium dark:text-dark-text-medium font-medium">Sharpe Ratio</p>
            </div>
          </div>
          
          {/* Stat Card 4 */}
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-dark-green to-light-green"></div>
            <div className="p-6 text-center">
              <h3 className="text-4xl font-bold text-dark-green dark:text-light-green mb-2">
                {t('stats.tradesExecuted')}
              </h3>
              <p className="text-text-medium dark:text-dark-text-medium font-medium">Max Drawdown</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
