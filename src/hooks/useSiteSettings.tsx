import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SiteSettings {
  [key: string]: string;
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await supabase
        .from('site_settings')
        .select('key, value');
      
      if (data) {
        const settingsObj = data.reduce((acc, item) => {
          acc[item.key] = item.value;
          return acc;
        }, {} as SiteSettings);
        setSettings(settingsObj);
      }
    } catch (error) {
      console.error('Error fetching site settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: string, value: string) => {
    const { error } = await supabase
      .from('site_settings')
      .upsert({ key, value });
    
    if (!error) {
      setSettings(prev => ({ ...prev, [key]: value }));
    }
    
    return { error };
  };

  return {
    settings,
    loading,
    updateSetting,
    refetch: fetchSettings,
  };
}