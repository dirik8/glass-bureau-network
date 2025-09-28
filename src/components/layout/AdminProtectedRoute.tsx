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

  // Auth state check for debugging in development only
  if (process.env.NODE_ENV === 'development') {
    console.log('AdminProtectedRoute: Auth state', { 
      hasUser: !!user, 
      isAdmin, 
      loading,
      requireAuth 
    });
  }

  // Show loading state while checking authentication
  if (loading) {
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
      return <Navigate to={redirectTo} replace />;
    }
    
    if (!isAdmin) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have admin permissions to access this area.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
            >
              Return to Home
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
    return (
      <>
        {children}
      </>
    );
  }

  // All checks passed, showing protected content
  return <>{children}</>;
};

export default AdminProtectedRoute;