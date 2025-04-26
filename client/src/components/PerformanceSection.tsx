import React from 'react';
import { Card } from '@/components/ui/card';

const PerformanceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg" id="performance">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-green dark:text-light-green font-serif">
            Verified Performance
          </h2>
          <p className="text-text-medium dark:text-dark-text-medium max-w-3xl mx-auto text-lg">
            Our algorithm has been backtested across multiple market cycles with consistent results.
          </p>
        </div>

        {/* Performance Chart Card */}
        <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg mb-10 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-xl font-semibold text-dark-green dark:text-light-green">Performance History</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-md text-sm border border-gray-200 dark:border-gray-700 text-text-medium dark:text-dark-text-medium hover:bg-gray-50 dark:hover:bg-gray-800">1M</button>
              <button className="px-4 py-2 rounded-md text-sm border border-gray-200 dark:border-gray-700 text-text-medium dark:text-dark-text-medium hover:bg-gray-50 dark:hover:bg-gray-800">3M</button>
              <button className="px-4 py-2 rounded-md text-sm bg-dark-green dark:bg-light-green text-white">1Y</button>
              <button className="px-4 py-2 rounded-md text-sm border border-gray-200 dark:border-gray-700 text-text-medium dark:text-dark-text-medium hover:bg-gray-50 dark:hover:bg-gray-800">All</button>
            </div>
          </div>
          
          {/* Chart Container */}
          <div className="w-full h-[400px] bg-gray-50 dark:bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-text-medium dark:text-dark-text-medium">
              [Performance Chart - Growth from $100 to $650 over 12 months - Showing comparison with BTC, S&P 500, and NIFTY 50]
            </div>
          </div>

          {/* Chart Legend */}
          <div className="flex flex-wrap gap-6 mb-4 justify-center">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-light-green rounded-full mr-2"></div>
              <span className="text-sm text-text-medium dark:text-dark-text-medium">Our Strategy</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-accent-orange rounded-full mr-2"></div>
              <span className="text-sm text-text-medium dark:text-dark-text-medium">S&P 500</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-sm text-text-medium dark:text-dark-text-medium">NIFTY 50</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-amber-500 rounded-full mr-2"></div>
              <span className="text-sm text-text-medium dark:text-dark-text-medium">Bitcoin</span>
            </div>
          </div>
          
          <p className="text-xs text-text-light dark:text-dark-text-light italic mt-2">
            Past performance is not indicative of future results. Chart shows backtested performance.
          </p>
        </div>

        {/* Key Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="p-6 text-center">
            <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Best Month</div>
            <div className="text-3xl font-bold text-accent-orange">+14.0%</div>
            <div className="text-xs text-text-light dark:text-dark-text-light">February 2024</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Average Monthly</div>
            <div className="text-3xl font-bold text-dark-green dark:text-light-green">+3.3%</div>
            <div className="text-xs text-text-light dark:text-dark-text-light">Across all market conditions</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Positive Months</div>
            <div className="text-3xl font-bold text-light-green">78%</div>
            <div className="text-xs text-text-light dark:text-dark-text-light">Months with Positive Returns</div>
          </Card>
        </div>

        {/* Strategy vs Bitcoin Comparison */}
        <Card className="p-6 mb-10">
          <h3 className="text-xl font-semibold mb-6 text-dark-green dark:text-light-green">Strategy vs. Bitcoin</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-gray-100 dark:border-gray-700">
                  <th className="text-left py-3 text-text-medium dark:text-dark-text-medium">Metric</th>
                  <th className="text-center py-3 text-text-medium dark:text-dark-text-medium">Our Strategy</th>
                  <th className="text-center py-3 text-text-medium dark:text-dark-text-medium">Bitcoin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-text-medium dark:text-dark-text-medium">Total Return</td>
                  <td className="py-3 text-center font-semibold text-dark-green dark:text-light-green">610.68%</td>
                  <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">533.82%</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-text-medium dark:text-dark-text-medium">Max Drawdown</td>
                  <td className="py-3 text-center font-semibold text-dark-green dark:text-light-green">-18.88%</td>
                  <td className="py-3 text-center text-red-500">-86.24%</td>
                </tr>
                <tr>
                  <td className="py-3 text-text-medium dark:text-dark-text-medium">Positive Months</td>
                  <td className="py-3 text-center font-semibold text-dark-green dark:text-light-green">78%</td>
                  <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">64%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-dark-green/5 dark:bg-light-green/5 rounded-lg">
            <h4 className="font-semibold mb-2 text-dark-green dark:text-light-green">Key Insight</h4>
            <p className="text-text-medium dark:text-dark-text-medium text-sm">
              While Bitcoin delivered strong returns, our strategy achieved similar upside with significantly reduced volatility. The most striking difference is in the maximum drawdown: <strong>-18.88%</strong> for our strategy versus <strong>-86.24%</strong> for Bitcoin.
            </p>
          </div>
        </Card>

        {/* Strategy Details */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-dark-green dark:text-light-green">How Our Strategy Works</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-4 text-dark-green dark:text-light-green">Technical Indicators</h4>
              <ul className="space-y-2 pl-5 list-disc text-text-medium dark:text-dark-text-medium">
                <li>Multi-timeframe trend analysis</li>
                <li>Volume profile and market structure</li>
                <li>Momentum and volatility filters</li>
                <li>Relative strength comparisons</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-dark-green dark:text-light-green">Risk Management</h4>
              <ul className="space-y-2 pl-5 list-disc text-text-medium dark:text-dark-text-medium">
                <li>Dynamic position sizing</li>
                <li>Correlation-based portfolio construction</li>
                <li>Automated stop-loss implementation</li>
                <li>Profit-taking at key technical levels</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 bg-accent-orange/5 dark:bg-accent-orange/10 rounded-lg">
            <h4 className="font-semibold mb-2 text-accent-orange">Strategy Advantage</h4>
            <p className="text-text-medium dark:text-dark-text-medium text-sm">
              Unlike most retail strategies that focus solely on entry points, our algorithm places equal emphasis on <strong>exit strategy</strong> and <strong>position sizing</strong>. This balanced approach is what enables us to capture upside while significantly reducing drawdowns.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PerformanceSection;