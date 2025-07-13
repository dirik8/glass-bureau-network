import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Upload, 
  Download, 
  Trash2, 
  Edit, 
  Users, 
  BarChart3, 
  Settings,
  Plus,
  Eye
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { PDFUploadManager } from '@/components/PDFUploadManager';
import { DynamicSupabaseConfig } from '@/components/DynamicSupabaseConfig';

const AdminDashboard: React.FC = () => {
  const [pdfs, setPdfs] = useState<any[]>([]);
  const [formSubmissions, setFormSubmissions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Load PDFs
      const { data: pdfData } = await supabase
        .from('pdfs')
        .select('*')
        .order('created_at', { ascending: false });

      // Load form submissions
      const { data: submissionData } = await supabase
        .from('form_submissions')
        .select('*')
        .order('submitted_at', { ascending: false });

      setPdfs(pdfData || []);
      setFormSubmissions(submissionData || []);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load dashboard data',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePDF = async (id: string) => {
    try {
      const pdf = pdfs.find(p => p.id === id);
      if (!pdf) return;

      // Delete from storage
      await supabase.storage
        .from('pdfs')
        .remove([pdf.file_path]);

      // Delete from database
      await supabase
        .from('pdfs')
        .delete()
        .eq('id', id);

      setPdfs(pdfs.filter(pdf => pdf.id !== id));
      toast({
        title: "PDF Deleted",
        description: "The PDF has been removed from the system.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete PDF",
        variant: "destructive"
      });
    }
  };

  const handleUploadPDF = () => {
    loadData(); // Refresh data after upload
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-fbi-blue mb-2">Admin Dashboard</h1>
          <p className="text-government-gray-600">LGN Cybercrime Division - Administrative Panel</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-government-gray-600">Total PDFs</p>
                  <p className="text-2xl font-bold text-fbi-blue">{pdfs.length}</p>
                </div>
                <FileText className="h-8 w-8 text-fbi-blue" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-government-gray-600">Form Submissions</p>
                  <p className="text-2xl font-bold text-fbi-blue">{formSubmissions.length}</p>
                </div>
                <Users className="h-8 w-8 text-fbi-blue" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-government-gray-600">Storage Used</p>
                  <p className="text-2xl font-bold text-fbi-blue">1.2GB</p>
                </div>
                <Upload className="h-8 w-8 text-fbi-blue" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-government-gray-600">System Status</p>
                  <p className="text-2xl font-bold text-green-600">Online</p>
                </div>
                <BarChart3 className="h-8 w-8 text-fbi-blue" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pdfs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pdfs">PDF Management</TabsTrigger>
            <TabsTrigger value="submissions">Form Submissions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="pdfs" className="space-y-6">
            <PDFUploadManager />
            
            <Card>
              <CardHeader>
                <CardTitle>PDF Management</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8">
                    <p className="text-government-gray-600">Loading PDFs...</p>
                  </div>
                ) : pdfs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-government-gray-600">No PDFs uploaded yet. Use the upload manager above to add some.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pdfs.map((pdf) => (
                      <div key={pdf.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold">{pdf.title}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-government-gray-600">
                            <span>{pdf.category}</span>
                            <span>{pdf.pages} pages</span>
                            <Badge variant="outline">{pdf.level}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDeletePDF(pdf.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submissions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8">
                    <p className="text-government-gray-600">Loading submissions...</p>
                  </div>
                ) : formSubmissions.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-government-gray-600">No form submissions yet.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {formSubmissions.map((submission) => (
                      <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{submission.form_type}</h3>
                          <p className="text-sm text-government-gray-600">
                            {submission.data?.name || submission.data?.email || 'Anonymous'}
                          </p>
                          <p className="text-xs text-government-gray-500">
                            {new Date(submission.submitted_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={submission.status === 'pending' ? 'secondary' : 'outline'}>
                            {submission.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-government-gray-600">
                  Analytics features will be available with Supabase integration.
                  This will include download statistics, user engagement metrics, and performance data.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <DynamicSupabaseConfig />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;