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
    // Starting admin creation process
    
    // Check if admin already exists
    const { data: existingAdmins, error: checkError } = await supabase
      .from('admin_users')
      .select('*')
      .limit(1);

    if (checkError) {
      console.error('AdminSetup: Error checking existing admins:', checkError);
      return {
        success: false,
        message: `Failed to check existing admins: ${checkError.message}`
      };
    }

    if (existingAdmins && existingAdmins.length > 0) {
      return {
        success: false,
        message: 'Admin user already exists'
      };
    }

    // Generate secure admin credentials
    const adminEmail = `admin@${window.location.hostname || 'example.com'}`;
    // Use environment-based password or generate a secure random one
    const adminPassword = crypto.randomUUID().substring(0, 12) + 'A1!';

    // Creating Supabase Auth user
    
    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: adminEmail,
      password: adminPassword,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/dashboard`
      }
    });

    if (authError) {
      console.error('AdminSetup: Auth creation error:', authError);
      return {
        success: false,
        message: `Failed to create admin user: ${authError.message}`
      };
    }

    if (!authData.user) {
      console.error('AdminSetup: No user data returned from auth');
      return {
        success: false,
        message: 'Failed to create admin user: No user data returned'
      };
    }

    // Auth user created, linking to admin_users table

    // Use the new link_admin_user function to link the auth user to admin_users record
    const { data: linkResult, error: linkError } = await supabase.rpc('link_admin_user', {
      auth_user_id: authData.user.id
    });

    if (linkError) {
      console.error('AdminSetup: Error linking admin user:', linkError);
      return {
        success: false,
        message: `Failed to link admin record: ${linkError.message}`
      };
    }

    if (!linkResult) {
      console.error('AdminSetup: Failed to link admin user - no record updated');
      return {
        success: false,
        message: 'Failed to link admin record: No admin record found to update'
      };
    }

    // Admin user created and linked successfully

    return {
      success: true,
      message: 'Admin user created successfully',
      adminCredentials: {
        email: adminEmail,
        password: adminPassword
      }
    };

  } catch (error) {
    console.error('AdminSetup: Unexpected error:', error);
    return {
      success: false,
      message: `Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

export const checkAdminExists = async (): Promise<boolean> => {
  try {
    // Checking if admin exists
    
    const { data, error } = await supabase
      .from('admin_users')
      .select('id, user_id')
      .limit(1);

    if (error) {
      console.error('AdminSetup: Error checking admin existence:', error);
      return false;
    }

    const exists = data && data.length > 0;
    
    return exists;
  } catch (error) {
    console.error('AdminSetup: Error checking admin existence:', error);
    return false;
  }
};