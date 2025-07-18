
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Send, Settings, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

interface SMTPConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  secure: boolean;
  name: string;
}

interface WarmupCampaign {
  id: string;
  smtp_config_id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  daily_volume: number;
  current_day: number;
  total_sent: number;
  success_rate: number;
  created_at: string;
}

export function SMTPManager() {
  const { settings, updateSetting } = useSiteSettings();
  const [smtpConfigs, setSmtpConfigs] = useState<SMTPConfig[]>([]);
  const [warmupCampaigns, setWarmupCampaigns] = useState<WarmupCampaign[]>([]);
  const [newSMTP, setNewSMTP] = useState<SMTPConfig>({
    host: '',
    port: 587,
    username: '',
    password: '',
    secure: true,
    name: ''
  });
  const [isTesting, setIsTesting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSMTPConfigs();
    loadWarmupCampaigns();
  }, []);

  const loadSMTPConfigs = async () => {
    try {
      const { data } = await supabase
        .from('smtp_configs')
        .select('*')
        .order('created_at', { ascending: false });
      
      setSmtpConfigs(data || []);
    } catch (error) {
      console.error('Error loading SMTP configs:', error);
    }
  };

  const loadWarmupCampaigns = async () => {
    try {
      const { data } = await supabase
        .from('warmup_campaigns')
        .select('*')
        .order('created_at', { ascending: false });
      
      setWarmupCampaigns(data || []);
    } catch (error) {
      console.error('Error loading warmup campaigns:', error);
    }
  };

  const saveSMTPConfig = async () => {
    if (!newSMTP.name || !newSMTP.host || !newSMTP.username) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('smtp_configs')
        .insert(newSMTP);

      if (error) throw error;

      setNewSMTP({
        host: '',
        port: 587,
        username: '',
        password: '',
        secure: true,
        name: ''
      });
      
      loadSMTPConfigs();
      toast({
        title: 'SMTP Config Saved',
        description: 'SMTP configuration has been saved successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save SMTP configuration',
        variant: 'destructive'
      });
    } finally {
      setIsSaving(false);
    }
  };

  const testSMTPConnection = async (config: SMTPConfig) => {
    setIsTesting(true);
    try {
      const { error } = await supabase.functions.invoke('test-smtp', {
        body: { smtpConfig: config }
      });

      if (error) throw error;

      toast({
        title: 'Connection Successful',
        description: 'SMTP connection test passed',
      });
    } catch (error) {
      toast({
        title: 'Connection Failed',
        description: 'SMTP connection test failed',
        variant: 'destructive'
      });
    } finally {
      setIsTesting(false);
    }
  };

  const startWarmupCampaign = async (smtpConfigId: string) => {
    try {
      const { error } = await supabase.functions.invoke('start-warmup', {
        body: { smtpConfigId }
      });

      if (error) throw error;

      loadWarmupCampaigns();
      toast({
        title: 'Warmup Started',
        description: 'Email warmup campaign has been started',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to start warmup campaign',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="config" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="config">SMTP Configuration</TabsTrigger>
          <TabsTrigger value="warmup">Email Warmup</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="config" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Add SMTP Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtpName">Configuration Name *</Label>
                  <Input
                    id="smtpName"
                    value={newSMTP.name}
                    onChange={(e) => setNewSMTP(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="My cPanel SMTP"
                  />
                </div>
                <div>
                  <Label htmlFor="smtpHost">SMTP Host *</Label>
                  <Input
                    id="smtpHost"
                    value={newSMTP.host}
                    onChange={(e) => setNewSMTP(prev => ({ ...prev, host: e.target.value }))}
                    placeholder="mail.yourdomain.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtpPort">Port</Label>
                  <Input
                    id="smtpPort"
                    type="number"
                    value={newSMTP.port}
                    onChange={(e) => setNewSMTP(prev => ({ ...prev, port: parseInt(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="smtpUsername">Username *</Label>
                  <Input
                    id="smtpUsername"
                    value={newSMTP.username}
                    onChange={(e) => setNewSMTP(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="noreply@yourdomain.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="smtpPassword">Password *</Label>
                <Input
                  id="smtpPassword"
                  type="password"
                  value={newSMTP.password}
                  onChange={(e) => setNewSMTP(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={saveSMTPConfig} disabled={isSaving}>
                  {isSaving ? 'Saving...' : 'Save Configuration'}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configured SMTP Servers</CardTitle>
            </CardHeader>
            <CardContent>
              {smtpConfigs.length === 0 ? (
                <p className="text-muted-foreground">No SMTP configurations yet.</p>
              ) : (
                <div className="space-y-3">
                  {smtpConfigs.map((config, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{config.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {config.username} → {config.host}:{config.port}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => testSMTPConnection(config)}
                          disabled={isTesting}
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Test
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => startWarmupCampaign(config.name)}
                        >
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Start Warmup
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warmup" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Email Warmup Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              {warmupCampaigns.length === 0 ? (
                <p className="text-muted-foreground">No warmup campaigns running.</p>
              ) : (
                <div className="space-y-3">
                  {warmupCampaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{campaign.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Day {campaign.current_day} • {campaign.total_sent} emails sent
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={campaign.status === 'active' ? 'default' : 'secondary'}
                          className={campaign.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">
                          {campaign.success_rate}% success
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Delivery Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">98.5%</div>
                  <div className="text-sm text-muted-foreground">Delivery Rate</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-sm text-muted-foreground">Emails Sent</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">12</div>
                  <div className="text-sm text-muted-foreground">Bounces</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-muted-foreground">Complaints</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
