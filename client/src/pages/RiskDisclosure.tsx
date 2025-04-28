import React from 'react';
import { Link } from 'wouter';

const RiskDisclosure: React.FC = () => {
  return (
    <div className="bg-cream dark:bg-dark-bg min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-card rounded-xl shadow-md p-8">
          <Link href="/" className="text-light-green dark:text-light-green hover:text-dark-green dark:hover:text-accent-orange transition-colors duration-200 inline-flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-dark-green dark:text-light-green mb-6">Risk Disclosure</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-text-medium dark:text-dark-text-medium">
              Last Updated: April 28, 2025
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">Introduction</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              This Risk Disclosure is provided to users of QuantPortfol.io ("we," "our," or "us") to inform you of the risks associated with cryptocurrency trading and investing. It is important that you carefully read and understand this Risk Disclosure before using our services.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">No Financial Advice</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              The information provided on QuantPortfol.io is for informational purposes only and should not be considered financial advice, investment advice, trading advice, or any other sort of advice. Our content, tools, analysis, and signals are not personalized to your specific financial situation or investment objectives.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              Before making any investment decisions, you should conduct your own research, consult with a licensed financial advisor, and/or tax professional to determine the suitability of any investment.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">Market Risks</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor. The value of cryptocurrencies can fluctuate dramatically, even in a single day. You should only invest funds that you are willing to lose.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              Specific risks related to cryptocurrency markets include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-text-medium dark:text-dark-text-medium space-y-2 mt-2">
              <li><strong>Volatility Risk:</strong> Cryptocurrency prices can be highly volatile and can increase or decrease in value significantly in a short period. This volatility can lead to substantial losses.</li>
              <li><strong>Liquidity Risk:</strong> Some cryptocurrencies may not be readily convertible to fiat currency or other cryptocurrencies due to limited trading volume.</li>
              <li><strong>Market Manipulation Risk:</strong> Cryptocurrency markets can be subject to manipulation by large holders or coordinated groups.</li>
              <li><strong>Regulatory Risk:</strong> Changes in regulations or legal decisions could impact the value and legal status of cryptocurrencies.</li>
              <li><strong>Technology Risk:</strong> Technological advances or failures, security breaches, or infrastructure vulnerabilities could impact cryptocurrency networks.</li>
              <li><strong>Systemic Risk:</strong> Issues affecting major cryptocurrencies or exchanges could create domino effects throughout the market.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">Trading Signal Risks</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Our platform provides algorithmic trading signals based on historical data and technical analysis. While we strive to provide accurate and reliable signals, there are inherent risks associated with relying on such signals:
            </p>
            <ul className="list-disc pl-6 text-text-medium dark:text-dark-text-medium space-y-2 mt-2">
              <li><strong>Past Performance:</strong> Past performance is not indicative of future results. Historical backtesting and performance data may not accurately predict future market conditions.</li>
              <li><strong>Algorithm Limitations:</strong> Trading algorithms have limitations and may not perform as expected in all market conditions.</li>
              <li><strong>Signal Latency:</strong> Delays in receiving or executing signals can impact trading outcomes.</li>
              <li><strong>Market Conditions:</strong> Sudden or extreme market conditions may render signals less effective or potentially lead to losses.</li>
              <li><strong>Execution Risk:</strong> Execution of trades based on signals depends on various factors, including exchange availability, liquidity, and user action.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">Backtesting Limitations</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Backtested performance results have inherent limitations, including:
            </p>
            <ul className="list-disc pl-6 text-text-medium dark:text-dark-text-medium space-y-2 mt-2">
              <li>Results do not represent actual trading and may not reflect the impact of market factors such as lack of liquidity.</li>
              <li>Backtesting is designed with the benefit of hindsight and does not account for financial risk in actual trading.</li>
              <li>Hypothetical results are prepared with the use of rules-based strategies. Markets can and do change, sometimes quickly and dramatically.</li>
              <li>The backtested period may not include periods of market stress or disruption that could impact performance.</li>
              <li>The software and hardware used in backtesting may be different from those used in real-time trading.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">Financial Risk</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              You should never invest more than you can afford to lose. Cryptocurrency trading can result in partial or total loss of your investment. Any opinions, news, research, analyses, prices, or other information contained on our platform is provided as general market commentary and does not constitute investment advice.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">Exchange and Third-Party Risks</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              QuantPortfol.io may integrate with or refer users to third-party exchanges or services. We are not responsible for the operations, security, or reliability of these third parties. Users should conduct their own due diligence on any exchange or service before using them.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              Exchanges may be subject to hacks, insolvency, operational issues, or regulatory actions that could affect your ability to access your funds or execute trades based on our signals.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">User Responsibility</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Users are solely responsible for:
            </p>
            <ul className="list-disc pl-6 text-text-medium dark:text-dark-text-medium space-y-2 mt-2">
              <li>Conducting their own research and due diligence before making any investment decisions.</li>
              <li>Understanding the risks associated with cryptocurrency trading.</li>
              <li>Maintaining the security of their exchange accounts and wallets.</li>
              <li>Complying with all applicable laws and regulations in their jurisdiction.</li>
              <li>Managing their own tax obligations related to cryptocurrency trading.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">Conclusion</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              By using our service, you acknowledge that you have read and understood this Risk Disclosure and accept the risks associated with cryptocurrency trading and our service. If you do not agree with or accept these risks, you should not use our service.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              This Risk Disclosure is not exhaustive and does not disclose all risks associated with cryptocurrency trading. We encourage users to continually educate themselves about the markets and seek professional advice when necessary.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">Contact Us</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              If you have any questions about this Risk Disclosure, please contact us at:
            </p>
            <p className="text-text-medium dark:text-dark-text-medium mt-2">
              Email: risk@quantportfol.io<br />
              Address: 123 Crypto Street, Blockchain City, BC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;