import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Is CryptoTrend Alpha a financial advisor?",
      answer: "No, CryptoTrend Alpha is not a registered investment advisor, broker-dealer, or financial consultant. We provide informational trading signals only. We do not offer personalized financial advice, portfolio management, or recommendations tailored to your specific circumstances. All trading decisions should be made at your own discretion, and we strongly recommend consulting with a qualified financial professional before making investment decisions."
    },
    {
      question: "How much time do I need to spend trading each day?",
      answer: "Just 5 minutes. Our algorithm generates clear buy, sell, and hold signals that you can execute at your convenience during the day. Unlike day trading that requires constant monitoring, our signals are not time-sensitive and can be implemented when it's convenient for you."
    },
    {
      question: "Do I need trading experience to use CryptoTrend Alpha?",
      answer: "No trading experience is necessary. Our platform is designed for beginners and experienced traders alike. The signals are simple to follow, and our system handles all the complex technical analysis behind the scenes."
    },
    {
      question: "How does the performance-based pricing work?",
      answer: "We charge a modest $15 monthly subscription plus a 20% performance fee on profits. This aligns our incentives with yours—we only earn more when you earn more. If there are no profits in a month, you only pay the base subscription fee."
    },
    {
      question: "What exchanges are supported?",
      answer: "CryptoTrend Alpha supports all major cryptocurrency exchanges, including Binance, Coinbase Pro, Kraken, and others. You can connect your preferred exchange through our secure API integration that uses read-only permissions for maximum security."
    },
    {
      question: "How secure is my account and trading data?",
      answer: "Security is our top priority. We use industry-standard encryption and only require read-only API access to your exchange accounts. This means we can never withdraw or transfer your funds. Your personal information is protected with bank-level security measures."
    },
    {
      question: "What is the historical performance of the trading strategy?",
      answer: "Our strategy has delivered a 610.68% total return over 5 years compared to Bitcoin's 533.82%. More importantly, it achieved this with significantly lower risk, with a maximum drawdown of only 18.88% compared to Bitcoin's 86.24%. Past performance doesn't guarantee future results, but our algorithm is continuously optimized."
    },
    {
      question: "Can I customize the trading strategy to my risk preferences?",
      answer: "Yes, the platform allows you to adjust risk parameters based on your personal risk tolerance. You can choose more conservative or aggressive settings while still benefiting from our core algorithm."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up for our 14-day trial, connect your preferred exchange through our secure API integration, and you'll start receiving trading signals immediately. The whole setup process takes less than 10 minutes."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-green dark:text-light-green">
            Frequently <span className="text-light-green dark:text-accent-orange">Asked Questions</span>
          </h2>
          <p className="text-text-medium dark:text-dark-text-medium max-w-2xl mx-auto">
            Get answers to the most common questions about CryptoTrend Alpha and start your journey to effortless crypto trading.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-dark-accent text-left font-medium text-dark-green dark:text-light-green text-lg flex justify-between items-center">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-text-medium dark:text-dark-text-medium">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-text-medium dark:text-dark-text-medium mb-4">
            Don't see your question here?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-light-green dark:text-accent-orange hover:text-dark-green dark:hover:text-light-green transition-colors"
          >
            Contact us
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;