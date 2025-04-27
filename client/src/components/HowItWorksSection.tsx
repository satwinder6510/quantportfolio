import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Create Your Account',
      description: 'Sign up in minutes with your email address. Secure your account with two-factor authentication to protect your data.'
    },
    {
      number: '2',
      title: 'Connect Your Exchange (Optional)',
      description: 'Securely link your preferred crypto exchanges through read-only API connections if you want to easily monitor your portfolios. CryptoTrend Alpha never has permission to trade on your behalf or withdraw funds.'
    },
    {
      number: '3',
      title: 'Review Daily Trading Signals',
      description: 'Each day, receive clear buy/sell signal recommendations on your dashboard. These signals are generated using historical analysis of price trends, market structure, momentum, and volatility. All trading decisions are made by you, based on your individual judgment and risk tolerance.'
    },
    {
      number: '4',
      title: 'Execute Your Trades',
      description: 'Choose whether and when to act on the provided signals via your own exchange account. There is no time pressure — signals remain valid throughout the trading day.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-accent transition-colors duration-300" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-green dark:text-light-green">
            How <span className="text-light-green dark:text-accent-orange">It Works</span>
          </h2>
          <p className="text-text-medium dark:text-dark-text-medium max-w-2xl mx-auto">
            Get started with CryptoTrend Alpha in just a few simple steps. Our algorithm delivers daily signals that only take <span className="font-bold text-dark-green dark:text-light-green">5 minutes</span> of your time to execute.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-dark-card rounded-xl shadow-md p-6 relative z-10">
                  <div className="w-16 h-16 bg-accent-orange flex items-center justify-center rounded-full text-white text-2xl font-bold mb-6 mx-auto lg:mx-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark-green dark:text-light-green text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-text-medium dark:text-dark-text-medium text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-3 text-dark-green dark:text-light-green text-center">Typical daily routine:</h3>
              <p className="text-text-medium dark:text-dark-text-medium mb-4 text-center">
                ✅ Log in → ✅ Check today's signals → ✅ Decide and execute in ~5 minutes.
              </p>
              
              <div className="mt-8 p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h4 className="text-lg font-semibold mb-2 text-dark-green dark:text-light-green text-center md:text-left">Important Notice:</h4>
                <p className="text-sm text-text-medium dark:text-dark-text-medium">
                  CryptoTrend Alpha provides informational trading signals only.
                  We do not offer financial advice, portfolio management, or brokerage services.
                  Trading cryptocurrencies involves substantial risk of loss and may not be suitable for every investor.
                  Past performance is not indicative of future results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
