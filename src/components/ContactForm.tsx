
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormProps {
  formType?: string;
  onSuccess?: () => void;
}

export function ContactForm({ formType = 'Contact Form', onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First, store the form submission directly in the database
      const { data: submissionData, error: submissionError } = await supabase
        .from('form_submissions')
        .insert({
          form_type: formType,
          data: formData,
          status: 'pending'
        })
        .select()
        .single();

      if (submissionError) {
        console.error('Database submission error:', submissionError);
        throw submissionError;
      }

      console.log('Form submission stored:', submissionData);

      // Try to send email notification, but don't fail if it doesn't work
      try {
        const { error: emailError } = await supabase.functions.invoke('submit-form', {
          body: {
            form_type: formType,
            data: formData,
            submission_id: submissionData.id
          }
        });

        if (emailError) {
          console.error('Email sending error:', emailError);
          // Update submission to indicate email failed
          await supabase
            .from('form_submissions')
            .update({ 
              email_sent: false,
              email_error: emailError.message 
            })
            .eq('id', submissionData.id);
        } else {
          // Update submission to indicate email was sent
          await supabase
            .from('form_submissions')
            .update({ 
              email_sent: true,
              email_sent_at: new Date().toISOString()
            })
            .eq('id', submissionData.id);
        }
      } catch (emailError: any) {
        console.error('Email function error:', emailError);
        // Update submission to indicate email failed
        await supabase
          .from('form_submissions')
          .update({ 
            email_sent: false,
            email_error: emailError.message 
          })
          .eq('id', submissionData.id);
      }

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      onSuccess?.();
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
      </div>
      
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          required
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
