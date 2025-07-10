
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckSquare, Zap, Shield, Smartphone, DollarSign, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaskScam: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <CheckSquare className="h-16 w-16 text-purple-200" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Task-Based Fraud Investigation
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Exposing micro-task and app-based scams targeting mobile users worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact-us">Report Task Scam</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                  Emergency Line: +1 (438) 602-5895
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Scam Mechanics */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How Task Scams Operate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-purple-200">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-purple-800">App-Based Recruitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 mb-4">Fraudulent apps promise easy money for simple tasks like liking posts or downloading apps.</p>
                  <ul className="text-sm space-y-1 text-purple-600">
                    <li>• Social media engagement tasks</li>
                    <li>• App download and review missions</li>
                    <li>• Fake survey completions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-green-800">Initial Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">Small payments build trust before requesting larger investments or personal information.</p>
                  <ul className="text-sm space-y-1 text-green-600">
                    <li>• Micro-payments to establish credibility</li>
                    <li>• Gradual increase in task complexity</li>
                    <li>• Requirement for "deposits" to unlock higher tiers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-800">The Trap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-4">Eventually, users are asked to pay fees or provide sensitive information to continue earning.</p>
                  <ul className="text-sm space-y-1 text-red-600">
                    <li>• "Activation fees" for premium tasks</li>
                    <li>• Identity verification scams</li>
                    <li>• Cryptocurrency investment requirements</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">Common Task Scam Platforms</CardTitle>
                <CardDescription>Identifying fraudulent task-based applications and websites</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-purple-700 mb-4">Mobile Applications</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Fake reward apps with impossible withdrawal thresholds</li>
                      <li>• Survey apps that collect personal data without payment</li>
                      <li>• Social media manipulation apps promising viral fame</li>
                      <li>• Cryptocurrency mining apps that drain device resources</li>
                      <li>• Game apps with hidden subscription fees</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-700 mb-4">Web Platforms</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Fake freelance websites with upfront membership costs</li>
                      <li>• Data entry platforms that never pay workers</li>
                      <li>• Product testing sites that require purchase deposits</li>
                      <li>• Online tutoring scams targeting students</li>
                      <li>• Micro-investment platforms with withdrawal restrictions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">LGN Recovery Task Scam Response</CardTitle>
                <CardDescription>Specialized investigation techniques for app-based fraud</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">App Analysis</h3>
                    <p className="text-sm text-gray-600">Reverse engineering malicious applications to understand their fraud mechanisms.</p>
                  </div>
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Network Tracking</h3>
                    <p className="text-sm text-gray-600">Tracing payment flows and identifying criminal network infrastructure.</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Victim Recovery</h3>
                    <p className="text-sm text-gray-600">Assisting victims in recovering funds and securing compromised accounts.</p>
                  </div>
                  <div className="text-center">
                    <CheckSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Platform Takedown</h3>
                    <p className="text-sm text-gray-600">Coordinating with app stores and hosting providers to remove fraudulent platforms.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Prevention Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Protecting Yourself from Task Scams</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Safe Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Research apps and platforms before downloading</li>
                    <li>• Never pay upfront fees for earning opportunities</li>
                    <li>• Verify company information and contact details</li>
                    <li>• Read reviews from multiple sources</li>
                    <li>• Be wary of unrealistic earning promises</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-800">Warning Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Requests for sensitive personal information</li>
                    <li>• Pressure to recruit friends and family</li>
                    <li>• Difficulty withdrawing earned money</li>
                    <li>• Poor app reviews and ratings</li>
                    <li>• No clear contact information provided</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Victim of a Task-Based Scam?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Task scams are becoming increasingly sophisticated. If you've been targeted, LGN Recovery can help investigate and pursue recovery of your losses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact-us">Get Investigation Help</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/crypto-investigation">Digital Investigation Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TaskScam;
