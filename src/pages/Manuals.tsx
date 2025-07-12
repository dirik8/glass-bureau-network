import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Shield, Users, Lock, FileText } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Manuals = () => {
  const manuals = [
    {
      category: "Investigation Procedures",
      icon: BookOpen,
      guides: [
        { title: "Cryptocurrency Investigation Handbook", pages: 156, level: "Advanced" },
        { title: "Blockchain Forensics Best Practices", pages: 89, level: "Intermediate" },
        { title: "Digital Evidence Collection Guide", pages: 112, level: "Beginner" },
        { title: "Cross-Chain Analysis Procedures", pages: 67, level: "Advanced" }
      ]
    },
    {
      category: "Security Protocols",
      icon: Shield,
      guides: [
        { title: "Secure Investigation Environment Setup", pages: 45, level: "Intermediate" },
        { title: "Data Protection and Privacy Manual", pages: 78, level: "Beginner" },
        { title: "Chain of Custody Procedures", pages: 34, level: "Intermediate" },
        { title: "Incident Response Playbook", pages: 92, level: "Advanced" }
      ]
    },
    {
      category: "Training Materials",
      icon: Users,
      guides: [
        { title: "New Investigator Onboarding", pages: 123, level: "Beginner" },
        { title: "Advanced Analysis Techniques", pages: 201, level: "Advanced" },
        { title: "Legal Compliance Training", pages: 87, level: "Intermediate" },
        { title: "Client Communication Guidelines", pages: 56, level: "Beginner" }
      ]
    }
  ];

  const standards = [
    "ISO 27001 Information Security",
    "NIST Cybersecurity Framework",
    "ACFE Fraud Investigation Standards",
    "Chain of Custody Protocols",
    "Evidence Handling Procedures",
    "Legal Compliance Requirements"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Investigation Manuals & Procedures | LGN Recovery</title>
        <meta name="description" content="Comprehensive investigation manuals, procedures, and training materials for cryptocurrency forensics and digital asset recovery." />
        <meta name="keywords" content="investigation manuals, blockchain forensics procedures, cryptocurrency investigation guide" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Professional Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Investigation Manuals & Procedures
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive documentation, best practices, and training materials for cryptocurrency 
              investigations and blockchain forensics. Industry-standard procedures and protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Download Manual Library
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Manual Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Organized documentation covering all aspects of cryptocurrency investigation and digital forensics.
            </p>
          </div>
          
          <div className="space-y-8">
            {manuals.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.guides.map((guide, guideIndex) => (
                      <div key={guideIndex} className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-2 text-sm">{guide.title}</h4>
                        <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                          <span>{guide.pages} pages</span>
                          <Badge variant="outline" className="text-xs">
                            {guide.level}
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          <Download className="mr-1 h-3 w-3" />
                          Download PDF
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                Industry Standards
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Compliance & Standards</h2>
              <p className="text-muted-foreground mb-6">
                Our procedures and manuals are developed in accordance with industry best practices 
                and international standards for digital forensics and investigation.
              </p>
              <div className="space-y-3">
                {standards.map((standard, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Lock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Documentation Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Step-by-Step Procedures</div>
                    <div className="text-xs text-muted-foreground">Detailed workflows with screenshots and examples</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Security Best Practices</div>
                    <div className="text-xs text-muted-foreground">Industry-standard security protocols and guidelines</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Training Materials</div>
                    <div className="text-xs text-muted-foreground">Comprehensive training guides for all skill levels</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Regular Updates</div>
                    <div className="text-xs text-muted-foreground">Continuously updated with latest techniques and tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Access Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Frequently accessed procedures and quick reference guides for immediate use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader className="text-center pb-4">
                <Badge className="mb-2 bg-red-500/10 text-red-600 border-red-500/20">
                  Emergency
                </Badge>
                <CardTitle className="text-lg">Emergency Response Checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Immediate action items for cryptocurrency theft incidents
                </p>
                <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Checklist
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader className="text-center pb-4">
                <Badge className="mb-2 bg-blue-500/10 text-blue-600 border-blue-500/20">
                  Reference
                </Badge>
                <CardTitle className="text-lg">Tool Configuration Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Quick setup guides for investigation tools and software
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader className="text-center pb-4">
                <Badge className="mb-2 bg-green-500/10 text-green-600 border-green-500/20">
                  Templates
                </Badge>
                <CardTitle className="text-lg">Report Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Professional report templates for investigation findings
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Templates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Access Complete Manual Library</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get comprehensive access to our complete library of investigation manuals, procedures, and training materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Full Access
            </Button>
            <Button size="lg" variant="outline">
              Contact Documentation Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manuals;