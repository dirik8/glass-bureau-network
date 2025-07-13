import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Scale, AlertTriangle } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Legal Agreement
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Legal Terms of Service for LGN Recovery Bureau Services
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Agreement */}
            <Card className="government-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="h-8 w-8 text-[hsl(var(--fbi-blue))] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Service Agreement</h2>
                  <p className="text-muted-foreground leading-7">
                    By accessing or using LGN Recovery Bureau services, you agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and the LGN Recovery Bureau.
                  </p>
                </div>
              </div>
            </Card>

            {/* Service Description */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Scale className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Service Description
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Recovery Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cryptocurrency asset recovery and investigation</li>
                    <li>• Blockchain forensic analysis and tracing</li>
                    <li>• Scam victim assistance and support</li>
                    <li>• Legal documentation and evidence preparation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Eligibility Requirements</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Must be 18 years or older</li>
                    <li>• Valid identity verification required</li>
                    <li>• Proof of loss or fraudulent activity</li>
                    <li>• Compliance with applicable laws</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* User Obligations */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">User Obligations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Required Actions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Provide accurate information</li>
                    <li>• Cooperate with investigations</li>
                    <li>• Maintain confidentiality</li>
                    <li>• Follow legal procedures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Prohibited Activities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Providing false information</li>
                    <li>• Interfering with investigations</li>
                    <li>• Unauthorized access attempts</li>
                    <li>• Misuse of services</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Fees and Payment */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Fees and Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Fee Structure</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Initial consultation: No charge</li>
                    <li>• Case assessment: $500 administration fee</li>
                    <li>• Recovery services: Success-based fee structure</li>
                    <li>• Expert testimony: $300/hour</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Payment Terms</h3>
                  <p className="text-muted-foreground">
                    Fees are due upon completion of services. Recovery fees are calculated as a percentage of successfully recovered assets. No recovery, no fee policy applies to investigative services.
                  </p>
                </div>
              </div>
            </Card>

            {/* Limitations */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Limitations and Disclaimers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Service Limitations</h3>
                  <p className="leading-7">
                    LGN Recovery Bureau makes no guarantee of successful asset recovery. Cryptocurrency transactions are often irreversible, and recovery depends on various factors beyond our control including blockchain technology limitations, international jurisdictions, and cooperation from third parties.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Liability Limitation</h3>
                  <p className="leading-7">
                    Our liability is limited to the fees paid for our services. We are not responsible for any consequential, indirect, or punitive damages arising from the use of our services.
                  </p>
                </div>
              </div>
            </Card>

            {/* Termination */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-7">
                  Either party may terminate services with 30 days written notice. LGN Recovery Bureau reserves the right to immediate termination if:
                </p>
                <ul className="space-y-2">
                  <li>• Terms of service are violated</li>
                  <li>• False information is provided</li>
                  <li>• Legal or ethical conflicts arise</li>
                  <li>• Investigation becomes infeasible</li>
                </ul>
              </div>
            </Card>

            {/* Contact */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Legal Department Contact</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  For questions regarding these terms or legal matters:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@lgnrecovery.gov</p>
                  <p><strong>Phone:</strong> 1-800-LGN-LEGAL</p>
                  <p><strong>Address:</strong> LGN Recovery Bureau, Legal Department, Washington, DC 20535</p>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Modified:</strong> January 2025
                </p>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;