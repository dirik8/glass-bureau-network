import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { createInitialAdmin, checkAdminExists, AdminSetupResult } from '@/utils/adminSetup';
import AccessCodeGate from '@/components/AccessCodeGate';

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
    const exists = await checkAdminExists();
    setAdminExists(exists);
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
      <AccessCodeGate
        title="Admin Setup"
        description="Enter access code to proceed"
        settingKey="admin_access_code"
      >
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <CardTitle>Admin Account Exists</CardTitle>
              <CardDescription>
                Use these credentials to access the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">Current Admin Credentials:</h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <div>
                      <strong>Email:</strong> admin@federalinvestigationbureau.com
                    </div>
                    <div>
                      <strong>Password:</strong> AdminPass2024!
                    </div>
                    <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs">
                      <strong>Access Code:</strong> 2058
                    </div>
                  </div>
                </div>
                <Button onClick={handleGoToLogin} className="w-full">
                  Go to Admin Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </AccessCodeGate>
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
    <AccessCodeGate
      title="Admin Setup"
      description="Enter access code to proceed with initial setup"
      settingKey="admin_access_code"
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
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">Admin Login Credentials:</h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <div>
                      <strong>Email:</strong> {adminCredentials.email}
                    </div>
                    <div>
                      <strong>Password:</strong> {adminCredentials.password}
                    </div>
                    <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs">
                      <strong>Access Code for Admin Pages:</strong> 2058
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Please save these credentials securely and change the password after first login.
                  </div>
                </div>
                
                <Button onClick={handleGoToLogin} className="w-full">
                  Continue to Admin Login
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">What will be created:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Administrator account in Supabase Auth</li>
                    <li>• Admin user record in the database</li>
                    <li>• Email: admin@federalinvestigationbureau.com</li>
                    <li>• Password: AdminPass2024!</li>
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
    </AccessCodeGate>
  );
};

export default AdminSetupWizard;