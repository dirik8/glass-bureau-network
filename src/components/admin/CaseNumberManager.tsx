import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Hash, 
  Eye, 
  Search,
  Filter,
  RefreshCw,
  Copy,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { generateNewCaseNumber } from '@/utils/caseNumberGenerator';

interface CaseData {
  id: string;
  case_number: string;
  status: string;
  case_type: string;
  notes: string | null;
  user_details: any;
  progress_stages: any;
  created_at: string;
  updated_at: string;
}

interface NewCaseForm {
  case_number: string;
  status: string;
  case_type: string;
  notes: string;
  user_details: {
    name: string;
    email: string;
    phone: string;
  };
}

const CaseNumberManager: React.FC = () => {
  const [cases, setCases] = useState<CaseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingCase, setEditingCase] = useState<CaseData | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();

  const [formData, setFormData] = useState<NewCaseForm>({
    case_number: '',
    status: 'submitted',
    case_type: 'fraud',
    notes: '',
    user_details: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const caseTypes = [
    'fraud',
    'cybercrime',
    'identity_theft',
    'phishing',
    'romance_scam',
    'investment_scam',
    'tech_support_scam',
    'other'
  ];

  const caseStatuses = [
    'submitted',
    'under_review',
    'investigating',
    'pending_info',
    'resolved',
    'closed'
  ];

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('cases')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCases(data || []);
    } catch (error) {
      console.error('Error loading cases:', error);
      toast({
        title: 'Error',
        description: 'Failed to load cases',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      case_number: '',
      status: 'submitted',
      case_type: 'fraud',
      notes: '',
      user_details: {
        name: '',
        email: '',
        phone: ''
      }
    });
    setEditingCase(null);
    setShowAddForm(false);
  };

  const generateCaseNumber = () => {
    const newCaseNumber = generateNewCaseNumber();
    setFormData(prev => ({ ...prev, case_number: newCaseNumber }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.case_number || !formData.user_details.email) {
      toast({
        title: 'Error',
        description: 'Case number and email are required',
        variant: 'destructive'
      });
      return;
    }

    try {
      if (editingCase) {
        // Update existing case
        const { error } = await supabase
          .from('cases')
          .update({
            case_number: formData.case_number,
            status: formData.status,
            case_type: formData.case_type,
            notes: formData.notes,
            user_details: formData.user_details
          })
          .eq('id', editingCase.id);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Case updated successfully'
        });
      } else {
        // Create new case
        const { error } = await supabase
          .from('cases')
          .insert([{
            case_number: formData.case_number,
            status: formData.status,
            case_type: formData.case_type,
            notes: formData.notes,
            user_details: formData.user_details,
            progress_stages: []
          }]);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Case created successfully'
        });
      }

      loadCases();
      resetForm();
    } catch (error) {
      console.error('Error saving case:', error);
      toast({
        title: 'Error',
        description: 'Failed to save case',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (caseData: CaseData) => {
    setFormData({
      case_number: caseData.case_number,
      status: caseData.status,
      case_type: caseData.case_type,
      notes: caseData.notes || '',
      user_details: caseData.user_details
    });
    setEditingCase(caseData);
    setShowAddForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case?')) return;

    try {
      const { error } = await supabase
        .from('cases')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Case deleted successfully'
      });

      loadCases();
    } catch (error) {
      console.error('Error deleting case:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete case',
        variant: 'destructive'
      });
    }
  };

  const copyCaseNumber = (caseNumber: string) => {
    navigator.clipboard.writeText(caseNumber);
    toast({
      title: 'Copied',
      description: 'Case number copied to clipboard'
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'submitted': return 'secondary';
      case 'under_review': return 'default';
      case 'investigating': return 'destructive';
      case 'pending_info': return 'outline';
      case 'resolved': return 'default';
      case 'closed': return 'secondary';
      default: return 'secondary';
    }
  };

  const filteredCases = cases.filter(caseData => {
    const matchesSearch = caseData.case_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseData.user_details?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseData.user_details?.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || caseData.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Case Number Management</CardTitle>
          <CardDescription>Loading cases...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Hash className="h-5 w-5" />
                Case Number Management
              </CardTitle>
              <CardDescription>
                Generate, edit, and track case numbers for user submissions
              </CardDescription>
            </div>
            <Button 
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Case
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by case number, email, or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {caseStatuses.map(status => (
                  <SelectItem key={status} value={status}>
                    {status.replace('_', ' ').toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={loadCases}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          {/* Cases List */}
          {filteredCases.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {searchTerm || statusFilter !== 'all' 
                ? 'No cases match your search criteria.' 
                : 'No cases found. Create your first case to get started.'
              }
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCases.map((caseData) => (
                <Card key={caseData.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Hash className="h-4 w-4 text-muted-foreground" />
                          <span className="font-mono font-bold text-lg">
                            {caseData.case_number}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyCaseNumber(caseData.case_number)}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Badge variant={getStatusBadgeVariant(caseData.status)}>
                            {caseData.status.replace('_', ' ').toUpperCase()}
                          </Badge>
                          <Badge variant="outline">
                            {caseData.case_type.replace('_', ' ').toUpperCase()}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <p><strong>Name:</strong> {caseData.user_details?.name || 'N/A'}</p>
                            <p><strong>Email:</strong> {caseData.user_details?.email || 'N/A'}</p>
                          </div>
                          <div>
                            <p><strong>Phone:</strong> {caseData.user_details?.phone || 'N/A'}</p>
                            <p><strong>Created:</strong> {new Date(caseData.created_at).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        {caseData.notes && (
                          <div className="mt-2 p-2 bg-muted rounded text-sm">
                            <strong>Notes:</strong> {caseData.notes}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(caseData)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(caseData.id)}
                          className="text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add/Edit Case Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingCase ? 'Edit Case' : 'Create New Case'}
            </CardTitle>
            <CardDescription>
              {editingCase ? 'Update case information' : 'Generate a new case for tracking'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="case_number">Case Number</Label>
                  <div className="flex gap-2">
                    <Input
                      id="case_number"
                      value={formData.case_number}
                      onChange={(e) => setFormData(prev => ({ ...prev, case_number: e.target.value }))}
                      placeholder="LGN-2024-001234"
                      className="font-mono"
                      required
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={generateCaseNumber}
                    >
                      Generate
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select 
                    value={formData.status} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {caseStatuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status.replace('_', ' ').toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="case_type">Case Type</Label>
                  <Select 
                    value={formData.case_type} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, case_type: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {caseTypes.map(type => (
                        <SelectItem key={type} value={type}>
                          {type.replace('_', ' ').toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="user_email">Contact Email *</Label>
                  <Input
                    id="user_email"
                    type="email"
                    value={formData.user_details.email}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      user_details: { ...prev.user_details, email: e.target.value }
                    }))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="user_name">Contact Name</Label>
                  <Input
                    id="user_name"
                    value={formData.user_details.name}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      user_details: { ...prev.user_details, name: e.target.value }
                    }))}
                  />
                </div>

                <div>
                  <Label htmlFor="user_phone">Contact Phone</Label>
                  <Input
                    id="user_phone"
                    value={formData.user_details.phone}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      user_details: { ...prev.user_details, phone: e.target.value }
                    }))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Additional case information or notes..."
                  rows={3}
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit">
                  {editingCase ? 'Update Case' : 'Create Case'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CaseNumberManager;