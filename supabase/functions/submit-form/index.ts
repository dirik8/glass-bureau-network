import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

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

    const { form_type, data }: FormSubmissionRequest = await req.json();

    console.log('Received form submission:', { form_type, data });

    // Save form submission to database
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .insert({
        form_type,
        data,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving form submission:', error);
      throw error;
    }

    console.log('Form submission saved successfully:', submission);

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