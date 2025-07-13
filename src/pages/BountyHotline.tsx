import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Shield, Eye, DollarSign, AlertTriangle } from 'lucide-react';

const BountyHotline: React.FC = () => {
  const [tipData, setTipData] = useState({
    tipType: '',
    description: '',
    evidence: '',
    contact: '',
    anonymous: true
  });

  const bountyCategories = [
    {
      category: 'Major Fraud Networks',
      reward: 'Up to $50,000',
      description: 'Information leading to arrest of organized cryptocurrency fraud operators',
      examples: ['Multi-million dollar Ponzi schemes', 'International romance scam networks', 'Exchange manipulation rings']
    },
    {
      category: 'Insider Information',
      reward: 'Up to $25,000',
      description: 'Whistleblower information from within fraudulent organizations',
      examples: ['Employee reporting employer fraud', 'Exchange insider trading evidence', 'Corporate cryptocurrency theft']
    },
    {
      category: 'Technical Intelligence',
      reward: 'Up to $15,000',
      description: 'Technical evidence or vulnerabilities in fraud operations',
      examples: ['Wallet address clusters', 'Malware source code', 'Phishing infrastructure details']
    },
    {
      category: 'Asset Location',
      reward: 'Up to $10,000',
      description: 'Information leading to location and seizure of stolen cryptocurrency',
      examples: ['Hidden wallet locations', 'Exchange account details', 'Money laundering pathways']
    }
  ];

  const reportingMethods = [
    {
      method: 'Anonymous Hotline',
      contact: '1-800-LGN-TIPS',
      description: 'Call 24/7 to report fraud anonymously',
      secure: true
    },
    {
      method: 'Secure Online Form',
      contact: 'Submit below',
      description: 'Encrypted submission with optional contact info',
      secure: true
    },
    {
      method: 'Encrypted Email',
      contact: 'tips@lgnrecovery.gov',
      description: 'PGP encrypted email communications',
      secure: true
    },
    {
      method: 'In-Person Meeting',
      contact: 'Schedule appointment',
      description: 'Confidential meeting at secure location',
      secure: true
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTipData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tip submission:', tipData);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Confidential Reporting
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Cryptocurrency Fraud Tip Line
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Report cryptocurrency fraud and earn rewards for information leading to arrests and asset recovery
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Emergency Contact */}
            <Card className="government-card p-8 border-red-200 bg-red-50">
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <div>
                  <h2 className="text-2xl font-bold text-red-800">Emergency Fraud Hotline</h2>
                  <p className="text-red-700">Active fraud in progress? Call immediately for urgent assistance</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">1-800-LGN-HELP</div>
                <p className="text-red-700">Available 24/7 • All calls are confidential</p>
              </div>
            </Card>

            {/* Program Overview */}
            <Card className="government-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="h-8 w-8 text-[hsl(var(--fbi-blue))] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Whistleblower Protection Program</h2>
                  <p className="text-muted-foreground leading-7 text-lg">
                    The LGN Recovery Bureau offers financial rewards and legal protection for individuals who provide information about cryptocurrency fraud operations. Your identity is protected under federal whistleblower statutes.
                  </p>
                </div>
              </div>
            </Card>

            {/* Bounty Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Reward Categories
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {bountyCategories.map((bounty, index) => (
                  <Card key={index} className="government-card p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{bounty.category}</h3>
                      <Badge variant="secondary" className="text-base font-bold text-green-700">
                        {bounty.reward}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">{bounty.description}</p>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Examples:</h4>
                      <ul className="space-y-1">
                        {bounty.examples.map((example, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-[hsl(var(--fbi-blue))] rounded-full mt-1.5"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Reporting Methods */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Phone className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Secure Reporting Methods
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {reportingMethods.map((method, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{method.method}</h3>
                      {method.secure && (
                        <Badge variant="outline" className="text-green-700 border-green-700">
                          Secure
                        </Badge>
                      )}
                    </div>
                    <p className="text-[hsl(var(--fbi-blue))] font-mono mb-2">{method.contact}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Anonymous Tip Form */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Anonymous Tip Submission
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="tipType" className="text-base font-semibold">
                    Type of Fraud
                  </Label>
                  <select
                    id="tipType"
                    name="tipType"
                    value={tipData.tipType}
                    onChange={handleInputChange}
                    className="mt-2 w-full p-3 border border-input rounded-md"
                    required
                  >
                    <option value="">Select fraud type...</option>
                    <option value="romance_scam">Romance/Dating Scam</option>
                    <option value="investment_fraud">Investment Fraud</option>
                    <option value="exchange_fraud">Exchange Fraud</option>
                    <option value="pig_butchering">Pig Butchering Scam</option>
                    <option value="business_email">Business Email Compromise</option>
                    <option value="ransomware">Ransomware</option>
                    <option value="other">Other Cryptocurrency Fraud</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description" className="text-base font-semibold">
                    Detailed Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={tipData.description}
                    onChange={handleInputChange}
                    placeholder="Provide detailed information about the fraud operation, individuals involved, methods used, and any other relevant details..."
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="evidence" className="text-base font-semibold">
                    Evidence Available
                  </Label>
                  <Textarea
                    id="evidence"
                    name="evidence"
                    value={tipData.evidence}
                    onChange={handleInputChange}
                    placeholder="Describe any evidence you have: screenshots, emails, wallet addresses, phone numbers, websites, etc..."
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-base font-semibold">
                    Contact Information (Optional)
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={tipData.contact}
                    onChange={handleInputChange}
                    placeholder="Email or phone number (only if you want to be contacted about rewards)"
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Leave blank to remain completely anonymous. Contact info is only used for reward eligibility verification.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" className="fbi-button px-8">
                    Submit Anonymous Tip
                  </Button>
                </div>
              </form>
            </Card>

            {/* Protection Guarantees */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Whistleblower Protections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Legal Protections</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Federal whistleblower statute protection</li>
                    <li>• Anti-retaliation provisions</li>
                    <li>• Identity confidentiality guarantees</li>
                    <li>• Secure communication channels</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Reward Process</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Rewards paid after successful prosecutions</li>
                    <li>• Anonymous payment methods available</li>
                    <li>• No reward caps for major cases</li>
                    <li>• Tax guidance provided</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Statistics */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Tip Line Success Stories</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--fbi-blue))] mb-2">$12.4M</div>
                  <p className="text-sm text-muted-foreground">Assets Recovered from Tips</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--fbi-blue))] mb-2">147</div>
                  <p className="text-sm text-muted-foreground">Arrests from Tip Information</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--fbi-blue))] mb-2">$840K</div>
                  <p className="text-sm text-muted-foreground">Total Rewards Paid</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--fbi-blue))] mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Tipster Identity Protection</p>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Tip Line Administration</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Program Coordinator</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Phone:</strong> 1-800-LGN-TIPS</p>
                    <p><strong>Secure Email:</strong> tips@lgnrecovery.gov</p>
                    <p><strong>Available:</strong> 24/7 Emergency Line</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Legal Questions</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> whistleblower@lgnrecovery.gov</p>
                    <p><strong>Phone:</strong> 1-800-LGN-LEGAL</p>
                    <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EST</p>
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

export default BountyHotline;