import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { useLocation } from '@/hooks/use-location';
import PerformanceChart from './PerformanceChart';
import BenchmarkComparisonChart from './BenchmarkComparisonChart';

const PerformanceSection: React.FC = () => {
  const [returnType, setReturnType] = useState<'compound' | 'non-compound'>('non-compound');
  const [timeframe, setTimeframe] = useState<'1Y' | '3Y' | '5Y' | 'All'>('5Y');
  const { region } = useLocation();
  const isIndian = region === 'india';
  
  // Key metrics from the backtest data - compound returns (vs Bitcoin comparison)
  const compoundMetrics = {
    strategy: {
      totalReturn: '610.68%',
      annualizedReturn: '117.13%',
      sharpeRatio: '2.08',
      maxDrawdown: '-18.88%',
      positiveMonths: '78%'
    },
    bitcoin: {
      totalReturn: '533.82%',
      annualizedReturn: '102.55%',
      sharpeRatio: '1.02',
      maxDrawdown: '-86.24%',
      positiveMonths: '64%'
    },
    sp500: {
      totalReturn: '75.71%',
      annualizedReturn: '14.54%',
      sharpeRatio: '0.73',
      maxDrawdown: '-33.72%',
      positiveMonths: '62%'
    },
    nifty50: {
      totalReturn: '69.42%',
      annualizedReturn: '13.33%',
      sharpeRatio: '0.68',
      maxDrawdown: '-28.96%',
      positiveMonths: '60%'
    }
  };
  
  // Key metrics from the backtest data - non-compound returns (vs S&P 500 comparison)
  const nonCompoundMetrics = {
    strategy: {
      totalReturn: '206.65%',
      annualizedReturn: '39.64%',
      sharpeRatio: '2.29',
      maxDrawdown: '-8.09%',
      positiveMonths: '78%'
    },
    bitcoin: {
      totalReturn: '178.55%', // estimated
      annualizedReturn: '34.30%', // estimated
      sharpeRatio: '1.02',
      maxDrawdown: '-86.24%',
      positiveMonths: '64%'
    },
    sp500: {
      totalReturn: '75.71%',
      annualizedReturn: '14.54%',
      sharpeRatio: '0.73',
      maxDrawdown: '-33.72%',
      positiveMonths: '62%'
    },
    nifty50: {
      totalReturn: '69.42%',
      annualizedReturn: '13.33%',
      sharpeRatio: '0.68',
      maxDrawdown: '-28.96%',
      positiveMonths: '60%'
    }
  };
  
  // Use the selected metrics based on return type
  const metrics = returnType === 'compound' ? compoundMetrics : nonCompoundMetrics;
  
  // Get the appropriate benchmark based on location and return type
  const getBenchmark = () => {
    if (returnType === 'compound') {
      return 'bitcoin';
    } else {
      return isIndian ? 'nifty50' : 'sp500';
    }
  };
  
  const benchmark = getBenchmark();
  const benchmarkName = benchmark === 'nifty50' ? 'NIFTY 50' : benchmark === 'sp500' ? 'S&P 500' : 'Bitcoin';

  return (
    <section className="py-20 bg-white dark:bg-dark-bg" id="performance">
      <div className="container mx-auto px-4">
        {/* 
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-green dark:text-light-green font-serif">
            Historical Signal Model Performance (Backtest Results)
          </h2>
          <p className="text-text-medium dark:text-dark-text-medium max-w-3xl mx-auto text-lg">
            Performance results below are based on historical backtesting conducted from January 2021 to April 2025.
          </p>
          <p className="text-amber-600 dark:text-gray-400 max-w-3xl mx-auto mt-2 font-medium">
            <span className="bg-amber-100 dark:bg-gray-800/60 px-3 py-1 rounded dark:border dark:border-gray-700">
              Past performance is not indicative of future results. Actual trading outcomes may differ.
            </span>
          </p>
        </div>
        
        */}
        {/* Return Type Toggle - COMMENTED OUT 
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button 
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                returnType === 'compound' 
                  ? 'bg-dark-green dark:bg-light-green text-white' 
                  : 'text-text-medium dark:text-dark-text-medium hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setReturnType('compound')}
            >
              Compound Returns
            </button>
            <button 
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                returnType === 'non-compound' 
                  ? 'bg-dark-green dark:bg-light-green text-white' 
                  : 'text-text-medium dark:text-dark-text-medium hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setReturnType('non-compound')}
            >
              Non-Compound Returns
            </button>
          </div>
          <div className="relative group ml-2">
            <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-help">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">?</span>
            </div>
            <div className="absolute bottom-full mb-2 -left-32 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 text-xs text-left hidden group-hover:block z-10 border border-gray-200 dark:border-gray-700">
              <p className="font-semibold mb-1">What's the difference?</p>
              <p className="text-text-medium dark:text-dark-text-medium mb-1">
                <span className="font-medium">Compound returns</span>: Reinvests profits, showing exponential growth over time.
              </p>
              <p className="text-text-medium dark:text-dark-text-medium">
                <span className="font-medium">Non-compound returns</span>: Shows raw performance without reinvestment effect.
              </p>
            </div>
          </div>
        </div>
        */}

        {/* Performance Chart Card - COMMENTED OUT 
        <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg mb-10 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-xl font-semibold text-dark-green dark:text-light-green">
              Strategy Performance vs {returnType === 'compound' ? 'Bitcoin' : 'Market'}
            </h3>
            <div className="flex gap-2">
              <button 
                onClick={() => setTimeframe('1Y')}
                className={`px-4 py-2 rounded-md text-sm ${
                  timeframe === '1Y' 
                    ? 'bg-dark-green dark:bg-light-green text-white' 
                    : 'border border-gray-200 dark:border-gray-700 text-text-medium dark:text-dark-text-medium hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                1Y
              </button>
              <button 
                onClick={() => setTimeframe('3Y')}
                className={`px-4 py-2 rounded-md text-sm ${
                  timeframe === '3Y' 
                    ? 'bg-dark-green dark:bg-light-green text-white' 
                    : 'border border-gray-200 dark:border-gray-700 text-text-medium dark:text-dark-text-medium hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                3Y
              </button>
              <button 
                onClick={() => setTimeframe('5Y')}
                className={`px-4 py-2 rounded-md text-sm ${
                  timeframe === '5Y' 
                    ? 'bg-dark-green dark:bg-light-green text-white' 
                    : 'border border-gray-200 dark:border-gray-700 text-text-medium dark:text-dark-text-medium hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                5Y
              </button>
              <button 
                onClick={() => setTimeframe('All')}
                className={`px-4 py-2 rounded-md text-sm ${
                  timeframe === 'All' 
                    ? 'bg-dark-green dark:bg-light-green text-white' 
                    : 'border border-gray-200 dark:border-gray-700 text-text-medium dark:text-dark-text-medium hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                All
              </button>
            </div>
          </div>
          
          <div className="w-full rounded-lg mb-6 overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
            <PerformanceChart returnType={returnType} timeframe={timeframe} />
          </div>

          <div className="flex flex-wrap gap-6 mb-4 justify-center">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-sm text-text-medium dark:text-dark-text-medium">Our Strategy</span>
            </div>
            {returnType === 'compound' && (
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-text-medium dark:text-dark-text-medium">Bitcoin</span>
              </div>
            )}
            {returnType === 'non-compound' && (
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm text-text-medium dark:text-dark-text-medium">{isIndian ? 'NIFTY 50' : 'S&P 500'}</span>
              </div>
            )}
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
              <span className="text-sm text-text-medium dark:text-dark-text-medium">Drawdown</span>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Total Return</div>
              <div className="text-2xl font-bold text-dark-green dark:text-light-green">{metrics.strategy.totalReturn}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Annualized Return</div>
              <div className="text-2xl font-bold text-dark-green dark:text-light-green">{metrics.strategy.annualizedReturn}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Sharpe Ratio</div>
              <div className="text-2xl font-bold text-dark-green dark:text-light-green">{metrics.strategy.sharpeRatio}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Max Drawdown</div>
              <div className="text-2xl font-bold text-dark-green dark:text-light-green">{metrics.strategy.maxDrawdown}</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800/30">
            <h4 className="font-semibold mb-2 text-amber-700 dark:text-gray-300">Understanding the Results</h4>
            
            {returnType === 'compound' ? (
              <>
                <p className="text-sm text-text-medium dark:text-dark-text-medium">
                  The {metrics.strategy.annualizedReturn} annualized return represents exceptional performance during a specific period (Jan 2021 - Apr 2025) that included both bull and bear markets in crypto. These results reflect compound returns where profits are reinvested, showing the true growth potential of the strategy over time.
                </p>
                <p className="text-sm text-text-medium dark:text-dark-text-medium mt-2">
                  <strong>Key takeaway:</strong> Our strategy outpaced Bitcoin's compound gains ({metrics.strategy.totalReturn} vs {metrics.bitcoin.totalReturn}) and added 14.58 percentage points to annualized performance—while cutting Bitcoin's brutal drawdown from {metrics.bitcoin.maxDrawdown} to {metrics.strategy.maxDrawdown}, and doubling its risk-adjusted return.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-text-medium dark:text-dark-text-medium">
                  The {metrics.strategy.annualizedReturn} annualized return shown here uses non-compound calculation, which provides a clearer picture of raw performance without the exponential effects of reinvestment. This is especially useful for comparing against traditional market benchmarks.
                </p>
                <p className="text-sm text-text-medium dark:text-dark-text-medium mt-2">
                  <strong>Key takeaway:</strong> Our strategy delivered over 2.7× the total return of the {benchmarkName} ({metrics.strategy.totalReturn} vs. {metrics[benchmark].totalReturn}) with a Sharpe ratio more than 3× higher ({metrics.strategy.sharpeRatio} vs. {metrics[benchmark].sharpeRatio})—and capped the worst peak-to-trough loss at {metrics.strategy.maxDrawdown} instead of {metrics[benchmark].maxDrawdown}.
                </p>
              </>
            )}
            
            <p className="text-sm font-medium text-amber-600 dark:text-gray-400 mt-4 bg-amber-50 dark:bg-gray-800/60 p-2 rounded-md border-0 dark:border dark:border-gray-700">
              <strong className="dark:text-gray-300">Disclaimer:</strong> Past performance is not indicative of future results. Actual trading outcomes may differ.
            </p>
          </div>
        </div>
        */}

        {/* Key Performance Metrics - COMMENTED OUT
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="p-6 text-center">
            <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Best Month</div>
            <div className="text-3xl font-bold text-accent-orange">+8.5%</div>
            <div className="text-xs text-text-light dark:text-dark-text-light">January 2023</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Average Monthly</div>
            <div className="text-3xl font-bold text-dark-green dark:text-light-green">+3.3%</div>
            <div className="text-xs text-text-light dark:text-dark-text-light">Monthly avg. return (non-compound)</div>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">Positive Months</div>
            <div className="text-3xl font-bold text-light-green">{nonCompoundMetrics.strategy.positiveMonths}</div>
            <div className="text-xs text-text-light dark:text-dark-text-light">Months with Positive Returns</div>
          </Card>
        </div>
        */}

        {/* Strategy vs Benchmark Chart - COMMENTED OUT
        <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg mb-10 p-6">
          <h3 className="text-xl font-semibold mb-6 text-dark-green dark:text-light-green">
            Strategy vs. Market Benchmarks
          </h3>
          
          <div className="w-full rounded-lg mb-6 overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
            <BenchmarkComparisonChart metrics={metrics} />
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-gray-100 dark:border-gray-700">
                  <th className="text-left py-3 text-text-medium dark:text-dark-text-medium">Metric</th>
                  <th className="text-center py-3 text-text-medium dark:text-dark-text-medium">Our Strategy</th>
                  <th className="text-center py-3 text-text-medium dark:text-dark-text-medium">Bitcoin</th>
                  {isIndian ? (
                    <th className="text-center py-3 text-text-medium dark:text-dark-text-medium">NIFTY 50</th>
                  ) : (
                    <th className="text-center py-3 text-text-medium dark:text-dark-text-medium">S&P 500</th>
                  )}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-text-medium dark:text-dark-text-medium">Total Return</td>
                  <td className="py-3 text-center font-semibold text-dark-green dark:text-light-green">{metrics.strategy.totalReturn}</td>
                  <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.bitcoin.totalReturn}</td>
                  {isIndian ? (
                    <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.nifty50.totalReturn}</td>
                  ) : (
                    <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.sp500.totalReturn}</td>
                  )}
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-text-medium dark:text-dark-text-medium">Annualized Return</td>
                  <td className="py-3 text-center font-semibold text-dark-green dark:text-light-green">{metrics.strategy.annualizedReturn}</td>
                  <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.bitcoin.annualizedReturn}</td>
                  {isIndian ? (
                    <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.nifty50.annualizedReturn}</td>
                  ) : (
                    <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.sp500.annualizedReturn}</td>
                  )}
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-text-medium dark:text-dark-text-medium">Sharpe Ratio</td>
                  <td className="py-3 text-center font-semibold text-dark-green dark:text-light-green">{metrics.strategy.sharpeRatio}</td>
                  <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.bitcoin.sharpeRatio}</td>
                  {isIndian ? (
                    <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.nifty50.sharpeRatio}</td>
                  ) : (
                    <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.sp500.sharpeRatio}</td>
                  )}
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-text-medium dark:text-dark-text-medium">Max Drawdown</td>
                  <td className="py-3 text-center font-semibold text-dark-green dark:text-light-green">{metrics.strategy.maxDrawdown}</td>
                  <td className="py-3 text-center text-red-500">{metrics.bitcoin.maxDrawdown}</td>
                  {isIndian ? (
                    <td className="py-3 text-center text-orange-500">{metrics.nifty50.maxDrawdown}</td>
                  ) : (
                    <td className="py-3 text-center text-orange-500">{metrics.sp500.maxDrawdown}</td>
                  )}
                </tr>
                <tr>
                  <td className="py-3 text-text-medium dark:text-dark-text-medium">Positive Months</td>
                  <td className="py-3 text-center font-semibold text-dark-green dark:text-light-green">{metrics.strategy.positiveMonths}</td>
                  <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.bitcoin.positiveMonths}</td>
                  {isIndian ? (
                    <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.nifty50.positiveMonths}</td>
                  ) : (
                    <td className="py-3 text-center text-text-medium dark:text-dark-text-medium">{metrics.sp500.positiveMonths}</td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-dark-green/5 dark:bg-light-green/5 rounded-lg">
            <h4 className="font-semibold mb-2 text-dark-green dark:text-light-green">Key Insight</h4>
            {returnType === 'compound' ? (
              <p className="text-text-medium dark:text-dark-text-medium text-sm">
                While Bitcoin delivered strong returns, our strategy achieved even better performance with significantly reduced volatility. The most striking difference is in the maximum drawdown: <strong>{metrics.strategy.maxDrawdown}</strong> for our strategy versus <strong>{metrics.bitcoin.maxDrawdown}</strong> for Bitcoin. This means you can sleep better at night knowing your investment isn't experiencing the extreme ups and downs typical of cryptocurrency markets.
              </p>
            ) : (
              <p className="text-text-medium dark:text-dark-text-medium text-sm">
                Our strategy substantially outperforms the {benchmarkName} while maintaining much lower risk. The most notable advantage is in the maximum drawdown: <strong>{metrics.strategy.maxDrawdown}</strong> for our strategy versus <strong>{metrics[benchmark].maxDrawdown}</strong> for the {benchmarkName}. This means your portfolio experiences far less volatility than traditional equity investments while generating significantly higher returns.
              </p>
            )}
          </div>
        </div>
        */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-dark-green dark:text-light-green font-serif">
            How Our Strategy Works
        </h2>

        {/* Strategy Details */}
        <Card className="p-6">
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-4 text-dark-green dark:text-light-green">Technical Indicators</h4>
              <ul className="space-y-2 pl-5 list-disc text-text-medium dark:text-dark-text-medium">
                <li>Multi-timeframe trend analysis</li>
                <li>Volume profile and market structure</li>
                <li>Momentum and volatility filters</li>
                <li>Relative strength comparisons</li>
                <li>Support/resistance breakout detection</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-dark-green dark:text-light-green">Risk Management</h4>
              <ul className="space-y-2 pl-5 list-disc text-text-medium dark:text-dark-text-medium">
                <li>Dynamic position sizing</li>
                <li>Correlation-based portfolio construction</li>
                <li>Automated stop-loss implementation</li>
                <li>Profit-taking at key technical levels</li>
                <li>Asset rotation based on volatility</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-accent-orange/5 dark:bg-dark-card rounded-lg mt-2 border border-transparent dark:border-dark-accent">
            <h4 className="font-semibold mb-3 text-accent-orange dark:text-[#7ebebe]">Strategy Advantage: The 5-Minute Edge</h4>
            <p className="text-text-medium dark:text-dark-text-medium">
              Unlike most retail strategies that focus solely on entry points, our algorithm places equal emphasis on <strong>exit strategy</strong> and <strong>position sizing</strong>. This balanced approach is what enables us to capture upside while significantly reducing drawdowns.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium mt-2">
              The signals our algorithm generates only require <strong>5 minutes of your time each day</strong> to execute. These signals are not time-sensitive and can be implemented at your convenience during market hours.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PerformanceSection;