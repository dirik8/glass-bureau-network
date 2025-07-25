import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Users, DollarSign, AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndianaStats: React.FC = () => {
  const yearlyData = [
    { year: 2024, cases: 1298, losses: '$35.1M', avgLoss: '$27.0K' },
    { year: 2023, cases: 1134, losses: '$30.2M', avgLoss: '$26.6K' },
    { year: 2022, cases: 967, losses: '$25.4M', avgLoss: '$26.3K' },
    { year: 2021, cases: 823, losses: '$21.1M', avgLoss: '$25.6K' },
    { year: 2020, cases: 645, losses: '$15.8M', avgLoss: '$24.5K' }
  ];

  const topScamTypes = [
    { type: 'Investment/Trading Platforms', percentage: 36, cases: 467, losses: '$12.6M' },
    { type: 'Romance/Relationship', percentage: 23, cases: 299, losses: '$8.1M' },
    { type: 'Business Email Compromise', percentage: 18, cases: 234, losses: '$6.3M' },
    { type: 'Tech Support', percentage: 13, cases: 169, losses: '$4.6M' },
    { type: 'Employment/Job', percentage: 10, cases: 129, losses: '$3.5M' }
  ];

  const regionalHotspots = [
    { city: 'Indianapolis', cases: 534, losses: '$14.4M' },
    { city: 'Fort Wayne', cases: 234, losses: '$6.3M' },
    { city: 'Evansville', cases: 156, losses: '$4.2M' },
    { city: 'South Bend', cases: 123, losses: '$3.3M' },
    { city: 'Other Areas', cases: 251, losses: '$6.8M' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Field Office Header */}
        <section className="bg-fbi-blue text-white py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-12 w-12" />
                <div>
                  <Badge className="bg-fbi-blue-800 text-white mb-2">FIELD OFFICE REPORT</Badge>
                  <h1 className="text-4xl font-bold">Indiana Cybercrime Statistics</h1>
                  <p className="text-fbi-blue-100">Indianapolis Field Office - 2020-2024 Analysis</p>
                </div>
              </div>
              <div className="bg-fbi-blue-900/50 p-6 rounded-lg">
                <p className="text-xl text-fbi-blue-100 leading-relaxed">
                  Indiana has seen a 101% increase in cybercrime incidents over four years, 
                  with rural and suburban areas increasingly targeted through sophisticated 
                  online investment and romance scams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="bg-government-gray-50 border-l-4 border-red-500 py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">4,867</div>
                <div className="text-sm text-government-gray-600">Total Cases (2020-2024)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">$127.6M</div>
                <div className="text-sm text-government-gray-600">Total Losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">101%</div>
                <div className="text-sm text-government-gray-600">4-Year Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">$26.2K</div>
                <div className="text-sm text-government-gray-600">Average Loss</div>
              </div>
            </div>
          </div>
        </section>

        {/* Yearly Trends */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-fbi-blue mb-8">Five-Year Trend Analysis</h2>
            <Card className="government-card">
              <CardHeader>
                <CardTitle className="text-xl text-fbi-blue flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Annual Cybercrime Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-government-gray-200">
                      <tr>
                        <th className="text-left py-3 text-government-gray-700">Year</th>
                        <th className="text-left py-3 text-government-gray-700">Reported Cases</th>
                        <th className="text-left py-3 text-government-gray-700">Total Losses</th>
                        <th className="text-left py-3 text-government-gray-700">Average Loss</th>
                        <th className="text-left py-3 text-government-gray-700">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearlyData.map((data, index) => (
                        <tr key={data.year} className="border-b border-government-gray-100">
                          <td className="py-4 font-semibold text-fbi-blue">{data.year}</td>
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
        <section className="bg-government-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-fbi-blue mb-8">Primary Threat Categories (2024)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {topScamTypes.map((scam, index) => (
                  <Card key={index} className="government-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-fbi-blue">{scam.type}</h3>
                        <Badge variant="secondary">{scam.percentage}%</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-government-gray-600">
                        <div>Cases: {scam.cases}</div>
                        <div className="text-red-600 font-semibold">Losses: {scam.losses}</div>
                      </div>
                      <div className="mt-3 bg-government-gray-200 rounded-full h-2">
                        <div 
                          className="bg-fbi-blue h-2 rounded-full" 
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
                    <CardTitle className="text-xl text-fbi-blue">Regional Hotspots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {regionalHotspots.map((region, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-government-gray-100 last:border-0">
                          <div>
                            <div className="font-medium text-fbi-blue">{region.city}</div>
                            <div className="text-sm text-government-gray-600">{region.cases} cases</div>
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
                  <p className="text-government-gray-700">
                    Indiana victims should report cybercrime immediately to increase recovery chances 
                    and prevent further victimization.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full fbi-button" size="lg" asChild>
                      <Link to="/contact-us">File IC3 Report</Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Indiana Hotline: (317) 595-4000
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="government-card border-fbi-blue">
                <CardHeader>
                  <CardTitle className="text-xl text-fbi-blue">Prevention Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-government-gray-700">
                    Access Indiana-specific prevention programs, educational materials, and 
                    community outreach resources.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/scam-prevention">Prevention Programs</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/case-studies">Indiana Case Studies</Link>
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

export default IndianaStats;