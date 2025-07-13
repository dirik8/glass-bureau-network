import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from 'npm:resend@2.0.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormSubmissionRequest {
  form_type: string;
  data: Record<string, any>;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    const { form_type, data }: FormSubmissionRequest = await req.json();

    console.log('Received form submission:', { form_type, data });

    // Save form submission to database
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .insert({
        form_type,
        data,
        status: 'pending',
        email_sent: false
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving form submission:', error);
      throw error;
    }

    console.log('Form submission saved successfully:', submission);

    // Check if email configuration is available
    const adminEmail = Deno.env.get('ADMIN_EMAIL');
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    console.log('Email configuration check:', {
      adminEmailExists: !!adminEmail,
      resendApiKeyExists: !!resendApiKey,
      adminEmail: adminEmail ? `${adminEmail.substring(0, 3)}***` : 'not set'
    });

    // Send email notification
    let emailSent = false;
    let emailError = null;
    
    try {
      if (!adminEmail) {
        throw new Error('ADMIN_EMAIL environment variable not set');
      }
      
      if (!resendApiKey) {
        throw new Error('RESEND_API_KEY environment variable not set');
      }

      const emailData = Object.entries(data)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
        .join('<br>');

      const emailResponse = await resend.emails.send({
        from: 'Form Submissions <onboarding@resend.dev>',
        to: [adminEmail],
        subject: `New ${form_type} Form Submission`,
        html: `
          <h2>New Form Submission</h2>
          <p><strong>Form Type:</strong> ${form_type}</p>
          <p><strong>Submission ID:</strong> ${submission.id}</p>
          <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <h3>Form Data:</h3>
          ${emailData}
        `,
      });

      console.log('Email notification sent successfully:', emailResponse);
      emailSent = true;
      
      // Update form submission with email success
      await supabase
        .from('form_submissions')
        .update({
          email_sent: true,
          email_sent_at: new Date().toISOString()
        })
        .eq('id', submission.id);
        
    } catch (emailError_) {
      emailError = emailError_.message;
      console.error('Failed to send email notification:', emailError_);
      
      // Update form submission with email failure
      await supabase
        .from('form_submissions')
        .update({
          email_sent: false,
          email_error: emailError
        })
        .eq('id', submission.id);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        id: submission.id 
      }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error('Error in submit-form function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal server error' 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);