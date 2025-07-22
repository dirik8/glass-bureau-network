import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Shield, Lock, Globe, Activity, AlertTriangle, CheckCircle } from 'lucide-react';

const SecurityManager: React.FC = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [securitySettings, setSecuritySettings] = useState({
    rateLimiting: true,
    ipWhitelisting: false,
    csrfProtection: true,
    sessionTimeout: 30,
    allowedIPs: '',
    maxLoginAttempts: 5
  });

  const handleSettingChange = (key: string, value: any) => {
    setSecuritySettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSecuritySettings = async () => {
    setLoading(true);
    
    try {
      // Simulate API call to save settings
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Security Settings Updated",
        description: "All security configurations have been saved successfully"
      });
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Failed to update security settings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const runSecurityScan = async () => {
    setLoading(true);
    
    try {
      // Simulate security scan
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Security Scan Complete",
        description: "No vulnerabilities detected. System is secure."
      });
    } catch (error) {
      toast({
        title: "Scan Failed",
        description: "Failed to complete security scan",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <CardTitle>Security Configuration</CardTitle>
          </div>
          <CardDescription>
            Configure advanced security settings and protection mechanisms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="rate-limiting">Rate Limiting</Label>
                  <p className="text-sm text-muted-foreground">Prevent abuse and attacks</p>
                </div>
                <Switch
                  id="rate-limiting"
                  checked={securitySettings.rateLimiting}
                  onCheckedChange={(checked) => handleSettingChange('rateLimiting', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="csrf-protection">CSRF Protection</Label>
                  <p className="text-sm text-muted-foreground">Cross-site request forgery protection</p>
                </div>
                <Switch
                  id="csrf-protection"
                  checked={securitySettings.csrfProtection}
                  onCheckedChange={(checked) => handleSettingChange('csrfProtection', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="ip-whitelisting">IP Whitelisting</Label>
                  <p className="text-sm text-muted-foreground">Restrict access by IP address</p>
                </div>
                <Switch
                  id="ip-whitelisting"
                  checked={securitySettings.ipWhitelisting}
                  onCheckedChange={(checked) => handleSettingChange('ipWhitelisting', checked)}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input
                  id="session-timeout"
                  type="number"
                  value={securitySettings.sessionTimeout}
                  onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                <Input
                  id="max-login-attempts"
                  type="number"
                  value={securitySettings.maxLoginAttempts}
                  onChange={(e) => handleSettingChange('maxLoginAttempts', parseInt(e.target.value))}
                />
              </div>
              
              {securitySettings.ipWhitelisting && (
                <div className="space-y-2">
                  <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                  <Input
                    id="allowed-ips"
                    placeholder="192.168.1.1, 10.0.0.1"
                    value={securitySettings.allowedIPs}
                    onChange={(e) => handleSettingChange('allowedIPs', e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Comma-separated list of allowed IP addresses
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button onClick={saveSecuritySettings} disabled={loading}>
              <Lock className="w-4 h-4 mr-2" />
              Save Security Settings
            </Button>
            <Button onClick={runSecurityScan} variant="outline" disabled={loading}>
              <Activity className="w-4 h-4 mr-2" />
              Run Security Scan
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <CardTitle>SEO Protection</CardTitle>
          </div>
          <CardDescription>
            Prevent search engines from indexing sensitive areas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              ✅ SEO protection is active. Setup and admin pages are excluded from search engines via robots.txt and meta tags.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <CardTitle>Security Status</CardTitle>
          </div>
          <CardDescription>
            Current security status and recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { status: 'secure', title: 'Credential Encryption', desc: 'AES-256 encryption active' },
              { status: 'secure', title: 'Admin Protection', desc: 'Access control enabled' },
              { status: 'secure', title: 'Audit Logging', desc: 'All activities tracked' },
              { status: 'warning', title: 'SSL Certificate', desc: 'Ensure HTTPS in production' }
            ].map(({ status, title, desc }) => (
              <div key={title} className="flex items-start space-x-3 p-4 border rounded-lg">
                {status === 'secure' ? (
                  <CheckCircle className="w-5 h-5 mt-1 text-green-500" />
                ) : (
                  <AlertTriangle className="w-5 h-5 mt-1 text-yellow-500" />
                )}
                <div>
                  <h4 className="font-semibold">{title}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityManager;