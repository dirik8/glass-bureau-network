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
import { Plus, Edit, Trash2, Phone, Mail, MapPin, Star, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Contact {
  id: string;
  contact_type: string;
  label: string;
  value: string;
  description: string | null;
  is_primary: boolean;
  is_active: boolean;
  display_order: number;
  page_location: string;
  created_at: string;
  updated_at: string;
}

const ContactManager: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    contact_type: 'phone',
    label: '',
    value: '',
    description: '',
    is_primary: false,
    is_active: true,
    display_order: 0,
    page_location: 'all'
  });

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      console.error('Error loading contacts:', error);
      toast({
        title: 'Error',
        description: 'Failed to load contacts',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      contact_type: 'phone',
      label: '',
      value: '',
      description: '',
      is_primary: false,
      is_active: true,
      display_order: 0,
      page_location: 'all'
    });
    setEditingContact(null);
    setShowAddForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingContact) {
        // Update existing contact
        const { error } = await supabase
          .from('contacts')
          .update(formData)
          .eq('id', editingContact.id);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Contact updated successfully'
        });
      } else {
        // Create new contact
        const { error } = await supabase
          .from('contacts')
          .insert([formData]);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Contact created successfully'
        });
      }

      loadContacts();
      resetForm();
    } catch (error) {
      console.error('Error saving contact:', error);
      toast({
        title: 'Error',
        description: 'Failed to save contact',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (contact: Contact) => {
    setFormData({
      contact_type: contact.contact_type,
      label: contact.label,
      value: contact.value,
      description: contact.description || '',
      is_primary: contact.is_primary,
      is_active: contact.is_active,
      display_order: contact.display_order,
      page_location: contact.page_location
    });
    setEditingContact(contact);
    setShowAddForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Contact deleted successfully'
      });

      loadContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete contact',
        variant: 'destructive'
      });
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      loadContacts();
    } catch (error) {
      console.error('Error toggling contact status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update contact status',
        variant: 'destructive'
      });
    }
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'address': return <MapPin className="h-4 w-4" />;
      default: return <Phone className="h-4 w-4" />;
    }
  };

  const getContactsByType = (type: string) => {
    return contacts.filter(contact => contact.contact_type === type);
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contact Management</CardTitle>
          <CardDescription>Loading contacts...</CardDescription>
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
                <Phone className="h-5 w-5" />
                Contact Management
              </CardTitle>
              <CardDescription>
                Manage all contact information displayed across the website
              </CardDescription>
            </div>
            <Button 
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Contact
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Contacts</TabsTrigger>
              <TabsTrigger value="phone">Phone Numbers</TabsTrigger>
              <TabsTrigger value="email">Email Addresses</TabsTrigger>
              <TabsTrigger value="address">Addresses</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {contacts.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No contacts found. Add your first contact to get started.
                </div>
              ) : (
                <div className="grid gap-4">
                  {contacts.map((contact) => (
                    <Card key={contact.id} className={`${!contact.is_active ? 'opacity-60' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {getContactIcon(contact.contact_type)}
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{contact.label}</span>
                                {contact.is_primary && (
                                  <Badge variant="default" className="flex items-center gap-1">
                                    <Star className="h-3 w-3" />
                                    Primary
                                  </Badge>
                                )}
                                <Badge variant={contact.is_active ? "default" : "secondary"}>
                                  {contact.is_active ? 'Active' : 'Inactive'}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{contact.value}</p>
                              {contact.description && (
                                <p className="text-xs text-muted-foreground mt-1">{contact.description}</p>
                              )}
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {contact.page_location}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Order: {contact.display_order}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={contact.is_active}
                              onCheckedChange={() => toggleActive(contact.id, contact.is_active)}
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEdit(contact)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(contact.id)}
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
            </TabsContent>

            <TabsContent value="phone">
              <div className="grid gap-4">
                {getContactsByType('phone').map((contact) => (
                  <Card key={contact.id} className={`${!contact.is_active ? 'opacity-60' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{contact.label}</span>
                              {contact.is_primary && (
                                <Badge variant="default" className="flex items-center gap-1">
                                  <Star className="h-3 w-3" />
                                  Primary
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{contact.value}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={contact.is_active}
                            onCheckedChange={() => toggleActive(contact.id, contact.is_active)}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(contact)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="email">
              <div className="grid gap-4">
                {getContactsByType('email').map((contact) => (
                  <Card key={contact.id} className={`${!contact.is_active ? 'opacity-60' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{contact.label}</span>
                              {contact.is_primary && (
                                <Badge variant="default" className="flex items-center gap-1">
                                  <Star className="h-3 w-3" />
                                  Primary
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{contact.value}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={contact.is_active}
                            onCheckedChange={() => toggleActive(contact.id, contact.is_active)}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(contact)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="address">
              <div className="grid gap-4">
                {getContactsByType('address').map((contact) => (
                  <Card key={contact.id} className={`${!contact.is_active ? 'opacity-60' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{contact.label}</span>
                              {contact.is_primary && (
                                <Badge variant="default" className="flex items-center gap-1">
                                  <Star className="h-3 w-3" />
                                  Primary
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{contact.value}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={contact.is_active}
                            onCheckedChange={() => toggleActive(contact.id, contact.is_active)}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(contact)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Add/Edit Contact Modal */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingContact ? 'Edit Contact' : 'Add New Contact'}
            </CardTitle>
            <CardDescription>
              {editingContact ? 'Update contact information' : 'Create a new contact entry'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact_type">Contact Type</Label>
                        <Select
                          value={formData.contact_type}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, contact_type: value }))}
                        >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone Number</SelectItem>
                      <SelectItem value="email">Email Address</SelectItem>
                      <SelectItem value="address">Physical Address</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="label">Label</Label>
                  <Input
                    id="label"
                    value={formData.label}
                    onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                    placeholder="e.g., Emergency Hotline, Support Email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="value">Contact Value</Label>
                  <Input
                    id="value"
                    value={formData.value}
                    onChange={(e) => setFormData(prev => ({ ...prev, value: e.target.value }))}
                    placeholder="e.g., +1-800-555-0123, support@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="page_location">Page Location</Label>
                  <Select
                    value={formData.page_location}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, page_location: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Pages</SelectItem>
                      <SelectItem value="header">Header Only</SelectItem>
                      <SelectItem value="footer">Footer Only</SelectItem>
                      <SelectItem value="contact_page">Contact Page Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                    min="0"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_primary"
                    checked={formData.is_primary}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_primary: checked }))}
                  />
                  <Label htmlFor="is_primary">Primary Contact</Label>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Additional details about this contact"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                />
                <Label htmlFor="is_active">Active</Label>
              </div>

              <div className="flex gap-2">
                <Button type="submit">
                  {editingContact ? 'Update Contact' : 'Create Contact'}
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

export default ContactManager;