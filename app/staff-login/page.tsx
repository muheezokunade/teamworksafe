'use client';

import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function StaffLoginPage() {
  useEffect(() => {
    // Redirect to Zoho Mail login page
    window.location.href = 'https://mail.zoho.com';
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
        <h1 className="font-heading font-bold text-2xl text-text mb-2">
          Redirecting to Zoho Mail...
        </h1>
        <p className="text-muted">
          If you are not redirected automatically,{' '}
          <a 
            href="https://mail.zoho.com" 
            className="text-primary hover:text-accent underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}



