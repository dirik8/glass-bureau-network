import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

const StateDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const states = [
    { name: 'Alabama', code: 'AL', route: '/alabama-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Alaska', code: 'AK', route: '/alaska-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Arizona', code: 'AZ', route: '/arizona-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Arkansas', code: 'AR', route: '/arkansas-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'California', code: 'CA', route: '/california-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Colorado', code: 'CO', route: '/colorado-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Connecticut', code: 'CT', route: '/connecticut-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Delaware', code: 'DE', route: '/delaware-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Florida', code: 'FL', route: '/florida-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Georgia', code: 'GA', route: '/georgia-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Hawaii', code: 'HI', route: '/hawaii-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Idaho', code: 'ID', route: '/idaho-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Illinois', code: 'IL', route: '/illinois-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Indiana', code: 'IN', route: '/indiana-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Iowa', code: 'IA', route: '/iowa-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Kansas', code: 'KS', route: '/kansas-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Kentucky', code: 'KY', route: '/kentucky-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Louisiana', code: 'LA', route: '/louisiana-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Maine', code: 'ME', route: '/maine-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Maryland', code: 'MD', route: '/maryland-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Massachusetts', code: 'MA', route: '/massachusetts-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Michigan', code: 'MI', route: '/michigan-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Minnesota', code: 'MN', route: '/minnesota-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Mississippi', code: 'MS', route: '/mississippi-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Missouri', code: 'MO', route: '/missouri-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Montana', code: 'MT', route: '/montana-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Nebraska', code: 'NE', route: '/nebraska-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Nevada', code: 'NV', route: '/nevada-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'New Hampshire', code: 'NH', route: '/new-hampshire-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'New Jersey', code: 'NJ', route: '/new-jersey-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'New Mexico', code: 'NM', route: '/new-mexico-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'New York', code: 'NY', route: '/new-york-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'North Carolina', code: 'NC', route: '/north-carolina-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'North Dakota', code: 'ND', route: '/north-dakota-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Ohio', code: 'OH', route: '/ohio-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Oklahoma', code: 'OK', route: '/oklahoma-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Oregon', code: 'OR', route: '/oregon-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Pennsylvania', code: 'PA', route: '/pennsylvania-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Rhode Island', code: 'RI', route: '/rhode-island-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'South Carolina', code: 'SC', route: '/south-carolina-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'South Dakota', code: 'SD', route: '/south-dakota-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Tennessee', code: 'TN', route: '/tennessee-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Texas', code: 'TX', route: '/texas-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Utah', code: 'UT', route: '/utah-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Vermont', code: 'VT', route: '/vermont-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Virginia', code: 'VA', route: '/virginia-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Washington', code: 'WA', route: '/washington-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'West Virginia', code: 'WV', route: '/west-virginia-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Wisconsin', code: 'WI', route: '/wisconsin-cryptocurrency-scam-statistics-2020-2024' },
    { name: 'Wyoming', code: 'WY', route: '/wyoming-cryptocurrency-scam-statistics-2020-2024' },
  ];

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              State Cybercrime Intelligence Directory
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive cryptocurrency scam statistics and cybercrime intelligence data for all 50 US states.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search states..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStates.map((state) => (
              <Link key={state.code} to={state.route}>
                <Card className="hover:shadow-lg transition-all duration-300 hover-scale cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{state.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{state.code}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>View State Intelligence</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-16 text-muted-foreground">
            <p>Click on any state to view detailed cybercrime statistics and intelligence data.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StateDirectory;