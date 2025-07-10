
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, BookOpen, Users, AlertCircle, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScamPrevention: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16 text-blue-200" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybercrime Prevention Programs
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Empowering individuals and organizations to defend against digital fraud
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact-us">Request Training</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  Prevention Hotline: +1 (438) 602-5895
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Programs */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Prevention Program Portfolio</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-green-200">
                <CardHeader>
                  <Users className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-green-800">Corporate Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">Comprehensive cybersecurity awareness programs designed for business environments.</p>
                  <ul className="text-sm space-y-1 text-green-600">
                    <li>• Executive briefings on emerging threats</li>
                    <li>• Employee phishing simulation exercises</li>
                    <li>• Incident response planning workshops</li>
                    <li>• Regulatory compliance training</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-purple-800">Educational Institutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 mb-4">Specialized programs for schools, colleges, and universities to protect students and staff.</p>
                  <ul className="text-sm space-y-1 text-purple-600">
                    <li>• Student digital literacy workshops</li>
                    <li>• Faculty cybersecurity seminars</li>
                    <li>• Campus-wide awareness campaigns</li>
                    <li>• Online safety curriculum development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <Target className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle className="text-orange-800">Vulnerable Populations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4">Targeted outreach programs for high-risk demographics including seniors and new immigrants.</p>
                  <ul className="text-sm space-y-1 text-orange-600">
                    <li>• Senior citizen fraud prevention workshops</li>
                    <li>• Community center partnerships</li>
                    <li>• Multilingual awareness materials</li>
                    <li>• Support group facilitation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">Core Prevention Principles</CardTitle>
                <CardDescription>Fundamental strategies for cybercrime prevention and awareness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-blue-700 mb-4">Recognition Training</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Identifying social engineering tactics</li>
                      <li>• Recognizing phishing attempts and fake websites</li>
                      <li>• Understanding investment fraud red flags</li>
                      <li>• Spotting romance scam warning signs</li>
                      <li>• Evaluating cryptocurrency investment opportunities</li>
                      <li>• Analyzing job offer legitimacy</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700 mb-4">Response Protocols</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Immediate steps when targeted by scammers</li>
                      <li>• Proper reporting procedures and authorities</li>
                      <li>• Evidence preservation techniques</li>
                      <li>• Account security and recovery measures</li>
                      <li>• Communication with financial institutions</li>
                      <li>• Legal options and victim rights</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Program Effectiveness Metrics</CardTitle>
                <CardDescription>Measuring the impact of our prevention initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <p className="text-sm text-gray-600">Participant satisfaction rate in corporate training programs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                    <p className="text-sm text-gray-600">Reduction in successful phishing attempts post-training</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
                    <p className="text-sm text-gray-600">Individuals trained through our prevention programs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">89%</div>
                    <p className="text-sm text-gray-600">Improvement in threat identification accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resource Library */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Prevention Resource Library</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-green-800">Quick Reference Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Cryptocurrency investment safety checklist</li>
                    <li>• Romance scam identification flowchart</li>
                    <li>• Phishing email detection guide</li>
                    <li>• Social media security best practices</li>
                    <li>• Online shopping fraud prevention</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <AlertCircle className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle className="text-red-800">Emergency Response Procedures</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Incident reporting protocols</li>
                    <li>• Account compromise response steps</li>
                    <li>• Financial fraud immediate actions</li>
                    <li>• Identity theft recovery procedures</li>
                    <li>• Legal assistance contact information</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Strengthen Your Cybersecurity Defenses</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with LGN Recovery to implement comprehensive cybercrime prevention programs tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact-us">Schedule Prevention Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/lionsgate-network-research-team">Meet Our Research Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ScamPrevention;
