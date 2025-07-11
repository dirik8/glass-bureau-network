
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, TrendingDown, Users, DollarSign, Phone, Mail } from 'lucide-react';

const FakeTrading: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Fake Trading Platform Scams - Investigation & Recovery | LGN Recovery</title>
        <meta name="description" content="Professional investigation of fake trading platform scams. Expert analysis, victim assistance, and asset recovery services for fraudulent trading platforms." />
        <meta name="keywords" content="fake trading platforms, trading scam investigation, fraudulent brokers, trading platform fraud, investment scam recovery" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="destructive" className="mb-4">
                  HIGH PRIORITY THREAT
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Fake Trading Platform
                  <span className="block text-red-600">Investigation Unit</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Specialized investigation and recovery services for victims of fraudulent trading platforms, 
                  fake brokers, and manipulated investment schemes.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                <Card className="text-center border-red-200">
                  <CardContent className="pt-6">
                    <DollarSign className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$2.3B</div>
                    <div className="text-sm text-gray-600">Lost in 2023</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-red-200">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">180K+</div>
                    <div className="text-sm text-gray-600">Victims Reported</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-red-200">
                  <CardContent className="pt-6">
                    <TrendingDown className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">89%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-red-200">
                  <CardContent className="pt-6">
                    <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Threat Overview */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Threat Intelligence</h2>
                  <Card className="border-red-200">
                    <CardHeader>
                      <CardTitle className="text-red-600">Common Fake Trading Platforms</CardTitle>
                      <CardDescription>
                        Fraudulent platforms we've investigated and shut down
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">Unlicensed Forex Brokers</h4>
                          <p className="text-sm text-gray-600">Operating without regulatory approval, manipulating trades</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">Fake Cryptocurrency Exchanges</h4>
                          <p className="text-sm text-gray-600">Mimicking legitimate exchanges to steal deposits</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">Binary Options Scams</h4>
                          <p className="text-sm text-gray-600">Rigged trading software with predetermined losses</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Investigation Process */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Investigation Process</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Platform Analysis</h4>
                            <p className="text-gray-600 text-sm">Technical investigation of website, servers, and trading software</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Financial Tracking</h4>
                            <p className="text-gray-600 text-sm">Trace money flow through banking and cryptocurrency networks</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Recovery Action</h4>
                            <p className="text-gray-600 text-sm">Coordinate with authorities and financial institutions for asset recovery</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="py-16 px-4 bg-red-600">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Victim of a Fake Trading Platform?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Time is critical. Contact our emergency response team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +1 (438) 602-5895
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Mail className="h-5 w-5 mr-2" />
                  investigations@lionsgate.network
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default FakeTrading;
