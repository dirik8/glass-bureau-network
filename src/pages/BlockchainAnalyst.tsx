import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, Database, TrendingUp, Award, Zap, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const BlockchainAnalyst = () => {
  const capabilities = [
    {
      icon: Activity,
      title: "Real-time Analysis",
      description: "Live blockchain monitoring and transaction analysis with instant alerts and notifications."
    },
    {
      icon: Database,
      title: "Multi-chain Support",
      description: "Analysis across Bitcoin, Ethereum, Polygon, BSC, and 500+ blockchain networks."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Machine learning algorithms for pattern recognition and risk assessment."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide blockchain analysis with support for regional compliance requirements."
    }
  ];

  const tools = [
    "Chainalysis Reactor",
    "Elliptic Investigator", 
    "CipherTrace Inspector",
    "Crystal Blockchain",
    "Maltego CE",
    "OSINT Framework"
  ];

  const achievements = [
    { number: "10,000+", label: "Transactions Analyzed" },
    { number: "$50M+", label: "Assets Traced" },
    { number: "500+", label: "Cases Resolved" },
    { number: "99.7%", label: "Success Rate" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Professional Blockchain Analyst Services | LGN Recovery</title>
        <meta name="description" content="Expert blockchain analysis services. Professional cryptocurrency tracing, multi-chain investigations, and advanced blockchain forensics." />
        <meta name="keywords" content="blockchain analyst, cryptocurrency tracing, blockchain forensics, multi-chain analysis" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Certified Blockchain Analysis
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Professional Blockchain Analyst Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Advanced blockchain analysis and cryptocurrency tracing by certified analysts. 
              Multi-chain investigations with real-time monitoring and comprehensive reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Get Analysis Report
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Capabilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Analysis Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive blockchain analysis services using industry-leading tools and methodologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-secondary/10 hover:border-secondary/30 transition-colors">
                <CardHeader className="text-center">
                  <capability.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Tools */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Professional Tools
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Industry-Leading Analysis Platforms</h2>
              <p className="text-muted-foreground mb-6">
                Our analysts utilize the most advanced blockchain analysis tools available, 
                ensuring comprehensive investigation capabilities across all major cryptocurrency networks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">Analysis Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Analysis Service Tiers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the level of blockchain analysis that best fits your investigation needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle>Basic Analysis</CardTitle>
                <CardDescription>Essential blockchain tracing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Transaction path analysis</li>
                  <li>• Basic address clustering</li>
                  <li>• Exchange identification</li>
                  <li>• PDF report delivery</li>
                </ul>
                <Button className="w-full" variant="outline">
                  Start Basic Analysis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 ring-2 ring-secondary/20">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-secondary/10 text-secondary">Most Popular</Badge>
                <CardTitle>Advanced Analysis</CardTitle>
                <CardDescription>Comprehensive investigation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Multi-chain analysis</li>
                  <li>• Advanced clustering algorithms</li>
                  <li>• Risk scoring & compliance</li>
                  <li>• Interactive visualization</li>
                  <li>• Expert consultation included</li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Start Advanced Analysis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle>Enterprise Analysis</CardTitle>
                <CardDescription>Full investigation suite</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Real-time monitoring</li>
                  <li>• Custom investigation workflows</li>
                  <li>• Court-ready evidence packages</li>
                  <li>• Dedicated analyst team</li>
                  <li>• 24/7 priority support</li>
                </ul>
                <Button className="w-full" variant="outline">
                  Contact for Enterprise
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-6 w-6 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Certified Professionals
            </Badge>
          </div>
          <h2 className="text-3xl font-bold mb-4">Industry Certifications</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our blockchain analysts hold professional certifications from leading industry organizations 
            and maintain the highest standards of investigative excellence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="font-semibold text-sm">CAMS</div>
              <div className="text-xs text-muted-foreground">Anti-Money Laundering</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="font-semibold text-sm">CFE</div>
              <div className="text-xs text-muted-foreground">Fraud Examiner</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="font-semibold text-sm">GCFA</div>
              <div className="text-xs text-muted-foreground">Digital Forensics</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="font-semibold text-sm">CISSP</div>
              <div className="text-xs text-muted-foreground">Security Professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Professional Blockchain Analysis?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with our certified blockchain analysts and unlock comprehensive cryptocurrency investigation capabilities.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Start Analysis Project
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BlockchainAnalyst;