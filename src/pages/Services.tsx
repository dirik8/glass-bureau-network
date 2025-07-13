import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Shield, FileText, Users, Clock, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Cryptocurrency Investigation',
      description: 'Advanced blockchain analysis and cryptocurrency tracing using cutting-edge forensic tools',
      features: ['Blockchain forensics', 'Transaction analysis', 'Wallet identification', 'Exchange cooperation'],
      pricing: 'Consultation: Free | Investigation: Success-based fee'
    },
    {
      icon: Shield,
      title: 'Asset Recovery Services',
      description: 'Comprehensive recovery operations for victims of cryptocurrency fraud and theft',
      features: ['Legal documentation', 'Recovery coordination', 'Victim advocacy', 'Progress reporting'],
      pricing: 'No recovery, no fee policy'
    },
    {
      icon: FileText,
      title: 'Legal Documentation',
      description: 'Professional evidence preparation and legal support for court proceedings',
      features: ['Evidence compilation', 'Expert testimony', 'Court filings', 'Legal analysis'],
      pricing: 'Starting at $500 per case'
    },
    {
      icon: Users,
      title: 'Victim Support Services',
      description: 'Comprehensive assistance and guidance for cryptocurrency fraud victims',
      features: ['Case consultation', 'Recovery planning', 'Emotional support', 'Prevention education'],
      pricing: 'Free initial consultation'
    }
  ];

  const specializedServices = [
    {
      title: 'Romance Scam Recovery',
      description: 'Specialized support for romance and dating scam victims',
      caseTypes: ['Dating app fraud', 'Catfishing schemes', 'Investment romance scams', 'Military impersonation']
    },
    {
      title: 'Investment Fraud Investigation',
      description: 'Analysis of fraudulent investment schemes and recovery operations',
      caseTypes: ['Ponzi schemes', 'Fake exchanges', 'DeFi protocol fraud', 'Pump and dump schemes']
    },
    {
      title: 'Business Email Compromise',
      description: 'Corporate fraud investigation and asset recovery services',
      caseTypes: ['CEO fraud', 'Vendor impersonation', 'Invoice fraud', 'Wire transfer fraud']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Service Portfolio
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Recovery Services
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Comprehensive cryptocurrency fraud investigation and asset recovery services
              </p>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Core Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="government-card p-8 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-[hsl(var(--fbi-blue))]/10 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="h-1.5 w-1.5 bg-[hsl(var(--fbi-blue))] rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <p className="text-sm font-medium text-[hsl(var(--fbi-blue))]">{service.pricing}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Specialized Services */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Specialized Recovery Programs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {specializedServices.map((service, index) => (
                  <Card key={index} className="government-card p-6">
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Case Types:</h4>
                      <ul className="space-y-1">
                        {service.caseTypes.map((type, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground">• {type}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Service Process */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <Clock className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Service Process
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <h3 className="font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-sm text-muted-foreground">Free case assessment and service explanation</p>
                </div>
                <div className="text-center">
                  <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <h3 className="font-semibold mb-2">Investigation</h3>
                  <p className="text-sm text-muted-foreground">Blockchain analysis and evidence gathering</p>
                </div>
                <div className="text-center">
                  <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <h3 className="font-semibold mb-2">Recovery Action</h3>
                  <p className="text-sm text-muted-foreground">Legal proceedings and asset recovery</p>
                </div>
                <div className="text-center">
                  <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                  <h3 className="font-semibold mb-2">Resolution</h3>
                  <p className="text-sm text-muted-foreground">Asset return and case closure</p>
                </div>
              </div>
            </Card>

            {/* Success Metrics */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <Globe className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Recovery Statistics
              </h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--fbi-blue))] mb-2">$247M</div>
                  <p className="text-sm text-muted-foreground">Total Recovered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--fbi-blue))] mb-2">2,847</div>
                  <p className="text-sm text-muted-foreground">Cases Resolved</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--fbi-blue))] mb-2">73%</div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--fbi-blue))] mb-2">14</div>
                  <p className="text-sm text-muted-foreground">Days Average</p>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Get Started Today</h2>
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <p className="text-muted-foreground">
                  Contact our specialized recovery team for a free consultation and case assessment.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Emergency Hotline</h3>
                    <p className="text-[hsl(var(--fbi-blue))] font-mono">1-800-LGN-HELP</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-[hsl(var(--fbi-blue))]">recovery@lgnrecovery.gov</p>
                  </div>
                </div>
                <Button className="fbi-button px-8">
                  Start Free Consultation
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;