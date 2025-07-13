import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Calendar, DollarSign, Users, FileText, ChevronRight, AlertTriangle, CheckCircle } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams();

  const caseDetails = {
    'OP-2024-001': {
      id: 'OP-2024-001',
      title: 'Operation Digital Shield',
      type: 'Cryptocurrency Fraud',
      status: 'Closed',
      recoveredAmount: '$2.4M',
      victims: 847,
      date: 'March 2024',
      duration: '8 months',
      jurisdiction: 'Multi-state (15 states)',
      leadAgents: ['Agent Sarah Mitchell', 'Agent David Chen'],
      summary: 'Multi-state investigation targeting fake cryptocurrency investment platform that defrauded victims across 15 states through sophisticated social media advertising and fake testimonials.',
      background: `In July 2023, our cybercrime division received multiple reports of a cryptocurrency investment platform called "CryptoFuture Pro" that was promising unrealistic returns of 300-500% within 90 days. Initial investigation revealed the platform was using stolen identities for testimonials and had no actual trading infrastructure.

The investigation began when victim reports indicated similar patterns across multiple states, with victims being contacted through Facebook and Instagram advertisements featuring celebrity endorsements that were later determined to be deepfakes.`,
      investigation: [
        'Digital forensics analysis of the platform\'s infrastructure',
        'Blockchain transaction tracking across multiple cryptocurrencies',
        'Social media advertising analysis and fake account identification',
        'Victim interview coordination across 15 states',
        'International cooperation with European law enforcement',
        'Financial institution cooperation for asset freezing'
      ],
      evidence: [
        'Over 2.3TB of digital evidence collected',
        '847 victim statements documented',
        'Blockchain analysis revealing $4.2M in total funds flow',
        'Social media data showing 15,000+ fraudulent advertisements',
        'Server logs from 12 different hosting providers',
        'Banking records from 23 financial institutions'
      ],
      outcomes: [
        '15 arrests made across 8 different countries',
        '$2.4M in assets seized and returned to victims',
        'Platform shutdown and domains seized',
        'Victim compensation program established',
        'Public awareness campaign launched',
        'Enhanced detection protocols implemented'
      ],
      timeline: [
        { date: 'July 2023', event: 'Initial victim reports received' },
        { date: 'August 2023', event: 'Task force established' },
        { date: 'September 2023', event: 'International cooperation initiated' },
        { date: 'November 2023', event: 'First arrests made' },
        { date: 'January 2024', event: 'Platform infrastructure seized' },
        { date: 'March 2024', event: 'Case closed, assets distributed' }
      ],
      impact: `This case resulted in the development of new detection algorithms that have since prevented an estimated $12M in additional fraud. The investigation techniques developed during Operation Digital Shield are now standard protocol for cryptocurrency fraud investigations nationwide.`,
      lessons: [
        'Early victim reporting is crucial for successful investigations',
        'International cooperation significantly improves asset recovery rates',
        'Social media platform cooperation is essential for evidence gathering',
        'Blockchain analysis tools must evolve with criminal tactics'
      ]
    }
    // Add more case details here...
  };

  const caseData = caseDetails[id as keyof typeof caseDetails];

  if (!caseData) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <Link to="/case-studies">
              <Button>Return to Case Studies</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary text-white py-12">
          <div className="container">
            <Link to="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-10 w-10" />
              <div>
                <h1 className="text-3xl font-bold">{caseData.title}</h1>
                <p className="text-white/80">Case ID: {caseData.id}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white border-white/30">
                {caseData.type}
              </Badge>
              <Badge className="bg-green-500 text-white">
                {caseData.status}
              </Badge>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-muted/30 py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{caseData.recoveredAmount}</div>
                <div className="text-sm text-muted-foreground">Assets Recovered</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{caseData.victims}</div>
                <div className="text-sm text-muted-foreground">Victims Assisted</div>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{caseData.duration}</div>
                <div className="text-sm text-muted-foreground">Investigation Duration</div>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{caseData.jurisdiction}</div>
                <div className="text-sm text-muted-foreground">Jurisdiction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Details */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Executive Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Executive Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{caseData.summary}</p>
                  </CardContent>
                </Card>

                {/* Background */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Case Background</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">{caseData.background}</p>
                  </CardContent>
                </Card>

                {/* Investigation Process */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Investigation Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseData.investigation.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Evidence Collected */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Evidence Collected</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseData.evidence.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FileText className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Investigation Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {caseData.timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex flex-col items-center mr-4">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                            {index < caseData.timeline.length - 1 && (
                              <div className="w-0.5 h-8 bg-primary/30 mt-2"></div>
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-primary">{item.date}</div>
                            <div className="text-muted-foreground">{item.event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Impact & Lessons */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Impact & Lessons Learned</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Long-term Impact</h4>
                      <p className="text-muted-foreground">{caseData.impact}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Lessons</h4>
                      <ul className="space-y-2">
                        {caseData.lessons.map((lesson, index) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Case Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Case Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Lead Agents</div>
                      <div className="text-sm">
                        {caseData.leadAgents.map((agent, index) => (
                          <div key={index}>{agent}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Date Closed</div>
                      <div className="text-sm">{caseData.date}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Jurisdiction</div>
                      <div className="text-sm">{caseData.jurisdiction}</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Outcomes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Case Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {caseData.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Related Cases */}
                <Card>
                  <CardHeader>
                    <CardTitle>Related Cases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Link to="/case-studies/OP-2024-002" className="block text-sm text-primary hover:underline">
                        Operation Romance Guard
                      </Link>
                      <Link to="/case-studies/OP-2023-018" className="block text-sm text-primary hover:underline">
                        Operation Trade Trap
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;