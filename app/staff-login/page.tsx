'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, User } from 'lucide-react';

export default function StaffLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Placeholder authentication
    if (email && password) {
      // In a real application, this would authenticate against a backend
      console.log('Login attempted with:', { email, password });
      // Redirect to a placeholder dashboard
      router.push('/staff/dashboard');
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-bg flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-surface border border-border rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-surface" />
            </div>
            <h1 className="font-heading font-bold text-3xl text-text mb-2 leading-heading">
              Staff Login
            </h1>
            <p className="text-muted">
              Access the internal staff portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@teamworksafeoperations.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-surface font-semibold">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-primary hover:text-accent transition-colors">
              Forgot your password?
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted">
            <p>For staff use only. Unauthorized access is prohibited.</p>
            <p className="mt-2">
              Need help? Contact IT Support:{' '}
              <a href="mailto:support@teamworksafeoperations.com" className="text-primary hover:text-accent">
                support@teamworksafeoperations.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



