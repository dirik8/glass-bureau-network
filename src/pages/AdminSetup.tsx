import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AdminUserSetup } from '@/components/AdminUserSetup';
import { DynamicSupabaseConfig } from '@/components/DynamicSupabaseConfig';
import { useAuth } from '@/hooks/useAuth';
import { Settings, User, Database, Shield } from 'lucide-react';

const AdminSetup: React.FC = () => {
  const { user, isAdmin } = useAuth();
  const [hasAdminUser, setHasAdminUser] = useState(false);

  useEffect(() => {
    checkAdminUser();
  }, []);

  const checkAdminUser = async () => {
    // Check if any admin users exist
    try {
      const response = await fetch('/api/check-admin');
      const data = await response.json();
      setHasAdminUser(data.hasAdmin);
    } catch (error) {
      console.error('Error checking admin user:', error);
    }
  };

  if (user && isAdmin) {
    return (
      <>
        <Helmet>
          <title>Admin Setup - Federal Investigation Bureau</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        
        <div className="min-h-screen bg-background p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Admin Setup & Configuration</h1>
              <p className="text-muted-foreground">
                Configure your site for production deployment
              </p>
            </div>

            <Tabs defaultValue="database" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="database">Database Setup</TabsTrigger>
                <TabsTrigger value="users">User Management</TabsTrigger>
                <TabsTrigger value="deployment">Deployment</TabsTrigger>
              </TabsList>

              <TabsContent value="database">
                <DynamicSupabaseConfig />
              </TabsContent>

              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <CardTitle>User Management</CardTitle>
                    </div>
                    <CardDescription>
                      Manage admin users and permissions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Alert>
                      <Shield className="h-4 w-4" />
                      <AlertDescription>
                        You are currently logged in as an administrator. Additional user management features will be available here.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deployment">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Settings className="w-5 h-5" />
                      <CardTitle>Deployment Configuration</CardTitle>
                    </div>
                    <CardDescription>
                      Prepare your site for independent hosting
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert>
                      <AlertDescription>
                        <strong>Production Checklist:</strong>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>✓ Database schema created</li>
                          <li>✓ Admin user configured</li>
                          <li>• Upload PDF files to storage</li>
                          <li>• Configure domain and SSL</li>
                          <li>• Set up backup procedures</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Initial Setup - Federal Investigation Bureau</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to Federal Investigation Bureau</h1>
            <p className="text-muted-foreground">
              Complete the initial setup to configure your site for production
            </p>
          </div>

          {!hasAdminUser ? (
            <AdminUserSetup />
          ) : (
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Setup Complete</CardTitle>
                <CardDescription>
                  Admin account already exists. Please log in to continue.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a href="/admin/login" className="text-primary hover:underline">
                  Go to Admin Login
                </a>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminSetup;