import React from 'react';
import { Link } from 'wouter';

const CookiePolicy: React.FC = () => {
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
          
          <h1 className="text-3xl font-bold text-dark-green dark:text-light-green mb-6">Cookie Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-text-medium dark:text-dark-text-medium">
              Last Updated: April 28, 2025
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">1. Introduction</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              This Cookie Policy explains how QuantPortfol.io ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">2. What Are Cookies?</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              Cookies set by the website owner (in this case, QuantPortfol.io) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">3. Why Do We Use Cookies?</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">4. Types of Cookies We Use</h2>
            
            <h3 className="text-lg font-medium text-dark-green dark:text-light-green mt-6 mb-3">Essential Cookies</h3>
            <p className="text-text-medium dark:text-dark-text-medium">
              These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.
            </p>
            
            <h3 className="text-lg font-medium text-dark-green dark:text-light-green mt-6 mb-3">Performance and Functionality Cookies</h3>
            <p className="text-text-medium dark:text-dark-text-medium">
              These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
            </p>
            
            <h3 className="text-lg font-medium text-dark-green dark:text-light-green mt-6 mb-3">Analytics and Customization Cookies</h3>
            <p className="text-text-medium dark:text-dark-text-medium">
              These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
            </p>
            
            <h3 className="text-lg font-medium text-dark-green dark:text-light-green mt-6 mb-3">Advertising Cookies</h3>
            <p className="text-text-medium dark:text-dark-text-medium">
              These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
            </p>
            
            <h3 className="text-lg font-medium text-dark-green dark:text-light-green mt-6 mb-3">Social Media Cookies</h3>
            <p className="text-text-medium dark:text-dark-text-medium">
              These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">5. How Can You Control Cookies?</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">6. How Often Will We Update This Cookie Policy?</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">7. Where Can You Get Further Information?</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              If you have any questions about our use of cookies or other technologies, please email us at privacy@quantportfol.io.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;