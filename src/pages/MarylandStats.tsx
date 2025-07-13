import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarylandStats: React.FC = () => {
  const yearlyData = [
    { year: 2024, cases: 1689, losses: '$45.7M', avgLoss: '$27.1K' },
    { year: 2023, cases: 1434, losses: '$38.2M', avgLoss: '$26.6K' },
    { year: 2022, cases: 1234, losses: '$32.1M', avgLoss: '$26.0K' },
    { year: 2021, cases: 1067, losses: '$26.8M', avgLoss: '$25.1K' },
    { year: 2020, cases: 823, losses: '$20.1M', avgLoss: '$24.4K' }
  ];

  const topScamTypes = [
    { type: 'Investment/Trading Platforms', percentage: 35, cases: 591, losses: '$16.0M' },
    { type: 'Romance/Relationship', percentage: 24, cases: 405, losses: '$11.0M' },
    { type: 'Business Email Compromise', percentage: 18, cases: 304, losses: '$8.2M' },
    { type: 'Tech Support', percentage: 13, cases: 220, losses: '$5.9M' },
    { type: 'Employment/Job', percentage: 10, cases: 169, losses: '$4.6M' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <section className="bg-fbi-blue text-white py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-12 w-12" />
                <div>
                  <Badge className="bg-fbi-blue-800 text-white mb-2">FIELD OFFICE REPORT</Badge>
                  <h1 className="text-4xl font-bold">Maryland Cybercrime Statistics</h1>
                  <p className="text-fbi-blue-100">Baltimore Field Office - 2020-2024 Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-government-gray-50 border-l-4 border-red-500 py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">6,247</div>
                <div className="text-sm text-government-gray-600">Total Cases (2020-2024)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">$162.9M</div>
                <div className="text-sm text-government-gray-600">Total Losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">105%</div>
                <div className="text-sm text-government-gray-600">4-Year Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">$26.1K</div>
                <div className="text-sm text-government-gray-600">Average Loss</div>
              </div>
            </div>
          </div>
        </section>

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
                  <Button className="w-full fbi-button" size="lg" asChild>
                    <Link to="/contact-us">File IC3 Report</Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Maryland Hotline: (410) 265-8080
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

export default MarylandStats;