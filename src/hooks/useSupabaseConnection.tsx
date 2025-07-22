import { useState, useEffect } from 'react';
import { DynamicSupabaseManager } from '@/lib/dynamicSupabase';
import { useToast } from '@/hooks/use-toast';

interface ConnectionStatus {
  connected: boolean;
  testing: boolean;
  error: string | null;
  credentials: {
    url: string;
    key: string;
  };
}

export const useSupabaseConnection = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState<ConnectionStatus>({
    connected: false,
    testing: false,
    error: null,
    credentials: { url: '', key: '' }
  });

  useEffect(() => {
    // Load current credentials on mount
    loadCurrentCredentials();
  }, []);

  const loadCurrentCredentials = () => {
    const credentials = DynamicSupabaseManager.getCurrentCredentials();
    setStatus(prev => ({
      ...prev,
      credentials
    }));
  };

  const testConnection = async (url: string, key: string): Promise<boolean> => {
    setStatus(prev => ({ ...prev, testing: true, error: null }));
    
    try {
      const result = await DynamicSupabaseManager.testConnection(url, key);
      
      if (result.success) {
        setStatus(prev => ({
          ...prev,
          connected: true,
          testing: false,
          credentials: { url, key }
        }));
        
        toast({
          title: "Connection Successful",
          description: "Successfully connected to Supabase project"
        });
        
        return true;
      } else {
        setStatus(prev => ({
          ...prev,
          connected: false,
          testing: false,
          error: result.error || 'Connection failed'
        }));
        
        toast({
          title: "Connection Failed",
          description: result.error || "Unable to connect to Supabase",
          variant: "destructive"
        });
        
        return false;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      setStatus(prev => ({
        ...prev,
        connected: false,
        testing: false,
        error: errorMessage
      }));
      
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive"
      });
      
      return false;
    }
  };

  const saveCredentials = (url: string, key: string) => {
    try {
      DynamicSupabaseManager.updateCredentials(url, key);
      
      setStatus(prev => ({
        ...prev,
        credentials: { url, key }
      }));
      
      toast({
        title: "Credentials Saved",
        description: "Supabase configuration updated successfully"
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "Failed to save credentials",
        variant: "destructive"
      });
      
      return false;
    }
  };

  const resetToDefault = () => {
    DynamicSupabaseManager.resetToDefault();
    loadCurrentCredentials();
    
    toast({
      title: "Reset Complete",
      description: "Reverted to default Supabase configuration"
    });
  };

  const getClient = () => {
    return DynamicSupabaseManager.getClient();
  };

  return {
    status,
    testConnection,
    saveCredentials,
    resetToDefault,
    getClient,
    loadCurrentCredentials
  };
};