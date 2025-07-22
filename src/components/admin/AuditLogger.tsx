import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Activity, Calendar, User, Shield, AlertTriangle } from 'lucide-react';

interface AuditLog {
  id: string;
  timestamp: Date;
  action: string;
  user: string;
  details: string;
  severity: 'info' | 'warning' | 'error';
  ip_address?: string;
}

const AuditLogger: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAuditLogs();
  }, []);

  const loadAuditLogs = async () => {
    setLoading(true);
    
    // Mock audit logs - in production, these would come from the database
    const mockLogs: AuditLog[] = [
      {
        id: '1',
        timestamp: new Date(),
        action: 'SUPABASE_CONFIG_UPDATE',
        user: 'admin@example.com',
        details: 'Updated Supabase credentials',
        severity: 'info',
        ip_address: '192.168.1.100'
      },
      {
        id: '2',
        timestamp: new Date(Date.now() - 3600000),
        action: 'SCHEMA_DEPLOYMENT',
        user: 'admin@example.com',
        details: 'Deployed database schema to new project',
        severity: 'info',
        ip_address: '192.168.1.100'
      },
      {
        id: '3',
        timestamp: new Date(Date.now() - 7200000),
        action: 'LOGIN_ATTEMPT',
        user: 'unknown',
        details: 'Failed login attempt from unauthorized IP',
        severity: 'warning',
        ip_address: '10.0.0.1'
      }
    ];
    
    setLogs(mockLogs);
    setLoading(false);
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case 'warning':
        return <Shield className="w-4 h-4 text-yellow-500" />;
      default:
        return <Activity className="w-4 h-4 text-blue-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'error':
        return 'destructive';
      case 'warning':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const filteredLogs = logs.filter(log => 
    log.action.toLowerCase().includes(filter.toLowerCase()) ||
    log.user.toLowerCase().includes(filter.toLowerCase()) ||
    log.details.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5" />
            <CardTitle>Audit Logs</CardTitle>
          </div>
          <Button onClick={loadAuditLogs} disabled={loading} size="sm">
            Refresh
          </Button>
        </div>
        <CardDescription>
          Track all administrative activities and security events
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Filter logs by action, user, or details..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredLogs.map((log) => (
            <div key={log.id} className="flex items-start space-x-3 p-3 border rounded-lg">
              <div className="mt-1">
                {getSeverityIcon(log.severity)}
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm">{log.action}</h4>
                  <Badge variant={getSeverityColor(log.severity) as any}>
                    {log.severity}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">{log.details}</p>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{log.user}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{log.timestamp.toLocaleString()}</span>
                  </div>
                  {log.ip_address && (
                    <div className="flex items-center space-x-1">
                      <Shield className="w-3 h-3" />
                      <span>{log.ip_address}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {filteredLogs.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No audit logs found
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AuditLogger;