import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SiteSetting {
  key: string;
  value: string;
  description?: string;
}

export function SiteSettingsManager() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const defaultSettings = {
    // Company Information
    company_name: 'Cryptocurrency Investigation Bureau',
    company_tagline: 'Expert Digital Asset Recovery & Blockchain Forensics',
    company_description: 'Leading cryptocurrency investigation firm specializing in blockchain forensics, digital asset recovery, and crypto fraud prevention.',
    company_email: 'contact@cryptoinvestigationbureau.com',
    company_phone: '+1 (555) 123-4567',
    company_address: '123 Investigation Ave, Digital City, DC 12345',
    
    // Website Configuration
    site_logo: '',
    site_favicon: '',
    site_footer_text: '© 2024 Cryptocurrency Investigation Bureau. All rights reserved.',
    
    // Social Media
    social_linkedin: '',
    social_twitter: '',
    social_facebook: '',
    social_instagram: '',
    social_youtube: '',
    
    // Contact Information
    emergency_phone: '+1 (555) 911-CRYPTO',
    support_email: 'support@cryptoinvestigationbureau.com',
    sales_email: 'sales@cryptoinvestigationbureau.com',
    
    // Business Information
    business_hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    timezone: 'Eastern Standard Time',
    
    // SEO Global Settings
    default_meta_title: 'Cryptocurrency Investigation Bureau - Expert Digital Asset Recovery',
    default_meta_description: 'Professional cryptocurrency investigation and blockchain forensics services. Recover stolen digital assets with our expert team.',
    default_meta_keywords: 'cryptocurrency investigation, blockchain forensics, digital asset recovery, crypto fraud prevention',
    google_analytics_id: '',
    google_search_console_id: '',
    
    // Legal
    privacy_policy_url: '/privacy-policy',
    terms_conditions_url: '/terms-conditions',
    
    // Features
    enable_chat_widget: 'true',
    enable_newsletter: 'true',
    enable_blog: 'false',
    maintenance_mode: 'false'
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('key, value');

      if (error) throw error;

      const settingsMap = (data || []).reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {} as Record<string, string>);

      // Merge with default settings
      setSettings({ ...defaultSettings, ...settingsMap });
    } catch (error: any) {
      toast({
        title: "Error loading settings",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSetting = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveSetting = async (key: string, value: string) => {
    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert({ key, value }, { onConflict: 'key' });

      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Error saving setting",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const saveAllSettings = async () => {
    try {
      const settingsToSave = Object.entries(settings).map(([key, value]) => ({
        key,
        value
      }));

      const { error } = await supabase
        .from('site_settings')
        .upsert(settingsToSave, { onConflict: 'key' });

      if (error) throw error;
      
      toast({ title: "All settings saved successfully" });
    } catch (error: any) {
      toast({
        title: "Error saving settings",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, settingKey: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${settingKey}-${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('pdfs')
        .upload(`site-assets/${fileName}`, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('pdfs')
        .getPublicUrl(`site-assets/${fileName}`);

      handleSetting(settingKey, data.publicUrl);
      await saveSetting(settingKey, data.publicUrl);
      toast({ title: "Image uploaded and saved successfully" });
    } catch (error: any) {
      toast({
        title: "Error uploading image",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading site settings...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Site Settings</h2>
        <Button onClick={saveAllSettings}>
          <Save className="h-4 w-4 mr-2" />
          Save All Settings
        </Button>
      </div>

      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Company Name</label>
                  <Input
                    value={settings.company_name || ''}
                    onChange={(e) => handleSetting('company_name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tagline</label>
                  <Input
                    value={settings.company_tagline || ''}
                    onChange={(e) => handleSetting('company_tagline', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Company Description</label>
                <Textarea
                  value={settings.company_description || ''}
                  onChange={(e) => handleSetting('company_description', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Business Hours</label>
                  <Input
                    value={settings.business_hours || ''}
                    onChange={(e) => handleSetting('business_hours', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Timezone</label>
                  <Input
                    value={settings.timezone || ''}
                    onChange={(e) => handleSetting('timezone', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Main Email</label>
                  <Input
                    type="email"
                    value={settings.company_email || ''}
                    onChange={(e) => handleSetting('company_email', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Main Phone</label>
                  <Input
                    value={settings.company_phone || ''}
                    onChange={(e) => handleSetting('company_phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Emergency Phone</label>
                  <Input
                    value={settings.emergency_phone || ''}
                    onChange={(e) => handleSetting('emergency_phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Support Email</label>
                  <Input
                    type="email"
                    value={settings.support_email || ''}
                    onChange={(e) => handleSetting('support_email', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <Textarea
                  value={settings.company_address || ''}
                  onChange={(e) => handleSetting('company_address', e.target.value)}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Branding & Visual Assets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Site Logo</label>
                <div className="flex gap-2">
                  <Input
                    value={settings.site_logo || ''}
                    onChange={(e) => handleSetting('site_logo', e.target.value)}
                    placeholder="Logo URL"
                  />
                  <label className="flex items-center gap-2 cursor-pointer bg-secondary px-3 py-2 rounded-md">
                    <Upload className="h-4 w-4" />
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'site_logo')}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Favicon</label>
                <div className="flex gap-2">
                  <Input
                    value={settings.site_favicon || ''}
                    onChange={(e) => handleSetting('site_favicon', e.target.value)}
                    placeholder="Favicon URL"
                  />
                  <label className="flex items-center gap-2 cursor-pointer bg-secondary px-3 py-2 rounded-md">
                    <Upload className="h-4 w-4" />
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'site_favicon')}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Footer Text</label>
                <Input
                  value={settings.site_footer_text || ''}
                  onChange={(e) => handleSetting('site_footer_text', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">LinkedIn</label>
                  <Input
                    value={settings.social_linkedin || ''}
                    onChange={(e) => handleSetting('social_linkedin', e.target.value)}
                    placeholder="https://linkedin.com/company/..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Twitter</label>
                  <Input
                    value={settings.social_twitter || ''}
                    onChange={(e) => handleSetting('social_twitter', e.target.value)}
                    placeholder="https://twitter.com/..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Facebook</label>
                  <Input
                    value={settings.social_facebook || ''}
                    onChange={(e) => handleSetting('social_facebook', e.target.value)}
                    placeholder="https://facebook.com/..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Instagram</label>
                  <Input
                    value={settings.social_instagram || ''}
                    onChange={(e) => handleSetting('social_instagram', e.target.value)}
                    placeholder="https://instagram.com/..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">YouTube</label>
                <Input
                  value={settings.social_youtube || ''}
                  onChange={(e) => handleSetting('social_youtube', e.target.value)}
                  placeholder="https://youtube.com/c/..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO & Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Default Meta Title</label>
                <Input
                  value={settings.default_meta_title || ''}
                  onChange={(e) => handleSetting('default_meta_title', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Default Meta Description</label>
                <Textarea
                  value={settings.default_meta_description || ''}
                  onChange={(e) => handleSetting('default_meta_description', e.target.value)}
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Default Meta Keywords</label>
                <Input
                  value={settings.default_meta_keywords || ''}
                  onChange={(e) => handleSetting('default_meta_keywords', e.target.value)}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Google Analytics ID</label>
                  <Input
                    value={settings.google_analytics_id || ''}
                    onChange={(e) => handleSetting('google_analytics_id', e.target.value)}
                    placeholder="GA-XXXXXXXXX-X"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Search Console ID</label>
                  <Input
                    value={settings.google_search_console_id || ''}
                    onChange={(e) => handleSetting('google_search_console_id', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Site Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="enable_chat_widget"
                    checked={settings.enable_chat_widget === 'true'}
                    onChange={(e) => handleSetting('enable_chat_widget', e.target.checked ? 'true' : 'false')}
                  />
                  <label htmlFor="enable_chat_widget" className="text-sm font-medium">
                    Enable Chat Widget
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="enable_newsletter"
                    checked={settings.enable_newsletter === 'true'}
                    onChange={(e) => handleSetting('enable_newsletter', e.target.checked ? 'true' : 'false')}
                  />
                  <label htmlFor="enable_newsletter" className="text-sm font-medium">
                    Enable Newsletter Signup
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="enable_blog"
                    checked={settings.enable_blog === 'true'}
                    onChange={(e) => handleSetting('enable_blog', e.target.checked ? 'true' : 'false')}
                  />
                  <label htmlFor="enable_blog" className="text-sm font-medium">
                    Enable Blog Section
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="maintenance_mode"
                    checked={settings.maintenance_mode === 'true'}
                    onChange={(e) => handleSetting('maintenance_mode', e.target.checked ? 'true' : 'false')}
                  />
                  <label htmlFor="maintenance_mode" className="text-sm font-medium">
                    Maintenance Mode
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}