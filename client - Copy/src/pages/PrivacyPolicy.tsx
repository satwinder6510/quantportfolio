import React from 'react';
import { Link } from 'wouter';

const PrivacyPolicy: React.FC = () => {
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
          
          <h1 className="text-3xl font-bold text-dark-green dark:text-light-green mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-text-medium dark:text-dark-text-medium">
              Last Updated: April 28, 2025
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">1. Introduction</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Welcome to QuantPortfol.io ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-dark-green dark:text-light-green mt-6 mb-3">Personal Data</h3>
            <p className="text-text-medium dark:text-dark-text-medium">
              We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register on the site, subscribe to our newsletter, and in connection with other activities, services, features, or resources we make available. Users may be asked for, as appropriate, name, email address, and other relevant information.
            </p>
            
            <h3 className="text-lg font-medium text-dark-green dark:text-light-green mt-6 mb-3">Non-Personal Data</h3>
            <p className="text-text-medium dark:text-dark-text-medium">
              We may collect non-personal identification information about users whenever they interact with our site. Non-personal identification information may include the browser name, the type of computer or device, and technical information about users' connection to our site, such as the operating system, the Internet service providers utilized, and other similar information.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              We may use the information we collect from you in the following ways:
            </p>
            <ul className="list-disc pl-6 text-text-medium dark:text-dark-text-medium space-y-2 mt-2">
              <li>To personalize your experience and deliver content and product offerings relevant to your interests.</li>
              <li>To improve our website in order to better serve you.</li>
              <li>To allow us to better service you in responding to customer service requests.</li>
              <li>To administer promotions, surveys, or other site features.</li>
              <li>To send periodic emails regarding your account or other products and services.</li>
              <li>To process transactions and provide the services you have requested.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">4. Cookies</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Our website uses cookies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              We use cookies to understand and save user's preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is different, look at your browser's Help Menu to learn the correct way to modify your cookies.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">5. Third-Party Disclosure</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as described in this Privacy Policy. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">6. Data Security</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">7. Your Rights</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-text-medium dark:text-dark-text-medium space-y-2 mt-2">
              <li>The right to access and receive a copy of your personal data.</li>
              <li>The right to rectify or update your personal data.</li>
              <li>The right to delete your personal data.</li>
              <li>The right to restrict processing of your personal data.</li>
              <li>The right to object to processing of your personal data.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>
            <p className="text-text-medium dark:text-dark-text-medium mt-4">
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">9. Contact Us</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-text-medium dark:text-dark-text-medium mt-2">
              Email: privacy@quantportfol.io<br />
              Address: 123 Crypto Street, Blockchain City, BC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;