import React, { useState } from 'react';
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

const AdminDashboard: React.FC = () => {
  const { toast } = useToast();
  const [pdfs, setPdfs] = useState([
    {
      id: 1,
      title: "Cryptocurrency Investigation Handbook",
      category: "Investigation Procedures",
      pages: 156,
      level: "Advanced",
      downloads: 1247,
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Blockchain Forensics Best Practices",
      category: "Investigation Procedures", 
      pages: 89,
      level: "Intermediate",
      downloads: 892,
      uploadDate: "2024-02-10"
    },
    {
      id: 3,
      title: "Digital Evidence Collection Guide",
      category: "Investigation Procedures",
      pages: 112,
      level: "Beginner",
      downloads: 2134,
      uploadDate: "2024-01-20"
    }
  ]);

  const [formSubmissions] = useState([
    {
      id: 1,
      type: "Contact Form",
      name: "John Smith",
      email: "john.smith@email.com",
      date: "2024-03-15",
      status: "pending"
    },
    {
      id: 2,
      type: "Report Cybercrime",
      name: "Sarah Johnson",
      email: "sarah.j@email.com", 
      date: "2024-03-14",
      status: "reviewed"
    }
  ]);

  const handleDeletePDF = (id: number) => {
    setPdfs(pdfs.filter(pdf => pdf.id !== id));
    toast({
      title: "PDF Deleted",
      description: "The PDF has been successfully deleted.",
    });
  };

  const handleUploadPDF = () => {
    toast({
      title: "Upload Feature",
      description: "PDF upload functionality will be available with Supabase integration.",
    });
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
                  <p className="text-sm text-government-gray-600">Total Downloads</p>
                  <p className="text-2xl font-bold text-fbi-blue">
                    {pdfs.reduce((sum, pdf) => sum + pdf.downloads, 0)}
                  </p>
                </div>
                <Download className="h-8 w-8 text-fbi-blue" />
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
                  <p className="text-sm text-government-gray-600">Active Cases</p>
                  <p className="text-2xl font-bold text-fbi-blue">24</p>
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
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>PDF Management</CardTitle>
                  <Button onClick={handleUploadPDF}>
                    <Plus className="mr-2 h-4 w-4" />
                    Upload New PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pdfs.map((pdf) => (
                    <div key={pdf.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{pdf.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-government-gray-600">
                          <span>{pdf.category}</span>
                          <span>{pdf.pages} pages</span>
                          <Badge variant="outline">{pdf.level}</Badge>
                          <span>{pdf.downloads} downloads</span>
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
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submissions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formSubmissions.map((submission) => (
                    <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{submission.type}</h3>
                        <p className="text-sm text-government-gray-600">
                          {submission.name} - {submission.email}
                        </p>
                        <p className="text-xs text-government-gray-500">{submission.date}</p>
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
            <Card>
              <CardHeader>
                <CardTitle>Supabase Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="supabase-url">Supabase URL</Label>
                  <Input id="supabase-url" placeholder="https://your-project.supabase.co" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supabase-key">Supabase Anon Key</Label>
                  <Input id="supabase-key" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service-role-key">Service Role Key</Label>
                  <Input id="service-role-key" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
                </div>
                <Button>
                  <Settings className="mr-2 h-4 w-4" />
                  Save Configuration
                </Button>
                <p className="text-sm text-government-gray-600 mt-4">
                  Configure your Supabase API keys to enable form submissions, PDF uploads, and database functionality.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;