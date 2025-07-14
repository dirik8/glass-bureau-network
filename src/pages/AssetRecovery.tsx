import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, DollarSign, Clock, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AssetRecovery: React.FC = () => {
  const servicesData = [
    {
      title: 'Cryptocurrency Recovery',
      description: 'Specialized recovery of Bitcoin, Ethereum, and other digital assets',
      successRate: '78%',
      avgTimeframe: '45-90 days'
    },
    {
      title: 'Trading Platform Funds',
      description: 'Recovery from fraudulent Forex, binary options, and CFD platforms',
      successRate: '73%',
      avgTimeframe: '30-60 days'
    },
    {
      title: 'Wire Transfer Recovery',
      description: 'Tracing and recovery of fraudulent wire transfers and bank transfers',
      successRate: '65%',
      avgTimeframe: '21-45 days'
    },
    {
      title: 'Romance Scam Assets',
      description: 'Recovery of funds lost to romance and relationship scams',
      successRate: '67%',
      avgTimeframe: '30-75 days'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Case Assessment',
      description: 'Comprehensive analysis of your case and loss documentation',
      duration: '24-48 hours'
    },
    {
      step: '2',
      title: 'Investigation Launch',
      description: 'Deploy specialized investigators and forensic analysts',
      duration: '3-7 days'
    },
    {
      step: '3',
      title: 'Asset Tracing',
      description: 'Advanced blockchain analysis and financial forensics',
      duration: '2-4 weeks'
    },
    {
      step: '4',
      title: 'Recovery Action',
      description: 'Legal proceedings and asset seizure coordination',
      duration: '4-8 weeks'
    },
    {
      step: '5',
      title: 'Asset Return',
      description: 'Secure transfer of recovered assets to victim',
      duration: '1-2 weeks'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-12 w-12" />
                <div>
                  <h1 className="text-4xl font-bold">Asset Recovery Solutions</h1>
                  <p className="text-primary-foreground/80">Elite Digital Asset Recovery Division</p>
                </div>
              </div>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Our specialized asset recovery team employs cutting-edge blockchain forensics, 
                international legal coordination, and advanced investigative techniques to recover 
                your stolen digital and traditional assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact-us">Start Recovery Process</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700 font-bold shadow-lg ring-2 ring-red-500/30"
                >
                  Emergency: (438) 602-5895
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Statistics */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">$24.8M</div>
                  <div className="text-sm text-muted-foreground">Total Recovered (2024)</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">73%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">45</div>
                  <div className="text-sm text-muted-foreground">Avg Days to Recovery</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">1,247</div>
                  <div className="text-sm text-muted-foreground">Cases Resolved</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recovery Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive asset recovery across multiple fraud types and platforms
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="secondary">
                        {service.successRate} Success
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Timeframe: {service.avgTimeframe}</span>
                      </span>
                      <Button variant="ghost" size="sm">
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Process */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recovery Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our systematic approach maximizes recovery chances while minimizing time and cost
              </p>
            </div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Badge variant="outline">{step.duration}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 bottom-0 w-0.5 h-8 bg-border transform translate-y-full"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What are the costs involved?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We operate on a no-recovery, no-fee basis for most cases. Our fee is only 
                      charged upon successful asset recovery, typically 25-35% of recovered funds.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How long does recovery take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Recovery timeframes vary by case complexity, but most cases are resolved 
                      within 45-90 days. Time-sensitive cases receive priority handling.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What information do you need?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Transaction records, communication with scammers, wallet addresses, 
                      platform details, and any documentation related to your loss.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is my case too small?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We handle cases of all sizes. While larger cases may receive priority, 
                      we're committed to helping all fraud victims regardless of loss amount.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Recover Your Assets?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Time is critical in asset recovery. The sooner we begin, the better your chances 
              of a successful outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact-us">Start Your Case</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700 font-bold shadow-lg ring-2 ring-red-500/30"
              >
                Call Now: (438) 602-5895
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AssetRecovery;
