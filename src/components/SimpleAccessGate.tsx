import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Lock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SimpleAccessGateProps {
  children: React.ReactNode;
  title: string;
  description: string;
  accessCode?: string;
}

const SimpleAccessGate: React.FC<SimpleAccessGateProps> = ({ 
  children, 
  title, 
  description,
  accessCode = '2058'
}) => {
  const [inputCode, setInputCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { toast } = useToast();

  // Check if already authenticated in session
  useEffect(() => {
    const granted = sessionStorage.getItem('admin_access_granted');
    if (granted === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (inputCode === accessCode) {
        // Store access in session
        sessionStorage.setItem('admin_access_granted', 'true');
        setIsAuthenticated(true);
        
        toast({
          title: "Access Granted",
          description: "Welcome to the administrative area",
        });
      } else {
        setAttempts(prev => prev + 1);
        setInputCode('');
        
        toast({
          title: "Access Denied",
          description: "Invalid access code. Please try again.",
          variant: "destructive",
        });

        // Security: Increase delay after multiple failed attempts
        if (attempts >= 3) {
          setTimeout(() => setIsLoading(false), 2000);
          return;
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while verifying access code",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  // Show access form if not authenticated
  if (!isAuthenticated) {
    return (
      <>
        <meta name="robots" content="noindex, nofollow" />
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="accessCode">Access Code</Label>
                  <Input
                    id="accessCode"
                    type="password"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    required
                    placeholder="Enter access code (hint: 2058)"
                    maxLength={10}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading || !inputCode.trim()}
                >
                  {isLoading ? (
                    <>
                      <Lock className="h-4 w-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Verify Access Code
                    </>
                  )}
                </Button>
              </form>

              {attempts >= 3 && (
                <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-2 text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Security Notice</span>
                  </div>
                  <p className="text-sm text-destructive/80 mt-1">
                    Multiple failed attempts detected. Access code is: 2058
                  </p>
                </div>
              )}

              <div className="mt-6 text-center">
                <Button variant="link" onClick={() => window.location.href = '/'}>
                  ← Back to Main Site
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  // Show protected content if authenticated
  return <>{children}</>;
};

export default SimpleAccessGate;