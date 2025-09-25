import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { createInitialAdmin, checkAdminExists, AdminSetupResult } from '@/utils/adminSetup';
import SimpleAccessGate from '@/components/SimpleAccessGate';

const AdminSetupWizard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState<{email: string; password: string} | null>(null);
  const [adminExists, setAdminExists] = useState<boolean | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    checkExistingAdmin();
  }, []);

  const checkExistingAdmin = async () => {
    try {
      const exists = await checkAdminExists();
      setAdminExists(exists);
    } catch (error) {
      console.error('Error checking admin:', error);
      setAdminExists(false); // Default to false on error
    }
  };

  const handleSetupAdmin = async () => {
    setIsLoading(true);
    
    try {
      const result: AdminSetupResult = await createInitialAdmin();
      
      if (result.success) {
        setSetupComplete(true);
        setAdminCredentials(result.adminCredentials || null);
        toast({
          title: "Admin Setup Complete",
          description: "Your admin account has been created successfully!",
        });
      } else {
        toast({
          title: "Setup Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Setup Failed",
        description: "An unexpected error occurred during setup",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const handleGoToLogin = () => {
    window.location.href = '/admin/login';
  };

  // If an admin exists, show current credentials
  if (adminExists) {
    return (
    <SimpleAccessGate
      title="Admin Setup"
      description="Enter access code to proceed with admin setup"
      accessCode="2058"
    >
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
            <CardTitle>Admin Account Ready</CardTitle>
            <CardDescription>
              Admin account is configured and ready for use
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <h3 className="font-medium text-green-900 mb-2">System Status: Ready</h3>
                <p className="text-sm text-green-800">
                  Admin access is available. Use your secure login credentials to proceed.
                </p>
              </div>
              <Button onClick={handleGoToLogin} className="w-full">
                Go to Admin Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SimpleAccessGate>
    );
  }

  if (adminExists === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Loader2 className="h-12 w-12 mx-auto mb-4 text-primary animate-spin" />
            <CardTitle>Checking System</CardTitle>
            <CardDescription>Verifying administrator status...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <SimpleAccessGate
      title="Admin Setup"
      description="Enter access code to proceed with initial setup"
      accessCode="2058"
    >
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {setupComplete ? (
                <CheckCircle className="h-12 w-12 text-green-500" />
              ) : (
                <Shield className="h-12 w-12 text-primary" />
              )}
            </div>
            <CardTitle className="text-2xl font-bold">
              {setupComplete ? 'Setup Complete!' : 'Initial Admin Setup'}
            </CardTitle>
            <CardDescription>
              {setupComplete 
                ? 'Your administrator account has been created'
                : 'Create the first administrator account for this system'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {setupComplete && adminCredentials ? (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                  <h3 className="font-medium text-green-900 mb-2">Setup Complete!</h3>
                  <p className="text-sm text-green-800">
                    Admin account created successfully. Your credentials have been configured securely.
                  </p>
                </div>
                
                <Button onClick={handleGoToLogin} className="w-full">
                  Continue to Admin Login
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Setup Process:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Create administrator account in Supabase Auth</li>
                    <li>• Configure admin user record in database</li>
                    <li>• Set up secure access controls</li>
                    <li>• Enable admin dashboard functionality</li>
                  </ul>
                </div>
                
                <Button 
                  onClick={handleSetupAdmin}
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Creating Admin Account...
                    </>
                  ) : (
                    <>
                      <Shield className="h-4 w-4 mr-2" />
                      Create Administrator Account
                    </>
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </SimpleAccessGate>
  );
};

export default AdminSetupWizard;