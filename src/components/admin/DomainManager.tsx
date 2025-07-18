
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Globe, Plus, Trash2, CheckCircle, XCircle } from 'lucide-react';

interface Domain {
  id: string;
  domain: string;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
}

export function DomainManager() {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [newDomain, setNewDomain] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadDomains();
  }, []);

  const loadDomains = async () => {
    try {
      const { data } = await supabase
        .from('domains')
        .select('*')
        .order('created_at', { ascending: false });
      
      setDomains(data || []);
    } catch (error) {
      console.error('Error loading domains:', error);
      toast({
        title: 'Error',
        description: 'Failed to load domains',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addDomain = async () => {
    if (!newDomain.trim()) return;

    setIsAdding(true);
    try {
      const { error } = await supabase
        .from('domains')
        .insert({
          domain: newDomain.trim(),
          is_verified: false,
          is_active: true
        });

      if (error) throw error;

      setNewDomain('');
      loadDomains();
      toast({
        title: 'Domain Added',
        description: 'Domain has been added successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add domain',
        variant: 'destructive'
      });
    } finally {
      setIsAdding(false);
    }
  };

  const deleteDomain = async (id: string) => {
    try {
      const { error } = await supabase
        .from('domains')
        .delete()
        .eq('id', id);

      if (error) throw error;

      loadDomains();
      toast({
        title: 'Domain Deleted',
        description: 'Domain has been removed',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete domain',
        variant: 'destructive'
      });
    }
  };

  const toggleDomainStatus = async (id: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('domains')
        .update({ is_active: !isActive })
        .eq('id', id);

      if (error) throw error;

      loadDomains();
      toast({
        title: 'Domain Updated',
        description: `Domain ${!isActive ? 'activated' : 'deactivated'}`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update domain',
        variant: 'destructive'
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Domain Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add New Domain */}
        <div className="flex gap-2">
          <div className="flex-1">
            <Label htmlFor="newDomain">Add New Domain</Label>
            <Input
              id="newDomain"
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
              placeholder="example.com"
              onKeyPress={(e) => e.key === 'Enter' && addDomain()}
            />
          </div>
          <div className="flex items-end">
            <Button 
              onClick={addDomain} 
              disabled={isAdding || !newDomain.trim()}
            >
              <Plus className="h-4 w-4 mr-2" />
              {isAdding ? 'Adding...' : 'Add Domain'}
            </Button>
          </div>
        </div>

        {/* Domains List */}
        <div className="space-y-3">
          <h3 className="font-medium">Configured Domains</h3>
          {isLoading ? (
            <p className="text-muted-foreground">Loading domains...</p>
          ) : domains.length === 0 ? (
            <p className="text-muted-foreground">No domains configured yet.</p>
          ) : (
            domains.map((domain) => (
              <div key={domain.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{domain.domain}</p>
                    <p className="text-sm text-muted-foreground">
                      Added {new Date(domain.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {domain.is_verified ? (
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <XCircle className="h-3 w-3 mr-1" />
                      Pending
                    </Badge>
                  )}
                  <Badge variant={domain.is_active ? "default" : "secondary"}>
                    {domain.is_active ? 'Active' : 'Inactive'}
                  </Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleDomainStatus(domain.id, domain.is_active)}
                  >
                    {domain.is_active ? 'Deactivate' : 'Activate'}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => deleteDomain(domain.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
