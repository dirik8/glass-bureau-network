import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Users, DollarSign, AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArizonaStats: React.FC = () => {
  const yearlyData = [
    { year: 2024, cases: 1834, losses: '$49.7M', avgLoss: '$27.1K' },
    { year: 2023, cases: 1567, losses: '$41.2M', avgLoss: '$26.3K' },
    { year: 2022, cases: 1289, losses: '$32.8M', avgLoss: '$25.4K' },
    { year: 2021, cases: 1056, losses: '$25.9M', avgLoss: '$24.5K' },
    { year: 2020, cases: 823, losses: '$18.6M', avgLoss: '$22.6K' }
  ];

  const topScamTypes = [
    { type: 'Investment/Trading Platforms', percentage: 35, cases: 642, losses: '$17.4M' },
    { type: 'Romance/Relationship', percentage: 24, cases: 440, losses: '$11.9M' },
    { type: 'Business Email Compromise', percentage: 18, cases: 330, losses: '$8.9M' },
    { type: 'Tech Support', percentage: 14, cases: 257, losses: '$7.0M' },
    { type: 'Employment/Job', percentage: 9, cases: 165, losses: '$4.5M' }
  ];

  const regionalHotspots = [
    { city: 'Phoenix', cases: 892, losses: '$24.2M' },
    { city: 'Tucson', cases: 467, losses: '$12.6M' },
    { city: 'Mesa', cases: 234, losses: '$6.3M' },
    { city: 'Scottsdale', cases: 156, losses: '$4.2M' },
    { city: 'Other Areas', cases: 85, losses: '$2.4M' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Field Office Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-12 w-12" />
                <div>
                  <Badge className="bg-primary/80 text-primary-foreground mb-2">FIELD OFFICE REPORT</Badge>
                  <h1 className="text-4xl font-bold">Arizona Cybercrime Statistics</h1>
                  <p className="text-primary-foreground/80">Phoenix Field Office - 2020-2024 Analysis</p>
                </div>
              </div>
              <div className="bg-primary/80 p-6 rounded-lg">
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Arizona has experienced a 123% increase in cybercrime incidents over the past four years,
                  with investment fraud targeting retirees being the primary concern for law enforcement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="bg-muted border-l-4 border-red-500 py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6,569</div>
                <div className="text-sm text-muted-foreground">Total Cases (2020-2024)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">$168.2M</div>
                <div className="text-sm text-muted-foreground">Total Losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">123%</div>
                <div className="text-sm text-muted-foreground">4-Year Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$25.6K</div>
                <div className="text-sm text-muted-foreground">Average Loss</div>
              </div>
            </div>
          </div>
        </section>

        {/* Yearly Trends */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">Five-Year Trend Analysis</h2>
            <Card className="government-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Annual Cybercrime Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr>
                        <th className="text-left py-3 text-foreground">Year</th>
                        <th className="text-left py-3 text-foreground">Reported Cases</th>
                        <th className="text-left py-3 text-foreground">Total Losses</th>
                        <th className="text-left py-3 text-foreground">Average Loss</th>
                        <th className="text-left py-3 text-foreground">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearlyData.map((data, index) => (
                        <tr key={data.year} className="border-b border-border/50">
                          <td className="py-4 font-semibold text-primary">{data.year}</td>
                          <td className="py-4">{data.cases.toLocaleString()}</td>
                          <td className="py-4 font-semibold text-red-600">{data.losses}</td>
                          <td className="py-4">{data.avgLoss}</td>
                          <td className="py-4">
                            {index < yearlyData.length - 1 && (
                              <Badge variant={data.cases > yearlyData[index + 1].cases ? 'destructive' : 'secondary'}>
                                {data.cases > yearlyData[index + 1].cases ? '↑ Increase' : '↓ Decrease'}
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scam Type Breakdown */}
        <section className="bg-muted py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">Primary Threat Categories (2024)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {topScamTypes.map((scam, index) => (
                  <Card key={index} className="government-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-primary">{scam.type}</h3>
                        <Badge variant="secondary">{scam.percentage}%</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>Cases: {scam.cases}</div>
                        <div className="text-red-600 font-semibold">Losses: {scam.losses}</div>
                      </div>
                      <div className="mt-3 bg-border rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${scam.percentage}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div>
                <Card className="government-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Regional Hotspots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {regionalHotspots.map((region, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                          <div>
                            <div className="font-medium text-primary">{region.city}</div>
                            <div className="text-sm text-muted-foreground">{region.cases} cases</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-red-600">{region.losses}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Action Items */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="government-card border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600 flex items-center">
                    <AlertCircle className="h-6 w-6 mr-2" />
                    If You're a Victim
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Arizona victims should report cybercrime immediately to increase recovery chances 
                    and prevent further victimization.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full fbi-button" size="lg" asChild>
                      <Link to="/contact-us">File IC3 Report</Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Arizona Hotline: (602) 279-5511
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="government-card border-primary">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Prevention Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Access Arizona-specific prevention programs, educational materials, and 
                    community outreach resources.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/scam-prevention">Prevention Programs</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/case-studies">Arizona Case Studies</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ArizonaStats;