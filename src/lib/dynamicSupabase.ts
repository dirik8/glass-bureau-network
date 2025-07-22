// Dynamic Supabase Client with Multi-Account Support
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

// AES Encryption for credentials storage
class CredentialManager {
  private static readonly KEY = 'supabase-creds-key';
  
  static encrypt(data: string): string {
    // Simple base64 encoding - in production, use proper AES encryption
    return btoa(JSON.stringify({ data, timestamp: Date.now() }));
  }
  
  static decrypt(encrypted: string): string | null {
    try {
      const parsed = JSON.parse(atob(encrypted));
      return parsed.data;
    } catch {
      return null;
    }
  }
  
  static store(url: string, key: string): void {
    const credentials = { url, key };
    const encrypted = this.encrypt(JSON.stringify(credentials));
    localStorage.setItem(this.KEY, encrypted);
  }
  
  static retrieve(): { url: string; key: string } | null {
    const encrypted = localStorage.getItem(this.KEY);
    if (!encrypted) return null;
    
    const decrypted = this.decrypt(encrypted);
    if (!decrypted) return null;
    
    try {
      return JSON.parse(decrypted);
    } catch {
      return null;
    }
  }
  
  static clear(): void {
    localStorage.removeItem(this.KEY);
  }
}

class DynamicSupabaseManager {
  private static instance: SupabaseClient<Database> | null = null;
  private static defaultUrl = "https://xdbsnzzgrowztbtgxsag.supabase.co";
  private static defaultKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYnNuenpncm93enRidGd4c2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzOTI2NTQsImV4cCI6MjA2Nzk2ODY1NH0.8RN0sO79t0BlZVf67JP3MEq8WpRZ_hOZoqFGCZMwGL8";
  
  static getClient(): SupabaseClient<Database> {
    if (this.instance) return this.instance;
    
    // Try to load custom credentials
    const credentials = CredentialManager.retrieve();
    
    const url = credentials?.url || this.defaultUrl;
    const key = credentials?.key || this.defaultKey;
    
    this.instance = createClient<Database>(url, key, {
      auth: {
        storage: localStorage,
        persistSession: true,
        autoRefreshToken: true,
      }
    });
    
    return this.instance;
  }
  
  static updateCredentials(url: string, key: string): SupabaseClient<Database> {
    // Store encrypted credentials
    CredentialManager.store(url, key);
    
    // Create new client instance
    this.instance = createClient<Database>(url, key, {
      auth: {
        storage: localStorage,
        persistSession: true,
        autoRefreshToken: true,
      }
    });
    
    return this.instance;
  }
  
  static resetToDefault(): SupabaseClient<Database> {
    CredentialManager.clear();
    this.instance = null;
    return this.getClient();
  }
  
  static getCurrentCredentials(): { url: string; key: string } {
    const credentials = CredentialManager.retrieve();
    return credentials || { url: this.defaultUrl, key: this.defaultKey };
  }
  
  static async testConnection(url: string, key: string): Promise<{ success: boolean; error?: string }> {
    try {
      const testClient = createClient(url, key);
      const { data, error } = await testClient.from('admin_users').select('count').limit(1);
      
      if (error && error.code === 'PGRST116') {
        // Table doesn't exist - that's fine for new setup
        return { success: true };
      }
      
      if (error) {
        return { success: false, error: error.message };
      }
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Connection failed' };
    }
  }
}

// Export the dynamic client
export const supabase = DynamicSupabaseManager.getClient();
export { DynamicSupabaseManager, CredentialManager };