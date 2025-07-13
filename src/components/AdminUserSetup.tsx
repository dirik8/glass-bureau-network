import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Shield, User, Key, AlertTriangle, Mail, Database } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const AdminUserSetup: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'setup' | 'complete' | 'manual'>('setup');
  const [retryCountdown, setRetryCountdown] = useState(0);
  const [errorDetails, setErrorDetails] = useState<{
    type: 'rate_limit' | 'auth_error' | 'db_error' | 'general';
    message: string;
    retryAfter?: number;
    suggestions?: string[];
  } | null>(null);
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
    setErrorDetails(null);

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
        // Enhanced rate limiting handling
        if (authError.message?.includes('email_send_rate_limit') || 
            authError.message?.includes('security purposes') ||
            authError.message?.includes('rate_limit')) {
          const match = authError.message.match(/(\d+)\s*seconds?/);
          const waitTime = match ? parseInt(match[1]) : 60;
          setRetryCountdown(waitTime);
          setErrorDetails({
            type: 'rate_limit',
            message: `Email rate limit reached. Please wait ${waitTime} seconds.`,
            retryAfter: waitTime,
            suggestions: [
              'Check your email for a confirmation link that may have already been sent',
              'Try using a different email address',
              'Wait for the countdown to finish and try again',
              'Consider using the manual setup option below'
            ]
          });
          return;
        }
        
        // Handle other auth errors
        if (authError.message?.includes('User already registered')) {
          setErrorDetails({
            type: 'auth_error',
            message: 'An account with this email already exists',
            suggestions: [
              'Try logging in with this email instead',
              'Use a different email address',
              'Reset your password if you forgot it'
            ]
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

        if (adminError) {
          setErrorDetails({
            type: 'db_error',
            message: 'Failed to create admin record in database',
            suggestions: [
              'Check if the database is properly configured',
              'Verify RLS policies are set up correctly',
              'Try the manual setup option below'
            ]
          });
          throw adminError;
        }

        setStep('complete');
        toast({
          title: 'Admin Account Created',
          description: 'Your admin account has been successfully created. Check your email for confirmation.'
        });
      }
    } catch (error: any) {
      console.error('Error creating admin:', error);
      
      if (!errorDetails) {
        setErrorDetails({
          type: 'general',
          message: error.message || 'Failed to create admin account',
          suggestions: [
            'Check your internet connection',
            'Verify all form fields are filled correctly',
            'Try refreshing the page and trying again'
          ]
        });
      }
      
      toast({
        title: 'Setup Failed',
        description: errorDetails?.message || error.message || 'Unknown error occurred',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualSetup = () => {
    setStep('manual');
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
            Your admin account has been created successfully. Check your email for confirmation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <Mail className="h-4 w-4" />
            <AlertDescription>
              A confirmation email has been sent. Click the link in your email to verify your account before logging in.
            </AlertDescription>
          </Alert>
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

  if (step === 'manual') {
    return (
      <Card className="max-w-lg mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-yellow-600" />
          </div>
          <CardTitle>Manual Admin Setup</CardTitle>
          <CardDescription>
            Alternative setup method using direct database access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This method requires direct database access and should only be used if the standard signup is not working.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-3 text-sm">
            <p className="font-medium">Steps to manually create an admin:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Go to your Supabase dashboard</li>
              <li>Navigate to Authentication → Users</li>
              <li>Create a new user with your email and password</li>
              <li>Copy the user ID from the created user</li>
              <li>Go to SQL Editor and run this query:</li>
            </ol>
            
            <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
              {`INSERT INTO public.admin_users 
(user_id, username, password_hash, role)
VALUES 
('YOUR_USER_ID_HERE', 'admin', 'managed_by_auth', 'admin');`}
            </div>
            
            <p className="text-xs text-muted-foreground">
              Replace 'YOUR_USER_ID_HERE' with the actual user ID from step 4.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setStep('setup')}
              className="flex-1"
            >
              Back to Setup
            </Button>
            <Button 
              onClick={() => window.open('https://supabase.com/dashboard', '_blank')}
              className="flex-1"
            >
              Open Supabase
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto">
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

        {/* Enhanced Error Display */}
        {errorDetails && (
          <Alert variant="destructive" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-2">
                <p className="font-medium">{errorDetails.message}</p>
                {errorDetails.suggestions && (
                  <div>
                    <p className="text-sm font-medium mb-1">Try these solutions:</p>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      {errorDetails.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="standard">Standard Setup</TabsTrigger>
            <TabsTrigger value="alternative">Alternative</TabsTrigger>
          </TabsList>
          
          <TabsContent value="standard" className="space-y-4">
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
          </TabsContent>
          
          <TabsContent value="alternative" className="space-y-4">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Having trouble with the standard setup? Try these alternatives:
              </p>
              
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  onClick={handleManualSetup}
                  className="w-full"
                >
                  <Database className="mr-2 h-4 w-4" />
                  Manual Database Setup
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="w-full"
                >
                  Refresh Page & Retry
                </Button>
              </div>
              
              <Alert>
                <Mail className="h-4 w-4" />
                <AlertDescription className="text-left">
                  <strong>Quick tip:</strong> If you received rate limiting errors, check your email inbox. 
                  A confirmation email might have been sent that you can use to complete the setup.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};