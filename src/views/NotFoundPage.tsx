import React from 'react';
import { Home, HelpCircle } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="text-center max-w-md space-y-6 animate-fadeIn">
        <div className="w-20 h-20 bg-coral-50 text-coral-bright rounded-3xl flex items-center justify-center mx-auto shadow-sm">
          <span className="font-heading font-extrabold text-3xl">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            This page may have moved, been renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button to="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button to="/faq" variant="outline" size="md" icon={<HelpCircle className="w-4 h-4" />}>
            Visit FAQ
          </Button>
        </div>
      </div>
    </div>
  );
};
