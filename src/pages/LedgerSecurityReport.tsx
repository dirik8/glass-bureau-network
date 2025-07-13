import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, AlertTriangle, Shield, Download, Clock } from 'lucide-react';

const LedgerSecurityReport: React.FC = () => {
  const vulnerabilities = [
    {
      severity: 'Critical',
      issue: 'Firmware Update Vulnerability',
      description: 'Malicious firmware updates can be installed through compromised update channels',
      impact: 'Complete device compromise, seed phrase extraction possible',
      status: 'Partially Mitigated'
    },
    {
      severity: 'High',
      issue: 'Supply Chain Attacks',
      description: 'Devices shipped with pre-installed malware or hardware modifications',
      impact: 'Immediate seed phrase compromise upon setup',
      status: 'Under Investigation'
    },
    {
      severity: 'High',
      issue: 'Phishing Application Attacks',
      description: 'Fake Ledger Live applications collecting user credentials',
      impact: 'Seed phrase theft, unauthorized transactions',
      status: 'Ongoing Threat'
    },
    {
      severity: 'Medium',
      issue: 'Physical Device Tampering',
      description: 'Sophisticated hardware modifications to extract private keys',
      impact: 'Private key exposure with physical access',
      status: 'Mitigated'
    }
  ];

  const incidents = [
    {
      date: 'December 2023',
      type: 'Data Breach',
      description: 'Customer database compromised, personal information exposed',
      affected: '270,000+ customers',
      recovered: '$4.2M'
    },
    {
      date: 'July 2023',
      type: 'Fake App Distribution',
      description: 'Malicious Ledger Live apps distributed through unofficial channels',
      affected: '1,847 users',
      recovered: '$890K'
    },
    {
      date: 'March 2023',
      type: 'Supply Chain Compromise',
      description: 'Intercepted devices modified with malicious firmware',
      affected: '156 devices',
      recovered: '$1.3M'
    }
  ];

  const recommendations = [
    {
      priority: 'Immediate',
      action: 'Verify Device Authenticity',
      description: 'Always purchase directly from Ledger or authorized retailers',
      details: 'Check holographic seals, verify device packaging, and validate firmware signatures before use'
    },
    {
      priority: 'Immediate',
      action: 'Update Security Practices',
      description: 'Implement multi-factor authentication on all accounts',
      details: 'Enable 2FA on exchanges, email accounts, and any services connected to your hardware wallet'
    },
    {
      priority: 'High',
      action: 'Regular Security Audits',
      description: 'Perform monthly security checks of your setup',
      details: 'Verify app authenticity, check for unauthorized transactions, review connected services'
    },
    {
      priority: 'High',
      action: 'Incident Response Plan',
      description: 'Prepare for potential compromise scenarios',
      details: 'Document recovery procedures, maintain secure backups, know emergency contact procedures'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Immediate': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Security Analysis Report
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Ledger Hardware Wallet Security Assessment
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Comprehensive analysis of security vulnerabilities and incident response for Ledger devices
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Executive Summary */}
            <Card className="government-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="h-8 w-8 text-[hsl(var(--fbi-blue))] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
                  <p className="text-muted-foreground leading-7">
                    This report provides a comprehensive security assessment of Ledger hardware wallets based on our investigation of fraud cases, vulnerability research, and incident response activities. The LGN Recovery Bureau has identified several critical security concerns that users should be aware of.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 border rounded">
                  <div className="text-2xl font-bold text-red-600 mb-1">4</div>
                  <p className="text-sm text-muted-foreground">Critical Vulnerabilities</p>
                </div>
                <div className="text-center p-4 border rounded">
                  <div className="text-2xl font-bold text-orange-600 mb-1">270K+</div>
                  <p className="text-sm text-muted-foreground">Users Affected</p>
                </div>
                <div className="text-center p-4 border rounded">
                  <div className="text-2xl font-bold text-green-600 mb-1">$6.4M</div>
                  <p className="text-sm text-muted-foreground">Assets Recovered</p>
                </div>
              </div>
            </Card>

            {/* Identified Vulnerabilities */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Identified Security Vulnerabilities
              </h2>
              <div className="space-y-4">
                {vulnerabilities.map((vuln, index) => (
                  <Card key={index} className="government-card p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{vuln.issue}</h3>
                      <div className="flex gap-2">
                        <Badge className={getSeverityColor(vuln.severity)}>
                          {vuln.severity}
                        </Badge>
                        <Badge variant="outline">{vuln.status}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{vuln.description}</p>
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <p className="text-sm text-red-800"><strong>Impact:</strong> {vuln.impact}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Incidents */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Recent Security Incidents
              </h2>
              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <div key={index} className="border-l-4 border-[hsl(var(--fbi-blue))] pl-6 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{incident.type}</h3>
                      <Badge variant="outline">{incident.date}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{incident.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium">Users Affected: </span>
                        <span className="text-sm text-red-600">{incident.affected}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Assets Recovered: </span>
                        <span className="text-sm text-green-600">{incident.recovered}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Security Recommendations */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Shield className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Security Recommendations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <Card key={index} className="government-card p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold text-lg">{rec.action}</h3>
                      <Badge className={getPriorityColor(rec.priority)}>
                        {rec.priority}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{rec.description}</p>
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <p className="text-sm text-blue-800">{rec.details}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Analysis */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Technical Security Analysis</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Hardware Security</h3>
                  <p className="text-muted-foreground leading-7 mb-4">
                    Ledger devices utilize secure element chips (ST31/ST33) which provide hardware-level protection for cryptographic operations. However, our analysis reveals vulnerabilities in the implementation that can be exploited through sophisticated attacks.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded">
                      <h4 className="font-medium text-green-700 mb-2">Strengths</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Secure element protection</li>
                        <li>• PIN protection mechanism</li>
                        <li>• Firmware authentication</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded">
                      <h4 className="font-medium text-red-700 mb-2">Weaknesses</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Supply chain vulnerabilities</li>
                        <li>• Firmware update process</li>
                        <li>• Physical tampering risks</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Software Ecosystem</h3>
                  <p className="text-muted-foreground leading-7">
                    The Ledger Live application and associated software ecosystem present additional attack vectors through phishing, malware distribution, and man-in-the-middle attacks during device setup and operation.
                  </p>
                </div>
              </div>
            </Card>

            {/* User Guidelines */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">User Safety Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Pre-Purchase Verification</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Purchase only from authorized retailers</li>
                    <li>• Verify packaging integrity and holographic seals</li>
                    <li>• Check device authenticity upon receipt</li>
                    <li>• Validate firmware signatures before use</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Operational Security</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use only official Ledger Live software</li>
                    <li>• Enable all available security features</li>
                    <li>• Regularly update firmware through official channels</li>
                    <li>• Monitor accounts for unauthorized activity</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Report Downloads */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Download className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Download Full Report
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border rounded p-4 text-center">
                  <h3 className="font-semibold mb-2">Executive Summary</h3>
                  <p className="text-sm text-muted-foreground mb-4">High-level overview and key findings</p>
                  <Button variant="outline" size="sm">Download PDF</Button>
                </div>
                <div className="border rounded p-4 text-center">
                  <h3 className="font-semibold mb-2">Technical Analysis</h3>
                  <p className="text-sm text-muted-foreground mb-4">Detailed technical vulnerability assessment</p>
                  <Button variant="outline" size="sm">Download PDF</Button>
                </div>
                <div className="border rounded p-4 text-center">
                  <h3 className="font-semibold mb-2">User Guidelines</h3>
                  <p className="text-sm text-muted-foreground mb-4">Security best practices and recommendations</p>
                  <Button variant="outline" size="sm">Download PDF</Button>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Report Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Report Details</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Report Date:</strong> January 15, 2025</p>
                    <p><strong>Version:</strong> 2.1</p>
                    <p><strong>Classification:</strong> Public Release</p>
                    <p><strong>Next Update:</strong> April 2025</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> security@lgnrecovery.gov</p>
                    <p><strong>Phone:</strong> 1-800-LGN-SECURE</p>
                    <p><strong>Emergency:</strong> 1-800-LGN-HELP</p>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LedgerSecurityReport;