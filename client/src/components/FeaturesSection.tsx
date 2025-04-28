import React from 'react';
import { Bot, LineChart, ShieldCheck, Sliders, Bell, Shuffle } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Bot className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'No More Endless Screen Time',
      description: 'Say goodbye to 8+ hours of staring at charts and constantly checking price movements.'
    },
    {
      icon: <LineChart className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'No More Emotional Trading',
      description: 'Eliminate fear and greed from your trading decisions with algorithm-driven signals.'
    },
    {
      icon: <ShieldCheck className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'No More Analysis Paralysis',
      description: 'Skip the confusion of conflicting indicators and complex chart patterns.'
    },
    {
      icon: <Sliders className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'Zero Learning Curve',
      description: 'Start trading immediately with our intuitive platform. No technical analysis skills needed.'
    },
    {
      icon: <Bell className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'Get Results, Not Complexity',
      description: 'Our algorithm has condensed expert trading knowledge into simple buy, sell, and hold signals.'
    },
    {
      icon: <Shuffle className="h-16 w-16 text-light-green dark:text-accent-orange" />,
      title: 'Trade in Just 5 Minutes Daily',
      description: 'Our system streamlines the complex trading process into a quick daily routine you can complete in minutes.'
    }
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-green dark:text-light-green">
            What You're <span className="text-light-green dark:text-accent-orange">No Longer Doing</span>
          </h2>
          <p className="text-text-medium dark:text-dark-text-medium max-w-2xl mx-auto">
            Focus on what matters, automate the rest
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
