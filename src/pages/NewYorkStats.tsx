import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewYorkStats: React.FC = () => {
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
                  <h1 className="text-4xl font-bold">New York Cybercrime Statistics</h1>
                  <p className="text-fbi-blue-100">New York Field Office - 2020-2024 Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-government-gray-50 border-l-4 border-red-500 py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">4,234</div>
                <div className="text-sm text-government-gray-600">Total Cases (2020-2024)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">$412.8M</div>
                <div className="text-sm text-government-gray-600">Total Losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">178%</div>
                <div className="text-sm text-government-gray-600">4-Year Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fbi-blue">$97.5K</div>
                <div className="text-sm text-government-gray-600">Average Loss</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
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
                  New York Hotline: (212) 384-1000
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewYorkStats;