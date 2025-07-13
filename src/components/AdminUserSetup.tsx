import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Shield, User, Key } from 'lucide-react';

export const AdminUserSetup: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'setup' | 'complete'>('setup');
  const [retryCountdown, setRetryCountdown] = useState(0);
  const { toast } = useToast();

  // Handle retry countdown
  React.useEffect(() => {
    if (retryCountdown > 0) {
      const timer = setTimeout(() => {
        setRetryCountdown(retryCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [retryCountdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (formData.password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }

      // Create user in Supabase Auth with email redirect
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin/setup`,
          data: {
            username: formData.username,
            role: 'admin'
          }
        }
      });

      if (authError) {
        // Handle rate limiting specifically
        if (authError.message?.includes('email_send_rate_limit') || 
            authError.message?.includes('security purposes') ||
            authError.message?.includes('rate_limit')) {
          const match = authError.message.match(/(\d+)\s*seconds?/);
          const waitTime = match ? parseInt(match[1]) : 60;
          setRetryCountdown(waitTime);
          toast({
            title: "Rate Limited",
            description: `Please wait ${waitTime} seconds before trying again. This is a security measure to prevent spam.`,
            variant: "destructive",
          });
          return;
        }
        throw authError;
      }

      if (authData.user) {
        // Create admin user record
        const { error: adminError } = await supabase
          .from('admin_users')
          .insert({
            user_id: authData.user.id,
            username: formData.username,
            password_hash: 'managed_by_auth', // Supabase handles password hashing
            role: 'admin'
          });

        if (adminError) throw adminError;

        setStep('complete');
        toast({
          title: 'Admin Account Created',
          description: 'Your admin account has been successfully created.'
        });
      }
    } catch (error: any) {
      console.error('Error creating admin:', error);
      
      let errorMessage = "Failed to create admin account";
      
      if (error.message?.includes('email_send_rate_limit') || error.message?.includes('rate_limit')) {
        errorMessage = "Too many email requests. Please wait before trying again.";
      } else if (error.message?.includes('User already registered')) {
        errorMessage = "An account with this email already exists. Try logging in instead.";
      } else if (error.message?.includes('violates row-level security')) {
        errorMessage = "Database permissions error. Please contact support.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: 'Setup Failed',
        description: errorMessage,
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 'complete') {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <CardTitle>Setup Complete</CardTitle>
          <CardDescription>
            Your admin account has been created successfully. You can now log in to access the admin dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => window.location.href = '/admin/login'} 
            className="w-full"
          >
            Go to Admin Login
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <User className="w-6 h-6 text-primary" />
        </div>
        <CardTitle>Create Admin Account</CardTitle>
        <CardDescription>
          Set up your administrator account to manage the site
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6">
          <Key className="h-4 w-4" />
          <AlertDescription>
            This will create the first admin account for your site. Keep these credentials secure.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              required
              minLength={8}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
              required
              minLength={8}
              disabled={isLoading}
            />
          </div>

          {retryCountdown > 0 && (
            <div className="text-center text-sm text-muted-foreground mb-4 p-3 bg-muted rounded-md">
              🕐 Please wait {retryCountdown} seconds before trying again
              <div className="text-xs mt-1">This prevents spam and protects our servers</div>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading || retryCountdown > 0}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </>
            ) : retryCountdown > 0 ? (
              `Wait ${retryCountdown}s`
            ) : (
              'Create Admin Account'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};