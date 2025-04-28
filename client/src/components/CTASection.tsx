import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
<<<<<<< HEAD
import { Textarea } from '@/components/ui/textarea';
=======
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
import { useToast } from '@/hooks/use-toast';

// Extend HTMLAttributes to support Netlify form attributes
declare module 'react' {
  interface HTMLAttributes<T> {
    'data-netlify'?: boolean | string;
    'data-netlify-honeypot'?: string;
  }
}

const CTASection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Safe logging function - logs no user data
  const logFormSubmission = () => {
<<<<<<< HEAD
    console.log('Interest registration form submitted at:', new Date().toISOString());
=======
    console.log('Form submission initiated at:', new Date().toISOString());
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
  };

  // Form submission handler for dev environments only
  const handleDevFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // If in development, show toast instead of submitting
    if (window.location.hostname === 'localhost' || window.location.hostname.includes('replit')) {
      logFormSubmission();
      setIsSubmitting(true);
      
      // Simulate form submission in dev
      setTimeout(() => {
        toast({
<<<<<<< HEAD
          title: "Interest Registered! (Development mode)",
          description: "In production, your message would be sent to our team.",
=======
          title: "Account created! (Development mode)",
          description: "In production, this form would be processed by Netlify Forms.",
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
          variant: "default",
        });
        
        setIsSubmitting(false);
        // Reset the form
        e.currentTarget.reset();
      }, 1000);
      
      return false;
    }
    
    // In production, let the default form submission happen
    logFormSubmission();
    return true;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-dark-green to-light-green dark:from-dark-accent dark:to-dark-green" id="get-started">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Crypto Trading?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Register your interest now to be among the first to access our trading signal platform when we launch.
          </p>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
<<<<<<< HEAD
            <h3 className="text-xl font-bold mb-6 text-dark-green dark:text-light-green">Register Your Interest</h3>
=======
            <h3 className="text-xl font-bold mb-6 text-dark-green dark:text-light-green">Create Your Account</h3>
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
            <form 
              className="space-y-4" 
              onSubmit={handleDevFormSubmit}
              method="POST" 
<<<<<<< HEAD
              name="interest"
=======
              name="signup"
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/success"
            >
              {/* Netlify form handling */}
<<<<<<< HEAD
              <input type="hidden" name="form-name" value="interest" />
=======
              <input type="hidden" name="form-name" value="signup" />
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
              <input type="hidden" name="form-source" value="website" />
              <input type="hidden" name="submission-time" value={new Date().toISOString()} />
              <div hidden>
                <input name="bot-field" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                    Full Name *
                  </Label>
                  <Input
<<<<<<< HEAD
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
=======
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
                    required
                    minLength={2}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                    Email Address *
                  </Label>
                  <Input
<<<<<<< HEAD
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
=======
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    minLength={2}
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                  />
                </div>
              </div>
<<<<<<< HEAD
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="telegram" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                    Telegram Username (Optional)
                  </Label>
                  <Input
                    id="telegram"
                    name="telegram"
                    type="text"
                    placeholder="@username"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                  />
                </div>
=======
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                />
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                  Message (Optional)
                </Label>
<<<<<<< HEAD
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your trading experience and what features you're most interested in..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white resize-none"
                />
=======
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  minLength={8}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$"
                  title="Password must contain at least 8 characters, including uppercase, lowercase, number, and special character"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                />
                <p className="text-gray-500 text-xs mt-1">
                  Password must be at least 8 characters and include uppercase, lowercase, 
                  number, and special character.
                </p>
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    type="checkbox" 
<<<<<<< HEAD
                    id="consent"
                    name="consent"
=======
                    id="terms"
                    name="terms"
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
                    required
                    className="h-4 w-4 rounded border-gray-300 text-dark-green focus:ring-light-green cursor-pointer"
                  />
                </div>
<<<<<<< HEAD
                <Label htmlFor="consent" className="ml-2 text-sm text-text-medium dark:text-dark-text-medium cursor-pointer">
                  I consent to being contacted about QuantPortfol.io services and updates
                </Label>
              </div>
              
=======
                <Label htmlFor="terms" className="ml-2 text-sm text-text-medium dark:text-dark-text-medium cursor-pointer">
                  I agree to the <a href="#" className="text-dark-green dark:text-light-green hover:underline">Terms of Service</a> and <a href="#" className="text-dark-green dark:text-light-green hover:underline">Privacy Policy</a>
                </Label>
              </div>
>>>>>>> 35adf6cb8843af1f293c1d82707040b5d8b09de6
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md font-medium transition-colors duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Register Interest'}
              </Button>
              
              <p className="text-gray-500 text-xs mt-2 text-center">
                * Required fields. We respect your privacy and will never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;