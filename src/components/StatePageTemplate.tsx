import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StateData {
  state: string;
  office: string;
  totalCases: string;
  totalLosses: string;
  increase: string;
  avgLoss: string;
  yearlyData: Array<{
    year: number;
    cases: number;
    losses: string;
    avgLoss: string;
  }>;
  topScamTypes: Array<{
    type: string;
    percentage: number;
    cases: number;
    losses: string;
  }>;
  regionalHotspots: Array<{
    city: string;
    cases: number;
    losses: string;
  }>;
  phoneNumber: string;
  description: string;
}

interface StatePageTemplateProps {
  data: StateData;
}

const StatePageTemplate: React.FC<StatePageTemplateProps> = ({ data }) => {
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
                  <h1 className="text-4xl font-bold">{data.state} Cybercrime Statistics</h1>
                  <p className="text-primary-foreground/80">{data.office} - 2020-2024 Analysis</p>
                </div>
              </div>
              <div className="bg-primary/80 p-6 rounded-lg">
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  {data.description}
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
                <div className="text-3xl font-bold text-primary">{data.totalCases}</div>
                <div className="text-sm text-muted-foreground">Total Cases (2020-2024)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">{data.totalLosses}</div>
                <div className="text-sm text-muted-foreground">Total Losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">{data.increase}</div>
                <div className="text-sm text-muted-foreground">4-Year Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{data.avgLoss}</div>
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
                      {data.yearlyData.map((yearData, index) => (
                        <tr key={yearData.year} className="border-b border-border/50">
                          <td className="py-4 font-semibold text-primary">{yearData.year}</td>
                          <td className="py-4">{yearData.cases.toLocaleString()}</td>
                          <td className="py-4 font-semibold text-red-600">{yearData.losses}</td>
                          <td className="py-4">{yearData.avgLoss}</td>
                          <td className="py-4">
                            {index < data.yearlyData.length - 1 && (
                              <Badge variant={yearData.cases > data.yearlyData[index + 1].cases ? 'destructive' : 'secondary'}>
                                {yearData.cases > data.yearlyData[index + 1].cases ? '↑ Increase' : '↓ Decrease'}
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
                {data.topScamTypes.map((scam, index) => (
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
                      {data.regionalHotspots.map((region, index) => (
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
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-xl text-destructive flex items-center">
                    <AlertCircle className="h-6 w-6 mr-2" />
                    If You're a Victim
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    {data.state} victims should report cybercrime immediately to increase recovery chances 
                    and prevent further victimization.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full fbi-button" size="lg" asChild>
                      <Link to="/contact-us">File IC3 Report</Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      {data.state} Hotline: {data.phoneNumber}
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
                    Access {data.state}-specific prevention programs, educational materials, and 
                    community outreach resources.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/scam-prevention">Prevention Programs</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/case-studies">{data.state} Case Studies</Link>
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

export default StatePageTemplate;