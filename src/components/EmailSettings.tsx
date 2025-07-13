import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Send, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface EmailSettings {
  adminEmail: string;
  emailTemplateSubject: string;
  emailTemplateBody: string;
  resendApiKey: string;
}

export function EmailSettings() {
  const { settings, updateSetting, loading } = useSiteSettings();
  const [emailSettings, setEmailSettings] = useState<EmailSettings>({
    adminEmail: '',
    emailTemplateSubject: 'New {{form_type}} Form Submission',
    emailTemplateBody: `<h2>New Form Submission</h2>
<p><strong>Form Type:</strong> {{form_type}}</p>
<p><strong>Submission ID:</strong> {{submission_id}}</p>
<p><strong>Submitted At:</strong> {{submitted_at}}</p>
<hr>
<h3>Form Data:</h3>
{{form_data}}`,
    resendApiKey: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'unknown' | 'working' | 'error'>('unknown');
  const [recentSubmissions, setRecentSubmissions] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && settings) {
      setEmailSettings({
        adminEmail: settings.admin_email || '',
        emailTemplateSubject: settings.email_template_subject || 'New {{form_type}} Form Submission',
        emailTemplateBody: settings.email_template_body || emailSettings.emailTemplateBody,
        resendApiKey: settings.resend_api_key || ''
      });
    }
  }, [settings, loading]);

  useEffect(() => {
    loadRecentSubmissions();
  }, []);

  const loadRecentSubmissions = async () => {
    try {
      const { data } = await supabase
        .from('form_submissions')
        .select('*')
        .order('submitted_at', { ascending: false })
        .limit(5);
      
      setRecentSubmissions(data || []);
    } catch (error) {
      console.error('Error loading recent submissions:', error);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await Promise.all([
        updateSetting('admin_email', emailSettings.adminEmail),
        updateSetting('email_template_subject', emailSettings.emailTemplateSubject),
        updateSetting('email_template_body', emailSettings.emailTemplateBody),
        updateSetting('resend_api_key', emailSettings.resendApiKey)
      ]);

      toast({
        title: "Settings Saved",
        description: "Email settings have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save email settings.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleTestEmail = async () => {
    setIsTesting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-form', {
        body: {
          form_type: 'Email Test',
          data: {
            name: 'Test User',
            email: 'test@example.com',
            message: 'This is a test email to verify email configuration.'
          }
        }
      });

      if (error) throw error;

      toast({
        title: "Test Email Sent",
        description: "Check your admin email for the test message.",
      });
      
      setEmailStatus('working');
      loadRecentSubmissions();
    } catch (error: any) {
      toast({
        title: "Test Failed",
        description: error.message || "Failed to send test email.",
        variant: "destructive"
      });
      setEmailStatus('error');
    } finally {
      setIsTesting(false);
    }
  };

  const getEmailStatusIcon = () => {
    switch (emailStatus) {
      case 'working':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getEmailStatusText = () => {
    switch (emailStatus) {
      case 'working':
        return 'Email system is working';
      case 'error':
        return 'Email system has errors';
      default:
        return 'Email status unknown';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            {getEmailStatusIcon()}
            <span className="text-sm">{getEmailStatusText()}</span>
          </div>

          <div>
            <Label htmlFor="adminEmail">Admin Email Address *</Label>
            <Input
              id="adminEmail"
              type="email"
              value={emailSettings.adminEmail}
              onChange={(e) => setEmailSettings(prev => ({ ...prev, adminEmail: e.target.value }))}
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <Label htmlFor="resendApiKey">Resend API Key *</Label>
            <Input
              id="resendApiKey"
              type="password"
              value={emailSettings.resendApiKey}
              onChange={(e) => setEmailSettings(prev => ({ ...prev, resendApiKey: e.target.value }))}
              placeholder="re_..."
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Settings'}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleTestEmail} 
              disabled={isTesting || !emailSettings.adminEmail}
            >
              <Send className="h-4 w-4 mr-2" />
              {isTesting ? 'Testing...' : 'Test Email'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Email Templates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="emailSubject">Email Subject Template</Label>
            <Input
              id="emailSubject"
              value={emailSettings.emailTemplateSubject}
              onChange={(e) => setEmailSettings(prev => ({ ...prev, emailTemplateSubject: e.target.value }))}
              placeholder="New {{form_type}} Form Submission"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Available variables: {"{form_type}, {submission_id}, {submitted_at}"}
            </p>
          </div>

          <div>
            <Label htmlFor="emailBody">Email Body Template (HTML)</Label>
            <Textarea
              id="emailBody"
              rows={8}
              value={emailSettings.emailTemplateBody}
              onChange={(e) => setEmailSettings(prev => ({ ...prev, emailTemplateBody: e.target.value }))}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Available variables: {"{form_type}, {submission_id}, {submitted_at}, {form_data}"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {recentSubmissions.length === 0 ? (
            <p className="text-muted-foreground">No recent submissions</p>
          ) : (
            <div className="space-y-3">
              {recentSubmissions.map((submission) => (
                <div key={submission.id} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{submission.form_type}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(submission.submitted_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {submission.email_sent ? (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Email Sent
                      </Badge>
                    ) : (
                      <Badge variant="destructive">
                        <XCircle className="h-3 w-3 mr-1" />
                        Email Failed
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}