import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MassachusettsStats: React.FC = () => {
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
                  <h1 className="text-4xl font-bold">Massachusetts Cybercrime Statistics</h1>
                  <p className="text-fbi-blue-100">Boston Field Office - 2020-2024 Analysis</p>
                </div>
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
                  Massachusetts Hotline: (617) 742-5533
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MassachusettsStats;