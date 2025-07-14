import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  Database, 
  Mail, 
  User, 
  CheckCircle, 
  AlertTriangle, 
  Loader2,
  Server,
  Shield,
  Settings,
  Download
} from 'lucide-react';

interface InstallStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  error?: string;
}

const Install = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installationComplete, setInstallationComplete] = useState(false);
  
  // Database configuration
  const [dbConfig, setDbConfig] = useState({
    host: 'localhost',
    username: '',
    password: '',
    database: '',
    port: '3306'
  });
  
  // Email configuration
  const [emailConfig, setEmailConfig] = useState({
    from_email: '',
    from_name: '',
    smtp_host: 'localhost',
    smtp_port: '587',
    use_smtp: false
  });
  
  // Admin user configuration
  const [adminConfig, setAdminConfig] = useState({
    username: 'admin',
    password: '',
    confirmPassword: ''
  });
  
  const [steps, setSteps] = useState<InstallStep[]>([
    {
      id: 'system_check',
      title: 'System Requirements Check',
      description: 'Checking PHP version, extensions, and permissions',
      status: 'pending'
    },
    {
      id: 'database_setup',
      title: 'Database Setup',
      description: 'Creating tables and initial data',
      status: 'pending'
    },
    {
      id: 'email_config',
      title: 'Email Configuration',
      description: 'Setting up email notifications',
      status: 'pending'
    },
    {
      id: 'admin_user',
      title: 'Admin User Creation',
      description: 'Creating the first admin user',
      status: 'pending'
    },
    {
      id: 'finalization',
      title: 'Finalization',
      description: 'Completing installation and cleanup',
      status: 'pending'
    }
  ]);
  
  useEffect(() => {
    // Auto-detect cPanel settings
    autoDetectSettings();
  }, []);
  
  const autoDetectSettings = async () => {
    try {
      // Try to auto-detect database and email settings
      const hostname = window.location.hostname;
      const domain = hostname.replace('www.', '');
      
      setDbConfig(prev => ({
        ...prev,
        host: 'localhost',
        database: domain.replace(/\./g, '_')
      }));
      
      setEmailConfig(prev => ({
        ...prev,
        from_email: `admin@${domain}`,
        from_name: domain.split('.')[0],
        smtp_host: `mail.${domain}`
      }));
      
    } catch (error) {
      console.warn('Could not auto-detect settings:', error);
    }
  };
  
  const updateStepStatus = (stepId: string, status: InstallStep['status'], error?: string) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId 
        ? { ...step, status, error }
        : step
    ));
  };
  
  const testDatabaseConnection = async () => {
    try {
      const response = await fetch('/api/install.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'test_database',
          config: dbConfig
        })
      });
      
      const result = await response.json();
      return result;
    } catch (error) {
      return { success: false, error: 'Connection failed' };
    }
  };
  
  const performSystemCheck = async () => {
    updateStepStatus('system_check', 'running');
    
    try {
      const response = await fetch('/api/install.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'system_check' })
      });
      
      const result = await response.json();
      
      if (result.success) {
        updateStepStatus('system_check', 'completed');
        return true;
      } else {
        updateStepStatus('system_check', 'error', result.error);
        return false;
      }
    } catch (error) {
      updateStepStatus('system_check', 'error', 'System check failed');
      return false;
    }
  };
  
  const setupDatabase = async () => {
    updateStepStatus('database_setup', 'running');
    
    try {
      const response = await fetch('/api/install.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'setup_database',
          config: dbConfig
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        updateStepStatus('database_setup', 'completed');
        return true;
      } else {
        updateStepStatus('database_setup', 'error', result.error);
        return false;
      }
    } catch (error) {
      updateStepStatus('database_setup', 'error', 'Database setup failed');
      return false;
    }
  };
  
  const setupEmail = async () => {
    updateStepStatus('email_config', 'running');
    
    try {
      const response = await fetch('/api/install.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'setup_email',
          config: emailConfig
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        updateStepStatus('email_config', 'completed');
        return true;
      } else {
        updateStepStatus('email_config', 'error', result.error);
        return false;
      }
    } catch (error) {
      updateStepStatus('email_config', 'error', 'Email setup failed');
      return false;
    }
  };
  
  const createAdminUser = async () => {
    updateStepStatus('admin_user', 'running');
    
    if (adminConfig.password !== adminConfig.confirmPassword) {
      updateStepStatus('admin_user', 'error', 'Passwords do not match');
      return false;
    }
    
    try {
      const response = await fetch('/api/install.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create_admin',
          config: {
            username: adminConfig.username,
            password: adminConfig.password
          }
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        updateStepStatus('admin_user', 'completed');
        return true;
      } else {
        updateStepStatus('admin_user', 'error', result.error);
        return false;
      }
    } catch (error) {
      updateStepStatus('admin_user', 'error', 'Admin user creation failed');
      return false;
    }
  };
  
  const finalizeInstallation = async () => {
    updateStepStatus('finalization', 'running');
    
    try {
      const response = await fetch('/api/install.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'finalize' })
      });
      
      const result = await response.json();
      
      if (result.success) {
        updateStepStatus('finalization', 'completed');
        setInstallationComplete(true);
        return true;
      } else {
        updateStepStatus('finalization', 'error', result.error);
        return false;
      }
    } catch (error) {
      updateStepStatus('finalization', 'error', 'Finalization failed');
      return false;
    }
  };
  
  const startInstallation = async () => {
    setIsInstalling(true);
    
    const installSteps = [
      performSystemCheck,
      setupDatabase,
      setupEmail,
      createAdminUser,
      finalizeInstallation
    ];
    
    for (let i = 0; i < installSteps.length; i++) {
      setCurrentStep(i);
      const success = await installSteps[i]();
      
      if (!success) {
        setIsInstalling(false);
        toast({
          title: "Installation Failed",
          description: `Failed at step: ${steps[i].title}`,
          variant: "destructive"
        });
        return;
      }
      
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    setIsInstalling(false);
    toast({
      title: "Installation Complete",
      description: "Your application has been successfully installed!",
    });
  };
  
  const getStepIcon = (step: InstallStep) => {
    switch (step.status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'running':
        return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <div className="h-5 w-5 rounded-full border-2 border-muted" />;
    }
  };
  
  const completedSteps = steps.filter(step => step.status === 'completed').length;
  const progress = (completedSteps / steps.length) * 100;
  
  if (installationComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">Installation Complete!</CardTitle>
            <CardDescription>
              Your application has been successfully installed and configured.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                You can now access your admin dashboard using the credentials you created.
              </p>
              <Button 
                onClick={() => window.location.href = '/admin'}
                className="w-full"
              >
                Go to Admin Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Application Installer</h1>
          <p className="text-muted-foreground">
            Welcome! Let's set up your application for cPanel hosting.
          </p>
        </div>
        
        {/* Progress Bar */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Installation Progress
            </CardTitle>
            <Progress value={progress} className="w-full" />
            <div className="text-sm text-muted-foreground">
              {completedSteps} of {steps.length} steps completed
            </div>
          </CardHeader>
        </Card>
        
        {/* Installation Steps */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Installation Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-start gap-3">
                      {getStepIcon(step)}
                      <div className="flex-1">
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                        {step.error && (
                          <p className="text-sm text-red-500 mt-1">
                            Error: {step.error}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Tabs defaultValue="database" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="database">
                  <Database className="h-4 w-4 mr-2" />
                  Database
                </TabsTrigger>
                <TabsTrigger value="email">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </TabsTrigger>
                <TabsTrigger value="admin">
                  <User className="h-4 w-4 mr-2" />
                  Admin
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="database">
                <Card>
                  <CardHeader>
                    <CardTitle>Database Configuration</CardTitle>
                    <CardDescription>
                      Configure your MySQL database connection
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="db-host">Host</Label>
                        <Input
                          id="db-host"
                          value={dbConfig.host}
                          onChange={(e) => setDbConfig(prev => ({ ...prev, host: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="db-port">Port</Label>
                        <Input
                          id="db-port"
                          value={dbConfig.port}
                          onChange={(e) => setDbConfig(prev => ({ ...prev, port: e.target.value }))}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="db-name">Database Name</Label>
                      <Input
                        id="db-name"
                        value={dbConfig.database}
                        onChange={(e) => setDbConfig(prev => ({ ...prev, database: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="db-username">Username</Label>
                      <Input
                        id="db-username"
                        value={dbConfig.username}
                        onChange={(e) => setDbConfig(prev => ({ ...prev, username: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="db-password">Password</Label>
                      <Input
                        id="db-password"
                        type="password"
                        value={dbConfig.password}
                        onChange={(e) => setDbConfig(prev => ({ ...prev, password: e.target.value }))}
                      />
                    </div>
                    
                    <Button 
                      onClick={testDatabaseConnection}
                      variant="outline"
                      className="w-full"
                    >
                      Test Connection
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="email">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Configuration</CardTitle>
                    <CardDescription>
                      Configure email notifications using cPanel webmail
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="email-from">From Email</Label>
                      <Input
                        id="email-from"
                        type="email"
                        value={emailConfig.from_email}
                        onChange={(e) => setEmailConfig(prev => ({ ...prev, from_email: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email-name">From Name</Label>
                      <Input
                        id="email-name"
                        value={emailConfig.from_name}
                        onChange={(e) => setEmailConfig(prev => ({ ...prev, from_name: e.target.value }))}
                      />
                    </div>
                    
                    <Alert>
                      <Mail className="h-4 w-4" />
                      <AlertDescription>
                        We'll use your cPanel's built-in mail system. Make sure your domain's MX records are properly configured.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="admin">
                <Card>
                  <CardHeader>
                    <CardTitle>Admin User</CardTitle>
                    <CardDescription>
                      Create your first admin user account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="admin-username">Username</Label>
                      <Input
                        id="admin-username"
                        value={adminConfig.username}
                        onChange={(e) => setAdminConfig(prev => ({ ...prev, username: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        value={adminConfig.password}
                        onChange={(e) => setAdminConfig(prev => ({ ...prev, password: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="admin-confirm">Confirm Password</Label>
                      <Input
                        id="admin-confirm"
                        type="password"
                        value={adminConfig.confirmPassword}
                        onChange={(e) => setAdminConfig(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      />
                    </div>
                    
                    {adminConfig.password && adminConfig.confirmPassword && 
                     adminConfig.password !== adminConfig.confirmPassword && (
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          Passwords do not match
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Installation Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={startInstallation}
            disabled={isInstalling || !dbConfig.database || !dbConfig.username || !adminConfig.password}
            size="lg"
            className="min-w-[200px]"
          >
            {isInstalling ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Installing...
              </>
            ) : (
              <>
                <Server className="mr-2 h-4 w-4" />
                Start Installation
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Install;