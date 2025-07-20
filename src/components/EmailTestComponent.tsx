import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const EmailTestComponent: React.FC = () => {
  const [testEmail, setTestEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const testEmailSystem = async () => {
    if (!testEmail) {
      toast.error('Please enter an email address');
      return;
    }

    setLoading(true);
    setTestResult(null);

    try {
      // Test email by submitting a test form
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: {
          formType: 'email-test',
          formData: {
            email: testEmail,
            name: 'Email Test',
            message: 'This is a test email to verify the email system is working correctly.',
            test: true
          }
        }
      });

      if (error) throw error;

      setTestResult('success');
      toast.success('Test email sent successfully!');
    } catch (error) {
      console.error('Email test failed:', error);
      setTestResult('error');
      toast.error('Email test failed. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const sendCaseNotification = async () => {
    if (!testEmail) {
      toast.error('Please enter an email address');
      return;
    }

    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: {
          formType: 'case-update',
          formData: {
            email: testEmail,
            caseNumber: 'LGN-2024-DEMO001',
            status: 'investigating',
            message: 'Your case status has been updated to: Investigating. Our team is actively working on your case.'
          }
        }
      });

      if (error) throw error;

      toast.success('Case notification email sent!');
    } catch (error) {
      console.error('Case notification failed:', error);
      toast.error('Failed to send case notification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Email System Test
        </CardTitle>
        <CardDescription>
          Test the email functionality to ensure proper delivery
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Enter test email address"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Button 
            onClick={testEmailSystem}
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Sending...' : 'Send Test Email'}
          </Button>
          
          <Button 
            onClick={sendCaseNotification}
            disabled={loading}
            variant="outline"
            className="w-full"
          >
            Send Case Update Email
          </Button>
        </div>

        {testResult && (
          <Alert className={testResult === 'success' ? 'border-green-500' : 'border-red-500'}>
            {testResult === 'success' ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
            <AlertDescription>
              {testResult === 'success' 
                ? 'Email sent successfully! Check your inbox.' 
                : 'Email test failed. Check console logs for details.'
              }
            </AlertDescription>
          </Alert>
        )}

        <div className="text-sm text-muted-foreground">
          <p><strong>Demo Cases:</strong></p>
          <ul className="list-disc list-inside text-xs space-y-1">
            <li>LGN-2024-DEMO001 (Romance Scam)</li>
            <li>LGN-2024-DEMO002 (Crypto Fraud)</li>
            <li>LGN-2024-DEMO003 (Binary Options)</li>
            <li>LGN-2024-DEMO004 (Trading Fraud)</li>
            <li>LGN-2024-DEMO005 (Investment Fraud)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};