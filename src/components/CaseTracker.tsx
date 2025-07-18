
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Search, FileSearch, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface CaseDetails {
  case_number: string;
  status: string;
  created_at: string;
  updated_at: string;
  case_type: string;
  progress_stages: any;
  user_details: any;
  notes: string | null;
}

export function CaseTracker() {
  const [caseNumber, setCaseNumber] = useState('');
  const [verificationEmail, setVerificationEmail] = useState('');
  const [caseDetails, setCaseDetails] = useState<CaseDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();

  const lookupCase = async () => {
    if (!caseNumber.trim() || !verificationEmail.trim()) {
      toast({
        title: 'Missing Information',
        description: 'Please enter both case number and email address',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('cases')
        .select('*')
        .eq('case_number', caseNumber.trim().toUpperCase())
        .maybeSingle();

      if (error || !data) {
        toast({
          title: 'Case Not Found',
          description: 'No case found with the provided case number',
          variant: 'destructive'
        });
        return;
      }

      // Verify email matches (check in user_details or form data)
      const userDetails = data.user_details as any;
      const userEmail = userDetails?.email || userDetails?.contact_email;
      if (userEmail?.toLowerCase() !== verificationEmail.toLowerCase()) {
        toast({
          title: 'Verification Failed',
          description: 'Email address does not match our records',
          variant: 'destructive'
        });
        return;
      }

      setCaseDetails(data);
      setShowDetails(true);
      toast({
        title: 'Case Found',
        description: 'Case details loaded successfully',
      });
    } catch (error) {
      toast({
        title: 'Lookup Failed',
        description: 'Unable to lookup case details',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'submitted':
        return <Clock className="h-4 w-4" />;
      case 'reviewing':
        return <FileSearch className="h-4 w-4" />;
      case 'investigating':
        return <AlertCircle className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'reviewing':
        return 'bg-yellow-100 text-yellow-800';
      case 'investigating':
        return 'bg-orange-100 text-orange-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-fbi-blue mb-2">Case Progress Tracker</h1>
          <p className="text-government-gray-600">
            Track the progress of your case using your case number and email address
          </p>
        </div>

        {!showDetails ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Case Lookup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="caseNumber">Case Number *</Label>
                <Input
                  id="caseNumber"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value.toUpperCase())}
                  placeholder="LGN-2024-001234"
                  className="font-mono"
                />
              </div>

              <div>
                <Label htmlFor="verificationEmail">Email Address *</Label>
                <Input
                  id="verificationEmail"
                  type="email"
                  value={verificationEmail}
                  onChange={(e) => setVerificationEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>

              <Button 
                onClick={lookupCase} 
                className="w-full"
                disabled={isLoading}
              >
                <Search className="h-4 w-4 mr-2" />
                {isLoading ? 'Looking up case...' : 'Lookup Case'}
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                Your case number was provided when you submitted your initial report.
                Check your email confirmation for the case number.
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setShowDetails(false);
                  setCaseDetails(null);
                  setCaseNumber('');
                  setVerificationEmail('');
                }}
              >
                ← New Lookup
              </Button>
            </div>

            {caseDetails && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Case {caseDetails.case_number}</span>
                      <Badge className={getStatusColor(caseDetails.status)}>
                        {getStatusIcon(caseDetails.status)}
                        <span className="ml-1">{caseDetails.status}</span>
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Case Type</Label>
                        <p className="font-medium">{caseDetails.case_type}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Submitted</Label>
                        <p className="font-medium">
                          {new Date(caseDetails.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Last Updated</Label>
                      <p className="font-medium">
                        {new Date(caseDetails.updated_at).toLocaleDateString()}
                      </p>
                    </div>

                    {caseDetails.notes && (
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Case Notes</Label>
                        <p className="text-sm bg-muted p-3 rounded-md">
                          {caseDetails.notes}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Progress Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {(caseDetails.progress_stages as any[])?.map((stage, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {stage.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <Clock className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{stage.title}</h4>
                            <p className="text-sm text-muted-foreground">{stage.description}</p>
                            {stage.completed && stage.completed_at && (
                              <p className="text-xs text-green-600 mt-1">
                                Completed {new Date(stage.completed_at).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                        </div>
                      )) || (
                        <div className="text-center py-4 text-muted-foreground">
                          <Clock className="h-8 w-8 mx-auto mb-2" />
                          <p>Case is being processed. Updates will appear here.</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
