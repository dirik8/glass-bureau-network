
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, TrendingUp, Shield, Phone, AlertCircle } from 'lucide-react';

const PigButchering: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pig Butchering Scam Investigation - Romance to Investment Fraud | LGN Recovery</title>
        <meta name="description" content="Expert investigation of pig butchering scams - sophisticated romance-to-investment fraud schemes. Professional victim assistance and asset recovery." />
        <meta name="keywords" content="pig butchering scam, romance investment fraud, dating app scams, cryptocurrency romance scam, investment fraud recovery" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="destructive" className="mb-4 bg-purple-600">
                  SOPHISTICATED THREAT
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Pig Butchering Scam
                  <span className="block text-purple-600">Investigation Division</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Specialized unit investigating romance-to-investment fraud schemes where criminals build 
                  romantic relationships before manipulating victims into fraudulent investments.
                </p>
              </div>

              {/* Warning Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="text-center">
                    <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-purple-900">Romance Phase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-700 text-center">
                      Criminals establish emotional connections through dating apps or social media over weeks or months
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="text-center">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-purple-900">Investment Hook</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-700 text-center">
                      After trust is established, they introduce "exclusive" investment opportunities with guaranteed returns
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="text-center">
                    <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-purple-900">Manipulation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-700 text-center">
                      Victims are coached to invest increasing amounts, often borrowing money or liquidating assets
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Investigation Approach */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Investigation Approach</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-purple-600 flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Digital Forensics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          We analyze communication patterns, dating profiles, and digital footprints to identify criminal networks and gather evidence.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-purple-600 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Financial Tracking
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Our team traces cryptocurrency transactions and traditional banking transfers to locate stolen funds and identify recovery opportunities.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-purple-600 flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Victim Support
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          We provide psychological support and practical guidance to help victims understand the manipulation tactics used against them.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Red Flags to Watch</h2>
                  <Card className="border-red-200">
                    <CardHeader>
                      <CardTitle className="text-red-600">Warning Signs</CardTitle>
                      <CardDescription>
                        Recognize these tactics before becoming a victim
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-gray-900">Refuses video calls or meetings</p>
                            <p className="text-sm text-gray-600">Claims camera is broken or makes other excuses</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-gray-900">Mentions investment opportunities</p>
                            <p className="text-sm text-gray-600">Especially cryptocurrency or forex trading platforms</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-gray-900">Asks for financial information</p>
                            <p className="text-sm text-gray-600">Requests bank details or investment account access</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-gray-900">Pressures quick decisions</p>
                            <p className="text-sm text-gray-600">Claims limited-time opportunities or urgent needs</p>
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
          <section className="py-16 px-4 bg-purple-600">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Think You're Being Targeted?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Don't be embarrassed. These are sophisticated criminals. Contact us immediately for confidential assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Hotline
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Confidential Report
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default PigButchering;
