import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Upload, File, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { getAllPDFMetadata } from '@/utils/pdfGenerator';

interface UploadStatus {
  fileName: string;
  progress: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
}

export const PDFUploadManager: React.FC = () => {
  const [uploads, setUploads] = useState<UploadStatus[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateAndUploadPDFs = useCallback(async () => {
    setIsGenerating(true);
    const pdfMetadata = getAllPDFMetadata();
    
    // Initialize upload status for each PDF
    const initialUploads: UploadStatus[] = pdfMetadata.map(pdf => ({
      fileName: pdf!.title,
      progress: 0,
      status: 'pending'
    }));
    
    setUploads(initialUploads);

    for (let i = 0; i < pdfMetadata.length; i++) {
      const pdf = pdfMetadata[i]!;
      
      try {
        // Update status to uploading
        setUploads(prev => prev.map((upload, index) => 
          index === i ? { ...upload, status: 'uploading' as const, progress: 0 } : upload
        ));

        // Generate PDF content (simulated)
        const pdfBlob = await generatePDFBlob(pdf.title, pdf.description);
        
        // Upload to Supabase Storage
        const fileName = `${pdf.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
        
        // Progress simulation during upload
        for (let progress = 10; progress <= 90; progress += 20) {
          setUploads(prev => prev.map((upload, index) => 
            index === i ? { ...upload, progress } : upload
          ));
          await new Promise(resolve => setTimeout(resolve, 200));
        }

        const { error: uploadError } = await supabase.storage
          .from('pdfs')
          .upload(fileName, pdfBlob, {
            cacheControl: '3600',
            upsert: true
          });

        if (uploadError) throw uploadError;

        // Insert PDF metadata into database
        const { error: dbError } = await supabase
          .from('pdfs')
          .upsert({
            title: pdf.title,
            description: pdf.description,
            category: pdf.category,
            file_path: fileName,
            pages: pdf.pages,
            level: pdf.level
          });

        if (dbError) throw dbError;

        // Update status to success
        setUploads(prev => prev.map((upload, index) => 
          index === i ? { ...upload, status: 'success' as const, progress: 100 } : upload
        ));

      } catch (error: any) {
        console.error(`Error uploading ${pdf.title}:`, error);
        setUploads(prev => prev.map((upload, index) => 
          index === i ? { 
            ...upload, 
            status: 'error' as const, 
            error: error.message 
          } : upload
        ));
      }
    }

    setIsGenerating(false);
    toast({
      title: 'PDF Generation Complete',
      description: 'All PDF files have been processed and uploaded.'
    });
  }, [toast]);

  const generatePDFBlob = async (title: string, description: string): Promise<Blob> => {
    // This is a simplified PDF generation - in a real implementation,
    // you would use a proper PDF library like jsPDF or PDFKit
    const pdfContent = `
%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 100 >>
stream
BT
/F1 12 Tf
50 750 Td
(${title}) Tj
0 -20 Td
(${description}) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000110 00000 n 
0000000252 00000 n 
0000000394 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
464
%%EOF`;

    return new Blob([pdfContent], { type: 'application/pdf' });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Upload className="w-5 h-5" />
          <CardTitle>PDF Generation & Upload</CardTitle>
        </div>
        <CardDescription>
          Generate and upload all investigation manual PDFs to storage
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={generateAndUploadPDFs} 
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating PDFs...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Generate & Upload All PDFs
            </>
          )}
        </Button>

        {uploads.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Upload Progress</h4>
            {uploads.map((upload, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <File className="w-4 h-4" />
                    <span>{upload.fileName}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {upload.status === 'success' && <CheckCircle className="w-4 h-4 text-green-500" />}
                    {upload.status === 'error' && <AlertCircle className="w-4 h-4 text-red-500" />}
                    {upload.status === 'uploading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  </div>
                </div>
                <Progress value={upload.progress} className="h-2" />
                {upload.error && (
                  <p className="text-sm text-red-500">{upload.error}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};