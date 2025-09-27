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
    console.log('AdminSetup: Starting admin creation process...');
    
    // Check if admin already exists
    const { data: existingAdmins, error: checkError } = await supabase
      .from('admin_users')
      .select('*')
      .limit(1);

    if (checkError) {
      console.error('AdminSetup: Error checking existing admins:', checkError);
      return {
        success: false,
        message: `Database error: ${checkError.message}`
      };
    }

    if (existingAdmins && existingAdmins.length > 0) {
      console.log('AdminSetup: Admin already exists');
      return {
        success: false,
        message: 'Admin user already exists'
      };
    }

    // Generate admin credentials
    const adminEmail = 'admin@federalinvestigationbureau.com';
    const adminPassword = 'AdminPass2024!';

    console.log('AdminSetup: Creating Supabase Auth user...');
    
    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: adminEmail,
      password: adminPassword,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/dashboard`
      }
    });

    if (authError) {
      console.error('AdminSetup: Supabase Auth error:', authError);
      return {
        success: false,
        message: `Failed to create admin user: ${authError.message}`
      };
    }

    if (!authData.user) {
      console.error('AdminSetup: No user data returned from Supabase Auth');
      return {
        success: false,
        message: 'Failed to create admin user: No user data returned'
      };
    }

    console.log('AdminSetup: Supabase Auth user created, linking to admin_users...');

    // Link the auth user to admin_users table using our database function
    const { data: linkResult, error: linkError } = await supabase.rpc('link_admin_user', {
      auth_user_id: authData.user.id
    });

    if (linkError) {
      console.error('AdminSetup: Error linking admin user:', linkError);
      return {
        success: false,
        message: `Failed to link admin user: ${linkError.message}`
      };
    }

    if (!linkResult) {
      console.error('AdminSetup: Failed to link admin user - no admin_users record found');
      return {
        success: false,
        message: 'Failed to link admin user: No admin record available for linking'
      };
    }

    console.log('AdminSetup: Admin user created and linked successfully');

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
    console.log('AdminSetup: Checking if admin exists...');
    
    const { data, error } = await supabase
      .from('admin_users')
      .select('id, user_id')
      .limit(1);

    if (error) {
      console.error('AdminSetup: Error checking admin existence:', error);
      return false;
    }

    const exists = data && data.length > 0;
    console.log('AdminSetup: Admin exists check result:', { exists, data });
    
    return exists;
  } catch (error) {
    console.error('AdminSetup: Unexpected error checking admin existence:', error);
    return false;
  }
};