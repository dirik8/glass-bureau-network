
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Users, 
  BarChart3, 
  Settings,
  Eye,
  Globe,
  Database,
  Mail,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { PDFUploadManager } from '@/components/PDFUploadManager';
import { DynamicSupabaseConfig } from '@/components/DynamicSupabaseConfig';
import { EmailSettings } from '@/components/EmailSettings';
import { DomainManager } from '@/components/admin/DomainManager';
import { DatabaseManager } from '@/components/admin/DatabaseManager';
import { SMTPManager } from '@/components/admin/SMTPManager';
import { FormSubmissionViewer } from '@/components/admin/FormSubmissionViewer';
import AuditLogger from '@/components/admin/AuditLogger';
import SecurityManager from '@/components/admin/SecurityManager';
import ContactManager from '@/components/admin/ContactManager';
import CaseNumberManager from '@/components/admin/CaseNumberManager';
import { SiteSettingsManager } from '@/components/admin/SiteSettingsManager';
import AccessCodeGate from '@/components/AccessCodeGate';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    pdfs: 0,
    formSubmissions: 0,
    cases: 0,
    domains: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setIsLoading(true);
    try {
      const [pdfsCount, submissionsCount, casesCount, domainsCount] = await Promise.all([
        supabase.from('pdfs').select('id', { count: 'exact', head: true }),
        supabase.from('form_submissions').select('id', { count: 'exact', head: true }),
        supabase.from('cases').select('id', { count: 'exact', head: true }),
        supabase.from('domains').select('id', { count: 'exact', head: true })
      ]);

      setStats({
        pdfs: pdfsCount.count || 0,
        formSubmissions: submissionsCount.count || 0,
        cases: casesCount.count || 0,
        domains: domainsCount.count || 0
      });
    } catch (error) {
      console.error('Error loading stats:', error);
      toast({
        title: 'Error',
        description: 'Failed to load dashboard statistics',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AccessCodeGate
      title="Admin Dashboard Access"
      description="Enter access code to proceed to admin dashboard"
      settingKey="admin_access_code"
    >
      <div className="min-h-screen bg-background p-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-fbi-blue mb-2">Admin Dashboard</h1>
            <p className="text-government-gray-600">LGN Cybercrime Division - Administrative Panel</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-government-gray-600">Total PDFs</p>
                    <p className="text-2xl font-bold text-fbi-blue">{stats.pdfs}</p>
                  </div>
                  <FileText className="h-8 w-8 text-fbi-blue" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-government-gray-600">Form Submissions</p>
                    <p className="text-2xl font-bold text-fbi-blue">{stats.formSubmissions}</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-fbi-blue" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-government-gray-600">Active Cases</p>
                    <p className="text-2xl font-bold text-fbi-blue">{stats.cases}</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-fbi-blue" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-government-gray-600">Domains</p>
                    <p className="text-2xl font-bold text-fbi-blue">{stats.domains}</p>
                  </div>
                  <Globe className="h-8 w-8 text-fbi-blue" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="submissions" className="space-y-6">
            <TabsList className="grid w-full grid-cols-10">
              <TabsTrigger value="submissions">Forms</TabsTrigger>
              <TabsTrigger value="pdfs">PDFs</TabsTrigger>
              <TabsTrigger value="cases">Cases</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="domains">Domains</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="smtp">SMTP</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="audit">Audit</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="submissions">
              <FormSubmissionViewer />
            </TabsContent>

            <TabsContent value="pdfs">
              <PDFUploadManager />
            </TabsContent>

            <TabsContent value="cases">
              <CaseNumberManager />
            </TabsContent>

            <TabsContent value="contacts">
              <ContactManager />
            </TabsContent>

            <TabsContent value="domains">
              <DomainManager />
            </TabsContent>

            <TabsContent value="database">
              <DatabaseManager />
            </TabsContent>

            <TabsContent value="smtp">
              <SMTPManager />
            </TabsContent>

            <TabsContent value="security">
              <SecurityManager />
            </TabsContent>
            
            <TabsContent value="audit">
              <AuditLogger />
            </TabsContent>

            <TabsContent value="settings">
              <div className="space-y-6">
                <SiteSettingsManager />
                <EmailSettings />
                <DynamicSupabaseConfig />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AccessCodeGate>
  );
};

export default AdminDashboard;
