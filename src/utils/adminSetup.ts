import { supabase } from '@/integrations/supabase/client';

export interface AdminSetupResult {
  success: boolean;
  message: string;
  adminCredentials?: {
    email: string;
    password: string;
  };
}

export const createInitialAdmin = async (): Promise<AdminSetupResult> => {
  try {
    // Check if admin already exists
    const { data: existingAdmins } = await supabase
      .from('admin_users')
      .select('*')
      .limit(1);

    if (existingAdmins && existingAdmins.length > 0) {
      return {
        success: false,
        message: 'Admin user already exists'
      };
    }

    // Generate admin credentials
    const adminEmail = 'admin@federalinvestigationbureau.com';
    const adminPassword = 'AdminPass2024!';

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: adminEmail,
      password: adminPassword,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/dashboard`
      }
    });

    if (authError) {
      return {
        success: false,
        message: `Failed to create admin user: ${authError.message}`
      };
    }

    if (!authData.user) {
      return {
        success: false,
        message: 'Failed to create admin user: No user data returned'
      };
    }

    // Create admin record in admin_users table
    const { error: adminError } = await supabase
      .from('admin_users')
      .insert({
        user_id: authData.user.id,
        username: 'admin',
        password_hash: 'managed_by_supabase_auth', // Placeholder since we use Supabase Auth
        role: 'admin'
      });

    if (adminError) {
      return {
        success: false,
        message: `Failed to create admin record: ${adminError.message}`
      };
    }

    return {
      success: true,
      message: 'Admin user created successfully',
      adminCredentials: {
        email: adminEmail,
        password: adminPassword
      }
    };

  } catch (error) {
    return {
      success: false,
      message: `Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

export const checkAdminExists = async (): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('admin_users')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Error checking admin existence:', error);
      return false;
    }

    return data && data.length > 0;
  } catch (error) {
    console.error('Error checking admin existence:', error);
    return false;
  }
};