import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Create Account',
      description: 'Sign up in minutes with your email address and secure your account with two-factor authentication.'
    },
    {
      number: '2',
      title: 'Connect Exchange',
      description: 'Link your preferred crypto exchanges through secure API connections with read-only permissions.'
    },
    {
      number: '3',
      title: 'Receive Daily Signals',
      description: 'Get clear buy/sell signals delivered to your dashboard each day based on our proven algorithms.'
    },
    {
      number: '4',
      title: 'Execute Trades',
      description: 'Execute trades directly in your exchange at your convenience. Not time-sensitive and only takes 5 minutes daily.'
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
