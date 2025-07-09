
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Calendar, DollarSign, Users, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      id: 'OP-2024-001',
      title: 'Operation Digital Shield',
      type: 'Cryptocurrency Fraud',
      status: 'Closed',
      recoveredAmount: '$2.4M',
      victims: 847,
      date: 'March 2024',
      description: 'Multi-state investigation targeting fake cryptocurrency investment platform that defrauded victims across 15 states.',
      outcomes: ['15 arrests', 'Assets seized', 'Victims compensated']
    },
    {
      id: 'OP-2024-002',
      title: 'Operation Romance Guard',
      type: 'Romance Scam',
      status: 'Closed',
      recoveredAmount: '$1.8M',
      victims: 234,
      date: 'February 2024',
      description: 'International romance scam network operating from multiple countries, targeting elderly Americans.',
      outcomes: ['12 arrests', 'International cooperation', 'Prevention program launched']
    },
    {
      id: 'OP-2023-018',
      title: 'Operation Trade Trap',
      type: 'Trading Platform Fraud',
      status: 'Closed',
      recoveredAmount: '$5.2M',
      victims: 1205,
      date: 'November 2023',
      description: 'Sophisticated trading platform scam using AI-generated success stories and fake testimonials.',
      outcomes: ['23 arrests', 'Platform shutdown', 'Full asset recovery']
    },
    {
      id: 'OP-2023-015',
      title: 'Operation Job Phantom',
      type: 'Employment Scam',
      status: 'Closed',
      recoveredAmount: '$890K',
      victims: 567,
      date: 'September 2023',
      description: 'Work-from-home job scam targeting recent graduates and unemployed individuals.',
      outcomes: ['8 arrests', 'Educational campaign', 'Employer partnerships']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-fbi-blue text-white py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-12 w-12" />
                <div>
                  <h1 className="text-4xl font-bold">Closed Operations</h1>
                  <p className="text-fbi-blue-100">FBI Cybercrime Division Case Files</p>
                </div>
              </div>
              <p className="text-xl text-fbi-blue-100 leading-relaxed">
                Reviewing our successful investigations to protect future victims and educate the public 
                about evolving cybercrime threats. These closed cases demonstrate our commitment to 
                justice and victim recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Bar */}
        <section className="bg-government-gray-50 border-b py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">127</div>
                <div className="text-sm text-government-gray-600">Cases Closed (2024)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">$24.8M</div>
                <div className="text-sm text-government-gray-600">Assets Recovered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">3,847</div>
                <div className="text-sm text-government-gray-600">Victims Assisted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">89%</div>
                <div className="text-sm text-government-gray-600">Recovery Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Files */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cases.map((case_) => (
                <Card key={case_.id} className="government-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-fbi-blue">{case_.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {case_.id}
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                            {case_.status}
                          </Badge>
                        </div>
                      </div>
                      <FileText className="h-6 w-6 text-government-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-government-gray-700">{case_.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-government-gray-400" />
                        <span>{case_.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-government-gray-400" />
                        <span>{case_.recoveredAmount}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-government-gray-400" />
                        <span>{case_.victims} victims</span>
                      </div>
                      <div className="text-fbi-blue font-medium">
                        {case_.type}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Key Outcomes:</h4>
                      <ul className="space-y-1">
                        {case_.outcomes.map((outcome, index) => (
                          <li key={index} className="text-sm text-government-gray-600 flex items-center">
                            <ChevronRight className="h-3 w-3 mr-2 text-government-gray-400" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" size="sm" className="w-full mt-4">
                      View Full Case Report
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Cases
              </Button>
            </div>
          </div>
        </section>

        {/* Report Section */}
        <section className="bg-fbi-blue text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Report Cybercrime</h2>
            <p className="text-xl text-fbi-blue-100 mb-8 max-w-2xl mx-auto">
              If you believe you've been a victim of cybercrime, report it immediately to help us 
              protect others and potentially recover your assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact-us">File a Report</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-fbi-blue">
                Emergency Hotline: (438) 602-5895
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;
