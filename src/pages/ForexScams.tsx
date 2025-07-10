
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, TrendingDown, AlertTriangle, DollarSign, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForexScams: React.FC = () => {
  const warningSignsData = [
    'Promises of guaranteed profits with no risk',
    'Unregistered brokers or trading platforms',
    'High-pressure sales tactics and urgent deadlines',
    'Requests for personal banking information',
    'Testimonials that seem too good to be true',
    'No regulatory oversight or licensing information'
  ];

  const statisticsData = [
    { label: 'Reported Cases (2024)', value: '2,847', icon: Users },
    { label: 'Average Loss', value: '$12,400', icon: DollarSign },
    { label: 'Recovery Rate', value: '73%', icon: TrendingDown },
    { label: 'Investigation Time', value: '45 days', icon: Calendar }
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
                  <h1 className="text-4xl font-bold">Forex Trading Scams</h1>
                  <p className="text-primary-foreground/80">Intelligence Brief - LGN Recovery Division</p>
                </div>
              </div>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Foreign exchange (Forex) scams have become increasingly sophisticated, targeting both 
                novice and experienced traders through fake brokers, manipulated platforms, and 
                fraudulent investment schemes.
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
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                      <span>How Forex Scams Operate</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Forex scammers typically operate through unregulated brokers who manipulate trading 
                      platforms to ensure client losses. They often use sophisticated marketing campaigns, 
                      fake testimonials, and promises of automated trading systems.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Common Tactics:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Fake regulatory credentials and licenses</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Manipulated trading platforms and price feeds</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Bonus schemes designed to trap deposits</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Withdrawal restrictions and hidden fees</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Investigation Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our specialized Forex investigation team employs advanced digital forensics 
                      and regulatory coordination to trace fraudulent activities and recover assets.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Phase 1: Assessment</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed analysis of trading records and broker verification
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Phase 2: Tracing</h4>
                        <p className="text-sm text-muted-foreground">
                          Financial transaction analysis and asset location
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Phase 3: Recovery</h4>
                        <p className="text-sm text-muted-foreground">
                          Legal action coordination and asset recovery procedures
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Phase 4: Prevention</h4>
                        <p className="text-sm text-muted-foreground">
                          Regulatory reporting and prevention measures
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Warning Signs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {warningSignsData.map((sign, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Immediate Action Required?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      If you suspect you've been targeted by a Forex scam, time is critical 
                      for asset recovery.
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full" asChild>
                        <Link to="/contact-us">Report Forex Scam</Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/asset-recovery-solutions">Asset Recovery</Link>
                      </Button>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground">
                        Emergency Hotline: <br />
                        <span className="font-semibold">+1 (438) 602-5895</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-muted py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Asset Recovery</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specialized recovery services for Forex fraud victims
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/asset-recovery-solutions">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <TrendingDown className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Investigation Services</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive fraud investigation and evidence gathering
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/crypto-investigation">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Prevention Training</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Educational programs to prevent future victimization
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/scam-prevention">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForexScams;
