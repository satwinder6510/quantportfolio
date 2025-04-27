import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Success: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-dark-green to-light-green dark:from-dark-accent dark:to-dark-green p-4">
      <div className="max-w-lg w-full bg-white dark:bg-dark-card rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-light-green dark:bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-dark-green dark:text-light-green">Thank You!</h2>
        <p className="text-text-medium dark:text-dark-text-medium mb-6">
          Your form has been successfully submitted. We'll be in touch shortly with next steps to get you started with QuantPortfol.io.
        </p>
        <p className="text-text-medium dark:text-dark-text-medium mb-8">
          Meanwhile, check your email inbox for a confirmation message from our team.
        </p>
        <Link href="/">
          <Button className="px-6 py-3 bg-accent-orange hover:bg-orange-600 text-white rounded-lg shadow-md font-medium transition-colors duration-200">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;