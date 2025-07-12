import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Shield, Target, FileText, Users, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const CryptoInvestigation = () => {
  const services = [
    {
      icon: Search,
      title: "Transaction Analysis",
      description: "Deep blockchain analysis to trace cryptocurrency movements and identify transaction patterns."
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Advanced algorithms and expert analysis to detect fraudulent cryptocurrency activities."
    },
    {
      icon: Target,
      title: "Asset Recovery",
      description: "Comprehensive strategies to recover stolen or misappropriated digital assets."
    },
    {
      icon: FileText,
      title: "Evidence Collection",
      description: "Court-admissible evidence gathering for legal proceedings and law enforcement."
    }
  ];

  const process = [
    { step: "1", title: "Initial Assessment", desc: "Comprehensive evaluation of your case and available evidence" },
    { step: "2", title: "Blockchain Analysis", desc: "Deep investigation using advanced blockchain forensic tools" },
    { step: "3", title: "Evidence Documentation", desc: "Detailed documentation and chain of custody procedures" },
    { step: "4", title: "Recovery Strategy", desc: "Implementation of targeted asset recovery strategies" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Professional Cryptocurrency Investigation Services | LGN Recovery</title>
        <meta name="description" content="Expert cryptocurrency investigation services. Blockchain forensics, fraud detection, and digital asset recovery by certified investigators." />
        <meta name="keywords" content="cryptocurrency investigation, blockchain forensics, crypto fraud detection, digital asset recovery" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Professional Investigation Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cryptocurrency Investigation & Forensics
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Advanced blockchain forensics and cryptocurrency investigation services by certified digital asset recovery specialists. 
              Comprehensive fraud detection and evidence collection for legal proceedings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Investigation
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investigation Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cryptocurrency investigation services using advanced blockchain analysis tools and methodologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investigation Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Investigation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to cryptocurrency investigations ensuring thorough analysis and admissible evidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                Expert Team
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Certified Blockchain Investigators</h2>
              <p className="text-muted-foreground mb-6">
                Our team consists of certified blockchain analysts, former law enforcement officers, 
                and cybersecurity experts with extensive experience in cryptocurrency investigations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>15+ Certified Digital Forensics Specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Former Law Enforcement & Intelligence Officers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>24/7 Emergency Investigation Response</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Investigation Capabilities</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Bitcoin, Ethereum, and 500+ Cryptocurrency Networks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Advanced Clustering and De-anonymization Techniques
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Cross-chain Transaction Analysis and Tracing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Court-Admissible Evidence Documentation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  International Asset Recovery Coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Cryptocurrency Investigation?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our expert investigation team for a confidential consultation about your cryptocurrency case.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Request Investigation Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CryptoInvestigation;