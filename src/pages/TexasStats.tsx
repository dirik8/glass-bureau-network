
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, TrendingDown, DollarSign, Users, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const TexasStats: React.FC = () => {
  const statisticsData = [
    { label: 'Total Reports (2020-2024)', value: '12,847', icon: Users, change: '+23%' },
    { label: 'Total Losses', value: '$89.2M', icon: DollarSign, change: '+31%' },
    { label: 'Average Loss', value: '$6,947', icon: TrendingUp, change: '+12%' },
    { label: 'Successful Recoveries', value: '3,241', icon: Shield, change: '+45%' }
  ];

  const topScamTypes = [
    { type: 'Cryptocurrency Investment', cases: 4247, losses: '$31.2M', percentage: 33 },
    { type: 'Romance Scams', cases: 2891, losses: '$18.7M', percentage: 22 },
    { type: 'Forex Trading', cases: 2134, losses: '$15.4M', percentage: 17 },
    { type: 'Binary Options', cases: 1756, losses: '$12.1M', percentage: 14 },
    { type: 'Pig Butchering', cases: 1231, losses: '$8.9M', percentage: 10 },
    { type: 'Other', cases: 588, losses: '$2.9M', percentage: 4 }
  ];

  const yearlyData = [
    { year: '2020', cases: 1847, losses: '$12.4M' },
    { year: '2021', cases: 2156, losses: '$15.8M' },
    { year: '2022', cases: 2891, losses: '$19.7M' },
    { year: '2023', cases: 3247, losses: '$21.9M' },
    { year: '2024', cases: 2706, losses: '$19.4M' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-12 w-12" />
                <div>
                  <h1 className="text-4xl font-bold">Texas Cryptocurrency Scam Statistics</h1>
                  <p className="text-primary-foreground/80">2020-2024 Field Office Report</p>
                </div>
              </div>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive analysis of cryptocurrency and investment fraud cases reported 
                in Texas from 2020-2024, compiled by the LGN Recovery Division.
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statisticsData.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                    <Badge variant="secondary" className="text-xs">
                      {stat.change} vs 2019
                    </Badge>
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
                    <CardTitle>Top Scam Types in Texas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topScamTypes.map((scam, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{scam.type}</h4>
                              <span className="text-sm text-muted-foreground">{scam.percentage}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mb-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${scam.percentage}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>{scam.cases.toLocaleString()} cases</span>
                              <span>{scam.losses}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Yearly Trend Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {yearlyData.map((year, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="font-semibold text-lg">{year.year}</div>
                          <div className="text-right">
                            <div className="font-semibold">{year.cases.toLocaleString()} cases</div>
                            <div className="text-sm text-muted-foreground">{year.losses} in losses</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Regional Impact Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Texas has experienced a significant increase in cryptocurrency-related fraud, 
                      with the Houston and Dallas metropolitan areas showing the highest concentration 
                      of reported cases.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Most Affected Cities:</h4>
                        <ul className="text-sm space-y-1">
                          <li className="flex justify-between">
                            <span>Houston</span>
                            <span className="text-muted-foreground">2,847 cases</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Dallas</span>
                            <span className="text-muted-foreground">2,234 cases</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Austin</span>
                            <span className="text-muted-foreground">1,891 cases</span>
                          </li>
                          <li className="flex justify-between">
                            <span>San Antonio</span>
                            <span className="text-muted-foreground">1,456 cases</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Recovery Success Rates:</h4>
                        <ul className="text-sm space-y-1">
                          <li className="flex justify-between">
                            <span>Cryptocurrency</span>
                            <span className="text-muted-foreground">78%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Wire Transfers</span>
                            <span className="text-muted-foreground">65%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Trading Platforms</span>
                            <span className="text-muted-foreground">71%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Romance Scams</span>
                            <span className="text-muted-foreground">67%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Texas Field Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm space-y-2">
                      <p><strong>Regional Director:</strong> Agent Sarah Martinez</p>
                      <p><strong>Established:</strong> 2019</p>
                      <p><strong>Jurisdiction:</strong> State of Texas</p>
                      <p><strong>Specialties:</strong> Crypto fraud, Romance scams</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground mb-2">Emergency Hotline:</p>
                      <p className="font-semibold">+1 (438) 602-5895</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Report a Scam</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      If you've been a victim of cryptocurrency fraud in Texas, 
                      report it immediately to maximize recovery chances.
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full" asChild>
                        <Link to="/contact-us">File Report</Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/asset-recovery-solutions">Asset Recovery</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <Link to="/california-cryptocurrency-scam-statistics-2020-2024" className="block text-primary hover:underline">
                        California Statistics
                      </Link>
                      <Link to="/florida-cryptocurrency-scam-statistics-2020-2024" className="block text-primary hover:underline">
                        Florida Statistics  
                      </Link>
                      <Link to="/new-york-cryptocurrency-scam-statistics-2020-2024" className="block text-primary hover:underline">
                        New York Statistics
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Protect Yourself from Crypto Scams</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Learn how to identify and avoid cryptocurrency scams before becoming a victim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/scam-prevention">Prevention Guide</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TexasStats;
