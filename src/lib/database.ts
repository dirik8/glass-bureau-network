
// Simplified database abstraction layer - Supabase only
import { supabase } from '@/integrations/supabase/client';

// Generic database response interface
interface DatabaseResponse<T = any> {
  data: T[] | T | null;
  error: any;
  count?: number;
}

// Database abstraction class - Supabase only
class DatabaseClient {
  // Generic select method
  async select(table: string, options: {
    columns?: string;
    filters?: Record<string, any>;
    orderBy?: string;
    limit?: number;
    single?: boolean;
  } = {}): Promise<DatabaseResponse> {
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

  // Generic insert method
  async insert(table: string, data: any | any[]): Promise<DatabaseResponse> {
    try {
      const result = await (supabase as any).from(table).insert(data);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Generic update method
  async update(table: string, data: any, filters: Record<string, any>): Promise<DatabaseResponse> {
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

  // Generic upsert method
  async upsert(table: string, data: any | any[], options: { onConflict?: string } = {}): Promise<DatabaseResponse> {
    try {
      const result = await (supabase as any).from(table).upsert(data, options);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Generic delete method
  async delete(table: string, filters: Record<string, any>): Promise<DatabaseResponse> {
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

  // Storage methods
  async uploadFile(bucket: string, path: string, file: File | Blob): Promise<DatabaseResponse> {
    try {
      const result = await supabase.storage.from(bucket).upload(path, file);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  async downloadFile(bucket: string, path: string): Promise<DatabaseResponse> {
    try {
      const result = await supabase.storage.from(bucket).download(path);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  async deleteFile(bucket: string, paths: string[]): Promise<DatabaseResponse> {
    try {
      const result = await supabase.storage.from(bucket).remove(paths);
      return { data: result.data, error: result.error };
    } catch (error) {
      return { data: null, error };
    }
  }

  getPublicUrl(bucket: string, path: string): string {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  }
}

// Export singleton instance
export const db = new DatabaseClient();
export default db;
