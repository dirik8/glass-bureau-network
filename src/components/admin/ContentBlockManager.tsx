import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Plus, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentBlock {
  id: string;
  block_key: string;
  block_type: string;
  title?: string;
  subtitle?: string;
  content?: string;
  image_url?: string;
  link_url?: string;
  link_text?: string;
  is_active: boolean;
  display_order: number;
  page_path?: string;
  metadata?: any;
}

const BLOCK_TYPES = [
  { value: 'hero', label: 'Hero Section' },
  { value: 'service', label: 'Service Block' },
  { value: 'feature', label: 'Feature Block' },
  { value: 'cta', label: 'Call to Action' },
  { value: 'text', label: 'Text Block' },
  { value: 'image', label: 'Image Block' },
  { value: 'testimonial', label: 'Testimonial' },
  { value: 'stats', label: 'Statistics' },
  { value: 'faq', label: 'FAQ Item' }
];

export function ContentBlockManager() {
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBlock, setEditingBlock] = useState<ContentBlock | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    block_key: '',
    block_type: 'text',
    title: '',
    subtitle: '',
    content: '',
    image_url: '',
    link_url: '',
    link_text: '',
    page_path: '',
    display_order: 0,
    is_active: true
  });

  useEffect(() => {
    loadContentBlocks();
  }, []);

  const loadContentBlocks = async () => {
    try {
      const { data, error } = await supabase
        .from('content_blocks')
        .select('*')
        .order('page_path', { ascending: true })
        .order('display_order', { ascending: true });

      if (error) throw error;
      setContentBlocks(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading content blocks",
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
      if (editingBlock) {
        const { error } = await supabase
          .from('content_blocks')
          .update(formData)
          .eq('id', editingBlock.id);
        
        if (error) throw error;
        toast({ title: "Content block updated successfully" });
      } else {
        const { error } = await supabase
          .from('content_blocks')
          .insert([formData]);
        
        if (error) throw error;
        toast({ title: "Content block added successfully" });
      }

      setIsDialogOpen(false);
      resetForm();
      loadContentBlocks();
    } catch (error: any) {
      toast({
        title: "Error saving content block",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (block: ContentBlock) => {
    setEditingBlock(block);
    setFormData({
      block_key: block.block_key,
      block_type: block.block_type,
      title: block.title || '',
      subtitle: block.subtitle || '',
      content: block.content || '',
      image_url: block.image_url || '',
      link_url: block.link_url || '',
      link_text: block.link_text || '',
      page_path: block.page_path || '',
      display_order: block.display_order,
      is_active: block.is_active
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this content block?')) return;

    try {
      const { error } = await supabase
        .from('content_blocks')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Content block deleted successfully" });
      loadContentBlocks();
    } catch (error: any) {
      toast({
        title: "Error deleting content block",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setFormData({
      block_key: '',
      block_type: 'text',
      title: '',
      subtitle: '',
      content: '',
      image_url: '',
      link_url: '',
      link_text: '',
      page_path: '',
      display_order: contentBlocks.length,
      is_active: true
    });
    setEditingBlock(null);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `content-${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('pdfs')
        .upload(`content-images/${fileName}`, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('pdfs')
        .getPublicUrl(`content-images/${fileName}`);

      setFormData(prev => ({ ...prev, image_url: data.publicUrl }));
      toast({ title: "Image uploaded successfully" });
    } catch (error: any) {
      toast({
        title: "Error uploading image",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const groupedBlocks = contentBlocks.reduce((acc, block) => {
    const page = block.page_path || 'Global';
    if (!acc[page]) {
      acc[page] = [];
    }
    acc[page].push(block);
    return acc;
  }, {} as Record<string, ContentBlock[]>);

  if (loading) {
    return <div className="flex justify-center p-8">Loading content blocks...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Blocks</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Content Block
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingBlock ? 'Edit Content Block' : 'Add Content Block'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Block Key *</label>
                  <Input
                    value={formData.block_key}
                    onChange={(e) => setFormData(prev => ({ ...prev, block_key: e.target.value }))}
                    placeholder="hero-home, service-crypto-investigation"
                    required
                  />
                  <span className="text-xs text-muted-foreground">
                    Unique identifier for this content block
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Block Type *</label>
                  <select
                    value={formData.block_type}
                    onChange={(e) => setFormData(prev => ({ ...prev, block_type: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    {BLOCK_TYPES.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Page Path</label>
                  <Input
                    value={formData.page_path}
                    onChange={(e) => setFormData(prev => ({ ...prev, page_path: e.target.value }))}
                    placeholder="/ or /about (leave empty for global)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Display Order</label>
                  <Input
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, display_order: Number(e.target.value) }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subtitle</label>
                <Input
                  value={formData.subtitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  placeholder="Main content text..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image</label>
                <div className="flex gap-2">
                  <Input
                    value={formData.image_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                    placeholder="Image URL or upload below"
                  />
                  <label className="flex items-center gap-2 cursor-pointer bg-secondary px-3 py-2 rounded-md">
                    <Upload className="h-4 w-4" />
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Link URL</label>
                  <Input
                    value={formData.link_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, link_url: e.target.value }))}
                    placeholder="https://example.com or /contact"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Link Text</label>
                  <Input
                    value={formData.link_text}
                    onChange={(e) => setFormData(prev => ({ ...prev, link_text: e.target.value }))}
                    placeholder="Learn More, Contact Us"
                  />
                </div>
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

              <div className="flex gap-2 pt-4">
                <Button type="submit">
                  {editingBlock ? 'Update' : 'Create'} Content Block
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedBlocks).map(([page, blocks]) => (
          <div key={page} className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">
              {page === 'Global' ? 'Global Content Blocks' : `Page: ${page}`}
            </h3>
            <div className="grid gap-4">
              {blocks.map((block) => (
                <Card key={block.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium">{block.title || block.block_key}</h4>
                          <Badge variant="outline">{block.block_type}</Badge>
                          <Badge variant={block.is_active ? "default" : "secondary"}>
                            {block.is_active ? "Active" : "Inactive"}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Order: {block.display_order}
                          </span>
                        </div>
                        {block.subtitle && (
                          <p className="text-sm text-muted-foreground mb-1">{block.subtitle}</p>
                        )}
                        {block.content && (
                          <p className="text-sm mb-2 max-w-2xl">
                            {block.content.length > 150 
                              ? `${block.content.substring(0, 150)}...` 
                              : block.content
                            }
                          </p>
                        )}
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Key: {block.block_key}</span>
                          {block.link_url && <span>Link: {block.link_text || 'Yes'}</span>}
                          {block.image_url && <span>Has Image</span>}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(block)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(block.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}