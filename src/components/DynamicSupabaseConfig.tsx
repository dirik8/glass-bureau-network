import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { Loader2, Database, Settings, Copy, CheckCircle } from 'lucide-react';

export const DynamicSupabaseConfig: React.FC = () => {
  const [config, setConfig] = useState({
    supabaseUrl: '',
    supabaseAnonKey: '',
    supabaseServiceKey: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const { updateSetting } = useSiteSettings();
  const { toast } = useToast();

  useEffect(() => {
    // Check current connection
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      const { data } = await fetch('/api/health').then(r => r.json());
      setIsConnected(!!data);
    } catch {
      setIsConnected(false);
    }
  };

  const handleConfigSave = async () => {
    setIsLoading(true);
    try {
      await updateSetting('supabase_url', config.supabaseUrl);
      await updateSetting('supabase_anon_key', config.supabaseAnonKey);
      await updateSetting('supabase_service_key', config.supabaseServiceKey);

      toast({
        title: 'Configuration Saved',
        description: 'Supabase configuration has been updated successfully.'
      });

      // Test the connection
      await checkConnection();
    } catch (error: any) {
      toast({
        title: 'Configuration Failed',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      toast({
        title: 'Copy Failed',
        description: 'Could not copy to clipboard',
        variant: 'destructive'
      });
    }
  };

  const sqlSetupScript = `-- Create the required tables and setup
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  username TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.pdfs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  file_path TEXT NOT NULL,
  pages INTEGER,
  level TEXT,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL,
  data JSONB NOT NULL,
  status TEXT DEFAULT 'pending',
  submitted_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pdfs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Everyone can view pdfs" ON public.pdfs FOR SELECT USING (true);
CREATE POLICY "Anyone can create form submissions" ON public.form_submissions FOR INSERT WITH CHECK (true);

-- Create storage bucket for PDFs
INSERT INTO storage.buckets (id, name, public) VALUES ('pdfs', 'pdfs', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public PDF access" ON storage.objects FOR SELECT USING (bucket_id = 'pdfs');
CREATE POLICY "Admin PDF upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'pdfs');

-- Insert default settings
INSERT INTO public.site_settings (key, value, description) VALUES
('site_title', 'Federal Investigation Bureau', 'Main site title'),
('site_description', 'Leading cryptocurrency investigation and digital forensics services', 'Site description for SEO'),
('contact_email', 'contact@federalinvestigationbureau.com', 'Main contact email'),
('supabase_url', '', 'Supabase project URL'),
('supabase_anon_key', '', 'Supabase anonymous key'),
('supabase_service_key', '', 'Supabase service role key')
ON CONFLICT (key) DO NOTHING;
`;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Database className="w-5 h-5" />
            <CardTitle>Supabase Configuration</CardTitle>
          </div>
          <CardDescription>
            Configure your Supabase connection for dynamic deployment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm">
              {isConnected ? 'Connected to Supabase' : 'Not connected'}
            </span>
          </div>

          <Tabs defaultValue="config" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="config">Configuration</TabsTrigger>
              <TabsTrigger value="setup">Database Setup</TabsTrigger>
            </TabsList>

            <TabsContent value="config" className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="supabaseUrl">Supabase URL</Label>
                  <Input
                    id="supabaseUrl"
                    type="url"
                    placeholder="https://your-project.supabase.co"
                    value={config.supabaseUrl}
                    onChange={(e) => setConfig(prev => ({ ...prev, supabaseUrl: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supabaseAnonKey">Supabase Anonymous Key</Label>
                  <Input
                    id="supabaseAnonKey"
                    type="password"
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                    value={config.supabaseAnonKey}
                    onChange={(e) => setConfig(prev => ({ ...prev, supabaseAnonKey: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supabaseServiceKey">Supabase Service Key (Optional)</Label>
                  <Input
                    id="supabaseServiceKey"
                    type="password"
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                    value={config.supabaseServiceKey}
                    onChange={(e) => setConfig(prev => ({ ...prev, supabaseServiceKey: e.target.value }))}
                  />
                </div>

                <Button onClick={handleConfigSave} disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving Configuration...
                    </>
                  ) : (
                    <>
                      <Settings className="mr-2 h-4 w-4" />
                      Save Configuration
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="setup" className="space-y-4">
              <Alert>
                <Database className="h-4 w-4" />
                <AlertDescription>
                  Run this SQL script in your Supabase SQL editor to set up the required database structure.
                </AlertDescription>
              </Alert>

              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto max-h-96">
                  <code>{sqlSetupScript}</code>
                </pre>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(sqlSetupScript, 'sql')}
                >
                  {copied === 'sql' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              <Alert>
                <AlertDescription>
                  After running the SQL script, make sure to set up your Row Level Security policies and storage bucket permissions in your Supabase dashboard.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};