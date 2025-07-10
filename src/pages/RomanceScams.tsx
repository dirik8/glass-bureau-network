
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Heart, AlertTriangle, DollarSign, Users, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RomanceScams: React.FC = () => {
  const redFlagsData = [
    'Professes love very quickly, often within days',
    'Refuses phone calls or video chats',
    'Claims to be traveling, deployed, or living abroad',
    'Asks for money for emergencies or travel',
    'Photos look too professional or model-like',
    'Stories become inconsistent over time'
  ];

  const statisticsData = [
    { label: 'Reported Cases (2024)', value: '3,247', icon: Users },
    { label: 'Average Loss', value: '$18,500', icon: DollarSign },
    { label: 'Recovery Success', value: '67%', icon: Shield },
    { label: 'Investigation Period', value: '30 days', icon: Calendar }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-12 w-12" />
                <div>
                  <h1 className="text-4xl font-bold">Romance Scams</h1>
                  <p className="text-primary-foreground/80">Emotional Manipulation Investigations</p>
                </div>
              </div>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Romance scammers exploit emotional connections to defraud victims of money and personal 
                information. These sophisticated criminals operate internationally, targeting vulnerable 
                individuals through dating platforms and social media.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statisticsData.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-6 w-6 text-primary" />
                      <span>How Romance Scams Work</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Romance scammers create fake profiles on dating sites and social media platforms, 
                      using stolen photos and fabricated life stories. They build emotional relationships 
                      over weeks or months before requesting money.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Typical Progression:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-primary">1. Initial Contact</h5>
                          <p className="text-sm text-muted-foreground">
                            Scammer initiates contact through dating apps or social media
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-primary">2. Relationship Building</h5>
                          <p className="text-sm text-muted-foreground">
                            Intensive communication to build trust and emotional connection
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-primary">3. Crisis Creation</h5>
                          <p className="text-sm text-muted-foreground">
                            Fabricated emergency requiring immediate financial assistance
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-primary">4. Money Request</h5>
                          <p className="text-sm text-muted-foreground">
                            Request for wire transfers, gift cards, or cryptocurrency
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Common Scammer Personas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Shield className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Military Personnel</h4>
                        <p className="text-sm text-muted-foreground">
                          Claims to be deployed overseas, unable to access funds
                        </p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <DollarSign className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Business Traveler</h4>
                        <p className="text-sm text-muted-foreground">
                          Wealthy professional stuck abroad needing financial help
                        </p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Heart className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">Widower/Widow</h4>
                        <p className="text-sm text-muted-foreground">
                          Recent loss seeking companionship and new relationship
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recovery Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our romance scam investigation team specializes in international fraud cases, 
                      working with global law enforcement to track down perpetrators and recover assets.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                        <div>
                          <h4 className="font-semibold">Evidence Collection</h4>
                          <p className="text-sm text-muted-foreground">
                            Gather all communication records, photos, and financial transactions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                        <div>
                          <h4 className="font-semibold">Identity Verification</h4>
                          <p className="text-sm text-muted-foreground">
                            Reverse image searches and profile analysis to identify real perpetrator
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                        <div>
                          <h4 className="font-semibold">Financial Tracing</h4>
                          <p className="text-sm text-muted-foreground">
                            Track money transfers and identify recovery opportunities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                        <div>
                          <h4 className="font-semibold">Legal Action</h4>
                          <p className="text-sm text-muted-foreground">
                            Coordinate with law enforcement and pursue asset recovery
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <span>Red Flags</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {redFlagsData.map((flag, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-destructive/5 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">Victim Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Romance scam victims often experience emotional trauma alongside financial loss. 
                      Our team provides comprehensive support throughout the recovery process.
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full" asChild>
                        <Link to="/contact-us">Get Immediate Help</Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/asset-recovery-solutions">Asset Recovery</Link>
                      </Button>
                    </div>
                    <div className="pt-4 border-t border-destructive/20">
                      <p className="text-xs text-muted-foreground">
                        24/7 Support Hotline: <br />
                        <span className="font-semibold text-destructive">+1 (438) 602-5895</span>
                      </p>
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

export default RomanceScams;
