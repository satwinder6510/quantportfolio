import React from 'react';
import { Bot, LineChart, ShieldCheck, Sliders, Bell, Shuffle } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Bot className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'AI-Powered Trading',
      description: 'Our advanced algorithms analyze market patterns and execute trades with precision, optimizing for maximum returns.'
    },
    {
      icon: <LineChart className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'Real-time Analytics',
      description: 'Monitor your portfolio performance with comprehensive dashboards and real-time market data.'
    },
    {
      icon: <ShieldCheck className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'Enterprise Security',
      description: 'Your assets are protected with bank-level encryption, cold storage, and multi-factor authentication.'
    },
    {
      icon: <Sliders className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'Customizable Strategies',
      description: 'Choose from pre-built strategies or create your own based on risk tolerance and investment goals.'
    },
    {
      icon: <Bell className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'Smart Alerts',
      description: 'Get notified about market opportunities and critical portfolio changes via email, SMS, or push notifications.'
    },
    {
      icon: <Shuffle className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'Multi-Exchange Support',
      description: 'Trade across multiple exchanges from a single interface, maximizing opportunities and minimizing risks.'
    }
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-green dark:text-light-green">
            Powerful <span className="text-light-green dark:text-accent-orange">Features</span>
          </h2>
          <p className="text-text-medium dark:text-dark-text-medium max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with user-friendly design to provide you with the most effective crypto trading experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-dark-green/10 to-light-green/10 dark:from-dark-green/20 dark:to-light-green/20 flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-dark-green dark:text-light-green">{feature.title}</h3>
                <p className="text-text-medium dark:text-dark-text-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
