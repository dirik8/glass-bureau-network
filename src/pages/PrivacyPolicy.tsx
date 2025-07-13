import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Legal Document
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                LGN Recovery Bureau Privacy Notice - Protecting Your Information
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Overview */}
            <Card className="government-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="h-8 w-8 text-[hsl(var(--fbi-blue))] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-7">
                    The LGN Recovery Bureau is committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, disclose, and protect information about you when you use our services or visit our website.
                  </p>
                </div>
              </div>
            </Card>

            {/* Information We Collect */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Contact information (name, email, phone number)</li>
                    <li>• Identity verification documents</li>
                    <li>• Financial transaction records</li>
                    <li>• Case-related communications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IP addresses and device identifiers</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system information</li>
                    <li>• Website usage analytics</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Process recovery requests</li>
                    <li>• Conduct investigations</li>
                    <li>• Provide case updates</li>
                    <li>• Verify identity and eligibility</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Legal Compliance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comply with legal obligations</li>
                    <li>• Cooperate with law enforcement</li>
                    <li>• Prevent fraud and abuse</li>
                    <li>• Maintain records as required</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Data Protection */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Data Protection & Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-7">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="space-y-2">
                  <li>• End-to-end encryption for sensitive communications</li>
                  <li>• Multi-factor authentication for access controls</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Staff training on data protection protocols</li>
                  <li>• Secure data centers with physical access controls</li>
                </ul>
              </div>
            </Card>

            {/* Your Rights */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Your Privacy Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Access & Control</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Request access to your data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request data deletion</li>
                    <li>• Opt-out of communications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Data Portability</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Receive data in structured format</li>
                    <li>• Transfer data to other services</li>
                    <li>• Restrict processing activities</li>
                    <li>• Object to certain uses</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  For questions about this Privacy Policy or to exercise your privacy rights, contact our Data Protection Officer:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@lgnrecovery.gov</p>
                  <p><strong>Phone:</strong> 1-800-LGN-PRIV</p>
                  <p><strong>Address:</strong> LGN Recovery Bureau, Privacy Office, Washington, DC 20535</p>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  <strong>Last Updated:</strong> January 2025
                </p>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;