import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, DollarSign, Award, Share } from 'lucide-react';

const ReferralProgram: React.FC = () => {
  const [referralData, setReferralData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    victimName: '',
    victimEmail: '',
    caseDescription: ''
  });

  const rewardTiers = [
    { recovery: '$10,000 - $50,000', reward: '$500', description: 'Standard recovery cases' },
    { recovery: '$50,001 - $100,000', reward: '$1,000', description: 'Medium complexity cases' },
    { recovery: '$100,001 - $500,000', reward: '$2,500', description: 'High-value recoveries' },
    { recovery: '$500,000+', reward: '$5,000', description: 'Major fraud investigations' }
  ];

  const partnerTypes = [
    {
      title: 'Legal Professionals',
      description: 'Attorneys, paralegals, and legal aid organizations',
      benefits: ['Priority case review', 'Legal documentation support', 'Professional referral network']
    },
    {
      title: 'Financial Advisors',
      description: 'Certified financial planners and investment advisors',
      benefits: ['Client protection services', 'Fraud prevention training', 'Educational materials']
    },
    {
      title: 'Law Enforcement',
      description: 'Police departments, detective agencies, and investigators',
      benefits: ['Case collaboration opportunities', 'Evidence sharing protocols', 'Joint investigations']
    },
    {
      title: 'Cybersecurity Firms',
      description: 'Security consultants and digital forensics companies',
      benefits: ['Technical expertise sharing', 'Joint case development', 'Industry partnerships']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setReferralData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Referral submission:', referralData);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Partnership Program
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Professional Referral Program
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Earn rewards while helping cryptocurrency fraud victims access professional recovery services
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Program Overview */}
            <Card className="government-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <Users className="h-8 w-8 text-[hsl(var(--fbi-blue))] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
                  <p className="text-muted-foreground leading-7 text-lg">
                    The LGN Recovery Bureau Professional Referral Program rewards licensed professionals who refer cryptocurrency fraud victims to our recovery services. Help expand our reach while earning compensation for successful case referrals.
                  </p>
                </div>
              </div>
            </Card>

            {/* Reward Structure */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Reward Structure
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {rewardTiers.map((tier, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">Recovery Amount</h3>
                      <Badge variant="secondary" className="text-lg px-3 py-1">{tier.reward}</Badge>
                    </div>
                    <p className="text-[hsl(var(--fbi-blue))] font-mono text-lg mb-2">{tier.recovery}</p>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Payment Terms:</strong> Referral rewards are paid within 30 days of successful asset recovery completion. Minimum case value of $10,000 required for reward eligibility.
                </p>
              </div>
            </Card>

            {/* Partner Types */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Award className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Partner Categories
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {partnerTypes.map((partner, index) => (
                  <Card key={index} className="government-card p-6">
                    <h3 className="text-lg font-semibold mb-3">{partner.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{partner.description}</p>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Partner Benefits:</h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-[hsl(var(--fbi-blue))] rounded-full mt-1.5"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Referral Form */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Share className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Submit a Referral
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Referrer Information</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="referrerName" className="text-sm font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="referrerName"
                        name="referrerName"
                        value={referralData.referrerName}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="referrerEmail" className="text-sm font-medium">
                        Professional Email
                      </Label>
                      <Input
                        id="referrerEmail"
                        name="referrerEmail"
                        type="email"
                        value={referralData.referrerEmail}
                        onChange={handleInputChange}
                        placeholder="email@firm.com"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="referrerPhone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="referrerPhone"
                        name="referrerPhone"
                        value={referralData.referrerPhone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Victim Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="victimName" className="text-sm font-medium">
                        Victim Name
                      </Label>
                      <Input
                        id="victimName"
                        name="victimName"
                        value={referralData.victimName}
                        onChange={handleInputChange}
                        placeholder="Client name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="victimEmail" className="text-sm font-medium">
                        Victim Email
                      </Label>
                      <Input
                        id="victimEmail"
                        name="victimEmail"
                        type="email"
                        value={referralData.victimEmail}
                        onChange={handleInputChange}
                        placeholder="victim@email.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="caseDescription" className="text-sm font-medium">
                    Case Description
                  </Label>
                  <textarea
                    id="caseDescription"
                    name="caseDescription"
                    value={referralData.caseDescription}
                    onChange={handleInputChange}
                    placeholder="Brief description of the fraud case, estimated loss amount, and any relevant details..."
                    className="mt-1 w-full min-h-[100px] p-3 border border-input rounded-md"
                    required
                  />
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" className="fbi-button px-8">
                    Submit Referral
                  </Button>
                </div>
              </form>
            </Card>

            {/* Program Requirements */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Participation Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Professional Credentials</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Active professional license in relevant field</li>
                    <li>• Professional liability insurance</li>
                    <li>• Good standing with professional associations</li>
                    <li>• Background verification clearance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Program Terms</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Referrals must consent to contact</li>
                    <li>• Cases must meet minimum $10,000 loss threshold</li>
                    <li>• Rewards paid only on successful recoveries</li>
                    <li>• Professional ethics standards apply</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Stories */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Partner Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-4 border-[hsl(var(--fbi-blue))] pl-4">
                  <h3 className="font-semibold mb-2">Legal Firm Partnership</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    "Our referral partnership has helped 15+ clients recover over $2.3M in cryptocurrency assets."
                  </p>
                  <div className="text-xs text-[hsl(var(--fbi-blue))]">- Johnson & Associates Law</div>
                </div>
                <div className="border-l-4 border-[hsl(var(--fbi-blue))] pl-4">
                  <h3 className="font-semibold mb-2">Financial Advisory Success</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    "LGN Recovery helped our clients when traditional channels failed. Excellent professional service."
                  </p>
                  <div className="text-xs text-[hsl(var(--fbi-blue))]">- Metropolitan Financial Planning</div>
                </div>
                <div className="border-l-4 border-[hsl(var(--fbi-blue))] pl-4">
                  <h3 className="font-semibold mb-2">Law Enforcement Collaboration</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    "Professional expertise that complements our investigations and helps victims get results."
                  </p>
                  <div className="text-xs text-[hsl(var(--fbi-blue))]">- Metro Police Cyber Division</div>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Partner Relations Contact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Program Coordinator</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> partners@lgnrecovery.gov</p>
                    <p><strong>Phone:</strong> 1-800-LGN-REFER</p>
                    <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Partnership Applications</h3>
                  <p className="text-muted-foreground mb-3">
                    Ready to join our professional network? Apply for partnership status and start earning referral rewards.
                  </p>
                  <Button variant="outline">
                    Apply for Partnership
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReferralProgram;