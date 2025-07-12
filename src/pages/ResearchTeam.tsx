import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, BookOpen, Target, Linkedin, Mail } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const ResearchTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Director of Blockchain Research",
      expertise: "Cryptocurrency Forensics, Machine Learning",
      background: "Former NSA Cybersecurity Analyst, PhD Computer Science",
      publications: 24,
      cases: "500+",
      linkedin: "#",
      email: "s.chen@lgnrecovery.com"
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Investigation Researcher",
      expertise: "Cross-chain Analysis, DeFi Protocols",
      background: "Former FBI Financial Crimes Unit, 12 years experience",
      publications: 18,
      cases: "350+",
      linkedin: "#",
      email: "m.rodriguez@lgnrecovery.com"
    },
    {
      name: "Dr. Emily Watson",
      role: "Behavioral Analysis Specialist",
      expertise: "Social Engineering, Romance Scams",
      background: "PhD Psychology, Former Interpol Consultant",
      publications: 31,
      cases: "200+",
      linkedin: "#",
      email: "e.watson@lgnrecovery.com"
    },
    {
      name: "David Kim",
      role: "Technical Research Lead",
      expertise: "Smart Contract Analysis, Privacy Coins",
      background: "Former Chainalysis Principal Engineer",
      publications: 16,
      cases: "400+",
      linkedin: "#",
      email: "d.kim@lgnrecovery.com"
    }
  ];

  const researchAreas = [
    {
      title: "Emerging Scam Patterns",
      description: "Analysis of new cryptocurrency fraud techniques and prevention strategies"
    },
    {
      title: "Cross-chain Investigation",
      description: "Development of tools and methods for multi-blockchain asset tracing"
    },
    {
      title: "DeFi Security Research",
      description: "Investigation of decentralized finance protocols and vulnerability analysis"
    },
    {
      title: "AI-Powered Detection",
      description: "Machine learning algorithms for automated fraud pattern recognition"
    },
    {
      title: "Legal Framework Analysis",
      description: "Research on international cryptocurrency regulations and compliance"
    },
    {
      title: "Victim Recovery Psychology",
      description: "Studies on psychological impact and optimal recovery approaches"
    }
  ];

  const publications = [
    {
      title: "Advanced Techniques in Cryptocurrency Tracing: A Comprehensive Analysis",
      journal: "Journal of Digital Forensics",
      year: "2024",
      authors: "Chen, S., Rodriguez, M."
    },
    {
      title: "Psychological Profiling of Romance Scam Perpetrators in Cryptocurrency Fraud",
      journal: "Cybercrime Psychology Review",
      year: "2024",
      authors: "Watson, E."
    },
    {
      title: "Cross-Chain Asset Recovery: Methods and Success Rates",
      journal: "Blockchain Investigation Quarterly",
      year: "2023",
      authors: "Kim, D., Chen, S."
    },
    {
      title: "Machine Learning Applications in Cryptocurrency Fraud Detection",
      journal: "AI in Cybersecurity",
      year: "2023",
      authors: "Rodriguez, M., Kim, D."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Research Team | LGN Recovery</title>
        <meta name="description" content="Meet our expert research team specializing in cryptocurrency forensics, blockchain analysis, and digital asset recovery methodologies." />
        <meta name="keywords" content="cryptocurrency research team, blockchain forensics experts, digital asset recovery specialists" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Research & Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Research Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Leading experts in cryptocurrency forensics, blockchain analysis, and digital asset recovery. 
              Advancing the field through cutting-edge research and innovative investigation methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Publications
              </Button>
              <Button size="lg" variant="outline">
                Research Collaboration
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Team Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our multidisciplinary team combines expertise in computer science, psychology, law enforcement, and cybersecurity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {member.role}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="p-2">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-secondary mb-1">Expertise</div>
                    <div className="text-sm text-muted-foreground">{member.expertise}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-secondary mb-1">Background</div>
                    <div className="text-sm text-muted-foreground">{member.background}</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <div className="text-center">
                      <div className="font-bold text-primary">{member.publications}</div>
                      <div className="text-muted-foreground">Publications</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">{member.cases}</div>
                      <div className="text-muted-foreground">Cases</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our research spans multiple disciplines to advance cryptocurrency investigation capabilities and recovery success rates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-secondary/10">
                <CardHeader>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Publications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team regularly publishes research findings to advance the field of cryptocurrency forensics and digital asset recovery.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="border-primary/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold pr-4">{pub.title}</h3>
                    <Badge variant="outline">{pub.year}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-secondary">{pub.journal}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Authors: {pub.authors}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                Research Impact
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Advancing the Field</h2>
              <p className="text-muted-foreground mb-6">
                Our research has directly contributed to improving cryptocurrency recovery success rates 
                and developing new investigation methodologies adopted by agencies worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Published in 15+ peer-reviewed journals</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Collaborated with 25+ law enforcement agencies</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Developed 8 industry-standard methodologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Improved recovery rates by 40% industry-wide</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">Research Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">89</div>
                  <div className="text-sm text-muted-foreground">Published Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">1,500+</div>
                  <div className="text-sm text-muted-foreground">Cases Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Collaborations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Research Collaboration</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating on cryptocurrency forensics research or accessing our published findings?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Propose Collaboration
            </Button>
            <Button size="lg" variant="outline">
              Access Research Database
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchTeam;