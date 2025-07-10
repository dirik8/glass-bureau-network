
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, AlertCircle, Shield, Users, CreditCard, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobScam: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Briefcase className="h-16 w-16 text-orange-200" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Employment Fraud Investigation
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-8">
                Protecting job seekers from fake employment opportunities and advance fee scams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact-us">Report Job Scam</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
                  Victim Support: +1 (438) 602-5895
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Scam Types Overview */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Common Job Scam Variants</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-red-200">
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-800">Advance Fee Scams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-4">Fake employers demand upfront payments for background checks, training, or equipment.</p>
                  <ul className="text-sm space-y-1 text-red-600">
                    <li>• Processing fees for job applications</li>
                    <li>• Equipment purchase requirements</li>
                    <li>• Training program costs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <Users className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-purple-800">Identity Theft Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 mb-4">Criminals collect personal information under the guise of employment verification.</p>
                  <ul className="text-sm space-y-1 text-purple-600">
                    <li>• Social Security number requests</li>
                    <li>• Bank account information</li>
                    <li>• Copies of identification documents</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <FileText className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-800">Work-from-Home Scams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">Fake remote opportunities that exploit the desire for flexible employment.</p>
                  <ul className="text-sm space-y-1 text-blue-600">
                    <li>• Package reshipping operations</li>
                    <li>• Check cashing schemes</li>
                    <li>• Envelope stuffing scams</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-800">Warning Signs of Job Scams</CardTitle>
                <CardDescription>Red flags that indicate fraudulent employment opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-orange-700 mb-4">Immediate Red Flags</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Guaranteed high income with minimal work</li>
                      <li>• Requests for upfront payments or fees</li>
                      <li>• Vague job descriptions and responsibilities</li>
                      <li>• Pressure to provide personal information quickly</li>
                      <li>• Communication only through text or email</li>
                      <li>• No physical business address provided</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-700 mb-4">Investigation Indicators</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Company website recently created or fake</li>
                      <li>• No verifiable business registration</li>
                      <li>• Stock photos used for employee profiles</li>
                      <li>• Spelling and grammar errors in communications</li>
                      <li>• Requests for cryptocurrency payments</li>
                      <li>• Reluctance to schedule video interviews</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">LGN Recovery Investigation Process</CardTitle>
                <CardDescription>How we investigate and combat employment fraud</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Threat Assessment</h3>
                    <p className="text-sm text-gray-600">Evaluate the scope and sophistication of the employment fraud operation.</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Digital Forensics</h3>
                    <p className="text-sm text-gray-600">Analyze fake websites, email communications, and digital evidence.</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Victim Support</h3>
                    <p className="text-sm text-gray-600">Coordinate with affected individuals and provide recovery assistance.</p>
                  </div>
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Legal Action</h3>
                    <p className="text-sm text-gray-600">Work with law enforcement to pursue criminal charges and civil remedies.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Fell Victim to an Employment Scam?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let job scammers get away with fraud. LGN Recovery specializes in employment fraud investigations and victim recovery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact-us">Report Employment Fraud</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/scam-prevention">Prevention Resources</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default JobScam;
