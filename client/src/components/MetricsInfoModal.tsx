import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

type MetricType = 'sharpeRatio' | 'profitFactor' | 'maxDrawdown' | 'winLossRatio';

interface MetricsInfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  metricType: MetricType;
}

const MetricsInfoModal: React.FC<MetricsInfoModalProps> = ({ 
  open, 
  onOpenChange, 
  metricType 
}) => {
  const getMetricInfo = (type: MetricType) => {
    switch(type) {
      case 'sharpeRatio':
        return {
          title: 'Sharpe Ratio Explained',
          description: 'The Sharpe ratio measures the performance of an investment compared to a risk-free asset, after adjusting for its risk.',
          content: (
            <>
              <p className="mb-4">
                A higher Sharpe ratio indicates better risk-adjusted returns. It helps you understand how much return you&apos;re getting for the level of risk you&apos;re taking.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-4">
                <h4 className="font-medium mb-2 text-dark-green dark:text-light-green">How to interpret the Sharpe Ratio:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><span className="font-medium">Below 1.0:</span> Poor risk-adjusted returns</li>
                  <li><span className="font-medium">1.0 - 1.5:</span> Acceptable</li>
                  <li><span className="font-medium">1.5 - 2.0:</span> Good</li>
                  <li><span className="font-medium">2.0 - 2.5:</span> Very good</li>
                  <li><span className="font-medium">Above 2.5:</span> Excellent</li>
                </ul>
              </div>
              <p className="text-sm text-text-medium dark:text-dark-text-medium mb-4">
                Our strategy&apos;s Sharpe ratio of 2.29 indicates excellent risk-adjusted returns compared to Bitcoin (0.73) and traditional markets.
              </p>
              
              {/* FAQs */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                <h4 className="font-medium text-dark-green dark:text-light-green mb-3">Frequently Asked Questions</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">Why is the Sharpe ratio important for crypto trading?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Cryptocurrencies are highly volatile, making risk-adjusted returns critical. The Sharpe ratio helps you identify strategies that deliver returns proportionate to their risk, preventing you from taking excessive risk for limited gains.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">Can a strategy with lower returns have a better Sharpe ratio?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Yes! A strategy earning 15% with minimal volatility could have a higher Sharpe ratio than one earning 30% with extreme ups and downs. This is why focusing only on returns can be misleading.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">How is the Sharpe ratio calculated?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      It's calculated by taking the strategy's return minus the risk-free rate (like Treasury yields), then dividing by the standard deviation of the strategy's returns (its volatility).
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        };
      case 'profitFactor':
        return {
          title: 'Profit Factor Explained',
          description: 'Profit factor is a measure of trading strategy profitability, calculated by dividing gross profits by gross losses.',
          content: (
            <>
              <p className="mb-4">
                A profit factor greater than 1.0 means the strategy is profitable. The higher the number, the more profitable the strategy is relative to its losses.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-4">
                <h4 className="font-medium mb-2 text-dark-green dark:text-light-green">How to interpret Profit Factor:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><span className="font-medium">1.0:</span> Break-even point</li>
                  <li><span className="font-medium">1.0 - 1.5:</span> Marginally profitable</li>
                  <li><span className="font-medium">1.5 - 2.0:</span> Good profitability</li>
                  <li><span className="font-medium">2.0 - 3.0:</span> Excellent profitability</li>
                  <li><span className="font-medium">Above 3.0:</span> Exceptional profitability</li>
                </ul>
              </div>
              <p className="text-sm text-text-medium dark:text-dark-text-medium mb-4">
                Our strategy&apos;s profit factor of 2.73-3.12 indicates excellent to exceptional profitability, meaning for every $1 lost, the strategy generates about $3 in profits.
              </p>
              
              {/* FAQs */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                <h4 className="font-medium text-dark-green dark:text-light-green mb-3">Frequently Asked Questions</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">Why is profit factor more useful than just looking at win rate?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      A strategy could win 90% of the time but lose so much on the 10% of losing trades that it's still unprofitable. Profit factor accounts for both the frequency and magnitude of wins versus losses.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">How stable is profit factor over time?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Profit factor can vary across different market conditions. Our strategy maintains a profit factor above 2.0 across bull markets, bear markets, and sideways conditions, demonstrating its robustness.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">Is a higher profit factor always better?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      While higher is generally better, extremely high profit factors (above 5) over short periods may indicate overoptimization or luck rather than a sustainable edge. Consistency is key - our strategy&apos;s profit factor has remained stable since 2021.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        };
      case 'maxDrawdown':
        return {
          title: 'Maximum Drawdown Explained',
          description: 'Maximum drawdown measures the largest percentage drop from a peak to a subsequent trough in an investment\'s value.',
          content: (
            <>
              <p className="mb-4">
                It represents the worst-case scenario for an investment during a specific time period and is a key indicator of downside risk.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-4">
                <h4 className="font-medium mb-2 text-dark-green dark:text-light-green">Why Maximum Drawdown Matters:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Helps understand the potential losses you might face</li>
                  <li>Indicates how much volatility you need to withstand</li>
                  <li>Smaller drawdowns allow for faster recovery</li>
                  <li>Critical for assessing psychological comfort with a strategy</li>
                </ul>
              </div>
              <p className="text-sm text-text-medium dark:text-dark-text-medium mb-4">
                Our strategy&apos;s maximum drawdown of 8.09-18.88% is significantly lower than Bitcoin&apos;s typical drawdowns of 70-80%, making it more manageable psychologically and financially.
              </p>
              
              {/* FAQs */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                <h4 className="font-medium text-dark-green dark:text-light-green mb-3">Frequently Asked Questions</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">How do you handle drawdowns in your strategy?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Our strategy has built-in risk management that reduces position sizes during high volatility periods and uses algorithmic stop-losses to limit drawdowns. We also avoid overleveraging, which is a common cause of catastrophic losses in crypto.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">Is it normal for a strategy to have drawdowns?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Yes, even the best trading strategies experience drawdowns. What matters is the size and duration of drawdowns relative to gains. Our strategy recovers from drawdowns relatively quickly, typically within 1-2 months.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">How often do maximum drawdowns occur?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Our historical worst drawdown occurred during the May 2021 crypto crash. Most of our drawdowns are much smaller, typically in the 3-5% range. We have experienced only two drawdowns exceeding 10% since 2021.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        };
      case 'winLossRatio':
        return {
          title: 'Win/Loss Ratio Explained',
          description: 'The Win/Loss Ratio measures the number of winning trades divided by the number of losing trades.',
          content: (
            <>
              <p className="mb-4">
                This metric helps you understand the consistency and reliability of a trading strategy regardless of the size of individual gains or losses.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-4">
                <h4 className="font-medium mb-2 text-dark-green dark:text-light-green">How to interpret Win/Loss Ratio:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><span className="font-medium">1.0:</span> Equal number of winning and losing trades</li>
                  <li><span className="font-medium">1.0 - 2.0:</span> Good trading consistency</li>
                  <li><span className="font-medium">2.0 - 3.0:</span> Very good consistency</li>
                  <li><span className="font-medium">Above 3.0:</span> Excellent trading consistency</li>
                </ul>
              </div>
              <p className="text-sm text-text-medium dark:text-dark-text-medium mb-4">
                Our strategy&apos;s Win/Loss ratio of 3.54 means it generates more than 3 winning trades for every losing trade, indicating exceptional consistency in capturing market opportunities.
              </p>
              
              {/* FAQs */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                <h4 className="font-medium text-dark-green dark:text-light-green mb-3">Frequently Asked Questions</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">Does a high Win/Loss ratio guarantee profitability?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Not necessarily. If your average losing trade is much larger than your average winning trade, you could still lose money overall. Our strategy combines a high Win/Loss ratio with strong risk management to ensure profitability.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">How does your Win/Loss ratio compare to professional traders?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Many successful professional traders operate with Win/Loss ratios between 1.5 and 2.5. Our ratio of 3.54 is significantly higher than average, placing our strategy in the top tier of trading performance.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">Does the Win/Loss ratio change in different market conditions?</h5>
                    <p className="text-sm text-text-medium dark:text-dark-text-medium">
                      Yes, our Win/Loss ratio tends to be highest during trending markets (either bullish or bearish) and slightly lower during sideways or highly volatile conditions. However, it has remained above 2.5 in all market conditions since inception.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        };
      default:
        return {
          title: 'Metric Information',
          description: 'Details about this performance metric',
          content: <p>Information about this metric is not available.</p>
        };
    }
  };

  const metricInfo = getMetricInfo(metricType);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-dark-green dark:text-light-green">{metricInfo.title}</DialogTitle>
          <DialogDescription>
            {metricInfo.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2">
          {metricInfo.content}
        </div>
        <DialogClose asChild>
          <Button variant="outline" className="absolute right-4 top-4">
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default MetricsInfoModal;