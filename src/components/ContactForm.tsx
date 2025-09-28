
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

// Input validation schema
const contactFormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().max(20, 'Phone number must be less than 20 characters').optional().or(z.literal('')),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters')
});

interface ContactFormProps {
  formType?: string;
  onSuccess?: () => void;
}

export function ContactForm({ formType = 'contact', onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formTemplate, setFormTemplate] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadFormTemplate();
  }, [formType]);

  const loadFormTemplate = async () => {
    try {
      const { data, error } = await supabase
        .from('form_templates')
        .select('*')
        .eq('form_type', formType)
        .eq('is_active', true)
        .single();

      if (error && error.code !== 'PGRST116') { // Not found error is ok
        console.error('Error loading form template:', error);
      } else if (data) {
        setFormTemplate(data);
      }
    } catch (error) {
      console.error('Error fetching form template:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check rate limiting
      const rateLimitCheck = await supabase.functions.invoke('rate-limit', {
        body: { identifier: `form_${formType}_${new Date().getMinutes()}` }
      });

      if (rateLimitCheck.data?.rateLimited) {
        toast({
          title: "Rate Limit Exceeded",
          description: "Too many submissions. Please wait 15 minutes before trying again.",
          variant: "destructive",
        });
        return;
      }

      // Validate form data
      const validatedData = contactFormSchema.parse(formData);
      // First, store the form submission directly in the database
      const { data: submissionData, error: submissionError } = await supabase
        .from('form_submissions')
        .insert({
          form_type: formType,
          data: validatedData,
          status: 'pending',
          template_id: formTemplate?.id || null
        })
        .select()
        .single();

      if (submissionError) {
        throw submissionError;
      }

      // Try to send email notification, but don't fail if it doesn't work
      try {
        const { error: emailError } = await supabase.functions.invoke('submit-form', {
          body: {
            form_type: formType,
            data: validatedData,
            submission_id: submissionData.id
          }
        });

        if (emailError) {
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
        // Update submission to indicate email failed
        await supabase
          .from('form_submissions')
          .update({ 
            email_sent: false,
            email_error: emailError.message 
          })
          .eq('id', submissionData.id);
      }

      const successMessage = formTemplate?.success_message || "Thank you for your message. We'll get back to you soon.";
      
      toast({
        title: "Message Sent Successfully",
        description: successMessage,
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
      let errorMessage = "There was an error submitting your form. Please try again.";
      
      if (error.name === 'ZodError') {
        errorMessage = error.errors[0]?.message || "Please check your input and try again.";
      }
      
      toast({
        title: "Submission Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 p-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            className="mt-1 h-10 sm:h-11"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            className="mt-1 h-10 sm:h-11"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="mt-1 h-10 sm:h-11"
        />
      </div>
      
      <div>
        <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          required
          className="mt-1 min-h-[100px] resize-none"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
