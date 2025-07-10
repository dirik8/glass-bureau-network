
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingDown, AlertTriangle, Shield, Phone, Target, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const BinaryOptionsScams: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <TrendingDown className="h-16 w-16 text-red-200" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Binary Options Fraud Alert
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8">
                Sophisticated trading platform scams targeting investors worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact-us">Report Binary Options Fraud</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-600">
                  Emergency Hotline: +1 (438) 602-5895
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Assessment */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-red-200">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-800">High Risk Alert</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700">Binary options trading platforms are often unregulated and designed to maximize losses.</p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader>
                  <Target className="h-8 w-8 text-yellow-600 mb-2" />
                  <CardTitle className="text-yellow-800">Primary Targets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-700">Inexperienced traders seeking quick profits and high returns on investment.</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-800">Financial Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">Average losses range from $5,000 to $50,000 per victim, with some cases exceeding $100,000.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800">How Binary Options Scams Operate</CardTitle>
                <CardDescription>Understanding the fraudulent mechanics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Initial Recruitment</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Social media advertisements promising high returns</li>
                      <li>• Cold calling campaigns targeting vulnerable individuals</li>
                      <li>• Fake celebrity endorsements and testimonials</li>
                      <li>• Free training sessions and demo accounts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">Platform Manipulation</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Rigged trading software with predetermined outcomes</li>
                      <li>• Price manipulation during critical moments</li>
                      <li>• Withdrawal restrictions and account freezing</li>
                      <li>• Pressure tactics to increase deposits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">LGN Recovery Action Plan</CardTitle>
                <CardDescription>Our specialized approach to binary options fraud recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Platform Investigation</h3>
                    <p className="text-sm text-gray-600">Comprehensive analysis of fraudulent trading platforms and their operators.</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Asset Tracing</h3>
                    <p className="text-sm text-gray-600">Advanced blockchain forensics to track stolen funds and identify recovery opportunities.</p>
                  </div>
                  <div className="text-center">
                    <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Legal Coordination</h3>
                    <p className="text-sm text-gray-600">Working with international law enforcement to pursue criminal prosecution.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Victim of Binary Options Fraud?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Time is critical in binary options fraud cases. Contact LGN Recovery immediately for emergency assistance and asset recovery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact-us">Start Recovery Process</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/asset-recovery-solutions">Learn About Asset Recovery</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BinaryOptionsScams;
