import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Edit, Plus, Search, BarChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PageSEO {
  id: string;
  page_path: string;
  page_title: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_type?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  twitter_card?: string;
  canonical_url?: string;
  robots_directives?: string;
  schema_markup?: any;
  focus_keywords?: string[];
  is_active: boolean;
}

export function SEOManager() {
  const [seoData, setSeoData] = useState<PageSEO[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPage, setEditingPage] = useState<PageSEO | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    page_path: '',
    page_title: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    og_title: '',
    og_description: '',
    og_image: '',
    og_type: 'website',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    twitter_card: 'summary_large_image',
    canonical_url: '',
    robots_directives: 'index,follow',
    focus_keywords: '',
    is_active: true
  });

  useEffect(() => {
    loadSEOData();
  }, []);

  const loadSEOData = async () => {
    try {
      const { data, error } = await supabase
        .from('page_seo')
        .select('*')
        .order('page_path', { ascending: true });

      if (error) throw error;
      setSeoData(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading SEO data",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const seoPageData = {
        ...formData,
        meta_keywords: formData.meta_keywords ? formData.meta_keywords.split(',').map(s => s.trim()) : [],
        focus_keywords: formData.focus_keywords ? formData.focus_keywords.split(',').map(s => s.trim()) : []
      };

      if (editingPage) {
        const { error } = await supabase
          .from('page_seo')
          .update(seoPageData)
          .eq('id', editingPage.id);
        
        if (error) throw error;
        toast({ title: "SEO data updated successfully" });
      } else {
        const { error } = await supabase
          .from('page_seo')
          .insert([seoPageData]);
        
        if (error) throw error;
        toast({ title: "SEO data added successfully" });
      }

      setIsDialogOpen(false);
      resetForm();
      loadSEOData();
    } catch (error: any) {
      toast({
        title: "Error saving SEO data",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (page: PageSEO) => {
    setEditingPage(page);
    setFormData({
      page_path: page.page_path,
      page_title: page.page_title,
      meta_title: page.meta_title || '',
      meta_description: page.meta_description || '',
      meta_keywords: page.meta_keywords?.join(', ') || '',
      og_title: page.og_title || '',
      og_description: page.og_description || '',
      og_image: page.og_image || '',
      og_type: page.og_type || 'website',
      twitter_title: page.twitter_title || '',
      twitter_description: page.twitter_description || '',
      twitter_image: page.twitter_image || '',
      twitter_card: page.twitter_card || 'summary_large_image',
      canonical_url: page.canonical_url || '',
      robots_directives: page.robots_directives || 'index,follow',
      focus_keywords: page.focus_keywords?.join(', ') || '',
      is_active: page.is_active
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this SEO configuration?')) return;

    try {
      const { error } = await supabase
        .from('page_seo')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "SEO data deleted successfully" });
      loadSEOData();
    } catch (error: any) {
      toast({
        title: "Error deleting SEO data",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setFormData({
      page_path: '',
      page_title: '',
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      og_title: '',
      og_description: '',
      og_image: '',
      og_type: 'website',
      twitter_title: '',
      twitter_description: '',
      twitter_image: '',
      twitter_card: 'summary_large_image',
      canonical_url: '',
      robots_directives: 'index,follow',
      focus_keywords: '',
      is_active: true
    });
    setEditingPage(null);
    setActiveTab('basic');
  };

  const getSEOScore = (page: PageSEO) => {
    let score = 0;
    const checks = [
      page.meta_title && page.meta_title.length >= 30 && page.meta_title.length <= 60,
      page.meta_description && page.meta_description.length >= 120 && page.meta_description.length <= 160,
      page.focus_keywords && page.focus_keywords.length > 0,
      page.og_title,
      page.og_description,
      page.og_image,
      page.canonical_url,
      page.robots_directives === 'index,follow'
    ];
    
    score = (checks.filter(Boolean).length / checks.length) * 100;
    return Math.round(score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading SEO data...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">SEO Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Page SEO
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingPage ? 'Edit Page SEO' : 'Add Page SEO'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="meta">Meta Tags</TabsTrigger>
                  <TabsTrigger value="social">Social Media</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Page Path *</label>
                      <Input
                        value={formData.page_path}
                        onChange={(e) => setFormData(prev => ({ ...prev, page_path: e.target.value }))}
                        placeholder="/about"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Page Title *</label>
                      <Input
                        value={formData.page_title}
                        onChange={(e) => setFormData(prev => ({ ...prev, page_title: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Focus Keywords (comma-separated)</label>
                    <Input
                      value={formData.focus_keywords}
                      onChange={(e) => setFormData(prev => ({ ...prev, focus_keywords: e.target.value }))}
                      placeholder="cryptocurrency investigation, blockchain forensics"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_active"
                      checked={formData.is_active}
                      onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                    />
                    <label htmlFor="is_active" className="text-sm font-medium">Active</label>
                  </div>
                </TabsContent>

                <TabsContent value="meta" className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Meta Title (30-60 chars)</label>
                    <Input
                      value={formData.meta_title}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                      maxLength={60}
                    />
                    <span className="text-xs text-muted-foreground">
                      {formData.meta_title.length}/60 characters
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Meta Description (120-160 chars)</label>
                    <Textarea
                      value={formData.meta_description}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                      maxLength={160}
                      rows={3}
                    />
                    <span className="text-xs text-muted-foreground">
                      {formData.meta_description.length}/160 characters
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Meta Keywords (comma-separated)</label>
                    <Input
                      value={formData.meta_keywords}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_keywords: e.target.value }))}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="social" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Open Graph (Facebook)</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">OG Title</label>
                        <Input
                          value={formData.og_title}
                          onChange={(e) => setFormData(prev => ({ ...prev, og_title: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">OG Type</label>
                        <Input
                          value={formData.og_type}
                          onChange={(e) => setFormData(prev => ({ ...prev, og_type: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">OG Description</label>
                      <Textarea
                        value={formData.og_description}
                        onChange={(e) => setFormData(prev => ({ ...prev, og_description: e.target.value }))}
                        rows={2}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">OG Image URL</label>
                      <Input
                        value={formData.og_image}
                        onChange={(e) => setFormData(prev => ({ ...prev, og_image: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-4 pt-6">
                    <h4 className="font-medium">Twitter Cards</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Twitter Title</label>
                        <Input
                          value={formData.twitter_title}
                          onChange={(e) => setFormData(prev => ({ ...prev, twitter_title: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Twitter Card Type</label>
                        <select
                          value={formData.twitter_card}
                          onChange={(e) => setFormData(prev => ({ ...prev, twitter_card: e.target.value }))}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="summary">Summary</option>
                          <option value="summary_large_image">Summary Large Image</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Twitter Description</label>
                      <Textarea
                        value={formData.twitter_description}
                        onChange={(e) => setFormData(prev => ({ ...prev, twitter_description: e.target.value }))}
                        rows={2}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Twitter Image URL</label>
                      <Input
                        value={formData.twitter_image}
                        onChange={(e) => setFormData(prev => ({ ...prev, twitter_image: e.target.value }))}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Canonical URL</label>
                    <Input
                      value={formData.canonical_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, canonical_url: e.target.value }))}
                      placeholder="https://example.com/page"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Robots Directives</label>
                    <select
                      value={formData.robots_directives}
                      onChange={(e) => setFormData(prev => ({ ...prev, robots_directives: e.target.value }))}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="index,follow">Index, Follow</option>
                      <option value="index,nofollow">Index, No Follow</option>
                      <option value="noindex,follow">No Index, Follow</option>
                      <option value="noindex,nofollow">No Index, No Follow</option>
                    </select>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex gap-2 pt-6 border-t">
                <Button type="submit">
                  {editingPage ? 'Update' : 'Create'} SEO Configuration
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {seoData.map((page) => {
          const seoScore = getSEOScore(page);
          return (
            <Card key={page.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-semibold text-lg">{page.page_title}</h3>
                      <Badge variant="outline">{page.page_path}</Badge>
                      <Badge variant={page.is_active ? "default" : "secondary"}>
                        {page.is_active ? "Active" : "Inactive"}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <BarChart className="h-4 w-4" />
                        <span className={`font-medium ${getScoreColor(seoScore)}`}>
                          SEO Score: {seoScore}%
                        </span>
                      </div>
                    </div>
                    
                    {page.meta_description && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {page.meta_description}
                      </p>
                    )}
                    
                    {page.focus_keywords && page.focus_keywords.length > 0 && (
                      <div className="flex gap-1 flex-wrap">
                        {page.focus_keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(page)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(page.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}