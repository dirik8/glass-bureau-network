import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ 
  children, 
  redirectTo = '/admin/login',
  requireAuth = true 
}) => {
  const { user, isAdmin, loading } = useAuth();

  console.log('AdminProtectedRoute: Auth state check', { 
    user: user ? 'exists' : 'null', 
    isAdmin, 
    loading,
    requireAuth 
  });

  // Show loading state while checking authentication
  if (loading) {
    console.log('AdminProtectedRoute: Showing loading state');
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
            <CardTitle>Checking Access</CardTitle>
            <CardDescription>Verifying admin permissions...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // For routes that require authentication
  if (requireAuth) {
    if (!user) {
      console.log('AdminProtectedRoute: No user found, redirecting to login');
      return <Navigate to={redirectTo} replace />;
    }
    
    if (!isAdmin) {
      console.log('AdminProtectedRoute: User is not admin, redirecting to login');
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>You don't have admin privileges to access this area.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <button
                onClick={() => window.location.href = redirectTo}
                className="text-primary hover:underline"
              >
                Go to Login
              </button>
            </CardContent>
          </Card>
        </div>
      );
    }
  }

  // For routes that should be hidden from search engines but don't require auth
  // (like setup pages that should be admin-only but don't have formal auth)
  if (!requireAuth) {
    console.log('AdminProtectedRoute: Auth not required, showing content');
    return (
      <>
        {children}
      </>
    );
  }

  console.log('AdminProtectedRoute: All checks passed, showing protected content');
  return <>{children}</>;
};

export default AdminProtectedRoute;