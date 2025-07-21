import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from 'npm:resend@2.0.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Enhanced email templates
const getEmailTemplate = (formType: string, formData: any) => {
  const templates = {
    contact: {
      subject: 'Thank you for contacting Legion Global Network',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a365d; margin: 0;">Legion Global Network</h1>
            <p style="color: #666; margin: 5px 0;">Digital Asset Recovery Specialists</p>
          </div>
          
          <h2 style="color: #1a365d; border-bottom: 2px solid #3182ce; padding-bottom: 10px;">Thank you for contacting us</h2>
          
          <p style="font-size: 16px; line-height: 1.6;">Dear ${formData.name || 'Valued Client'},</p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            We have received your message and will respond within 24 hours. Our team of experts is standing by to assist you with your case.
          </p>
          
          <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3182ce;">
            <h3 style="color: #1a365d; margin-top: 0;">Your Message:</h3>
            <p style="font-style: italic; color: #4a5568;">"${formData.message}"</p>
          </div>
          
          <div style="background: #e6fffa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #234e52;"><strong>What happens next?</strong></p>
            <ul style="color: #234e52; margin: 10px 0;">
              <li>Our team will review your case details</li>
              <li>You'll receive a case number for tracking</li>
              <li>We'll contact you within 24 hours</li>
            </ul>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
            <p style="font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>Legion Global Network Team</strong><br>
              <span style="color: #666;">Digital Asset Recovery Specialists</span>
            </p>
          </div>
          
          <div style="background: #1a365d; color: white; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">🔒 Confidential & Secure | 🌍 Global Recovery Network | ⚡ 24/7 Support</p>
          </div>
        </div>
      `
    },
    'email-test': {
      subject: 'Email System Test - Legion Global Network',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a365d; margin: 0;">🧪 Email System Test</h1>
            <p style="color: #666; margin: 5px 0;">Legion Global Network</p>
          </div>
          
          <div style="background: #d4edda; color: #155724; padding: 20px; border-radius: 8px; border: 1px solid #c3e6cb;">
            <h2 style="margin-top: 0;">✅ Email System Working!</h2>
            <p>This is a test email to verify that the email delivery system is functioning correctly.</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <p><strong>Test Details:</strong></p>
            <ul>
              <li>Resend API: Connected</li>
              <li>Email Templates: Loaded</li>
              <li>Database Integration: Active</li>
              <li>Case Tracking: Operational</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745;">
            <p style="margin: 0;"><strong>Ready for Production!</strong></p>
            <p style="margin: 5px 0 0 0;">All email systems are functioning properly and ready for client communications.</p>
          </div>
        </div>
      `
    },
    'case-update': {
      subject: 'Case Update: ' + (formData.caseNumber || 'Your Case') + ' - Status Changed',
      html: 
        '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px;">' +
          '<div style="text-align: center; margin-bottom: 30px;">' +
            '<h1 style="color: #1a365d; margin: 0;">Legion Global Network</h1>' +
            '<p style="color: #666; margin: 5px 0;">Case Status Update</p>' +
          '</div>' +
          
          '<div style="background: #3182ce; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">' +
            '<h2 style="margin: 0; font-size: 24px;">Case Update</h2>' +
            '<p style="margin: 10px 0 0 0; font-size: 18px;">Case #' + (formData.caseNumber || 'N/A') + '</p>' +
          '</div>' +
          
          '<div style="background: #e6fffa; padding: 20px; border-radius: 8px; border-left: 4px solid #38b2ac;">' +
            '<h3 style="color: #234e52; margin-top: 0;">Status: ' + (formData.status || 'Updated') + '</h3>' +
            '<p style="color: #234e52; margin: 0;">' + (formData.message || 'Case has been updated') + '</p>' +
          '</div>' +
          
          '<div style="margin: 20px 0;">' +
            '<p><strong>What you can do:</strong></p>' +
            '<ul>' +
              '<li>Track your case progress anytime at our Case Tracker</li>' +
              '<li>Contact us if you have questions</li>' +
              '<li>Check your email for future updates</li>' +
            '</ul>' +
          '</div>' +
          
          '<div style="background: #1a365d; color: white; padding: 15px; border-radius: 8px; text-align: center;">' +
            '<p style="margin: 0;">Need assistance? Contact our team 24/7</p>' +
          '</div>' +
        '</div>'
    },
    'admin-setup': {
      subject: 'Admin Account Setup - Legion Global Network',
      html: 
        '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px;">' +
          '<div style="text-align: center; margin-bottom: 30px;">' +
            '<h1 style="color: #1a365d; margin: 0;">🔐 Admin Setup Complete</h1>' +
            '<p style="color: #666; margin: 5px 0;">Legion Global Network</p>' +
          '</div>' +
          
          '<div style="background: #d4edda; color: #155724; padding: 20px; border-radius: 8px; border: 1px solid #c3e6cb;">' +
            '<h2 style="margin-top: 0;">✅ Admin Account Created!</h2>' +
            '<p>Your admin account has been successfully created and configured.</p>' +
            '<p><strong>Username:</strong> ' + (formData.username || 'Admin') + '</p>' +
            '<p><strong>Setup Time:</strong> ' + new Date().toISOString() + '</p>' +
          '</div>' +
          
          '<div style="margin: 20px 0;">' +
            '<p><strong>What you can do now:</strong></p>' +
            '<ul>' +
              '<li>Access the admin dashboard</li>' +
              '<li>Configure system settings</li>' +
              '<li>Manage user accounts</li>' +
              '<li>Monitor case submissions</li>' +
            '</ul>' +
          '</div>' +
          
          '<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745;">' +
            '<p style="margin: 0;"><strong>Security Notice:</strong></p>' +
            '<p style="margin: 5px 0 0 0;">Keep your admin credentials secure and change your password regularly.</p>' +
          '</div>' +
        '</div>'
    }
  };
  
  return templates[formType] || templates.contact;
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

      // Get email template for form type
      const template = getEmailTemplate(form_type, data);
      
      // Send user confirmation email if email is provided
      if (data.email && form_type !== 'email-test') {
        await resend.emails.send({
          from: 'Legion Global Network <onboarding@resend.dev>',
          to: [data.email],
          subject: template.subject,
          html: template.html,
        });
      }

      // Send admin notification
      const emailResponse = await resend.emails.send({
        from: 'Form Submissions <onboarding@resend.dev>',
        to: [data.email && form_type === 'email-test' ? data.email : adminEmail],
        subject: form_type === 'email-test' ? template.subject : `New ${form_type} Form Submission`,
        html: form_type === 'email-test' ? template.html : `
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