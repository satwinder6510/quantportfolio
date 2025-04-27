import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

// Extend HTMLAttributes to support Netlify form attributes
declare module 'react' {
  interface HTMLAttributes<T> {
    'data-netlify'?: boolean | string;
    'data-netlify-honeypot'?: string;
  }
}

// Define validation schema
const signupSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  terms: z.boolean()
});

// Define the form data type
interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

const CTASection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      terms: false,
    },
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsError, setTermsError] = useState<string | null>(null);
  const { toast } = useToast();

  const onSubmit = async (data: SignupFormData) => {
    // Check terms agreement
    if (!data.terms) {
      setTermsError('You must agree to the terms and conditions');
      return;
    }
    
    setTermsError(null);
    setIsSubmitting(true);
    
    // Log only that form was submitted (no personal data or passwords)
    console.log('Form submission initiated');
    
    // In development environment (localhost or Replit), we'll show a toast notification
    // instead of actually submitting the form
    if (window.location.hostname === 'localhost' || window.location.hostname.includes('replit')) {
      try {
        // Simulate form submission in development
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
          title: "Account created! (Development mode)",
          description: "In production, this form would be processed by Netlify Forms.",
          variant: "default",
        });
        
        reset();
        setIsSubmitting(false);
      } catch (error) {
        console.error('Error in development form simulation:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
      
      // Stop here in development mode - don't try to submit the form
      return;
    }
    
    // In production, we let the native form submission happen
    // Netlify will intercept the form submission automatically
    // The page will redirect to /success as specified in the form's action attribute
    
    // Note: We don't need to manually handle form submission or call preventDefault()
    // as Netlify Forms works with the native HTML form submission
  };

  return (
    <section className="py-20 bg-gradient-to-r from-dark-green to-light-green dark:from-dark-accent dark:to-dark-green" id="get-started">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Crypto Trading?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already leveraging our AI to navigate the crypto markets with confidence.
          </p>
          
          {/* Sign Up Form */}
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-dark-green dark:text-light-green">Create Your Account</h3>
            <form 
              className="space-y-4" 
              onSubmit={handleSubmit(onSubmit)}
              method="POST" 
              name="signup"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/success"
            >
              {/* Netlify form handling */}
              <input type="hidden" name="form-name" value="signup" />
              <div hidden>
                <input name="bot-field" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                    {...register('lastName')}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-text-medium dark:text-dark-text-medium mb-1">
                  Create Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-green dark:focus:ring-accent-orange dark:bg-dark-accent dark:text-white"
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    type="checkbox" 
                    id="terms"
                    {...register('terms')}
                    className="h-4 w-4 rounded border-gray-300 text-dark-green focus:ring-light-green cursor-pointer"
                  />
                </div>
                <Label htmlFor="terms" className="ml-2 text-sm text-text-medium dark:text-dark-text-medium cursor-pointer">
                  I agree to the <a href="#" className="text-dark-green dark:text-light-green hover:underline">Terms of Service</a> and <a href="#" className="text-dark-green dark:text-light-green hover:underline">Privacy Policy</a>
                </Label>
              </div>
              {termsError && (
                <p className="text-red-500 text-xs mt-1">{termsError}</p>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md font-medium transition-colors duration-200"
              >
                {isSubmitting ? 'Creating Account...' : 'Create Free Account'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
