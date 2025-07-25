import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormTemplate {
  id: string;
  form_type: string;
  name: string;
  fields: any;
  email_template?: string;
  success_message?: string;
  redirect_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export function FormTemplateManager() {
  const [templates, setTemplates] = useState<FormTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<FormTemplate | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    form_type: '',
    name: '',
    success_message: '',
    email_template: '',
    redirect_url: '',
    is_active: true
  });

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from('form_templates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading form templates",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setSelectedTemplate(null);
    setFormData({
      form_type: '',
      name: '',
      success_message: '',
      email_template: '',
      redirect_url: '',
      is_active: true
    });
    setIsEditMode(true);
    setIsDialogOpen(true);
  };

  const handleEdit = (template: FormTemplate) => {
    setSelectedTemplate(template);
    setFormData({
      form_type: template.form_type,
      name: template.name,
      success_message: template.success_message || '',
      email_template: template.email_template || '',
      redirect_url: template.redirect_url || '',
      is_active: template.is_active
    });
    setIsEditMode(true);
    setIsDialogOpen(true);
  };

  const handleView = (template: FormTemplate) => {
    setSelectedTemplate(template);
    setIsEditMode(false);
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    try {
      if (selectedTemplate) {
        // Update existing template
        const { error } = await supabase
          .from('form_templates')
          .update({
            form_type: formData.form_type,
            name: formData.name,
            success_message: formData.success_message,
            email_template: formData.email_template,
            redirect_url: formData.redirect_url,
            is_active: formData.is_active
          })
          .eq('id', selectedTemplate.id);

        if (error) throw error;
        toast({ title: "Template updated successfully" });
      } else {
        // Create new template
        const { error } = await supabase
          .from('form_templates')
          .insert({
            ...formData,
            fields: []
          });

        if (error) throw error;
        toast({ title: "Template created successfully" });
      }

      setIsDialogOpen(false);
      loadTemplates();
    } catch (error: any) {
      toast({
        title: "Error saving template",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (templateId: string) => {
    if (!confirm('Are you sure you want to delete this template?')) return;

    try {
      const { error } = await supabase
        .from('form_templates')
        .delete()
        .eq('id', templateId);

      if (error) throw error;
      
      toast({ title: "Template deleted successfully" });
      loadTemplates();
    } catch (error: any) {
      toast({
        title: "Error deleting template",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const toggleActive = async (templateId: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('form_templates')
        .update({ is_active: isActive })
        .eq('id', templateId);

      if (error) throw error;
      
      toast({ title: `Template ${isActive ? 'activated' : 'deactivated'} successfully` });
      loadTemplates();
    } catch (error: any) {
      toast({
        title: "Error updating template",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading form templates...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Form Templates</h2>
        <Button onClick={handleCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Create Template
        </Button>
      </div>

      <div className="grid gap-4">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{template.name}</h3>
                    <Badge variant={template.is_active ? "default" : "secondary"}>
                      {template.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Type: {template.form_type}
                    </span>
                  </div>
                  
                  {template.success_message && (
                    <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                      {template.success_message.length > 100 
                        ? `${template.success_message.substring(0, 100)}...` 
                        : template.success_message
                      }
                    </p>
                  )}
                </div>
                
                <div className="flex gap-2 items-center">
                  <Switch
                    checked={template.is_active}
                    onCheckedChange={(checked) => toggleActive(template.id, checked)}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleView(template)}
                  >
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(template)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(template.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {templates.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No form templates found. Create your first template to get started.</p>
          </CardContent>
        </Card>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isEditMode 
                ? (selectedTemplate ? 'Edit Form Template' : 'Create Form Template')
                : 'View Form Template'
              }
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="form_type">Form Type</Label>
                <Input
                  id="form_type"
                  value={isEditMode ? formData.form_type : selectedTemplate?.form_type || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, form_type: e.target.value }))}
                  disabled={!isEditMode}
                />
              </div>
              <div>
                <Label htmlFor="name">Template Name</Label>
                <Input
                  id="name"
                  value={isEditMode ? formData.name : selectedTemplate?.name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  disabled={!isEditMode}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="success_message">Success Message</Label>
              <Textarea
                id="success_message"
                rows={3}
                value={isEditMode ? formData.success_message : selectedTemplate?.success_message || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, success_message: e.target.value }))}
                disabled={!isEditMode}
                placeholder="Message shown to users after successful form submission"
              />
            </div>

            <div>
              <Label htmlFor="email_template">Email Template</Label>
              <Textarea
                id="email_template"
                rows={3}
                value={isEditMode ? formData.email_template : selectedTemplate?.email_template || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, email_template: e.target.value }))}
                disabled={!isEditMode}
                placeholder="Email template for notifications (use {{field_name}} for dynamic values)"
              />
            </div>

            <div>
              <Label htmlFor="redirect_url">Redirect URL (Optional)</Label>
              <Input
                id="redirect_url"
                value={isEditMode ? formData.redirect_url : selectedTemplate?.redirect_url || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, redirect_url: e.target.value }))}
                disabled={!isEditMode}
                placeholder="URL to redirect users after submission"
              />
            </div>

            {isEditMode && (
              <div className="flex items-center gap-2">
                <Switch
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                />
                <Label>Active</Label>
              </div>
            )}

            {!isEditMode && selectedTemplate && (
              <div>
                <Label>Template Details</Label>
                <pre className="mt-2 p-3 bg-muted rounded-md text-sm overflow-auto">
                  {JSON.stringify(selectedTemplate, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <DialogFooter>
            {isEditMode ? (
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}