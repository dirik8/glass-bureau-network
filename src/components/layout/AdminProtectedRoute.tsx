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

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <CardTitle>Checking Access</CardTitle>
            <CardDescription>Verifying admin permissions...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // For routes that require authentication
  if (requireAuth) {
    if (!user || !isAdmin) {
      return <Navigate to={redirectTo} replace />;
    }
  }

  // For routes that should be hidden from search engines but don't require auth
  // (like setup pages that should be admin-only but don't have formal auth)
  if (!requireAuth) {
    // Could add IP-based restrictions or other security checks here
    return (
      <>
        {children}
      </>
    );
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;