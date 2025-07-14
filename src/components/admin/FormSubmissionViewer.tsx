import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, Search, Download, Filter, Mail, MailCheck, MailX } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormSubmission {
  id: string;
  form_type: string;
  data: any;
  status: string;
  submitted_at: string;
  email_sent: boolean;
  email_sent_at?: string;
  email_error?: string;
}

export function FormSubmissionViewer() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    loadSubmissions();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [submissions, searchTerm, statusFilter, typeFilter]);

  const loadSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading form submissions",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = submissions;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(submission => {
        const searchData = JSON.stringify(submission.data).toLowerCase();
        return searchData.includes(searchTerm.toLowerCase()) ||
               submission.form_type.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(submission => submission.status === statusFilter);
    }

    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(submission => submission.form_type === typeFilter);
    }

    setFilteredSubmissions(filtered);
  };

  const updateSubmissionStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('form_submissions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      setSubmissions(prev => 
        prev.map(sub => sub.id === id ? { ...sub, status } : sub)
      );
      
      toast({ title: "Status updated successfully" });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const exportSubmissions = () => {
    const csvContent = [
      // Header
      ['Date', 'Type', 'Status', 'Email Sent', 'Data'].join(','),
      // Data rows
      ...filteredSubmissions.map(submission => [
        new Date(submission.submitted_at).toLocaleString(),
        submission.form_type,
        submission.status,
        submission.email_sent ? 'Yes' : 'No',
        `"${JSON.stringify(submission.data).replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `form-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({ title: "Submissions exported successfully" });
  };

  const getFormTypes = () => {
    const types = [...new Set(submissions.map(sub => sub.form_type))];
    return types;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEmailStatusIcon = (submission: FormSubmission) => {
    if (submission.email_error) {
      return <span title={`Email Error: ${submission.email_error}`}><MailX className="h-4 w-4 text-red-600" /></span>;
    }
    if (submission.email_sent) {
      return <span title={`Email sent at ${new Date(submission.email_sent_at!).toLocaleString()}`}><MailCheck className="h-4 w-4 text-green-600" /></span>;
    }
    return <span title="Email not sent"><Mail className="h-4 w-4 text-gray-400" /></span>;
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading form submissions...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Form Submissions</h2>
        <div className="flex gap-2">
          <Button onClick={exportSubmissions} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search submissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-48">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {getFormTypes().map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{submissions.length}</div>
            <div className="text-sm text-muted-foreground">Total Submissions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {submissions.filter(s => s.status === 'pending').length}
            </div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {submissions.filter(s => s.email_sent).length}
            </div>
            <div className="text-sm text-muted-foreground">Emails Sent</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {submissions.filter(s => s.email_error).length}
            </div>
            <div className="text-sm text-muted-foreground">Email Errors</div>
          </CardContent>
        </Card>
      </div>

      {/* Submissions List */}
      <div className="space-y-4">
        {filteredSubmissions.map((submission) => (
          <Card key={submission.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{submission.form_type}</h3>
                    <Badge className={getStatusColor(submission.status)}>
                      {submission.status}
                    </Badge>
                    {getEmailStatusIcon(submission)}
                    <span className="text-sm text-muted-foreground">
                      {new Date(submission.submitted_at).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {submission.data.name && <span>Name: {submission.data.name}</span>}
                    {submission.data.email && <span className="ml-4">Email: {submission.data.email}</span>}
                    {submission.data.phone && <span className="ml-4">Phone: {submission.data.phone}</span>}
                  </div>
                  
                  {submission.data.message && (
                    <p className="text-sm mt-2 max-w-2xl">
                      {submission.data.message.length > 100 
                        ? `${submission.data.message.substring(0, 100)}...` 
                        : submission.data.message
                      }
                    </p>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Select 
                    value={submission.status} 
                    onValueChange={(value) => updateSubmissionStatus(submission.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Dialog open={isDialogOpen && selectedSubmission?.id === submission.id} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedSubmission(submission)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Form Submission Details</DialogTitle>
                      </DialogHeader>
                      {selectedSubmission && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <strong>Type:</strong> {selectedSubmission.form_type}
                            </div>
                            <div>
                              <strong>Status:</strong> <Badge className={getStatusColor(selectedSubmission.status)}>
                                {selectedSubmission.status}
                              </Badge>
                            </div>
                            <div>
                              <strong>Submitted:</strong> {new Date(selectedSubmission.submitted_at).toLocaleString()}
                            </div>
                            <div className="flex items-center gap-2">
                              <strong>Email Status:</strong> {getEmailStatusIcon(selectedSubmission)}
                              {selectedSubmission.email_sent ? 'Sent' : 'Not Sent'}
                            </div>
                          </div>
                          
                          {selectedSubmission.email_error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                              <strong className="text-red-800">Email Error:</strong>
                              <p className="text-red-700 text-sm mt-1">{selectedSubmission.email_error}</p>
                            </div>
                          )}
                          
                          <div>
                            <strong>Form Data:</strong>
                            <pre className="mt-2 p-3 bg-muted rounded-md text-sm overflow-auto">
                              {JSON.stringify(selectedSubmission.data, null, 2)}
                            </pre>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSubmissions.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No form submissions found matching your filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}