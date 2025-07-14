// Database abstraction layer for dual Supabase/MySQL support
import { supabase } from '@/integrations/supabase/client';

// Configuration to determine which database to use
interface DatabaseConfig {
  type: 'supabase' | 'mysql';
  apiUrl?: string; // For MySQL PHP API
}

// Get database configuration from environment or localStorage
function getDatabaseConfig(): DatabaseConfig {
  const stored = localStorage.getItem('database_config');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.warn('Invalid database config in localStorage');
    }
  }
  
  // Default to Supabase
  return { type: 'supabase' };
}

// Generic database response interface
interface DatabaseResponse<T = any> {
  data: T[] | T | null;
  error: any;
  count?: number;
}

// Database abstraction class
class DatabaseClient {
  private config: DatabaseConfig;

  constructor() {
    this.config = getDatabaseConfig();
  }

  // Update configuration
  setConfig(config: DatabaseConfig) {
    this.config = config;
    localStorage.setItem('database_config', JSON.stringify(config));
  }

  // Generic select method
  async select(table: string, options: {
    columns?: string;
    filters?: Record<string, any>;
    orderBy?: string;
    limit?: number;
    single?: boolean;
  } = {}): Promise<DatabaseResponse> {
    if (this.config.type === 'supabase') {
      return this.supabaseSelect(table, options);
    } else {
      return this.mysqlSelect(table, options);
    }
  }

  // Generic insert method
  async insert(table: string, data: any | any[]): Promise<DatabaseResponse> {
    if (this.config.type === 'supabase') {
      return this.supabaseInsert(table, data);
    } else {
      return this.mysqlInsert(table, data);
    }
  }

  // Generic update method
  async update(table: string, data: any, filters: Record<string, any>): Promise<DatabaseResponse> {
    if (this.config.type === 'supabase') {
      return this.supabaseUpdate(table, data, filters);
    } else {
      return this.mysqlUpdate(table, data, filters);
    }
  }

  // Generic upsert method
  async upsert(table: string, data: any | any[], options: { onConflict?: string } = {}): Promise<DatabaseResponse> {
    if (this.config.type === 'supabase') {
      return this.supabaseUpsert(table, data, options);
    } else {
      return this.mysqlUpsert(table, data, options);
    }
  }

  // Generic delete method
  async delete(table: string, filters: Record<string, any>): Promise<DatabaseResponse> {
    if (this.config.type === 'supabase') {
      return this.supabaseDelete(table, filters);
    } else {
      return this.mysqlDelete(table, filters);
    }
  }

  // Storage methods
  async uploadFile(bucket: string, path: string, file: File | Blob): Promise<DatabaseResponse> {
    if (this.config.type === 'supabase') {
      return this.supabaseUpload(bucket, path, file);
    } else {
      return this.mysqlUpload(bucket, path, file);
    }
  }

  async downloadFile(bucket: string, path: string): Promise<DatabaseResponse> {
    if (this.config.type === 'supabase') {
      return this.supabaseDownload(bucket, path);
    } else {
      return this.mysqlDownload(bucket, path);
    }
  }

  async deleteFile(bucket: string, paths: string[]): Promise<DatabaseResponse> {
    if (this.config.type === 'supabase') {
      return this.supabaseDeleteFile(bucket, paths);
    } else {
      return this.mysqlDeleteFile(bucket, paths);
    }
  }

  getPublicUrl(bucket: string, path: string): string {
    if (this.config.type === 'supabase') {
      const { data } = supabase.storage.from(bucket).getPublicUrl(path);
      return data.publicUrl;
    } else {
      return `${this.config.apiUrl}/storage/${bucket}/${path}`;
    }
  }

  // Supabase implementations
  private async supabaseSelect(table: string, options: any): Promise<DatabaseResponse> {
    try {
      let query = (supabase as any).from(table).select(options.columns || '*');
      
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          query = query.eq(key, value);
        });
      }
      
      if (options.orderBy) {
        query = query.order(options.orderBy);
      }
      
      if (options.limit) {
        query = query.limit(options.limit);
      }
      
      if (options.single) {
        query = query.single();
      }
      
      const result = await query;
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async supabaseInsert(table: string, data: any): Promise<DatabaseResponse> {
    try {
      const result = await (supabase as any).from(table).insert(data);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async supabaseUpdate(table: string, data: any, filters: Record<string, any>): Promise<DatabaseResponse> {
    try {
      let query = (supabase as any).from(table).update(data);
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
      const result = await query;
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async supabaseUpsert(table: string, data: any, options: any): Promise<DatabaseResponse> {
    try {
      const result = await (supabase as any).from(table).upsert(data, options);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async supabaseDelete(table: string, filters: Record<string, any>): Promise<DatabaseResponse> {
    try {
      let query = (supabase as any).from(table).delete();
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
      const result = await query;
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async supabaseUpload(bucket: string, path: string, file: File | Blob): Promise<DatabaseResponse> {
    try {
      const result = await supabase.storage.from(bucket).upload(path, file);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async supabaseDownload(bucket: string, path: string): Promise<DatabaseResponse> {
    try {
      const result = await supabase.storage.from(bucket).download(path);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async supabaseDeleteFile(bucket: string, paths: string[]): Promise<DatabaseResponse> {
    try {
      const result = await supabase.storage.from(bucket).remove(paths);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // MySQL implementations (PHP API calls)
  private async mysqlSelect(table: string, options: any): Promise<DatabaseResponse> {
    try {
      const params = new URLSearchParams();
      params.append('table', table);
      params.append('action', 'select');
      
      if (options.columns) params.append('columns', options.columns);
      if (options.filters) params.append('filters', JSON.stringify(options.filters));
      if (options.orderBy) params.append('orderBy', options.orderBy);
      if (options.limit) params.append('limit', options.limit.toString());
      if (options.single) params.append('single', 'true');

      const response = await fetch(`${this.config.apiUrl}/api/database.php?${params}`);
      const result = await response.json();
      
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async mysqlInsert(table: string, data: any): Promise<DatabaseResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/api/database.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ table, action: 'insert', data })
      });
      const result = await response.json();
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async mysqlUpdate(table: string, data: any, filters: Record<string, any>): Promise<DatabaseResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/api/database.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ table, action: 'update', data, filters })
      });
      const result = await response.json();
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async mysqlUpsert(table: string, data: any, options: any): Promise<DatabaseResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/api/database.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ table, action: 'upsert', data, options })
      });
      const result = await response.json();
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async mysqlDelete(table: string, filters: Record<string, any>): Promise<DatabaseResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/api/database.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ table, action: 'delete', filters })
      });
      const result = await response.json();
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async mysqlUpload(bucket: string, path: string, file: File | Blob): Promise<DatabaseResponse> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('bucket', bucket);
      formData.append('path', path);

      const response = await fetch(`${this.config.apiUrl}/api/upload.php`, {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async mysqlDownload(bucket: string, path: string): Promise<DatabaseResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/api/download.php?bucket=${bucket}&path=${encodeURIComponent(path)}`);
      const blob = await response.blob();
      return { data: blob, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  private async mysqlDeleteFile(bucket: string, paths: string[]): Promise<DatabaseResponse> {
    try {
      const response = await fetch(`${this.config.apiUrl}/api/delete-files.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bucket, paths })
      });
      const result = await response.json();
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }
}

// Export singleton instance
export const db = new DatabaseClient();
export default db;