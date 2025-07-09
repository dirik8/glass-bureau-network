
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, TrendingUp, AlertTriangle, Users, DollarSign, Calendar, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CryptocurrencyScams: React.FC = () => {
  const scamTypes = [
    {
      type: 'Investment Platforms',
      risk: 'Critical',
      description: 'Fake trading platforms promising guaranteed returns',
      indicators: ['Unrealistic profit promises', 'Pressure to invest quickly', 'No regulatory compliance']
    },
    {
      type: 'Pig Butchering',
      risk: 'Critical',
      description: 'Long-term relationship building followed by investment fraud',
      indicators: ['Online relationship development', 'Gradual investment suggestions', 'Withdrawal restrictions']
    },
    {
      type: 'Wallet Drainage',
      risk: 'High',
      description: 'Malicious software designed to steal cryptocurrency wallets',
      indicators: ['Unexpected wallet access', 'Suspicious software installations', 'Phishing attempts']
    },
    {
      type: 'Ponzi Schemes',
      risk: 'High',
      description: 'Using new investor funds to pay earlier investors',
      indicators: ['Consistent high returns', 'Referral bonuses', 'Lack of transparency']
    }
  ];

  const preventionSteps = [
    'Verify all investment platforms through official regulatory databases',
    'Never invest based on unsolicited contact or social media ads',
    'Use only reputable cryptocurrency exchanges and wallets',
    'Enable two-factor authentication on all accounts',
    'Be skeptical of guaranteed returns or "get rich quick" schemes',
    'Research the background of investment advisors and companies',
    'Keep private keys secure and never share them',
    'Report suspicious activity immediately to authorities'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Intelligence Brief Header */}
        <section className="bg-fbi-blue text-white py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-12 w-12" />
                <div>
                  <Badge className="bg-red-600 text-white mb-2">INTELLIGENCE BRIEF</Badge>
                  <h1 className="text-4xl font-bold">Cryptocurrency Fraud</h1>
                  <p className="text-fbi-blue-100">FBI Cybercrime Division - Threat Assessment</p>
                </div>
              </div>
              <div className="bg-fbi-blue-900/50 p-6 rounded-lg">
                <p className="text-xl text-fbi-blue-100 leading-relaxed">
                  <strong>ALERT:</strong> Cryptocurrency-related fraud has increased 300% since 2020, 
                  with losses exceeding $5.6 billion in 2023. This intelligence brief provides 
                  current threat patterns, prevention strategies, and reporting procedures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Statistics */}
        <section className="bg-red-50 border-l-4 border-red-500 py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">$5.6B</div>
                <div className="text-sm text-government-gray-600">Total Losses (2023)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">46,000+</div>
                <div className="text-sm text-government-gray-600">Reported Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">300%</div>
                <div className="text-sm text-government-gray-600">Increase Since 2020</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">$121K</div>
                <div className="text-sm text-government-gray-600">Average Loss Per Victim</div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Threat Landscape */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-fbi-blue mb-8">Current Threat Landscape</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {scamTypes.map((scam, index) => (
                <Card key={index} className="government-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-fbi-blue">{scam.type}</CardTitle>
                      <Badge 
                        variant={scam.risk === 'Critical' ? 'destructive' : 'secondary'}
                        className={scam.risk === 'Critical' ? 'bg-red-600' : 'bg-orange-500 text-white'}
                      >
                        {scam.risk} Risk
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-government-gray-700 mb-4">{scam.description}</p>
                    <div>
                      <h4 className="font-medium mb-2 text-fbi-blue">Warning Indicators:</h4>
                      <ul className="space-y-1">
                        {scam.indicators.map((indicator, idx) => (
                          <li key={idx} className="text-sm text-government-gray-600 flex items-start">
                            <AlertTriangle className="h-4 w-4 mr-2 text-orange-500 mt-0.5 flex-shrink-0" />
                            {indicator}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention Protocol */}
        <section className="bg-government-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-fbi-blue mb-8">FBI Prevention Protocol</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Card className="government-card h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-fbi-blue flex items-center">
                      <Target className="h-6 w-6 mr-2" />
                      Prevention Checklist
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {preventionSteps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-government-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>IMMEDIATE ACTION REQUIRED:</strong> If you suspect you're being targeted 
                    by a cryptocurrency scam, cease all communication with the suspected fraudsters 
                    and contact the FBI Internet Crime Complaint Center (IC3) immediately.
                  </AlertDescription>
                </Alert>

                <Card className="government-card border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">Recovery Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                    <p className="text-sm text-government-gray-600">
                      Cases reported within 24 hours show significantly higher recovery rates
                    </p>
                  </CardContent>
                </Card>

                <Card className="government-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-fbi-blue">Emergency Response</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full fbi-button" size="lg" asChild>
                      <Link to="/contact-us">File IC3 Report</Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      Call: (438) 602-5895
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Intelligence */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-fbi-blue mb-8">Related Intelligence Briefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="government-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-fbi-blue mb-2">Romance Scams</h3>
                  <p className="text-sm text-government-gray-600 mb-4">
                    Relationship-based fraud leading to cryptocurrency investments
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/romance-scams">View Brief</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="government-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-fbi-blue mb-2">Investment Fraud</h3>
                  <p className="text-sm text-government-gray-600 mb-4">
                    Fake trading platforms and investment opportunities
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/fake-trading-scam">View Brief</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="government-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-fbi-blue mb-2">Asset Recovery</h3>
                  <p className="text-sm text-government-gray-600 mb-4">
                    Federal programs for cryptocurrency asset recovery
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/asset-recovery-solutions">View Programs</Link>
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

export default CryptocurrencyScams;
