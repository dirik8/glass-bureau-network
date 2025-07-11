
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Smartphone, Eye, Users, Shield, Phone } from 'lucide-react';

const OnlineDatingScam: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Online Dating Scam Investigation - Romance Fraud Prevention | LGN Recovery</title>
        <meta name="description" content="Professional investigation of online dating scams and romance fraud. Expert analysis of dating app fraud, catfishing, and romance-based financial crimes." />
        <meta name="keywords" content="online dating scams, romance fraud, catfishing investigation, dating app scams, romance scam recovery" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-50">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="destructive" className="mb-4 bg-rose-600">
                  ROMANCE FRAUD UNIT
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Online Dating Scam
                  <span className="block text-rose-600">Investigation Center</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Dedicated investigation unit for romance fraud, catfishing, and dating platform-based 
                  financial crimes. Protecting hearts and wallets from sophisticated online predators.
                </p>
              </div>

              {/* Platform Coverage */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                <Card className="text-center border-rose-200 hover:border-rose-400 transition-colors">
                  <CardContent className="pt-6">
                    <Smartphone className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Tinder</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-rose-200 hover:border-rose-400 transition-colors">
                  <CardContent className="pt-6">
                    <Heart className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Match.com</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-rose-200 hover:border-rose-400 transition-colors">
                  <CardContent className="pt-6">
                    <Users className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Bumble</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-rose-200 hover:border-rose-400 transition-colors">
                  <CardContent className="pt-6">
                    <Eye className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Facebook Dating</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Scam Types */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Types of Dating Scams We Investigate
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-rose-200">
                  <CardHeader>
                    <CardTitle className="text-rose-600">Romance Scams</CardTitle>
                    <CardDescription>Long-term emotional manipulation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Criminals build romantic relationships over months, then request money for emergencies, travel, or medical expenses.
                    </p>
                    <div className="text-sm text-rose-600 font-medium">
                      Average Loss: $2,400
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-rose-200">
                  <CardHeader>
                    <CardTitle className="text-rose-600">Military Romance Scams</CardTitle>
                    <CardDescription>Fake military personnel profiles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Scammers impersonate deployed military members, using stolen photos and fabricated stories.
                    </p>
                    <div className="text-sm text-rose-600 font-medium">
                      Average Loss: $4,100
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-rose-200">
                  <CardHeader>
                    <CardTitle className="text-rose-600">Investment Romance Scams</CardTitle>
                    <CardDescription>Love leads to fake investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      After establishing trust, criminals introduce cryptocurrency or trading opportunities.
                    </p>
                    <div className="text-sm text-rose-600 font-medium">
                      Average Loss: $16,800
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Investigation Services */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Investigation Services
                  </h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <Shield className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Profile Verification</h4>
                            <p className="text-gray-600 text-sm">
                              We verify the authenticity of dating profiles using reverse image searches, 
                              social media analysis, and digital forensics.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <Eye className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Communication Analysis</h4>
                            <p className="text-gray-600 text-sm">
                              Expert analysis of conversation patterns, language use, and behavioral 
                              indicators to identify deceptive communications.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <Users className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Network Investigation</h4>
                            <p className="text-gray-600 text-sm">
                              We identify criminal networks operating multiple fake profiles 
                              across different platforms simultaneously.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Protection Guidelines
                  </h2>
                  <Card className="border-rose-200 bg-rose-50">
                    <CardHeader>
                      <CardTitle className="text-rose-600">Stay Safe Online</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-rose-800">
                            <strong>Never send money</strong> to someone you've only met online
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-rose-800">
                            <strong>Video chat</strong> before developing deep emotional connections
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-rose-800">
                            <strong>Reverse search</strong> profile photos to check for stolen images
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-rose-800">
                            <strong>Be suspicious</strong> of anyone who claims to travel frequently
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-rose-800">
                            <strong>Trust your instincts</strong> if something feels too good to be true
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 px-4 bg-rose-600">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Victim of Romance Fraud?
              </h2>
              <p className="text-xl text-rose-100 mb-8">
                You're not alone. Our compassionate investigators are here to help you recover 
                and prevent others from becoming victims.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50">
                  <Phone className="h-5 w-5 mr-2" />
                  Confidential Consultation
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default OnlineDatingScam;
