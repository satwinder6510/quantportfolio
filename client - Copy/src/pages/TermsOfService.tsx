import React from 'react';
import { Link } from 'wouter';

const TermsOfService: React.FC = () => {
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
          
          <h1 className="text-3xl font-bold text-dark-green dark:text-light-green mb-6">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-text-medium dark:text-dark-text-medium">
              Last Updated: April 28, 2025
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">1. Introduction</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Welcome to QuantPortfol.io. These Terms of Service ("Terms") govern your access to and use of the QuantPortfol.io website and services (the "Service"). Please read these Terms carefully before using the Service.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 text-text-medium dark:text-dark-text-medium space-y-2 mt-2">
              <li><strong>"Service"</strong> refers to the QuantPortfol.io website and all services provided through it.</li>
              <li><strong>"User"</strong> refers to the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              <li><strong>"Company"</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to QuantPortfol.io.</li>
              <li><strong>"Content"</strong> refers to information such as data, text, documents, images, photographs, graphics, software, applications, designs, features, and other materials that are available on the Service.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">3. Account Registration</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              To access certain features of the Service, you may be required to register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              The Service and its original content, features, and functionality are and will remain the exclusive property of QuantPortfol.io and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of QuantPortfol.io.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">5. User Conduct</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              By using the Service, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-text-medium dark:text-dark-text-medium space-y-2 mt-2">
              <li>Use the Service in any way that violates any applicable national or international law or regulation.</li>
              <li>Use the Service to impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
              <li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm the Company or users of the Service or expose them to liability.</li>
              <li>Use the Service to transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>Use the Service in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Service.</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service.</li>
              <li>Use any device, software, or routine that interferes with the proper working of the Service.</li>
              <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
              <li>Attack the Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">6. Risk Warning</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              Cryptocurrency trading and investing involve substantial risk of loss and are not suitable for every investor. The use of the Service and the information provided should not be considered financial advice, investment advice, or otherwise. Past performance is not indicative of future results.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              The content of the Service is for information purposes only and is not intended as a recommendation, offer, or solicitation for the purchase or sale of any cryptocurrency or other financial instruments. You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decision.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              To the maximum extent permitted by applicable law, in no event shall the Company, its affiliates, officers, directors, employees, agents, suppliers, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses, that result from the use of, or inability to use, the Service.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              This limitation of liability shall apply to all claims, whether based on warranty, contract, tort, or any other legal theory, and whether or not the Company has been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, either express or implied. The Company expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              The Company does not warrant that the Service will function uninterrupted, secure, or available at any particular time or location, or that any errors or defects will be corrected. The Company does not warrant the accuracy, reliability, completeness, or timeliness of the information presented on or through the Service.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">9. Termination</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">10. Governing Law</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">11. Changes to These Terms</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-text-medium dark:text-dark-text-medium">
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
            
            <h2 className="text-xl font-semibold text-dark-green dark:text-light-green mt-8 mb-4">12. Contact Us</h2>
            <p className="text-text-medium dark:text-dark-text-medium">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-text-medium dark:text-dark-text-medium mt-2">
              Email: legal@quantportfol.io<br />
              Address: 123 Crypto Street, Blockchain City, BC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;